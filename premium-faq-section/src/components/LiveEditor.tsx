import { useState } from 'react';
import { 
  X, Sparkles, Copy, Check, RotateCcw, Plus, ArrowLeftRight, Settings, Code, FileJson 
} from 'lucide-react';
import { FaqSectionConfig, FaqItemType } from '../types';

interface LiveEditorProps {
  config: FaqSectionConfig;
  onChange: (newConfig: FaqSectionConfig) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveEditor({
  config,
  onChange,
  onReset,
  isOpen,
  onClose,
}: LiveEditorProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'export'>('content');
  const [copied, setCopied] = useState<string | null>(null);

  const updateField = (field: keyof FaqSectionConfig, value: any) => {
    onChange({ ...config, [field]: value });
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const addItem = (column: 'column1' | 'column2') => {
    const newItem: FaqItemType = {
      id: crypto.randomUUID(),
      question: 'New custom question?',
      answer: 'This is a custom answer. You can edit this directly inside the preview or here in the editor panel.',
    };
    updateField(column, [...config[column], newItem]);
  };

  const deleteItem = (column: 'column1' | 'column2', id: string) => {
    updateField(
      column,
      config[column].filter((item) => item.id !== id)
    );
  };

  const moveItem = (id: string, fromCol: 'column1' | 'column2', toCol: 'column1' | 'column2') => {
    const itemToMove = config[fromCol].find((i) => i.id === id);
    if (!itemToMove) return;

    const filteredFrom = config[fromCol].filter((i) => i.id !== id);
    const updatedTo = [...config[toCol], itemToMove];

    onChange({
      ...config,
      [fromCol]: filteredFrom,
      [toCol]: updatedTo,
    });
  };

  // Generate dynamic React code to export
  const getReactCode = () => {
    return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

// Highly polished, production-ready $10,000 FAQ component
// Generated via Premium FAQ Architect with Sophisticated Dark theme

interface FaqItemType {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>('${config.column1[0]?.id || null}');

  const column1 = ${JSON.stringify(config.column1, null, 2)};
  const column2 = ${JSON.stringify(config.column2, null, 2)};

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-[#080808] text-neutral-300 py-24 px-4 sm:px-6 lg:px-8 font-sans selection:bg-amber-950/40 selection:text-[#C5A059]">
      <div className="max-w-6xl mx-auto bg-[#080808]/90 rounded-[32px] shadow-[0_32px_100px_rgba(0,0,0,0.8)] p-8 sm:p-12 md:p-16 border border-white/[0.05]">
        
        {/* Badge & Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/[0.06] shadow-lg text-xs font-semibold text-neutral-300 tracking-wide mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
            ${config.badge}
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[56px] font-light text-white tracking-wide leading-tight mb-5 max-w-3xl">
            ${config.title.replace('questions', `<span className="relative inline-block whitespace-nowrap"><span className="relative z-10">questions</span><svg className="absolute -bottom-1.5 left-0 w-full h-3 overflow-visible pointer-events-none" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M 2,6 Q 35,9 70,5 T 98,3" fill="none" stroke="${config.badgeColor}" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M 94,4 C 70,6 40,7 10,6" fill="none" stroke="${config.badgeColor}" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>`)}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-[15px] max-w-[460px] font-light leading-relaxed">
            \${config.subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1 */}
          <div className="space-y-4">
            {column1.map((item) => (
              <FaqCard key={item.id} item={item} isExpanded={expandedId === item.id} onToggle={() => toggleExpand(item.id)} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {column2.map((item) => (
              <FaqCard key={item.id} item={item} isExpanded={expandedId === item.id} onToggle={() => toggleExpand(item.id)} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function FaqCard({ item, isExpanded, onToggle }: { item: FaqItemType; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div
      className={\`overflow-hidden rounded-[20px] bg-[#0d0d0d] border border-white/[0.04] transition-all duration-300 \${
        isExpanded ? 'shadow-[0_12px_32px_rgba(0,0,0,0.6)] bg-neutral-900 border-white/[0.1] ring-1 ring-[#C5A059]/20' : 'hover:bg-neutral-900/60 hover:border-white/10'
      }\`}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 cursor-pointer select-none" onClick={onToggle}>
          <h3 className="font-serif font-light text-white text-[18px] sm:text-[20px] leading-snug flex-1 group-hover:text-[#C5A059] transition-colors">
            {item.question}
          </h3>
          <div className={\`w-10 h-10 rounded-full flex items-center justify-center transition-all \${
            isExpanded ? 'bg-[#C5A059] text-black' : 'bg-white/[0.04] text-neutral-400 group-hover:bg-[#C5A059] group-hover:text-black'
          }\`}>
            {isExpanded ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden text-sm leading-relaxed text-neutral-400 font-light pr-4"
            >
              {item.answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[480px] bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 z-50 flex flex-col shadow-2xl overflow-hidden text-slate-100">
      
      {/* Header */}
      <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
        <div className="flex items-center gap-2">
          <Settings size={18} className="text-rose-400 animate-spin" style={{ animationDuration: '6s' }} />
          <h3 className="font-display font-semibold text-white tracking-tight">FAQ Schema Architect</h3>
        </div>
        <button 
          onClick={onClose}
          className="p-1.5 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 text-xs bg-slate-950/35">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 py-3 px-4 font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'content' 
              ? 'text-rose-400 border-b-2 border-rose-500 bg-slate-900/50' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles size={14} />
          Visual Builder
        </button>
        <button
          onClick={() => setActiveTab('export')}
          className={`flex-1 py-3 px-4 font-medium flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'export' 
              ? 'text-rose-400 border-b-2 border-rose-500 bg-slate-900/50' 
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code size={14} />
          Export Component Code
        </button>
      </div>

      {/* Main Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {activeTab === 'content' ? (
          <>
            {/* Header Content Section */}
            <div className="space-y-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Header Styling</span>
                <button
                  onClick={onReset}
                  className="text-xs text-slate-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
                  title="Reset to default design"
                >
                  <RotateCcw size={12} />
                  Restore Mock Defaults
                </button>
              </div>

              {/* Badge Text */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={config.badge}
                  onChange={(e) => updateField('badge', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>

              {/* Badge Color Underline */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Highlighter Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={config.badgeColor}
                    onChange={(e) => updateField('badgeColor', e.target.value)}
                    className="w-8 h-8 rounded border-0 cursor-pointer bg-transparent"
                  />
                  <span className="text-xs font-mono text-slate-400 uppercase">{config.badgeColor}</span>
                </div>
              </div>

              {/* Title Text */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Section Title</label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) => updateField('title', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>

              {/* Subtitle Text */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Section Subtitle</label>
                <textarea
                  value={config.subtitle}
                  onChange={(e) => updateField('subtitle', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rose-500 h-16 resize-none"
                />
              </div>
            </div>

            {/* Column Questions Manager */}
            {['column1', 'column2'].map((colKey) => {
              const column = colKey as 'column1' | 'column2';
              const label = column === 'column1' ? 'Left Column' : 'Right Column';
              const targetCol = column === 'column1' ? 'column2' : 'column1';

              return (
                <div key={column} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-200">{label} ({config[column].length})</h4>
                    <button
                      onClick={() => addItem(column)}
                      className="text-xs font-medium bg-rose-500 hover:bg-rose-600 text-white px-2.5 py-1 rounded-md flex items-center gap-1 transition-all shadow-sm"
                    >
                      <Plus size={12} />
                      Add FAQ
                    </button>
                  </div>

                  <div className="space-y-2">
                    {config[column].length === 0 ? (
                      <p className="text-xs text-slate-500 italic p-4 bg-slate-950/20 rounded-lg text-center">No questions in this column.</p>
                    ) : (
                      config[column].map((item, index) => (
                        <div key={item.id} className="bg-slate-950/30 border border-slate-800/80 p-3 rounded-lg space-y-2 hover:border-slate-700/60 transition-colors">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-mono text-slate-400">#{index + 1}</span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => moveItem(item.id, column, targetCol)}
                                className="p-1 hover:bg-slate-800 text-slate-400 hover:text-rose-400 rounded transition-colors"
                                title={`Move to ${column === 'column1' ? 'Right' : 'Left'} Column`}
                              >
                                <ArrowLeftRight size={12} />
                              </button>
                              <button
                                onClick={() => deleteItem(column, item.id)}
                                className="p-1 hover:bg-slate-800 text-slate-400 hover:text-red-400 rounded transition-colors"
                                title="Delete question"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-white truncate">{item.question || 'Empty question'}</div>
                          <p className="text-slate-400 text-[11px] truncate">{item.answer || 'No answer entered'}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="space-y-5">
            {/* JSON Code Copy */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <FileJson size={14} className="text-yellow-500" />
                  JSON Layout Schema
                </span>
                <button
                  onClick={() => handleCopy(JSON.stringify(config, null, 2), 'json')}
                  className="text-xs hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1 transition-colors"
                >
                  {copied === 'json' ? (
                    <>
                      <Check size={12} className="text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy JSON
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] font-mono bg-slate-950 p-4 rounded-xl max-h-[160px] overflow-auto text-slate-300 border border-slate-800/60 leading-normal">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>

            {/* React Component Code Copy */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <Code size={14} className="text-rose-400" />
                  Production Ready React Code
                </span>
                <button
                  onClick={() => handleCopy(getReactCode(), 'react')}
                  className="text-xs hover:bg-slate-800 text-slate-300 hover:text-white px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1 transition-colors"
                >
                  {copied === 'react' ? (
                    <>
                      <Check size={12} className="text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <pre className="text-[10px] font-mono bg-slate-950 p-4 rounded-xl max-h-[280px] overflow-auto text-slate-300 border border-slate-800/60 leading-normal select-all">
                {getReactCode()}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Footer Instructions */}
      <div className="p-4 border-t border-slate-800 bg-slate-950 text-center text-slate-400 text-[11px] font-light">
        Custom design is synchronized. Add questions dynamically!
      </div>
    </div>
  );
}
