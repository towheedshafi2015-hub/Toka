import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onBookCall: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onBookCall, onExploreWork }: HeroSectionProps) {
  return (
    <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-left">
      {/* Decorative floating liquid glass bubble for atmosphere (absolutely no solid background) */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -left-10 top-40 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl space-y-6 md:space-y-8">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#f27d26]/10 border border-[#f27d26]/25 rounded-full text-[10px] md:text-xs font-mono font-bold text-[#f27d26] tracking-wider uppercase backdrop-blur-md shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          ENGINEERING GROWTH FOR D2C BRANDS & AMBITIOUS BUSINESSES
        </motion.div>

        {/* Main Headline */}
        <div className="space-y-2.5 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]"
          >
            Build More Than <br className="hidden md:inline" />
            a Website.
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.05] bg-gradient-to-r from-[#f27d26] via-white to-white/40 bg-clip-text text-transparent"
          >
            Build a Business <br className="hidden md:inline" />
            That Scales.
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl"
        >
          Your website is only one piece of the puzzle. At{" "}
          <strong className="text-white font-semibold">TOKA</strong>, we engineer complete growth
          systems—from high-converting D2C websites and Shopify experiences to Meta Ads, AI agents,
          WhatsApp automation, voice AI, and conversion optimization. Everything works together to
          help you attract, convert, and retain more customers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
        >
          <button
            onClick={onBookCall}
            className="bg-[#f27d26] text-black font-bold px-7 py-4 rounded-xl text-xs md:text-sm tracking-wider uppercase transition flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:glow-orange hover:scale-105 duration-300"
          >
            <Calendar className="w-4 h-4 text-black" />
            Book a Free Growth Strategy Call
            <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={onExploreWork}
            className="bg-white/[0.02] hover:bg-white/[0.05] text-white border border-white/[0.08] hover:border-white/[0.15] font-bold px-7 py-4 rounded-xl text-xs md:text-sm tracking-wider uppercase transition flex items-center justify-center gap-2 group cursor-pointer backdrop-blur-md"
          >
            Explore Our Work
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
          </button>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-2 pt-2 border-t border-white/[0.05] max-w-xl text-slate-400 text-xs font-medium"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span>
            Helping D2C brands and growing businesses build systems that generate more revenue—not
            just more traffic.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
