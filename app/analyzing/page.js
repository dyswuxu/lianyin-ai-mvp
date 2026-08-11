'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const analysisSteps = [
  { id: 1, title: '分析企业基本信息', desc: '正在整理企业注册信息和行业特征', status: 'done' },
  { id: 2, title: '评估企业经营状况', desc: '正在分析营业额、成立年限和员工规模', status: 'done' },
  { id: 3, title: '分析融资需求', desc: '正在理解融资金额和用途方向', status: 'done' },
  { id: 4, title: '匹配融资方案', desc: '正在从50+银行产品中筛选最优方案', status: 'active' },
  { id: 5, title: '生成诊断报告', desc: '正在生成专业的融资能力评估报告', status: 'pending' },
];

export default function Analyzing() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(3);
  const [analyzing, setAnalyzing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const runAnalysis = async () => {
      // 从localStorage获取表单数据
      const savedForm = localStorage.getItem('assessmentForm');
      if (!savedForm) {
        setError('未找到企业信息，请重新填写');
        setAnalyzing(false);
        return;
      }

      const formData = JSON.parse(savedForm);

      try {
        // 步骤4：AI分析中
        setCurrentStep(4);
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 调用AI分析接口
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'AI分析失败');
        }

        // 步骤5：生成报告
        setCurrentStep(5);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 保存AI分析结果
        localStorage.setItem('aiResult', JSON.stringify(result.data));
        
        // 跳转到报告页
        router.push('/report');

      } catch (err) {
        console.error('Analysis error:', err);
        setError(err.message || '分析失败，请稍后重试');
        setAnalyzing(false);
      }
    };

    runAnalysis();
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">链</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">链银通</span>
            <span className="text-gray-500 text-sm">AI融资顾问平台</span>
          </Link>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>信息安全保障</span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {['填写信息', 'AI分析中', '查看报告', '方案推荐'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= 1 ? 'bg-blue-600 text-white' : index === 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < 1 ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : index + 1}
                </div>
                <span className={`ml-2 text-sm ${index <= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {step}
                </span>
                {index < 3 && <div className={`w-16 h-0.5 mx-4 ${index < 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {error ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">分析失败</h2>
            <p className="text-gray-500 mb-8">{error}</p>
            <Link href="/assessment">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all">
                重新填写
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI融资顾问正在为您分析
              </h1>
              <p className="text-gray-500">
                正在从多个维度分析您的企业融资能力
              </p>
            </div>

            {/* AI Animation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 mb-10 relative overflow-hidden">
              {/* Background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-blue-200 rounded-full animate-ping opacity-20"></div>
                <div className="absolute w-48 h-48 border border-blue-300 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute w-32 h-32 border border-blue-400 rounded-full animate-spin-slow opacity-40"></div>
              </div>

              {/* Robot Icon */}
              <div className="relative flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Analysis Steps */}
              <div className="space-y-4 relative">
                {analysisSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`bg-white rounded-xl p-4 flex items-center gap-4 transition-all duration-500 ${
                      step.status === 'done' ? 'border-2 border-green-200' :
                      step.status === 'active' ? 'border-2 border-blue-300 shadow-lg shadow-blue-100' :
                      'border border-gray-200 opacity-60'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      step.status === 'done' ? 'bg-green-500' :
                      step.status === 'active' ? 'bg-blue-500' :
                      'bg-gray-200'
                    }`}>
                      {step.status === 'done' ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : step.status === 'active' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-medium ${step.status === 'done' ? 'text-green-700' : step.status === 'active' ? 'text-blue-700' : 'text-gray-500'}`}>
                        {step.title}
                        {step.status === 'active' && <span className="ml-2 text-sm text-blue-500">分析中...</span>}
                      </div>
                      <div className="text-sm text-gray-500">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip */}
            <div className="flex items-center justify-center gap-2 text-blue-600 bg-blue-50 rounded-xl py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">AI分析过程仅需30-60秒，请稍候...</span>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm absolute bottom-0 w-full">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>链银通承诺：严格保护您的信息安全，不会泄露给任何第三方</span>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
