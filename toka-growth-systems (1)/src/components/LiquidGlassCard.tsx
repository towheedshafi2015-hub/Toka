import React from "react";
import { motion } from "motion/react";
import { GrowthPillar } from "../types";
import { 
  SpeedTestWidget, 
  AdCalculatorWidget, 
  CroSplitWidget, 
  VoiceAiWidget, 
  WhatsappWidget, 
  GrowthKpiWidget 
} from "./InteractiveWidget";
import { ArrowRight, Flame, Layers, Sparkles, Cpu, Target, HelpCircle } from "lucide-react";

interface LiquidGlassCardProps {
  pillar: GrowthPillar;
  index: number;
}

export default function LiquidGlassCard({ pillar, index }: LiquidGlassCardProps) {
  // Select the appropriate widget based on index
  const renderWidget = () => {
    switch (index) {
      case 0:
        return <SpeedTestWidget />;
      case 1:
        return <AdCalculatorWidget />;
      case 2:
        return <WhatsappWidget />;
      case 3:
        return <VoiceAiWidget />;
      case 4:
        return <CroSplitWidget />;
      case 5:
        return <GrowthKpiWidget />;
      default:
        return null;
    }
  };

  // Get matching icon
  const getIcon = () => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-[#f27d26]" />;
      case 1:
        return <Target className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-[#f27d26]" />;
      case 4:
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 5:
        return <HelpCircle className="w-5 h-5 text-orange-500" />;
      default:
        return <Layers className="w-5 h-5 text-[#f27d26]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="relative group w-full max-w-md mx-auto"
    >
      {/* Liquid gloss glow behind the card */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f27d26]/10 to-white/5 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />
      
      {/* Liquid glass physical container */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-3xl p-5 md:p-6 transition-all duration-300 group-hover:border-[#f27d26]/40 group-hover:bg-white/[0.03] shadow-2xl overflow-hidden flex flex-col gap-4">
        {/* Animated corner glass shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              {getIcon()}
            </div>
            <div>
              <span className="font-mono text-[9px] text-[#f27d26] uppercase font-bold tracking-widest block">
                Pillar {pillar.number}
              </span>
              <span className="font-mono text-[8px] text-slate-500 uppercase tracking-widest block">
                {pillar.category}
              </span>
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold text-slate-500 bg-white/[0.02] border border-white/[0.05] px-2 py-0.5 rounded uppercase">
            Live
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5 text-left">
          <h3 className="text-lg font-bold font-display text-white tracking-tight">
            {pillar.title}
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed font-sans">
            {pillar.description}
          </p>
        </div>

        {/* Small embedded Live Sandbox widget */}
        <div className="w-full bg-black/10 rounded-xl p-1 border border-white/[0.02]">
          {renderWidget()}
        </div>

        {/* Subtle details bullet checklist */}
        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-mono text-left pt-1 border-t border-white/[0.04]">
          {pillar.details.slice(0, 2).map((detail, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#f27d26] flex-shrink-0" />
              <span className="truncate">{detail}</span>
            </div>
          ))}
        </div>

        {/* Interaction indicator */}
        <div className="flex items-center gap-1 text-[10px] font-mono text-[#f27d26] hover:text-[#f79b54] font-bold cursor-pointer transition group-cols">
          <span>Interact with sandbox</span>
          <ArrowRight className="w-3 h-3 transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
