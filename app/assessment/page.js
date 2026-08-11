'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const steps = [
  { num: 1, title: '企业基本信息' },
  { num: 2, title: '企业经营情况' },
  { num: 3, title: '融资需求' },
];

const industries = ['餐饮', '制造', '零售', '科技', '服务业', '建筑工程', '贸易', '其他'];
const cities = ['北京', '上海', '广州', '深圳', '杭州', '南京', '苏州', '成都', '武汉', '其他'];
const years = ['1年以下', '1-3年', '3-5年', '5-10年', '10年以上'];
const revenues = ['100万以下', '100-300万', '300-500万', '500-1000万', '1000万以上'];
const staffCounts = ['1-10人', '10-50人', '50-100人', '100-500人', '500人以上'];
const taxOptions = ['正常纳税', '少量纳税', '未纳税'];
const assetOptions = ['无资产', '有房产', '有车辆', '有厂房设备', '多种资产'];
const loanAmounts = ['50万以下', '50-100万', '100-300万', '300-500万', '500万以上'];
const loanPurposes = ['扩张经营', '补充现金流', '设备采购', '店铺装修', '其他'];

export default function Assessment() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    city: '',
    companyName: '',
    contactName: '',
    contactPhone: '',
    years: '',
    revenue: '',
    staffCount: '',
    tax: '',
    assets: '',
    loanAmount: '',
    loanPurpose: '',
  });

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 保存表单数据并跳转到分析页面
      localStorage.setItem('assessmentForm', JSON.stringify(formData));
      router.push('/analyzing');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.industry && formData.city && formData.companyName && formData.contactName && formData.contactPhone;
    }
    if (currentStep === 2) {
      return formData.years && formData.revenue && formData.staffCount && formData.tax && formData.assets;
    }
    if (currentStep === 3) {
      return formData.loanAmount && formData.loanPurpose;
    }
    return false;
  };

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

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* 左侧步骤条 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">企业融资测评</h2>
              <p className="text-gray-500 text-sm mb-8">完成测评，AI为您生成融资报告</p>

              <div className="relative">
                {steps.map((step, index) => (
                  <div key={step.num} className="flex items-start gap-4 mb-8 last:mb-0">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                        currentStep > step.num 
                          ? 'bg-green-500 text-white' 
                          : currentStep === step.num 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-500'
                      }`}>
                        {currentStep > step.num ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : step.num}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-0.5 h-8 ${currentStep > step.num ? 'bg-green-500' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <div className={`font-medium ${currentStep === step.num ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2 text-blue-700 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>您的信息将被严格保密</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-blue-600 font-medium">{currentStep}/3</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {currentStep === 1 && '企业基本信息'}
                    {currentStep === 2 && '企业经营情况'}
                    {currentStep === 3 && '融资需求'}
                  </h3>
                </div>
              </div>

              {/* Step 1: 企业基本信息 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">企业名称 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      placeholder="请输入企业名称"
                      value={formData.companyName}
                      onChange={(e) => handleSelect('companyName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">所属行业 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleSelect('industry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {industries.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">所在城市 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.city}
                        onChange={(e) => handleSelect('city', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">联系人姓名 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="请输入联系人姓名"
                        value={formData.contactName}
                        onChange={(e) => handleSelect('contactName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">联系电话 <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        placeholder="请输入联系电话"
                        value={formData.contactPhone}
                        onChange={(e) => handleSelect('contactPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: 企业经营情况 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">成立年限 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.years}
                        onChange={(e) => handleSelect('years', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {years.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">年营业额 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => handleSelect('revenue', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {revenues.map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">企业人数 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.staffCount}
                        onChange={(e) => handleSelect('staffCount', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {staffCounts.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-3">纳税情况 <span className="text-red-500">*</span></label>
                      <select
                        value={formData.tax}
                        onChange={(e) => handleSelect('tax', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">请选择</option>
                        {taxOptions.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-3">资产情况 <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {assetOptions.map(asset => (
                        <button
                          key={asset}
                          type="button"
                          onClick={() => handleSelect('assets', asset)}
                          className={`px-4 py-3 rounded-xl border-2 transition-all ${
                            formData.assets === asset
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {asset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: 融资需求 */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">期望融资金额 <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {loanAmounts.map(amount => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleSelect('loanAmount', amount)}
                          className={`px-4 py-3 rounded-xl border-2 transition-all ${
                            formData.loanAmount === amount
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {amount}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-3">融资用途 <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {loanPurposes.map(purpose => (
                        <button
                          key={purpose}
                          type="button"
                          onClick={() => handleSelect('loanPurpose', purpose)}
                          className={`px-4 py-3 rounded-xl border-2 transition-all ${
                            formData.loanPurpose === purpose
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {purpose}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 操作按钮 */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    currentStep === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  disabled={currentStep === 1}
                >
                  &lt; 上一项
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className={`px-8 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                    canProceed()
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {currentStep === 3 ? '开始分析' : '下一项'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
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
