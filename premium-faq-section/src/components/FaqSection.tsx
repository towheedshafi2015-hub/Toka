import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sliders, HelpCircle, AlertCircle, Eye, Columns, Code } from 'lucide-react';
import { FaqSectionConfig, FaqItemType } from '../types';
import FaqItem from './FaqItem';
import HandDrawnUnderline from './HandDrawnUnderline';

interface FaqSectionProps {
  config: FaqSectionConfig;
  onUpdateConfig: (newConfig: FaqSectionConfig) => void;
  isEditable: boolean;
  onToggleEditable: () => void;
  onOpenEditor: () => void;
  isFramed: boolean;
  onToggleFramed: () => void;
}

export default function FaqSection({
  config,
  onUpdateConfig,
  isEditable,
  onToggleEditable,
  onOpenEditor,
  isFramed,
  onToggleFramed,
}: FaqSectionProps) {
  // Track expanded state for all items
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  // Initialize expanded states from the config or defaults on mount
  useEffect(() => {
    const initialExpanded: Record<string, boolean> = {};
    
    // By default, match the reference mockup exactly:
    // Expand the first item of each column
    if (config.column1.length > 0) {
      initialExpanded[config.column1[0].id] = true;
    }
    if (config.column2.length > 0) {
      initialExpanded[config.column2[0].id] = true;
    }
    
    setExpandedIds(initialExpanded);
  }, [config.column1[0]?.id, config.column2[0]?.id]);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleUpdateItem = (column: 'column1' | 'column2', id: string, updated: Partial<FaqItemType>) => {
    const updatedList = config[column].map((item) => {
      if (item.id === id) {
        return { ...item, ...updated };
      }
      return item;
    });
    onUpdateConfig({ ...config, [column]: updatedList });
  };

  const handleDeleteItem = (column: 'column1' | 'column2', id: string) => {
    const updatedList = config[column].filter((item) => item.id !== id);
    onUpdateConfig({ ...config, [column]: updatedList });
  };

  return (
    <div className="w-full">
      {/* Mini control utility bar for the showcase */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-neutral-950 text-slate-100 px-5 py-3 rounded-2xl border border-white/[0.06] shadow-xl text-xs font-medium">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#C5A059]">
            <Sparkles size={14} className="animate-pulse" />
            <span className="font-semibold uppercase tracking-widest text-[10px]">Showcase Controller</span>
          </div>
          <span className="h-4 w-px bg-white/[0.08]" />
          <p className="text-neutral-400 hidden sm:inline-block font-light">
            Interact to preview and customize the $10,000 layout
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Framed vs Full Width Toggle */}
          <button
            onClick={onToggleFramed}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all border ${
              isFramed 
                ? 'bg-white/5 text-white border-white/10' 
                : 'bg-transparent text-neutral-400 border-transparent hover:text-white/80'
            }`}
            title="Toggle between framed showcase and full-width embedding"
          >
            <Columns size={13} />
            <span>{isFramed ? 'Framed Mockup' : 'Inline Block'}</span>
          </button>

          {/* Inline Edit Toggle */}
          <button
            onClick={onToggleEditable}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all border ${
              isEditable 
                ? 'bg-amber-500/10 text-[#C5A059] border-[#C5A059]/30' 
                : 'bg-transparent text-neutral-400 border-transparent hover:text-white/80'
            }`}
          >
            <Eye size={13} />
            <span>{isEditable ? 'Interactive Lock' : 'Click-to-Edit'}</span>
          </button>

          {/* Open Settings Side Panel */}
          <button
            onClick={onOpenEditor}
            className="bg-[#C5A059] hover:bg-[#b28e4a] text-black font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-md"
          >
            <Sliders size={13} />
            <span>Customize Schema</span>
          </button>
        </div>
      </div>

      {/* Main FAQ Outer Presentation Area */}
      <div 
        className={`transition-all duration-500 ${
          isFramed 
            ? 'bg-[#0f0f0f] py-16 px-4 sm:px-8 md:px-12 rounded-[40px] shadow-2xl border border-white/[0.04]' 
            : 'bg-transparent py-6 px-0'
        }`}
      >
        {/* The high-fidelity FAQ card Container */}
        <div 
          className={`bg-[#080808] mx-auto transition-all duration-500 ${
            isFramed 
              ? 'max-w-6xl rounded-[32px] shadow-[0_32px_100px_rgba(0,0,0,0.8)] p-8 sm:p-12 md:p-16 border border-white/[0.05]' 
              : 'w-full max-w-6xl p-6 sm:p-10 md:p-14 rounded-3xl border border-white/[0.04] shadow-md'
          }`}
        >
          {/* Badge & Header Info */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <motion.div 
              layoutId="faq-badge"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/[0.06] shadow-lg text-xs font-semibold text-neutral-300 tracking-wide mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
              {config.badge}
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-[56px] font-light text-white tracking-wide leading-tight mb-5 max-w-3xl">
              {/* If "questions" is in the title, substitute with our hand-drawn highlighted underline component */}
              {config.title.toLowerCase().includes('questions') ? (
                <>
                  {config.title.split(/questions/i)[0]}
                  <HandDrawnUnderline color={config.badgeColor} />
                  {config.title.split(/questions/i)[1]}
                </>
              ) : (
                config.title
              )}
            </h2>

            <p className="text-neutral-400 text-sm sm:text-[15px] max-w-[460px] font-light leading-relaxed">
              {config.subtitle}
            </p>
          </div>

          {/* Live Editable indicator bar inside section when editable */}
          <AnimatePresence>
            {isEditable && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-8 p-3.5 bg-amber-950/20 border border-[#C5A059]/30 rounded-xl text-[#C5A059] text-xs flex items-center gap-2.5 max-w-xl mx-auto"
              >
                <AlertCircle size={15} className="text-[#C5A059] shrink-0" />
                <p>
                  <strong>Developer Mode Active:</strong> You can edit the titles and accordion texts in-place. Toggle <span className="underline cursor-pointer font-semibold" onClick={onToggleEditable}>Interactive Lock</span> to test user click animations.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Double Column Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {config.column1.map((item) => (
                  <FaqItem
                    key={item.id}
                    id={item.id}
                    item={item}
                    isExpanded={!!expandedIds[item.id]}
                    onToggle={() => toggleItem(item.id)}
                    isEditable={isEditable}
                    onUpdate={(updated) => handleUpdateItem('column1', item.id, updated)}
                    onDelete={() => handleDeleteItem('column1', item.id)}
                  />
                ))}
              </AnimatePresence>
              
              {isEditable && (
                <button
                  onClick={() => {
                    const newItem = {
                      id: crypto.randomUUID(),
                      question: 'New Left Column Question?',
                      answer: 'Provide clear instructions or information for this question.'
                    };
                    onUpdateConfig({
                      ...config,
                      column1: [...config.column1, newItem]
                    });
                  }}
                  className="w-full py-4 border border-dashed border-white/10 hover:border-[#C5A059]/30 hover:bg-white/[0.02] rounded-[20px] text-xs font-semibold text-neutral-500 hover:text-neutral-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  + Add Item to Left Column
                </button>
              )}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {config.column2.map((item) => (
                  <FaqItem
                    key={item.id}
                    id={item.id}
                    item={item}
                    isExpanded={!!expandedIds[item.id]}
                    onToggle={() => toggleItem(item.id)}
                    isEditable={isEditable}
                    onUpdate={(updated) => handleUpdateItem('column2', item.id, updated)}
                    onDelete={() => handleDeleteItem('column2', item.id)}
                  />
                ))}
              </AnimatePresence>

              {isEditable && (
                <button
                  onClick={() => {
                    const newItem = {
                      id: crypto.randomUUID(),
                      question: 'New Right Column Question?',
                      answer: 'Provide clear instructions or information for this question.'
                    };
                    onUpdateConfig({
                      ...config,
                      column2: [...config.column2, newItem]
                    });
                  }}
                  className="w-full py-4 border border-dashed border-white/10 hover:border-[#C5A059]/30 hover:bg-white/[0.02] rounded-[20px] text-xs font-semibold text-neutral-500 hover:text-neutral-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  + Add Item to Right Column
                </button>
              )}
            </div>

          </div>

          {/* Quick-add guidelines or contact button at the footer */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] text-center text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 text-neutral-400 font-light">
              <HelpCircle size={14} className="text-neutral-500" />
              <span>Still have technical queries or require direct architectural guidance?</span>
            </div>
            <button className="px-5 py-2 rounded-full border border-white/10 hover:border-[#C5A059]/40 hover:bg-white/5 text-neutral-300 font-medium transition-all cursor-pointer">
              Request a Consultation
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
