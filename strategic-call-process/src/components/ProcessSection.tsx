/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrandDiagnosisInput } from '../types';
import { 
  Compass, 
  Activity, 
  LineChart, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Tv, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  ExternalLink
} from 'lucide-react';
import CreativeMindmap from './CreativeMindmap';
import PlanTimeline from './PlanTimeline';

interface ProcessSectionProps {
  diagnosis: BrandDiagnosisInput;
  onBookCallClick: () => void;
}

export default function ProcessSection({ diagnosis, onBookCallClick }: ProcessSectionProps) {
  const [activeExpandedStep, setActiveExpandedStep] = useState<number | null>(3); // Default step 3 (Creative Strategy) open for visual impact

  // Formatted Bottleneck label
  const getBottleneckLabel = (key: string) => {
    switch (key) {
      case 'creative': return 'Creative Strategy / Ad Fatigue';
      case 'retention': return 'Customer Lifetime Value & Retention';
      case 'website_cro': return 'Website Conversion Rate (CRO)';
      case 'ad_account': return 'Ad Account Audits & Scaling';
      default: return 'Complete Growth Strategy';
    }
  };

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Current Situation',
      subtitle: 'Where you are winning right now',
      colorTheme: 'from-[#F27D26]/20 to-transparent text-[#F27D26] border-white/10',
      accentColor: 'brand-orange',
      icon: <Compass className="w-6 h-6 text-[#F27D26]" />,
      tagline: 'Leverage Existing Assets',
      brief: 'We identify what is already working beautifully. Before suggesting any changes, we anchor the strategy on your native strengths and existing sales channels.',
      detailsContent: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-[#F27D26] font-bold uppercase tracking-wider block mb-1">
              Brand Baseline Assessment
            </span>
            <div className="flex items-center gap-2 mt-1">
              <TrendingUp className="w-5 h-5 text-[#F27D26]" />
              <span className="text-sm font-semibold text-white">
                Current Winning Angle: <span className="text-slate-300">"{diagnosis.biggestWin || 'Strong organic product-market fit'}"</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Many brands waste thousands trying to fix things that aren't broken. Our analysis preserves your winning formulas, ensuring ad-account modifications build on top of your existing momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-white/5 bg-[#0a0a0a] shadow-sm">
              <h5 className="text-xs font-bold text-white">Audit Metric Floor</h5>
              <p className="text-[11px] text-slate-400 mt-1">We establish a clear baseline of your blended customer acquisition cost (CAC) and customer lifetime value (LTV) to ensure positive cashflow scaling.</p>
            </div>
            <div className="p-3 rounded-xl border border-white/5 bg-[#0a0a0a] shadow-sm">
              <h5 className="text-xs font-bold text-white">Loyalty Lift</h5>
              <p className="text-[11px] text-slate-400 mt-1">Analyzing returning customer rates to determine if ad dollars can buy more aggressive acquisition budgets with high retention support.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      number: '02',
      title: 'The Diagnosis',
      subtitle: 'Performance & optimization audit',
      colorTheme: 'from-white/5 to-transparent text-[#F27D26] border-white/10',
      accentColor: 'slate-400',
      icon: <Activity className="w-6 h-6 text-[#F27D26]" />,
      tagline: 'Solve Core Growth Leaks',
      brief: 'A scientific audit covering website conversion optimization, retention cohort performance, and raw Meta ad account observation to diagnose scaling roadblocks.',
      detailsContent: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] font-mono text-[#F27D26] font-bold uppercase tracking-wider block mb-1">
              Targeted Diagnostic Focus
            </span>
            <div className="flex items-start gap-2.5 mt-1">
              <AlertCircle className="w-5 h-5 text-[#F27D26] mt-0.5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-white block">
                  Primary Bottleneck: <span className="text-[#F27D26]">{getBottleneckLabel(diagnosis.primaryBottleneck)}</span>
                </span>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Our strategic analysis call is engineered to tackle this specific challenge. We bypass standard checklists to look directly at {diagnosis.brandName || 'your brand'}'s custom bottleneck.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Core Diagnosis Elements Audited:
            </span>
            <div className="space-y-1.5">
              {[
                { title: 'Performance Optimization', desc: 'Slicing ad manager variables to locate high-performing asset silos.' },
                { title: 'Retention Optimization', desc: 'Auditing 30, 60, and 90-day repurchase cohorts for high customer value.' },
                { title: 'Website CRO Speed Audit', desc: 'Mapping exact friction points causing cart abandonment on mobile devices.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#0a0a0a] border border-white/5 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="text-slate-400 block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      number: '03',
      title: 'Creative Strategy',
      subtitle: 'Simple Meta deployment roadmap',
      colorTheme: 'from-amber-500/20 to-orange-500/20 text-amber-600 border-amber-100',
      accentColor: 'amber',
      icon: <Layers className="w-6 h-6 text-[#F27D26]" />,
      tagline: 'Jargon-Free Blueprint',
      brief: 'An organic, jargon-free creative framework designed specifically for non-marketers to launch high-conversion hooks, testimonials, and offers on Meta channels.',
      detailsContent: <CreativeMindmap />
    },
    {
      id: 4,
      number: '04',
      title: 'The 2-Month Plan',
      subtitle: 'Timeline & onboarding milestones',
      colorTheme: 'from-rose-500/20 to-pink-500/20 text-rose-600 border-rose-100',
      accentColor: 'rose',
      icon: <LineChart className="w-6 h-6 text-[#F27D26]" />,
      tagline: 'Sustained Launch Strategy',
      brief: 'A step-by-step 60 day roadmap detailing launch milestones, onboarding checklists, and exact expectations for what occurs once you partner with us.',
      detailsContent: <PlanTimeline />
    }
  ];

  // Soft, organic, fluid bouncy transition for bubble effect
  const bubbleTransition = {
    type: 'spring',
    stiffness: 110,
    damping: 10,
    mass: 1.1,
  };

  const bubbleHover = {
    y: -10,
    scale: 1.025,
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 15px rgba(242, 125, 38, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 8,
    }
  };

  return (
    <div id="strategic-call-process-section" className="relative py-12">
      {/* 
        IMPORTANT RULE: "The section container must have a transparent background. No background color for the container."
        This wrapper is perfectly transparent. The styling comes from individual cards and layouts.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F27D26] bg-white/5 px-3 py-1 rounded-full font-bold">
            Growth Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white mt-4 tracking-tight">
            Our 4-Step Strategic Call <span className="italic font-serif text-[#F27D26]">Process</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed font-sans">
            Every audit call we host follows this specific organic path. Click on any card below to explore our detailed workflows, active templates, and 60-day roadmap.
          </p>
        </div>

        {/* 
          Horizontal process row container.
          Horizontal on desktop, vertical on mobile.
          Transparent background on this container.
        */}
        <div id="process-row-container" className="relative mb-16">
          
          {/* Connector Line (Desktop Horizontal) - Perfectly centered across the row */}
          <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#F27D26]/10 via-[#F27D26]/40 to-[#F27D26]/10 -translate-y-1/2 -z-10 hidden lg:block" />
          
          {/* Connector Line (Mobile Vertical) */}
          <div className="absolute left-[34px] sm:left-12 top-12 bottom-12 w-0.5 bg-white/10 -z-10 block lg:hidden" />

          {/* Steps Row (Flex layout horizontally, column on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            {steps.map((step) => {
              const isActive = activeExpandedStep === step.id;
              
              return (
                <motion.div
                  key={step.id}
                  id={`process-card-step-${step.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...bubbleTransition, delay: step.id * 0.1 }}
                  whileHover={bubbleHover}
                  onClick={() => setActiveExpandedStep(isActive ? null : step.id)}
                  className={`group relative rounded-2xl p-6 border cursor-pointer select-none transition-all ${
                    isActive 
                      ? 'bg-[#151515] border-[#F27D26] shadow-xl ring-2 ring-[#F27D26]/5' 
                      : 'bg-[#151515] border-white/10 shadow-premium hover:shadow-premium-hover'
                  }`}
                >
                  {/* Step ID Label Floating Bubble */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">
                      STEP {step.number}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white tracking-tight group-hover:text-[#F27D26] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F27D26] mt-1">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {step.id === 1 && diagnosis.brandName 
                      ? `Calibrating ${diagnosis.brandName}'s baseline on your existing win: "${diagnosis.biggestWin}".`
                      : step.id === 2 && diagnosis.brandName
                      ? `Deep-diving specifically on ${diagnosis.brandName}'s focus: "${getBottleneckLabel(diagnosis.primaryBottleneck)}".`
                      : step.brief
                    }
                  </p>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-mono font-medium">
                      {step.tagline}
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                      {isActive ? 'Minimize' : 'Explore'} <ArrowRight className="w-3.5 h-3.5 text-[#F27D26]" />
                    </span>
                  </div>

                  {/* Active Card Indicator Glow */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-4 right-4 h-1 bg-[#F27D26] rounded-full shadow-lg shadow-[#F27D26]/50" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Panel Display (Expands smoothly beneath cards when clicked) */}
        {activeExpandedStep !== null && (
          <motion.div
            id="active-step-expanded-details"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-12 bg-[#151515] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/2 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-extrabold text-black bg-[#F27D26] px-2.5 py-1 rounded-lg">
                  STEP {steps[activeExpandedStep - 1].number}
                </span>
                <div>
                  <h4 className="text-xl font-display font-bold text-white">
                    {steps[activeExpandedStep - 1].title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {steps[activeExpandedStep - 1].subtitle}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setActiveExpandedStep(null)}
                className="text-xs text-slate-300 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
              >
                Close View
              </button>
            </div>

            <div>
              {steps[activeExpandedStep - 1].detailsContent}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <div className="text-center pt-4">
          <motion.button
            id="book-call-cta-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookCallClick}
            className="relative px-8 py-4 bg-[#F27D26] hover:bg-[#e06d1c] text-black rounded-2xl font-display font-bold text-base shadow-lg shadow-[#F27D26]/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
            Book Your Analysis Call
            <ArrowRight className="w-4 h-4 text-black/60 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#F27D26]" />
              100% Free Strategy Blueprint
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-[#F27D26]" />
              Tailored Prep Materials Included
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
