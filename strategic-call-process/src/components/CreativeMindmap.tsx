/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Award, ShoppingBag, ArrowRight } from 'lucide-react';

interface MindmapNode {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  templates: string[];
  tips: string;
  color: string;
}

export default function CreativeMindmap() {
  const [selectedNode, setSelectedNode] = useState<string>('hook');

  const nodes: MindmapNode[] = [
    {
      id: 'hook',
      label: '1. The Hook (First 3 Seconds)',
      description: 'The visual spark that stops the scroll. Designed for maximum attention retention.',
      icon: <Eye className="w-5 h-5 text-[#F27D26]" />,
      templates: [
        '“X Reasons why this product is viral...”',
        'Visual split-screen: Before vs After',
        'Direct callout: “If you suffer from [X], stop scrolling”'
      ],
      tips: 'Must load within 0.1s. Do not start with a logo animation.',
      color: 'border-white/10 bg-white/5 hover:bg-white/10'
    },
    {
      id: 'body',
      label: '2. The Body (Desire Builder)',
      description: 'Simple benefit-driven explanation without confusing marketer jargon.',
      icon: <Sparkles className="w-5 h-5 text-[#F27D26]" />,
      templates: [
        'Founder story: Why we invented this',
        'Top 3 benefits with big clear icons',
        'Customer quote showing relief of key pain point'
      ],
      tips: 'Highlight the transformation, not just the list of features.',
      color: 'border-white/10 bg-white/5 hover:bg-white/10'
    },
    {
      id: 'social',
      label: '3. Trust Stack (Proof)',
      description: 'Neutralizing skepticism. Proving that real people love the product.',
      icon: <Award className="w-5 h-5 text-[#F27D26]" />,
      templates: [
        'TikTok styled Creator unboxing video',
        'Side-by-side comparison with cheap competitors',
        'As Seen In (Media outlets logo highlight)'
      ],
      tips: 'Raw, unpolished video often outperforms high-budget commercials.',
      color: 'border-white/10 bg-white/5 hover:bg-white/10'
    },
    {
      id: 'cta',
      label: '4. The Close (Seamless Call to Action)',
      description: 'Clear, compelling instruction on what to do next with an active incentive.',
      icon: <ShoppingBag className="w-5 h-5 text-[#F27D26]" />,
      templates: [
        '“Tap below to unlock 15% off your first order”',
        '“Try risk-free with our 30-day empty-bottle guarantee”',
        '“Free shipping ending tonight, claim yours now”'
      ],
      tips: 'Keep the CTA single-focused. Multiple offers kill conversions.',
      color: 'border-white/10 bg-white/5 hover:bg-white/10'
    }
  ];

  const currentNode = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <div id="creative-mindmap-container" className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 shadow-sm">
      <div className="mb-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#F27D26] bg-white/5 px-2 py-1 rounded-full font-medium">
          Jargon-Free Mind-Map
        </span>
        <h4 className="text-lg font-display font-semibold mt-1 text-white">
          How Creative Strategy Deploys On Meta
        </h4>
        <p className="text-xs text-slate-400">
          A modular template built for founders. Hover or click each phase to see exact blueprints and deployable ad assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Visual Map Layout */}
        <div className="md:col-span-7 space-y-3 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-white/10 -z-10 hidden sm:block" />

          {nodes.map((node) => {
            const isActive = selectedNode === node.id;
            return (
              <motion.div
                key={node.id}
                id={`mindmap-node-${node.id}`}
                whileHover={{ x: 6, scale: 1.01 }}
                onClick={() => setSelectedNode(node.id)}
                className={`flex items-start gap-4 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isActive
                    ? 'border-[#F27D26] bg-[#151515] shadow-md ring-2 ring-[#F27D26]/10'
                    : node.color
                }`}
              >
                <div className={`p-2 rounded-lg bg-[#0a0a0a] shadow-sm border ${isActive ? 'border-[#F27D26]/40' : 'border-white/5'}`}>
                  {node.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-semibold text-white flex items-center justify-between">
                    {node.label}
                    {isActive && (
                      <span className="text-[10px] text-[#F27D26] font-mono font-medium flex items-center gap-0.5">
                        Active Blueprint <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </h5>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{node.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Blueprint Details Panel */}
        <div className="md:col-span-5 h-full min-h-[300px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#151515] p-5 rounded-xl border border-white/10 shadow-sm flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10">
                  <div className="p-1.5 rounded-md bg-[#0a0a0a]">
                    {currentNode.icon}
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {currentNode.label.split('. ')[1] || currentNode.label}
                  </h5>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {currentNode.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                    Proven Creative Templates:
                  </span>
                  <ul className="space-y-1.5">
                    {currentNode.templates.map((tpl, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-1.5 shrink-0" />
                        <span>{tpl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 bg-white/5 p-3 rounded-lg">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F27D26] font-bold block">
                  Non-Marketer Pro Tip:
                </span>
                <p className="text-xs text-slate-300 italic mt-1 leading-normal">
                  "{currentNode.tips}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
