import React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, Users, GraduationCap, Star } from "lucide-react";

export default function SocialProof() {
  const stats = [
    {
      value: "40+",
      label: "Projects Delivered",
      icon: <Trophy className="w-4 h-4 text-[#f27d26]" />
    },
    {
      value: "15+",
      label: "Businesses Partnered",
      icon: <Users className="w-4 h-4 text-amber-500" />
    },
    {
      value: "3+",
      label: "Years of Digital Engineering",
      icon: <GraduationCap className="w-4 h-4 text-orange-400" />
    },
    {
      value: "100%",
      label: "Trusted by Growth-Focused Founders",
      icon: <Star className="w-4 h-4 text-[#f27d26]" fill="currentColor" />
    }
  ];

  return (
    <div className="relative mt-12 md:mt-16 w-full">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/3 to-transparent rounded-2xl blur-md" />
      
      {/* Container with liquid glass styling */}
      <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-white/[0.05] shadow-xl text-left">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            className="flex flex-col justify-center pl-0 md:pl-6 first:pl-0"
          >
            <div className="flex items-center gap-2 mb-1.5">
              {stat.icon}
              <span className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                {stat.value}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider leading-relaxed">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
