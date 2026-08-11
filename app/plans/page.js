'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    rank: 1,
    bank: '招商银行',
    name: '生意贷',
    type: '经营类贷款',
    match: 92,
    amount: '50-300万',
    term: '1-3年',
    rate: '3.6%-5.4%',
    repayment: '等额本息',
    apply: true,
    reasons: ['符合行业要求', '流水记录良好', '经营年限达标', '额度匹配度高'],
  },
  {
    id: 2,
    rank: 2,
    bank: '建设银行',
    name: '小微快贷',
    type: '信用类贷款',
    match: 85,
    amount: '20-200万',
    term: '6月-2年',
    rate: '4.0%-6.0%',
    repayment: '等额本息',
    apply: true,
    reasons: ['线上审批快', '无需抵押', '随借随还'],
  },
  {
    id: 3,
    rank: 3,
    bank: '中国银行',
    name: '税易贷',
    type: '信用类贷款',
    match: 78,
    amount: '10-150万',
    term: '1-3年',
    rate: '4.2%-6.5%',
    repayment: '等额本金',
    apply: true,
    reasons: ['基于纳税授信', '审批通过率高', '利率优惠'],
  },
  {
    id: 4,
    rank: 4,
    bank: '平安银行',
    name: '企业信用贷',
    type: '信用类贷款',
    match: 65,
    amount: '10-100万',
    term: '6月-2年',
    rate: '5.0%-7.2%',
    repayment: '等额本息',
    apply: true,
    reasons: ['审批简单', '放款快'],
  },
  {
    id: 5,
    rank: 5,
    bank: '邮储银行',
    name: '抵押经营贷',
    type: '抵押类贷款',
    match: 60,
    amount: '100-500万',
    term: '1-5年',
    rate: '3.8%-5.0%',
    repayment: '等额本息',
    apply: false,
    reasons: ['额度高', '利率低', '需要房产抵押'],
  },
];

const categories = [
  { name: '全部方案', count: 5 },
  { name: '经营类贷款', count: 1 },
  { name: '信用类贷款', count: 3 },
  { name: '抵押类贷款', count: 1 },
];

export default function Plans() {
  const [activeCategory, setActiveCategory] = useState('全部方案');
  const [showForm, setShowForm] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const filteredProducts = activeCategory === '全部方案' 
    ? products 
    : products.filter(p => p.type === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <button 
            onClick={() => window.location.href = '/assessment'}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            重新测评
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">为您推荐适合的融资方案</h1>
            <p className="text-gray-500">基于您的企业情况和融资需求，AI为您匹配最合适的银行产品</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div>
              <div className="text-sm font-medium text-blue-700">推荐说明</div>
              <div className="text-xs text-blue-600">以下方案按匹配度从高到低排序</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="space-y-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left - Rank & Match */}
                <div className="lg:col-span-1 flex flex-col items-center justify-center text-center">
                  {product.rank === 1 && (
                    <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                      最优推荐
                    </div>
                  )}
                  <div className="text-gray-500 text-sm mb-1">TOP {product.rank}</div>
                  <div className="text-gray-500 text-xs">匹配度</div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">{product.match}%</div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className={`w-4 h-4 ${i <= 4 ? 'text-orange-400' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Middle - Product Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center text-sm font-bold text-gray-600">
                      {product.bank.slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{product.bank}</div>
                      <div className="text-gray-500 text-sm">{product.name}</div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">{product.type}</span>
                      {product.apply && <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">线上申请</span>}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">
                    {product.bank}{product.name}，是针对有稳定经营的企业推出的贷款产品，额度高、利率优、还款方式灵活。
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">额度范围</div>
                      <div className="font-semibold text-gray-900">{product.amount}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">贷款期限</div>
                      <div className="font-semibold text-gray-900">{product.term}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">年化利率</div>
                      <div className="font-semibold text-gray-900">{product.rate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">还款方式</div>
                      <div className="font-semibold text-gray-900">{product.repayment}</div>
                    </div>
                  </div>
                </div>

                {/* Right - Reasons & Actions */}
                <div className="lg:col-span-1">
                  <div className="text-sm font-medium text-gray-700 mb-3">推荐理由</div>
                  <div className="space-y-2 mb-4">
                    {product.reasons.map((reason, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {reason}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-all mb-2">
                    查看方案详情
                  </button>
                  <button 
                    onClick={() => setShowForm(true)}
                    className="w-full text-blue-600 py-2.5 font-medium hover:text-blue-700 transition-all flex items-center justify-center gap-1"
                  >
                    咨询融资顾问
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 border-2 border-dashed rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">不确定哪种方案最适合您？</h3>
                <p className="text-gray-600">我们的融资顾问将根据您的具体情况，为您量身定制融资方案</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2 mx-auto md:ml-auto"
              >
                预约融资顾问咨询
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="text-gray-500 text-sm mt-3">预计24小时内联系您</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">感谢提交</h3>
                <p className="text-gray-500 mb-6">融资顾问将在24小时内联系您</p>
                <button 
                  onClick={() => setShowForm(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all"
                >
                  完成
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">预约融资顾问</h3>
                <p className="text-gray-500 mb-6">填写您的联系方式，专业顾问将为您服务</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入您的手机号"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">企业名称</label>
                    <input
                      type="text"
                      required
                      value={contactForm.company}
                      onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请输入企业名称"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all mt-6"
                  >
                    预约融资顾问
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100 mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
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
