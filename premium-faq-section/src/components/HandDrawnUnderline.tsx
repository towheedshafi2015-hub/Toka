import { motion } from 'motion/react';

interface HandDrawnUnderlineProps {
  color?: string;
}

export default function HandDrawnUnderline({ color = '#ff60b5' }: HandDrawnUnderlineProps) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">questions</span>
      <svg
        className="absolute -bottom-1.5 left-0 w-full h-3 overflow-visible pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        {/* Main highlight stroke */}
        <motion.path
          d="M 2,6 Q 35,9 70,5 T 98,3"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Subtle dual-stroke return to make it look authentic */}
        <motion.path
          d="M 94,4 C 70,6 40,7 10,6"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.1 }}
        />
      </svg>
    </span>
  );
}
