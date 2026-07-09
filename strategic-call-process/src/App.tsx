/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  MessageSquare, 
  PhoneCall, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Play, 
  Users,
  Activity,
  ChevronDown
} from 'lucide-react';
import { BrandDiagnosisInput } from './types';
import ProcessSection from './components/ProcessSection';
import BookingModal from './components/BookingModal';

export default function App() {
  const [diagnosis, setDiagnosis] = useState<BrandDiagnosisInput>({
    brandName: '',
    websiteUrl: '',
    monthlyAdSpend: '$5k - $20k',
    primaryBottleneck: 'creative',
    biggestWin: 'Strong organic product-market fit'
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleDiagnosisUpdate = (data: BrandDiagnosisInput) => {
    setDiagnosis(data);
  };

  const handleBookCallClick = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 antialiased flex flex-col relative font-sans">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#151515]/40 to-transparent -z-20 pointer-events-none" />
      <div className="absolute top-[300px] right-0 w-[400px] h-[400px] bg-[#F27D26]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[800px] left-0 w-[400px] h-[400px] bg-white/2 rounded-full blur-3xl -z-10 pointer-events-none" />



      {/* Main Container */}
      <main className="flex-1 py-12">
        
        {/* 
          CORE PROCESS SECTION
          The section container has a transparent background to blend in with our beautiful dark gradient background.
        */}
        <section className="bg-transparent py-4 relative">
          <ProcessSection 
            diagnosis={diagnosis} 
            onBookCallClick={handleBookCallClick} 
          />
        </section>



      </main>

      {/* Booking Scheduler Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        diagnosis={diagnosis}
      />

    </div>
  );
}
