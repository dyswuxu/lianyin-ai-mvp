const MINIMAX_API_KEY = process.env.MINIMAX_API_KEY || '';
const MINIMAX_API_URL = 'https://api.minimaxi.com/v1/text/chatcompletion_v2';

export async function analyzeEnterprise(formData) {
  const prompt = `
你是链银通的AI融资顾问。请根据以下企业信息，生成一份专业的融资能力分析报告。

企业信息：
- 行业：${formData.industry || '未知'}
- 城市：${formData.city || '未知'}
- 企业名称：${formData.companyName || '未知'}
- 成立年限：${formData.years || '未知'}
- 年营业额：${formData.revenue || '未知'}
- 企业人数：${formData.staffCount || '未知'}
- 纳税情况：${formData.tax || '未知'}
- 资产情况：${formData.assets || '未知'}
- 期望融资金额：${formData.loanAmount || '未知'}
- 融资用途：${formData.loanPurpose || '未知'}

请以JSON格式返回分析结果：
{
  "score": 评分(0-100),
  "profile": "企业画像描述",
  "loanAmount": "预计可融资额度范围",
  "loanTerm": "建议贷款期限",
  "advantages": ["优势1", "优势2", "优势3"],
  "risks": ["风险点1", "风险点2"],
  "suggestions": ["提升建议1", "提升建议2"],
  "products": [
    {
      "bank": "银行名称",
      "name": "产品名称",
      "type": "产品类型",
      "match": 匹配度(0-100),
      "amount": "额度范围",
      "term": "贷款期限",
      "rate": "年化利率",
      "repayment": "还款方式",
      "reasons": ["推荐原因1", "推荐原因2"]
    }
  ]
}

请只返回JSON，不要有其他内容。
`;

  try {
    const response = await fetch(MINIMAX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MINIMAX_API_KEY}`
      },
      body: JSON.stringify({
        model: 'MiniMax-Text-01',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('MiniMax API error:', error);
      return null;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    // 提取JSON
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    return null;
  } catch (error) {
    console.error('API call failed:', error);
    return null;
  }
}

export async function chatWithAdvisor(question, context) {
  const prompt = `
你是链银通的AI融资顾问。用户正在咨询融资问题。

用户企业信息：
- 行业：${context.industry || '未知'}
- 融资能力评分：${context.score || '未知'}
- 预计可融资额度：${context.loanAmount || '未知'}

用户问题：${question}

请用专业、友善的语气回答用户的问题。
`;

  try {
    const response = await fetch(MINIMAX_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MINIMAX_API_KEY}`
      },
      body: JSON.stringify({
        model: 'MiniMax-Text-01',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8
      })
    });

    if (!response.ok) {
      return '抱歉，服务暂时不可用，请稍后再试。';
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '抱歉，我没有理解您的问题。';
  } catch (error) {
    console.error('Chat API error:', error);
    return '抱歉，服务暂时不可用，请稍后再试。';
  }
}
