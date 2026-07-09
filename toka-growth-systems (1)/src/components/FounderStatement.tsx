import React from "react";
import { motion } from "motion/react";
import { Quote, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function FounderStatement() {
  const finalBulletPoints = [
    "More Revenue.",
    "Better Systems.",
    "Smarter Automation.",
    "One Growth Partner."
  ];

  return (
    <div className="relative py-16 md:py-24 border-t border-b border-white/[0.04]">
      {/* Background Liquid Glass Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-64 h-64 bg-brand-orange/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* Left Column: Letter from Founder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-3/5 space-y-6 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#f27d26] bg-[#f27d26]/10 border border-[#f27d26]/25 px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Founder Partnership
            </span>
          </div>

          <div className="relative pl-6 md:pl-8 border-l-2 border-[#f27d26]/30 space-y-4">
            <Quote className="absolute left-0 -top-2 w-5 h-5 text-[#f27d26]/30 transform -translate-x-1/2" />
            
            <h4 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
              Hi, I'm Tawheed Shafi.
            </h4>
            <p className="text-slate-400 font-mono text-xs uppercase tracking-wider">
              Founder of TOKA
            </p>
 
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We partner with founders who want more than a beautiful website.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              We build digital systems that help businesses grow faster, operate smarter, and scale with confidence. Your website should not just be a static ornament—it must be an active asset in a self-reinforcing revenue cycle.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Final Statement Block with Liquid Glass */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/5"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl p-6 md:p-8 space-y-6 shadow-2xl overflow-hidden">
            {/* Ambient shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#f27d26] uppercase tracking-widest block font-bold">
                The TOKA Standard
              </span>
              <h5 className="text-lg font-bold font-display text-white tracking-tight">
                Our Unified Objective
              </h5>
            </div>

            <div className="space-y-3.5">
              {finalBulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] p-3 rounded-lg border border-white/[0.03] transition">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-xs font-mono font-bold">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
