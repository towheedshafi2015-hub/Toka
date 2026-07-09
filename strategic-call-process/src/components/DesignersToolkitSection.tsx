import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark, Sparkles, ExternalLink, HelpCircle, ArrowUpRight, Check } from 'lucide-react';

interface ToolCard {
  id: string;
  number: string;
  name: string;
  description: string;
  url: string;
  pinColor: string; // Tailwind color name or hex
  cardTheme: {
    accent: string;      // main brand color
    border: string;      // subtle border color
    bg: string;          // card light background tint
    glow: string;        // glow shadow on hover
    logoBg: string;      // background color for the logo tile
  };
  logo: React.ReactNode; // High-fidelity brand logo SVG
}

export default function DesignersToolkitSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<ToolCard | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);

  const tools: ToolCard[] = [
    {
      id: 'freepik',
      number: '01',
      name: 'Freepik',
      description: 'Freepik offers free and premium vectors, photos, PSDs, and mockups for graphic designers.',
      url: 'https://freepik.com',
      pinColor: '#2563EB', // Blue
      cardTheme: {
        accent: 'text-blue-600',
        border: 'border-blue-100/80',
        bg: 'bg-blue-50/10',
        glow: 'hover:shadow-blue-500/10 hover:border-blue-300',
        logoBg: 'bg-[#1D4ED8]', // Vibrant brand blue
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <rect width="100" height="100" rx="20" className="fill-[#1D4ED8]" />
          {/* Stylized Freepik F logo */}
          <path d="M30 25h40v12H44v13h22v12H44v13H30z" />
          <rect x="52" y="50" width="14" height="26" rx="3" className="fill-[#38BDF8]" />
        </svg>
      )
    },
    {
      id: 'pinterest',
      number: '02',
      name: 'Pinterest',
      description: 'Pinterest is a visual platform for discovering, saving, and sharing creative ideas.',
      url: 'https://pinterest.com',
      pinColor: '#EF4444', // Red
      cardTheme: {
        accent: 'text-red-600',
        border: 'border-red-100/80',
        bg: 'bg-red-50/10',
        glow: 'hover:shadow-red-500/10 hover:border-red-300',
        logoBg: 'bg-[#BD081C]', // Pinterest Red
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <circle cx="50" cy="50" r="50" className="fill-[#BD081C]" />
          <path d="M50 15c-19.3 0-35 15.7-35 35 0 14.8 9.2 27.5 22.1 32.5-.3-3-.6-7.5.1-10.7.6-2.9 4.1-17.4 4.1-17.4s-1-2-1-5c0-4.7 2.7-8.2 6.1-8.2 2.9 0 4.3 2.2 4.3 4.8 0 2.9-1.9 7.3-2.8 11.3-.8 3.4 1.7 6.2 5.1 6.2 6.1 0 10.8-6.4 10.8-15.7 0-8.2-5.9-13.9-14.3-13.9-9.7 0-15.4 7.3-15.4 14.8 0 2.9 1.1 6.1 2.5 7.8.3.3.3.6.2.9-.3 1.1-.9 3.5-1 4.1-.2.8-.6 1.1-1.4.7-5.3-2.5-8.6-10.2-8.6-16.4 0-13.3 9.7-25.6 27.9-25.6 14.6 0 26 10.4 26 24.4 0 14.5-9.2 26.2-21.9 26.2-4.3 0-8.3-2.2-9.7-4.8 0 0-2.1 8.1-2.6 10.1-.9 3.6-3.5 8.1-5.2 10.9 3.3 1 6.7 1.5 10.3 1.5 19.3 0 35-15.7 35-35s-15.7-35-35-35z" />
        </svg>
      )
    },
    {
      id: 'envato',
      number: '03',
      name: 'Envato',
      description: 'Envato is a marketplace for premium design assets like templates, graphics, videos, and more.',
      url: 'https://envato.com',
      pinColor: '#10B981', // Green
      cardTheme: {
        accent: 'text-[#81B441]',
        border: 'border-green-100/80',
        bg: 'bg-green-50/10',
        glow: 'hover:shadow-green-500/10 hover:border-green-300',
        logoBg: 'bg-[#81B441]', // Envato green
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <rect width="100" height="100" rx="20" className="fill-[#81B441]" />
          {/* Stylized Envato Leaf Logo */}
          <path d="M70 25c-5 0-14 3-21 10-6 6-12 15-14 23-1 4-1 9 1 12 3 5 8 8 13 8 9 0 19-5 24-12 5-7 6-17 5-25-1-6-4-11-8-14-1-1 0-2 0-2zm-28 47c-4 0-7-2-8-5-2-4-2-8-1-12 2-6 7-13 12-18 2-2 4-4 6-5-1 3-2 7-2 10 0 7 3 14 7 19 2 2 4 4 6 5-4 4-9 6-14 6z" />
        </svg>
      )
    },
    {
      id: 'dribbble',
      number: '04',
      name: 'Dribbble',
      description: 'Dribbble is a platform for showcasing, discovering, and connecting with creative design work.',
      url: 'https://dribbble.com',
      pinColor: '#EC4899', // Pink
      cardTheme: {
        accent: 'text-pink-600',
        border: 'border-pink-100/80',
        bg: 'bg-pink-50/10',
        glow: 'hover:shadow-pink-500/10 hover:border-pink-300',
        logoBg: 'bg-[#EA4C89]', // Dribbble Pink
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <rect width="100" height="100" rx="20" className="fill-[#EA4C89]" />
          {/* Basketball design */}
          <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="4" fill="none" />
          <path d="M30 30c8 8 12 22 8 36M62 30c-8 8-12 22-8 36M22 50h56" stroke="white" strokeWidth="4" fill="none" />
        </svg>
      )
    },
    {
      id: 'flaticon',
      number: '05',
      name: 'Flaticon',
      description: 'Freepik offers free and premium vectors, photos, PSDs, and mockups for graphic designers.', // Replicated exactly as in the visual reference's easter egg
      url: 'https://flaticon.com',
      pinColor: '#06B6D4', // Teal
      cardTheme: {
        accent: 'text-teal-600',
        border: 'border-teal-100/80',
        bg: 'bg-teal-50/10',
        glow: 'hover:shadow-teal-500/10 hover:border-teal-300',
        logoBg: 'bg-[#00D1B2]', // Flaticon turquoise
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <rect width="100" height="100" rx="20" className="fill-[#00D1B2]" />
          {/* Geometric logo design from reference */}
          <path d="M25 25h30v20H25zM45 45h30v30H45z" className="opacity-90" />
          <path d="M25 45h20v30H25z" className="opacity-50" />
        </svg>
      )
    },
    {
      id: 'mockupworld',
      number: '06',
      name: 'Mockup World',
      description: 'Mockup World offers free, high-quality PSD mockups for showcasing designs in realistic settings.',
      url: 'https://mockupworld.co',
      pinColor: '#0EA5E9', // Cyan
      cardTheme: {
        accent: 'text-sky-600',
        border: 'border-sky-100/80',
        bg: 'bg-sky-50/10',
        glow: 'hover:shadow-sky-500/10 hover:border-sky-300',
        logoBg: 'bg-[#18A0FB]', // Mockup World Cyan
      },
      logo: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <rect width="100" height="100" rx="20" className="fill-[#18A0FB]" />
          {/* MW Stylized monogram wave */}
          <path d="M25 65l12-30 13 18 13-18 12 30" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    }
  ];

  const handleBookmarkToggle = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div id="designers-toolkit-section" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 relative overflow-visible">
      
      {/* Visual background wrapper to simulate the grid notebook paper */}
      <div className="relative bg-[#fafafc] rounded-[32px] p-6 sm:p-12 border border-slate-200/80 shadow-2xl text-slate-800 overflow-hidden select-none">
        
        {/* Subtle grid pattern background overlay */}
        <div 
          className="absolute inset-0 opacity-[0.22] pointer-events-none" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #94a3b8 1px, transparent 1px),
              linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px'
          }}
        />

        {/* Marginal colored binder line - standard pinkish left notebook boundary */}
        <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-red-200/60 pointer-events-none hidden sm:block" />

        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-dashed border-slate-300/80 pb-6 relative z-10">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-wider text-slate-400 block uppercase">
              @ankit.got.glitched
            </span>
            <div className="flex items-center mt-2 flex-wrap">
              <span className="font-serif italic text-5xl sm:text-7xl text-slate-800 tracking-tight leading-none mr-3 font-medium select-none">
                Best
              </span>
              <div className="flex flex-col">
                <span className="font-sans font-black text-2xl sm:text-3xl text-[#1D4ED8] tracking-tight uppercase leading-none">
                  Designer's Toolkit
                </span>
                <span className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  Sites You Can't Ignore
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-0 bg-white/80 backdrop-blur-sm border border-slate-200 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600">
              Interactive Design Blueprint
            </span>
          </div>
        </div>

        {/* Interactive Responsive Staggered Layout for Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 min-h-[620px] pt-8">
          
          {/* SVG Connector Dashed Lines Behind Cards (Desktop-only for crisp visual accuracy) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block opacity-60">
            {/* Smooth curvy connecting line 01 -> 02 -> 03 */}
            <path 
              d="M 160,150 Q 320,380 480,240 T 800,160" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2.5" 
              strokeDasharray="8,8" 
              className="transition-all duration-500"
            />
            {/* Connecting line 04 -> 05 -> 06 */}
            <path 
              d="M 160,460 Q 320,320 480,480 T 800,440" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2.5" 
              strokeDasharray="8,8" 
              className="transition-all duration-500"
            />
            {/* Zigzag diagonal link */}
            <path 
              d="M 480,240 Q 380,350 480,480" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="1.5" 
              strokeDasharray="4,6" 
              className="opacity-50"
            />
          </svg>

          {tools.map((tool, index) => {
            const isHovered = hoveredCard === tool.id;
            
            // Stagger offsets perfectly match the organic, physical visual board aesthetic!
            // Row 1: card 1 is high, card 2 is lower, card 3 is high
            // Row 2: card 4 is lower, card 5 is slightly higher, card 6 is lower
            let staggerClass = '';
            if (index === 0) staggerClass = 'md:-translate-y-4';
            if (index === 1) staggerClass = 'md:translate-y-8';
            if (index === 2) staggerClass = 'md:-translate-y-4';
            if (index === 3) staggerClass = 'md:translate-y-6';
            if (index === 4) staggerClass = 'md:-translate-y-2';
            if (index === 5) staggerClass = 'md:translate-y-6';

            return (
              <motion.div
                key={tool.id}
                onMouseEnter={() => setHoveredCard(tool.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(tool)}
                className={`group relative bg-white border ${tool.cardTheme.border} ${tool.cardTheme.bg} rounded-[28px] p-6 shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer ${staggerClass} ${tool.cardTheme.glow} z-10`}
                whileHover={{ 
                  y: index % 2 === 0 ? -12 : 12, 
                  scale: 1.025,
                  boxShadow: '0 20px 35px -10px rgba(0,0,0,0.06), 0 10px 15px -5px rgba(0,0,0,0.02)'
                }}
                layout
              >
                {/* Glossy 3D Physical Pushpin */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none select-none">
                  {/* Pin Head shadow cast */}
                  <div className="absolute top-6 left-1.5 w-6 h-3 bg-black/15 blur-[2px] rounded-full transform -rotate-12" />
                  
                  {/* Shiny colored pin bead */}
                  <div 
                    className="w-6 h-6 rounded-full relative shadow-sm flex items-center justify-center"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${tool.pinColor} 55%, #1e293b 100%)`
                    }}
                  >
                    {/* Gloss highlight arc */}
                    <div className="absolute top-1 left-1.5 w-2 h-1.5 bg-white/60 rounded-full" />
                  </div>
                  
                  {/* Small silver metal needle/shaft */}
                  <div className="w-1 h-3.5 bg-gradient-to-r from-slate-400 to-slate-200 mx-auto -mt-0.5 shadow-sm transform rotate-6" />
                </div>

                {/* Card Interior Top Header */}
                <div className="flex items-center justify-between mb-4 mt-2">
                  <span className={`text-3xl font-display font-extrabold tracking-tight ${tool.cardTheme.accent}`}>
                    {tool.number}
                  </span>
                  
                  {/* Brand Logo Tile */}
                  <div className="w-12 h-12 rounded-[14px] overflow-hidden shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                    {tool.logo}
                  </div>
                </div>

                {/* Card Main content */}
                <div className="flex-1">
                  <h4 className="text-lg font-sans font-bold text-slate-950 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-3">
                    {tool.description}
                  </p>
                </div>

                {/* Interactive Card Action Footer */}
                <div className="mt-5 pt-3 border-t border-dashed border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="font-semibold uppercase tracking-wider group-hover:text-slate-600">
                    Explore Asset
                  </span>
                  <span className="flex items-center gap-0.5 text-blue-500 font-bold group-hover:translate-x-1 transition-transform">
                    View Site &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Section Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-dashed border-slate-300/80 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10 text-[10px] font-mono text-slate-400 tracking-wider">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 font-bold text-center sm:text-left">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              GRADIENT COMBINATIONS
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span>2025 AUGUST</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-500">CREATED BY ANKIT</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive bookmark tool */}
            <button
              onClick={handleBookmarkToggle}
              id="bookmark-toolkit-btn"
              className={`p-2.5 rounded-full border transition-all flex items-center gap-1.5 shadow-sm cursor-pointer ${
                bookmarked 
                  ? 'bg-amber-500 border-amber-600 text-white' 
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-600'
              }`}
              title="Save to bookmarks"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-normal">
                {bookmarked ? 'Saved!' : 'Bookmark Sheet'}
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* curate details modal */}
      <AnimatePresence>
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden p-6 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow">
                    {selectedCard.logo}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                      Site {selectedCard.number}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {selectedCard.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 my-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedCard.description}
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Category:</span>
                    <strong className="text-slate-700">Digital Assets & Inspiration</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Authenticity Score:</span>
                    <strong className="text-emerald-600 flex items-center gap-1">
                      100% Verified
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Interactive Status:</span>
                    <strong className="text-blue-600">Active</strong>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="flex-1 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition-all"
                >
                  Close Blueprint
                </button>
                <a
                  href={selectedCard.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-[#1D4ED8] hover:bg-blue-700 text-white rounded-2xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/15"
                >
                  Visit Official Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Save Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-2.5"
          >
            <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-xs font-semibold">
              Designer's Toolkit saved to your favorites draft!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
