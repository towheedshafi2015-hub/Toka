/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, ChevronRight, Check, CheckCircle2, User, Mail, Sparkles, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { BrandDiagnosisInput, TimeSlot } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  diagnosis: BrandDiagnosisInput;
}

export default function BookingModal({ isOpen, onClose, diagnosis }: BookingModalProps) {
  const [step, setStep] = useState<number>(1); // 1: Date/Time, 2: Details, 3: Success Confirmation
  const [selectedDate, setSelectedDate] = useState<string>('Thursday, July 9');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [customMsg, setCustomMsg] = useState<string>('');

  const dates = [
    { label: 'Thursday, July 9', status: 'Available' },
    { label: 'Friday, July 10', status: 'Few slots left' },
    { label: 'Monday, July 13', status: 'Available' }
  ];

  const times: TimeSlot[] = [
    { id: 't1', time: '09:00 AM', date: 'Thursday, July 9', available: true },
    { id: 't2', time: '10:30 AM', date: 'Thursday, July 9', available: true },
    { id: 't3', time: '01:00 PM', date: 'Thursday, July 9', available: false },
    { id: 't4', time: '02:30 PM', date: 'Thursday, July 9', available: true },
    { id: 't5', time: '04:00 PM', date: 'Thursday, July 9', available: true },
    { id: 't6', time: '11:00 AM', date: 'Friday, July 10', available: true },
    { id: 't7', time: '03:00 PM', date: 'Friday, July 10', available: true }
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const getFilteredTimes = () => {
    return times.filter(t => t.date === selectedDate);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-[#151515] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-white/10 z-10 relative flex flex-col md:flex-row min-h-[480px]"
          >
            {/* Sidebar Context */}
            <div className="md:w-5/12 bg-[#0a0a0a] text-white p-6 flex flex-col justify-between relative overflow-hidden shrink-0 border-r border-white/10">
              {/* Backglow decor */}
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#F27D26]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#F27D26] font-bold block mb-1">
                  Private Session
                </span>
                <h4 className="text-xl font-display font-extrabold tracking-tight">
                  1-on-1 Growth Analysis Call
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We review your exact funnel bottlenecks and provide a completely customized 2-month execution blueprint.
                </p>
              </div>

              <div className="space-y-3 my-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#F27D26] shrink-0 font-mono font-bold text-[10px]">
                    1
                  </span>
                  <span>Situation Mapping</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#F27D26] shrink-0 font-mono font-bold text-[10px]">
                    2
                  </span>
                  <span>Performance Diagnosis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#F27D26] shrink-0 font-mono font-bold text-[10px]">
                    3
                  </span>
                  <span>Non-Marketer Strategy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#F27D26]">
                  <span className="w-5 h-5 rounded-full bg-[#F27D26]/20 flex items-center justify-center text-[#F27D26] shrink-0 font-mono font-bold text-[10px]">
                    4
                  </span>
                  <span className="font-semibold">60-Day Delivery Plan</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  Interactive Brief Mapped:
                </span>
                <span className="text-xs font-semibold text-slate-200 mt-1 block">
                  {diagnosis.brandName ? `Brand: ${diagnosis.brandName}` : 'Self-Audit Active'}
                </span>
              </div>
            </div>

            {/* Content panel */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative bg-[#151515]">
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Step 1: Schedule Date & Time */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Select Date & Time
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Choose a convenient slot in your local timezone.
                    </p>
                  </div>

                  {/* Dates List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                      Choose Date
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {dates.map((dt) => {
                        const isSelected = selectedDate === dt.label;
                        return (
                          <button
                            key={dt.label}
                            type="button"
                            onClick={() => {
                              setSelectedDate(dt.label);
                              setSelectedTime('');
                            }}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#F27D26] bg-[#F27D26]/10 text-[#F27D26] font-bold'
                                : 'border-white/10 hover:border-white/20 bg-[#0a0a0a]/50 text-slate-300'
                            }`}
                          >
                            <span className="text-xs block">{dt.label.split(', ')[1]}</span>
                            <span className="text-[9px] text-slate-500 block mt-0.5 font-medium">{dt.label.split(', ')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Times List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                      Choose Time
                    </span>
                    <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                      {getFilteredTimes().map((tm) => {
                        const isSelected = selectedTime === tm.time;
                        return (
                          <button
                            key={tm.id}
                            type="button"
                            disabled={!tm.available}
                            onClick={() => setSelectedTime(tm.time)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              !tm.available
                                ? 'bg-white/5 border-white/5 text-slate-600 line-through cursor-not-allowed'
                                : isSelected
                                ? 'border-[#F27D26] bg-[#F27D26]/10 text-[#F27D26] font-bold'
                                : 'border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300'
                            }`}
                          >
                            <span className="text-xs flex items-center justify-center gap-1">
                              <Clock className="w-3.5 h-3.5 opacity-50" />
                              {tm.time}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs text-slate-400">
                      Estimated Duration: <strong className="text-white">30 Mins</strong>
                    </span>
                    <button
                      type="button"
                      disabled={!selectedTime}
                      onClick={() => setStep(2)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                        selectedTime
                          ? 'bg-[#F27D26] text-black hover:bg-opacity-90'
                          : 'bg-white/5 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Handoff Details */}
              {step === 2 && (
                <form onSubmit={handleBook} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      Add Brief Details
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Confirm contact information for link delivery.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="contactName" className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          id="contactName"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-white/10 bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:border-[#F27D26]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactEmail" className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          id="contactEmail"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="sarah@yourbrand.com"
                          className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-white/10 bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:border-[#F27D26]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="customMsg" className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Any specific things we should review? (Optional)
                      </label>
                      <textarea
                        id="customMsg"
                        value={customMsg}
                        onChange={(e) => setCustomMsg(e.target.value)}
                        placeholder="e.g. Review our specific meta campaigns or check out our cart conversion leakage."
                        rows={2}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-white/10 bg-[#0a0a0a] text-white focus:outline-none focus:ring-2 focus:ring-[#F27D26]/10 focus:border-[#F27D26] resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 border border-white/10 rounded-xl text-xs font-semibold hover:bg-white/5 transition-all text-slate-400 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#F27D26] hover:bg-opacity-95 text-black rounded-xl text-xs font-semibold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      Complete Booking <Check className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success Confirmation */}
              {step === 3 && (
                <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4 py-6">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/20 flex items-center justify-center text-[#F27D26]"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
                      Analysis Call Confirmed!
                    </h3>
                    <p className="text-xs text-[#F27D26] font-semibold mt-1 flex items-center justify-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Calendar link and prep guide sent.
                    </p>
                  </div>

                  <div className="bg-[#0a0a0a] rounded-2xl p-4 border border-white/10 w-full max-w-sm text-left text-xs space-y-2">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-400">Date:</span>
                      <strong className="text-slate-200">{selectedDate}</strong>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-slate-400">Time:</span>
                      <strong className="text-slate-200">{selectedTime}</strong>
                    </div>
                    {diagnosis.brandName && (
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-slate-400">Company Profile:</span>
                        <strong className="text-slate-200">{diagnosis.brandName}</strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-400">Conference:</span>
                      <span className="text-[#F27D26] font-bold flex items-center gap-0.5">
                        Google Meet Link Provided <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal max-w-sm">
                    We've automatically compiled your interactive audit questionnaire inputs as the starting blueprint for Step 1. Get ready for zero fluff, just growth execution.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      onClose();
                    }}
                    className="px-6 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-xl text-xs font-semibold shadow-sm transition-all cursor-pointer font-bold"
                  >
                    Done
                  </button>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
