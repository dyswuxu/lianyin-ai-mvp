'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Report() {
  const [formData, setFormData] = useState({});
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedForm = localStorage.getItem('assessmentForm');
    const savedResult = localStorage.getItem('aiResult');
    
    if (savedForm) {
      setFormData(JSON.parse(savedForm));
    }
    
    if (savedResult) {
      try {
        setAiResult(JSON.parse(savedResult));
      } catch (e) {
        console.error('Failed to parse AI result:', e);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">加载中...</p>
        </div>
      </div>
    );
  }

  if (!aiResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">未找到分析结果</h2>
          <p className="text-gray-500 mb-8">请先完成企业融资测评</p>
          <Link href="/assessment">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all">
              重新测评
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const score = aiResult.score || 0;
  const advantages = aiResult.advantages || [];
  const risks = aiResult.risks || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">链</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">链银通</span>
            <span className="text-gray-500 text-sm">AI融资顾问平台</span>
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            保存报告
          </button>
        </div>
      </header>

      {/* Report Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">AI融资诊断报告</h1>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              综合评估结果
            </span>
          </div>
          <p className="text-gray-500 mb-4">基于您提供的企业信息，AI为您生成的融资能力评估报告</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>报告仅供参考，不代表银行最终审批结果</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Score Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <svg className="w-40 h-40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" 
                      stroke="url(#gradient)" strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray={`${score * 2.83} 283`}
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#60A5FA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-blue-600">{score}</span>
                    <span className="text-gray-500">分</span>
                  </div>
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className={`w-6 h-6 ${i <= Math.round(score / 20) ? 'text-orange-400' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  {score >= 80 ? '融资能力优秀' : score >= 60 ? '融资能力良好' : score >= 40 ? '融资能力一般' : '融资能力较弱'}
                </span>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-gray-600 text-sm mb-2">预计可融资额度</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{aiResult.loanAmount || '100-300万元'}</div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>适合期限：{aiResult.loanTerm || '6个月-3年'}</span>
                  <span>更新时间：{new Date().toLocaleDateString('zh-CN')}</span>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">企业融资画像</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-700">{aiResult.profile || '成长型经营企业，经营稳定，有融资需求'}</p>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">企业优势分析</h3>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">表现良好</span>
              </div>
              <div className="space-y-3">
                {advantages.length > 0 ? advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{adv}</span>
                  </div>
                )) : (
                  <div className="text-gray-500 text-center py-4">暂无优势数据</div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">企业基本信息</h3>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">编辑</button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-500 w-20">企业名称</span>
                  <span className="text-gray-900 font-medium">{formData.companyName || '-'}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-500 w-20">所属行业</span>
                  <span className="text-gray-900 font-medium">{formData.industry || '-'}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-500 w-20">成立时间</span>
                  <span className="text-gray-900 font-medium">{formData.years || '-'}</span>
                </div>
                <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-500 w-20">所在城市</span>
                  <span className="text-gray-900 font-medium">{formData.city || '-'}</span>
                </div>
                <div className="flex items-center gap-3 py-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-500 w-20">年营业额</span>
                  <span className="text-gray-900 font-medium">{formData.revenue || '-'}</span>
                </div>
              </div>
            </div>

            {/* Risks */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">潜在风险提示</h3>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">需要关注</span>
              </div>
              <div className="space-y-3">
                {risks.length > 0 ? risks.map((risk, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                    <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{risk}</span>
                  </div>
                )) : (
                  <div className="text-gray-500 text-center py-4">暂无风险提示</div>
                )}
              </div>
            </div>

            {/* Suggestions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">提升建议</h3>
              <div className="space-y-3">
                {(aiResult.suggestions || []).length > 0 ? aiResult.suggestions.map((sug, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-medium">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{sug}</span>
                  </div>
                )) : (
                  <div className="text-gray-500 text-center py-4">暂无建议</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-10">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">推荐融资方案</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {(aiResult.products || []).slice(0, 3).map((product, i) => (
                <div key={i} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-sm font-bold text-gray-600">
                      {product.bank?.slice(0, 2) || '银'}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{product.bank || '银行'}</div>
                      <div className="text-sm text-gray-500">{product.name || '贷款产品'}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">额度：</span>
                      <span className="font-medium text-gray-900">{product.amount || '-'}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">利率：</span>
                      <span className="font-medium text-gray-900">{product.rate || '-'}</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 text-blue-600 text-sm font-medium text-center">查看详情 &gt;</button>
                </div>
              ))}
            </div>
            <Link href="/plans">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                查看更多融资方案
              </button>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-between">
          <Link href="/assessment">
            <button className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              重新测评
            </button>
          </Link>
          <Link href="/plans">
            <button className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
              查看融资方案推荐
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>链银通承诺：严格保护您的信息安全，不会泄露给任何第三方</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
