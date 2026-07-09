/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrandDiagnosisInput } from '../types';
import { CheckCircle, HelpCircle, Activity, Globe, Sliders, Play, Award, Zap } from 'lucide-react';

interface DiagnosisToolProps {
  onDiagnosisChange: (data: BrandDiagnosisInput) => void;
  onBookCallClick: () => void;
}

export default function DiagnosisTool({ onDiagnosisChange, onBookCallClick }: DiagnosisToolProps) {
  const [formData, setFormData] = useState<BrandDiagnosisInput>({
    brandName: '',
    websiteUrl: '',
    monthlyAdSpend: '$5k - $20k',
    primaryBottleneck: 'creative',
    biggestWin: 'Strong organic social proof'
  });

  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzed(true);
    onDiagnosisChange(formData);

    // Scroll to the process section smoothly
    const processSec = document.getElementById('strategic-call-process-section');
    if (processSec) {
      processSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="brand-diagnosis-tool" className="bg-[#151515] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
      {/* Background visual flair */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F27D26]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/2 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-white/5 text-[#F27D26]">
            <Activity className="w-4 h-4" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#F27D26] font-semibold">
            Interactive Brief Builder
          </span>
        </div>
        <h3 className="text-2xl font-display font-bold text-white tracking-tight">
          Tailor Your Strategic Call
        </h3>
        <p className="text-sm text-slate-400 mt-1 leading-relaxed">
          Enter your current business details below. Our interactive model will instantly map your parameters onto our 4-step framework so we focus on your absolute highest leverage goals.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Brand Name */}
          <div>
            <label htmlFor="brandName" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Brand Name
            </label>
            <input
              type="text"
              id="brandName"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              placeholder="e.g. Aura Wear"
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 focus:border-[#F27D26] transition-all bg-[#0a0a0a] text-white"
              required
            />
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="websiteUrl" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Website URL
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs font-mono">
                https://
              </span>
              <input
                type="text"
                id="websiteUrl"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                placeholder="aurawear.com"
                className="w-full text-sm pl-16 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 focus:border-[#F27D26] transition-all bg-[#0a0a0a] text-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Monthly Paid Ad Spend */}
          <div>
            <label htmlFor="monthlyAdSpend" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Monthly Ad Spend
            </label>
            <select
              id="monthlyAdSpend"
              value={formData.monthlyAdSpend}
              onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 focus:border-[#F27D26] transition-all bg-[#0a0a0a] text-white"
            >
              <option value="Under $5k">Under $5k / Month</option>
              <option value="$5k - $20k">$5k - $20k / Month</option>
              <option value="$20k - $50k">$20k - $50k / Month</option>
              <option value="$50k+">$50k+ / Month</option>
            </select>
          </div>

          {/* Primary Bottleneck */}
          <div>
            <label htmlFor="primaryBottleneck" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Primary Bottleneck
            </label>
            <select
              id="primaryBottleneck"
              value={formData.primaryBottleneck}
              onChange={(e) => setFormData({ ...formData, primaryBottleneck: e.target.value as any })}
              className="w-full text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 focus:border-[#F27D26] transition-all bg-[#0a0a0a] text-white"
            >
              <option value="creative">Creative Strategy / Ad Fatigue</option>
              <option value="retention">Customer Lifetime Value & Retention</option>
              <option value="website_cro">Website Conversion Rate (CRO)</option>
              <option value="ad_account">Ad Account Audits & Scaling Mechanics</option>
              <option value="all">Unsure / Need Complete Growth Assessment</option>
            </select>
          </div>
        </div>

        {/* Brand Strength / Current Win */}
        <div>
          <label htmlFor="biggestWin" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            What is your brand winning at right now?
          </label>
          <input
            type="text"
            id="biggestWin"
            value={formData.biggestWin}
            onChange={(e) => setFormData({ ...formData, biggestWin: e.target.value })}
            placeholder="e.g. Excellent initial conversion rate, high organic engagement, solid product margins"
            className="w-full text-sm px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]/20 focus:border-[#F27D26] transition-all bg-[#0a0a0a] text-white"
          />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            id="submit-diagnosis-btn"
            className="w-full sm:w-auto px-6 py-3 bg-[#F27D26] hover:bg-[#e06d1c] text-black font-bold text-sm uppercase tracking-wide rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Zap className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            Apply & Map to 4 Steps
          </button>

          {isAnalyzed ? (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs text-[#F27D26] font-medium flex items-center gap-1.5 mt-2 sm:mt-0"
            >
              <CheckCircle className="w-4 h-4 text-[#F27D26]" />
              Custom call briefing mapped below!
            </motion.p>
          ) : (
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-2 sm:mt-0">
              <HelpCircle className="w-3.5 h-3.5" />
              Not sure? Leave default and click apply.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
