import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Edit2, Trash2 } from 'lucide-react';
import { FaqItemType } from '../types';

interface FaqItemProps {
  key?: string;
  id: string;
  item: FaqItemType;
  isExpanded: boolean;
  onToggle: () => void;
  isEditable?: boolean;
  onUpdate?: (updated: Partial<FaqItemType>) => void;
  onDelete?: () => void;
}

export default function FaqItem({
  item,
  isExpanded,
  onToggle,
  isEditable = false,
  onUpdate,
  onDelete,
}: FaqItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-[20px] bg-[#0d0d0d] border border-white/[0.04] transition-all duration-300 ${
        isExpanded 
          ? 'shadow-[0_12px_32px_rgba(0,0,0,0.6)] bg-neutral-900 border-white/[0.1] ring-1 ring-[#C5A059]/20' 
          : 'hover:bg-neutral-900/60 hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] hover:border-white/10'
      }`}
    >
      <div className="p-6 sm:p-7">
        {/* Header/Question Row */}
        <div 
          className="flex items-center justify-between gap-4 cursor-pointer select-none"
          onClick={onToggle}
        >
          {isEditable ? (
            <div className="flex-1" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                value={item.question}
                onChange={(e) => onUpdate?.({ question: e.target.value })}
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-1.5 font-display font-medium text-white text-[15px] sm:text-[16px] focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-transparent transition-all"
                placeholder="Enter question..."
              />
            </div>
          ) : (
            <h3 className="font-display font-light text-white text-[18px] sm:text-[20px] leading-snug flex-1 group-hover:text-[#C5A059] transition-colors">
              {item.question || 'Untitled Question'}
            </h3>
          )}

          {/* Plus/Minus Indicator */}
          <div className="flex items-center gap-2">
            {isEditable && onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="p-1.5 text-neutral-500 hover:text-red-400 rounded-full hover:bg-white/[0.02] transition-colors"
                title="Delete Question"
              >
                <Trash2 size={16} />
              </button>
            )}
            
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isExpanded ? 'bg-[#C5A059] text-black' : 'bg-white/[0.04] text-neutral-400 group-hover:bg-[#C5A059] group-hover:text-black'
              }`}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {isExpanded ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
            </motion.div>
          </div>
        </div>

        {/* Answer Content Row */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1, 
                marginTop: 14,
                transition: {
                  height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                  opacity: { duration: 0.25, ease: 'easeOut', delay: 0.05 }
                }
              }}
              exit={{ 
                height: 0, 
                opacity: 0, 
                marginTop: 0,
                transition: {
                  height: { duration: 0.25, ease: 'easeInOut' },
                  opacity: { duration: 0.15, ease: 'easeIn' }
                }
              }}
              className="overflow-hidden"
            >
              <div className="text-[14px] leading-relaxed text-neutral-400 font-light pr-4">
                {isEditable ? (
                  <textarea
                    value={item.answer}
                    onChange={(e) => onUpdate?.({ answer: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-300 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-transparent transition-all min-h-[80px] resize-y"
                    placeholder="Enter answer details..."
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  item.answer || 'Answer details will be entered here.'
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
