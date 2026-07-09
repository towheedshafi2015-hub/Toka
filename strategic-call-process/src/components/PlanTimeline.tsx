/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, ShieldCheck, Flame, ClipboardCheck, Play } from 'lucide-react';

interface TimelinePhase {
  id: string;
  title: string;
  period: string;
  summary: string;
  icon: React.ReactNode;
  milestones: string[];
  expectedOutcome: string;
}

export default function PlanTimeline() {
  const [activePhase, setActivePhase] = useState<string>('onboarding');

  const phases: TimelinePhase[] = [
    {
      id: 'onboarding',
      title: 'Phase 0: After You Say Yes',
      period: 'Days 1 to 7',
      summary: 'Immediate secure asset handoff, ad account setup, and brand deep-dive kickoff.',
      icon: <ClipboardCheck className="w-5 h-5 text-[#F27D26]" />,
      milestones: [
        'Secure dashboard configuration & ad manager access checklist',
        'Deep brand review: existing customer personas & top historical creative assets',
        'Website speed & pixel tracking integrity audit',
        'Kickoff strategy call to align goals & key metrics'
      ],
      expectedOutcome: 'Zero-friction launchpad configured, pixel tracking certified, and 30-day priorities agreed.'
    },
    {
      id: 'month1',
      title: 'Month 1: Foundation & Low-Hanging Fruit',
      period: 'Days 8 to 30',
      summary: 'Harvesting immediate wins through ad-account restructures, clean funnels, and landing page edits.',
      icon: <Flame className="w-5 h-5 text-[#F27D26]" />,
      milestones: [
        'Deploy high-impact copy adjustments to top 3 winning products',
        'Consolidate disjointed ad account structure into a modern, auto-targeted funnel',
        'Activate retention sequences: SMS and email cart recovery flows',
        'Launch first batch of high-conversion Meta creative assets (Hooks & Unboxing)'
      ],
      expectedOutcome: '30%+ improvement in blend Return on Ad Spend (ROAS) and ad-spend efficiency.'
    },
    {
      id: 'month2',
      title: 'Month 2: Scale & Creative Velocity',
      period: 'Days 31 to 60',
      summary: 'Unlocking scale by deploying creative sprints, multi-angle tests, and retention optimization.',
      icon: <Calendar className="w-5 h-5 text-[#F27D26]" />,
      milestones: [
        'Launch weekly rapid creative sprint loops to counter ad fatigue',
        'Scale best-performing audience segments with budget scaling models',
        'Optimize retention flows: custom VIP customer journeys & post-purchase upsells',
        'Deploy website conversion edits (A/B headers, simplified mobile cart)'
      ],
      expectedOutcome: 'Predictable daily sales volume at profitable ROAS, preparing for sustained multi-channel scaling.'
    }
  ];

  const currentPhase = phases.find(p => p.id === activePhase) || phases[0];

  return (
    <div id="plan-timeline-container" className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 shadow-sm">
      <div className="mb-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#F27D26] bg-white/5 px-2 py-1 rounded-full font-medium">
          2-Month Structured Roadmap
        </span>
        <h4 className="text-lg font-display font-semibold mt-1 text-white">
          The Execution Plan & Milestones
        </h4>
        <p className="text-xs text-slate-400">
          What happens when you partner with us. Click on each phase to explore the direct timeline.
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 p-1 bg-[#151515] rounded-xl mb-5">
        {phases.map((phase) => {
          const isActive = activePhase === phase.id;
          return (
            <button
              key={phase.id}
              id={`timeline-tab-${phase.id}`}
              onClick={() => setActivePhase(phase.id)}
              className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#F27D26] text-black shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="block sm:inline">{phase.title.split(':')[0]}</span>
              <span className="block sm:hidden text-[9px] font-normal opacity-75">
                {phase.period}
              </span>
              <span className="hidden sm:inline text-[10px] font-normal opacity-75 ml-1">
                ({phase.period})
              </span>
            </button>
          );
        })}
      </div>

      {/* Details Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="bg-[#151515] rounded-xl border border-white/10 p-5 shadow-sm"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2.5 rounded-lg bg-[#0a0a0a] border border-white/5 shrink-0">
              {currentPhase.icon}
            </div>
            <div>
              <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase">
                {currentPhase.period}
              </span>
              <h5 className="text-sm font-bold text-white">
                {currentPhase.title}
              </h5>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentPhase.summary}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Key Action Items & Milestones:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentPhase.milestones.map((ms, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#0a0a0a] p-2.5 rounded-lg border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium leading-normal">{ms}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 p-3 rounded-lg border border-[#F27D26]/10">
            <div className="flex items-center gap-1.5 text-[#F27D26] font-mono text-[10px] uppercase font-bold shrink-0">
              <ShieldCheck className="w-4 h-4" /> Expected Outcome:
            </div>
            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              {currentPhase.expectedOutcome}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
