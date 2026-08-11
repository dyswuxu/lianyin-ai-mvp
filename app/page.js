'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 导航栏 */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">链</span>
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg">链银通</span>
              <span className="text-gray-500 text-sm ml-2">AI融资顾问平台</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">产品介绍</span>
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">融资知识</span>
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">成功案例</span>
            <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">关于我们</span>
          </nav>
          <button className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all">
            登录/注册
          </button>
        </div>
      </header>

      {/* Hero区域 */}
      <section className="gradient-hero py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧文案 */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                链银通
                <span className="text-blue-600"> AI融资顾问</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                3分钟测算企业融资能力，匹配适合你的融资方案
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">AI智能诊断企业融资能力</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">精准匹配银行融资产品</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">专业顾问一对一服务</span>
                </div>
              </div>

              <Link href="/assessment">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-xl shadow-blue-500/30 flex items-center gap-2">
                  开始免费测算
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>

              <div className="flex items-center gap-2 mt-6 text-gray-500 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>信息安全保障，隐私严格保密</span>
              </div>
            </div>

            {/* 右侧产品展示 */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                {/* 产品UI模拟 */}
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-8 bg-gray-100 rounded-lg"></div>
                  <div className="w-20 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-xs font-medium">融资能力</div>
                  <div className="w-20 h-8 bg-gray-100 rounded-lg"></div>
                  <div className="w-20 h-8 bg-gray-100 rounded-lg"></div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6">
                  <div className="text-sm text-gray-500 mb-2">融资能力评分</div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-blue-600">82</span>
                    <span className="text-gray-500">分</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">良好</span>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4].map(i => (
                      <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  {/* 雷达图区域 */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <polygon fill="rgba(37, 99, 235, 0.1)" stroke="rgb(37, 99, 235)" strokeWidth="0.5" points="50,10 80,30 80,70 50,90 20,70 20,30" />
                        <polygon fill="rgba(37, 99, 235, 0.2)" stroke="rgb(37, 99, 235)" strokeWidth="0.5" points="50,20 70,35 70,65 50,80 30,65 30,35" />
                        <polygon fill="rgba(37, 99, 235, 0.3)" stroke="rgb(37, 99, 235)" strokeWidth="0.5" points="50,30 60,40 60,60 50,70 40,60 40,40" />
                        <polygon fill="rgb(37, 99, 235)" fillOpacity="0.5" stroke="rgb(37, 99, 235)" strokeWidth="0.5" points="50,25 72,37 72,63 50,75 28,63 28,37" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
                        <div className="text-center">
                          <div>经营能力</div>
                          <div className="text-blue-600 font-semibold">优秀</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 border border-gray-100">
                      <div className="text-xs text-gray-500">预计可融资额度</div>
                      <div className="text-lg font-bold text-gray-900">100-300万</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-100">
                      <div className="text-xs text-gray-500">融资成功率预估</div>
                      <div className="text-lg font-bold text-green-600 flex items-center gap-1">
                        75%
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心优势区 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择链银通？</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI智能诊断</h3>
              <p className="text-gray-600">多维度分析企业经营数据，精准评估融资能力</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">精准方案匹配</h3>
              <p className="text-gray-600">智能匹配银行产品，提高融资成功率</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">专业顾问服务</h3>
              <p className="text-gray-600">资深融资顾问团队，一对一全程服务</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">信息安全保障</h3>
              <p className="text-gray-600">银行级数据加密，保护企业隐私安全</p>
            </div>
          </div>
        </div>
      </section>

      {/* 合作银行 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">与多家银行及金融机构深度合作</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['招商银行', '浦发银行', '中国建设银行', '交通银行', '中国银行'].map((bank, i) => (
              <div key={i} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
                {bank}
              </div>
            ))}
            <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">更多合作银行 &gt;</span>
          </div>
        </div>
      </section>

      {/* 底部数据 */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">企业已测算</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3,000+</div>
              <div className="text-blue-200">成功融资企业</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">合作银行</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,000亿+</div>
              <div className="text-blue-200">累计融资金额</div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>链银通承诺：严格保护您的信息安全，不会泄露给任何第三方</span>
        </div>
      </footer>
    </div>
  );
}
