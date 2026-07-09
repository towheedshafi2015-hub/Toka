import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  Calendar,
  Sparkles,
  Quote,
  CheckCircle2,
  Trophy,
  Users,
  GraduationCap,
  Star,
  ArrowRight
} from "lucide-react";
import { growthPillarsData } from "./data";
import LiquidGlassCard from "./components/LiquidGlassCard";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Section Refs for navigation or scroll
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "40+",
      label: "Projects Delivered",
      icon: <Trophy className="w-4 h-4 text-[#f27d26]" />
    },
    {
      value: "15+",
      label: "Business Partners",
      icon: <Users className="w-4 h-4 text-amber-500" />
    },
    {
      value: "3+",
      label: "Years of Experience",
      icon: <GraduationCap className="w-4 h-4 text-orange-400" />
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <Star className="w-4 h-4 text-[#f27d26]" fill="currentColor" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#080809] text-slate-100 font-sans selection:bg-[#f27d26]/30 selection:text-orange-200 relative overflow-x-hidden flex flex-col justify-between">
      
      {/* Background Watermark Text - Styled Elegant and Centered vertically */}
      <div className="fixed inset-0 flex items-center justify-center select-none z-0 pointer-events-none overflow-hidden">
        <div className="text-[15vw] font-black tracking-tighter text-white/[0.015] font-display uppercase">
          TOKA
        </div>
      </div>

      {/* Dynamic Background Radial Glows */}
      <div className="absolute top-0 left-0 right-0 h-[150vh] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#f27d26]/4 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] bg-white/[0.01] rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-[20%] left-[20%] w-[45%] h-[45%] bg-[#f27d26]/3 rounded-full blur-[120px]" />
      </div>

      {/* Decorative vertical guiding lines - outlining the center space boundary */}
      <div className="absolute left-[8%] lg:left-[28%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/[0.03] via-white/[0.005] to-white/[0.03] pointer-events-none" />
      <div className="absolute right-[8%] lg:right-[28%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/[0.03] via-white/[0.005] to-white/[0.03] pointer-events-none" />

      {/* Header - Extremely minimal */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20 border-b border-white/[0.04]">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#f27d26] p-[1px] shadow-[0_0_15px_-3px_rgba(242,125,38,0.5)]">
              <div className="w-full h-full bg-[#080809] rounded-lg flex items-center justify-center font-bold text-sm tracking-tighter text-white">
                T
              </div>
            </div>
            <span className="font-display font-extrabold text-lg tracking-widest text-white">
              TOKA<span className="text-[#f27d26]">.</span>
            </span>
          </div>

          {/* Low profile CTA Book Button */}
          <div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-4 py-2 rounded-lg text-[10px] md:text-[11px] font-mono font-bold tracking-widest uppercase border border-white/10 bg-white/[0.02] hover:bg-[#f27d26] text-white hover:text-black transition-all cursor-pointer duration-300 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Call
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - Structured around 3 clean subsections with high-contrast layouts */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 pt-12 pb-32 space-y-44 md:space-y-64">

        {/* Minimalist Intro Badge to label the top */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f27d26]/10 border border-[#f27d26]/20 rounded-full text-[10px] font-mono font-bold text-[#f27d26] tracking-wider uppercase backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f27d26] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#f27d26]"></span>
            </span>
            Systems Audit Online
          </div>
        </div>

        {/* ================= SUBSECTION 1: BUSINESS DESCRIPTION & CTA ================= */}
        <section ref={section1Ref} className="scroll-mt-24">
          {/* Headline and Label */}
          <div className="mb-12">
            <span className="font-mono text-[10px] text-[#f27d26] tracking-widest uppercase font-bold block mb-2">
              SUBSECTION 01 // OVERVIEW
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white tracking-tight">
              Build More Than a Website. <span className="text-slate-500">Build a Business.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-y-12 lg:gap-8 items-start">
            
            {/* Left Side Column: Business Description Card and Booking CTA */}
            <div className="col-span-12 lg:col-span-5 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-3xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col gap-6"
              >
                {/* Glow & Reflection */}
                <div className="absolute -inset-1.5 bg-[#f27d26]/5 rounded-2xl blur-lg pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                <div className="space-y-4">
                  <div className="p-2 w-max rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <Sparkles className="w-5 h-5 text-[#f27d26]" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                    Engineering Growth Systems
                  </h3>
                  
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    At TOKA, we partner with ambitious founders to engineer complete, self-reinforcing growth engines. We replace disconnected agency boilerplate campaigns with custom-built high-converting technical infrastructure.
                  </p>
                </div>

                {/* Main Action Trigger */}
                <div className="pt-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-[#f27d26] hover:bg-orange-500 text-black font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] cursor-pointer font-sans"
                  >
                    <Calendar className="w-4 h-4" /> Book Free Growth Call
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Middle Column: ALWAYS COMPLETELY EMPTY & SPACIOUS */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Right Side Column: Strategic Positioning / Partners List */}
            <div className="col-span-12 lg:col-span-5 text-left lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-3xl p-6 md:p-8 overflow-hidden shadow-2xl flex flex-col gap-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                
                <div className="space-y-4">
                  <span className="text-[9px] font-mono tracking-widest text-[#f27d26] uppercase font-bold block bg-white/[0.02] border border-white/[0.05] w-max px-2.5 py-1 rounded">
                    Our Core Objective
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                    The Scaling Standard
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    Our architecture delivers real compounding returns for your brand's balance sheet by addressing the full scale funnel in real time.
                  </p>
                </div>

                {/* Key Checklist bullets */}
                <div className="space-y-2.5 pt-2 font-mono text-[11px] text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Lower Customer Acquisition Cost</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Double-Digit CRO conversion boosts</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Automated operations & chat funnels</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ================= SUBSECTION 2: ALTERNATING LIQUID GLASS CARDS ================= */}
        <section ref={section2Ref} className="scroll-mt-24">
          
          {/* Header */}
          <div className="mb-16">
            <span className="font-mono text-[10px] text-[#f27d26] tracking-widest uppercase font-bold block mb-2">
              SUBSECTION 02 // SCALE PILLARS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white tracking-tight">
              Six Integrated Scale Engines. <span className="text-slate-500">Alternating Layout.</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mt-2 max-w-md">
              Each module is strictly aligned to the left or right side of the screen, creating a beautiful staggered pattern with a perfectly clear middle vertical highway.
            </p>
          </div>

          {/* Alternate Grid Container */}
          <div className="space-y-16 lg:space-y-24">
            
            {/* ROW 1: Pillar 01 D2C Shopify Engineering (Left) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-5">
                <LiquidGlassCard pillar={growthPillarsData[0]} index={0} />
              </div>
              <div className="hidden lg:block lg:col-span-7" /> {/* Right side remains empty */}
            </div>

            {/* ROW 2: Pillar 02 Meta Ad Acquisition (Right) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden lg:block lg:col-span-7" /> {/* Left side remains empty */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <LiquidGlassCard pillar={growthPillarsData[1]} index={1} />
              </div>
            </div>

            {/* ROW 3: Pillar 03 WhatsApp Automations (Left) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-5">
                <LiquidGlassCard pillar={growthPillarsData[2]} index={2} />
              </div>
              <div className="hidden lg:block lg:col-span-7" /> {/* Right side remains empty */}
            </div>

            {/* ROW 4: Pillar 04 AI Voice Agent (Right) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden lg:block lg:col-span-7" /> {/* Left side remains empty */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <LiquidGlassCard pillar={growthPillarsData[3]} index={3} />
              </div>
            </div>

            {/* ROW 5: Pillar 05 Conversion Optimizer (Left) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-5">
                <LiquidGlassCard pillar={growthPillarsData[4]} index={4} />
              </div>
              <div className="hidden lg:block lg:col-span-7" /> {/* Right side remains empty */}
            </div>

            {/* ROW 6: Pillar 06 Live Growth KPI (Right) */}
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden lg:block lg:col-span-7" /> {/* Left side remains empty */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <LiquidGlassCard pillar={growthPillarsData[5]} index={5} />
              </div>
            </div>

          </div>
        </section>

        {/* ================= SUBSECTION 3: TRUST, FOUNDER & COMPACT STATS ================= */}
        <section ref={section3Ref} className="scroll-mt-24">
          
          {/* Header - Very small and tight */}
          <div className="mb-8">
            <span className="font-mono text-[9px] text-[#f27d26] tracking-widest uppercase font-bold block mb-1">
              SUBSECTION 03 // PARTNERSHIP & METRICS
            </span>
            <h2 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
              Trusted by 15+ High-Growth Brands. <span className="text-slate-500">The Founder Statement.</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-y-8 lg:gap-8 items-start">
            
            {/* Left Side Column: About Founder (Compact Animated Card) */}
            <div className="col-span-12 lg:col-span-5 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-3xl p-4 md:p-5 overflow-hidden shadow-xl flex flex-col gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Quote className="w-3.5 h-3.5 text-[#f27d26]/60" />
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#f27d26] font-bold">
                      Founder's Vision
                    </span>
                  </div>

                  <p className="text-slate-300 text-[11px] leading-relaxed italic font-sans">
                    "We partner with founders who want more than a beautiful website. We build integrated, fully scalable web systems that help your brand acquire customers cheaper, convert them at double-digit rates, and automate tedious backend tasks with AI."
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04]">
                  <h4 className="text-xs font-bold font-display text-white">
                    Tawheed Shafi
                  </h4>
                  <p className="text-[9px] text-slate-500 font-mono uppercase tracking-wider">
                    Founder, TOKA Systems
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Middle Column: ALWAYS COMPLETELY EMPTY & SPACIOUS */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Right Side Column: Stats Badges (Compact & Low-Profile) */}
            <div className="col-span-12 lg:col-span-5 text-left lg:col-start-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 gap-3"
              >
                {stats.map((stat, i) => (
                  <div 
                    key={i}
                    className="relative rounded-xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-3xl p-3.5 text-left flex flex-col justify-between hover:border-[#f27d26]/20 transition-all duration-300 hover:scale-[1.01] shadow-lg overflow-hidden group"
                  >
                    {/* Glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                    
                    <div className="flex justify-between items-center mb-1.5">
                      {stat.icon}
                      <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Metric</span>
                    </div>

                    <div>
                      <h5 className="text-xl md:text-2xl font-black font-display text-white tracking-tight">
                        {stat.value}
                      </h5>
                      <p className="text-[8px] uppercase tracking-wider font-mono font-bold text-slate-400 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>

      </main>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

    </div>
  );
}
