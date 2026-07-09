/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TestimonialSlider from './components/TestimonialSlider';
import GlassFooter from './components/GlassFooter';
import TeeTimeModal from './components/TeeTimeModal';
import { Sparkles, Code, Check } from 'lucide-react';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'booking' | 'membership'>('booking');
  const [modalTitle, setModalTitle] = useState('');
  const [copied, setCopied] = useState(false);

  const openModal = (type: 'booking' | 'membership', title: string) => {
    setModalType(type);
    setModalTitle(title);
    setModalOpen(true);
  };

  const copyCodeToClipboard = () => {
    const importCode = `// Import into your layout file (e.g., App.tsx or Layout.tsx)
import TestimonialSlider from './components/TestimonialSlider';
import GlassFooter from './components/GlassFooter';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Your main content goes here */}
      <main className="pb-24">...</main>

      {/* Fully Modular Glassmorphism Footer */}
      <TestimonialSlider />
      <GlassFooter 
        onOpenBooking={() => openModal('booking', 'Reserveer een Starttijd')}
        onOpenMembership={() => openModal('membership', 'Direct Lid Worden')}
      />
    </div>
  );
}`;
    navigator.clipboard.writeText(importCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-slate-950"
      id="app-container"
    >
      {/* TOP: Highly Polished Showcase Control Center */}
      <header className="w-full max-w-7xl mx-auto px-4 pt-8 pb-4 relative z-10" id="showcase-header">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Pure Component View
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white font-sans tracking-tight">
              Leeuwarder Golfclub Footer Component
            </h1>
            <p className="text-xs text-white/60 max-w-2xl font-sans">
              This component is strictly modular and features <strong>100% transparent liquid-glassmorphism</strong>. 
              The background has been removed as requested, providing a clean blank background for easy integration.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            {/* Copy Component Code */}
            <button 
              id="btn-copy-code"
              onClick={copyCodeToClipboard}
              className="bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/10 rounded-xl px-4 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all duration-300 active:scale-95 shadow-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Code Copied!
                </>
              ) : (
                <>
                  <Code className="w-3.5 h-3.5 text-emerald-400" />
                  Copy Layout Snippet
                </>
              )}
            </button>
          </div>
        </motion.div>
      </header>

      {/* MIDDLE & BOTTOM: The Requested Sections (Testimonial Slider + Footer Card) */}
      <main className="w-full flex-grow flex flex-col justify-end relative z-10" id="main-content-section">
        
        {/* Section 1: Testimonials Auto-Scroller Row (Trustpilot inspired vibe) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full"
        >
          <TestimonialSlider />
        </motion.div>

        {/* Section 2: Transparent Curved Liquid Glass Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <GlassFooter 
            onOpenBooking={() => openModal('booking', 'Reserveer een Starttijd (Tee Time)')}
            onOpenMembership={() => openModal('membership', 'Direct Lid Worden')}
          />
        </motion.div>

      </main>

      {/* Interactive Glassmorphism Booking Modal */}
      <AnimatePresence>
        {modalOpen && (
          <TeeTimeModal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            title={modalTitle}
            type={modalType}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
