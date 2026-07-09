import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';

interface GlassFooterProps {
  onOpenBooking: () => void;
  onOpenMembership: () => void;
}

export default function GlassFooter({ onOpenBooking, onOpenMembership }: GlassFooterProps) {
  return (
    <footer 
      id="main-glass-footer"
      className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-6 relative z-20"
    >
      {/* 
        The Liquid-Glass Footer Card with the iconic curved-top frame.
        Uses backdrop-blur-2xl and transparent glass elements with NO static solid page background.
      */}
      <div 
        id="footer-card"
        className="w-full bg-slate-950/40 backdrop-blur-2xl border border-white/10 rounded-t-[40px] rounded-b-[24px] p-8 md:p-12 lg:p-16 shadow-[0_24px_80px_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-500 hover:border-white/15"
      >
        {/* Abstract Liquid Glass Radial Glow in the background of the card */}
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
          
          {/* LEFT SIDE: Contact and Socials (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8" id="footer-left-col">
            <div className="space-y-6">
              <h4 className="text-white text-lg font-bold tracking-tight border-b border-white/10 pb-2">
                Contact
              </h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-white/80 text-sm font-sans leading-relaxed">
                    Woelwijk 101,<br />
                    8926 XD Leeuwarden
                  </span>
                </li>
                
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
                  <a 
                    href="tel:0511432299" 
                    className="text-white/80 hover:text-white text-sm font-sans transition-colors duration-300"
                  >
                    0511 - 43 22 99
                  </a>
                </li>
                
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
                  <a 
                    href="mailto:info@leeuwardergolfclub.nl" 
                    className="text-white/80 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 break-all"
                  >
                    info@leeuwardergolfclub.nl
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Column (positioned on the right/middle of left block) */}
            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">Connect With Us</p>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="text-white/70 hover:text-white text-xs font-sans inline-flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1"
                >
                  Facebook <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="text-white/70 hover:text-white text-xs font-sans inline-flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1"
                >
                  Instagram <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="text-white/70 hover:text-white text-xs font-sans inline-flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1"
                >
                  LinkedIn <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE: Branding, Logo, and Action Buttons (Cols 5-8) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-6" id="footer-center-col">
            
            {/* The beautiful layered organic green logo represented as a high-fidelity SVG */}
            <div className="relative group cursor-pointer" id="logo-container">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl scale-75 group-hover:scale-100 transition-all duration-500 opacity-60" />
              <svg 
                viewBox="0 0 100 100" 
                className="w-24 h-24 relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-105"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="golfLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                
                {/* Simulated high-fidelity organic green asterisk shape from the image */}
                {/* 6 beautiful wavy thick arms intersecting perfectly in 3D pattern */}
                <path 
                  d="M 50 10 C 53 25, 47 35, 50 50 C 47 65, 53 75, 50 90" 
                  stroke="url(#golfLogoGrad)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none" 
                  className="drop-shadow-[0_4px_10px_rgba(16,185,129,0.5)]"
                />
                <path 
                  d="M 15 30 C 30 33, 40 40, 50 50 C 60 60, 70 67, 85 70" 
                  stroke="url(#golfLogoGrad)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none"
                  className="drop-shadow-[0_4px_10px_rgba(16,185,129,0.5)]"
                />
                <path 
                  d="M 15 70 C 30 67, 40 60, 50 50 C 60 40, 70 33, 85 30" 
                  stroke="url(#golfLogoGrad)" 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none"
                  className="drop-shadow-[0_4px_10px_rgba(16,185,129,0.5)]"
                />
                
                {/* Wavy topographical inner ridges giving it that premium line-art look */}
                <path 
                  d="M 46 12 C 49 25, 43 35, 46 50 C 43 65, 49 75, 46 88" 
                  stroke="#34d399" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 54 12 C 57 25, 51 35, 54 50 C 51 65, 57 75, 54 88" 
                  stroke="#34d399" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 17 34 C 31 37, 41 43, 49 49 C 57 55, 67 61, 83 66" 
                  stroke="#34d399" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                <path 
                  d="M 17 66 C 31 63, 41 57, 49 51 C 57 45, 67 39, 83 34" 
                  stroke="#34d399" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
                
                {/* Glowing central core */}
                <circle cx="50" cy="50" r="6" fill="#6ee7b7" className="animate-pulse" />
              </svg>
            </div>

            {/* Brand Titles */}
            <div className="space-y-2">
              <h3 className="text-white text-3xl font-bold tracking-tight font-sans">
                Leeuwarder Golfclub
              </h3>
              <p className="text-emerald-400 font-medium text-sm tracking-wide italic font-sans">
                Waar golfgeluk begint
              </p>
            </div>

            {/* Interactive Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm pt-2 justify-center">
              <button 
                id="btn-reserveer-starttijd"
                onClick={onOpenBooking}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group active:scale-95 text-sm"
              >
                <span>Starttijd reserveren</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button 
                id="btn-word-lid"
                onClick={onOpenMembership}
                className="bg-white/5 hover:bg-white/10 text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-500 font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group active:scale-95 text-sm"
              >
                <span>Direct lid worden</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation and Menu Links (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-6" id="footer-right-col">
            <h4 className="text-white text-lg font-bold tracking-tight border-b border-white/10 pb-2 text-left">
              Snel naar
            </h4>
            
            <div className="grid grid-cols-2 gap-6 text-left">
              <div className="flex flex-col gap-3">
                <a href="#club" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  Onze club
                </a>
                <a href="#gasten" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  Voor gasten
                </a>
                <a href="#beginnen" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  Beginnen met Golf
                </a>
              </div>
              
              <div className="flex flex-col gap-3">
                <a href="#baan" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  De baan
                </a>
                <a href="#evenementen" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  Onze evenementen
                </a>
                <a href="#contact" className="text-white/70 hover:text-emerald-400 text-sm font-sans transition-colors duration-300 flex items-center gap-1 group">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                  Contact
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS & LEGAL ROW */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Leadingcourses Badge & Trust Logos */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="bg-[#00b67a]/15 border border-[#00b67a]/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <span className="bg-[#00b67a] text-white font-bold text-sm px-1.5 py-0.5 rounded">7.9</span>
              <span className="text-white font-medium text-xs font-sans tracking-wide">Leadingcourses score</span>
            </div>
            
            {/* Styled Partner Flag Icons representing NGF, etc. */}
            <div className="flex items-center gap-2" id="partner-flags">
              {/* NGF Flag */}
              <div className="h-6 w-9 bg-gradient-to-r from-red-500 via-white to-blue-500 rounded-sm border border-white/10 relative overflow-hidden flex items-center justify-center shadow-md">
                <span className="text-[7px] font-bold text-slate-900 tracking-tighter select-none">NGF</span>
              </div>
              {/* Leading Courses Partner */}
              <div className="h-6 w-9 bg-slate-900 rounded-sm border border-white/10 relative overflow-hidden flex items-center justify-center shadow-md">
                <span className="text-[7px] font-bold text-emerald-400 select-none">LC</span>
              </div>
              {/* GEO Certified */}
              <div className="h-6 w-9 bg-emerald-700 rounded-sm border border-white/10 relative overflow-hidden flex items-center justify-center shadow-md">
                <span className="text-[6px] font-bold text-white tracking-widest select-none">GEO</span>
              </div>
              {/* PGA */}
              <div className="h-6 w-9 bg-blue-900 rounded-sm border border-white/10 relative overflow-hidden flex items-center justify-center shadow-md">
                <span className="text-[7px] font-bold text-white select-none">PGA</span>
              </div>
            </div>
          </div>

          {/* 
            The beautiful solid-cream/white legal pill exactly like the bottom right of the image! 
            Provides a very distinctive luxury branding note.
          */}
          <div 
            id="legal-bar-pill"
            className="bg-[#fcfbf7] text-slate-900 px-6 py-2.5 rounded-full flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 shadow-xl text-xs font-semibold"
          >
            <a href="#cookies" className="hover:text-emerald-700 transition-colors">Cookies policy</a>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            <a href="#privacy" className="hover:text-emerald-700 transition-colors">Privacy policy</a>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            <span className="text-slate-500">©2026</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
