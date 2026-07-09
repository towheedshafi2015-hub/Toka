import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { BookingSlot } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM (EST)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    revenue: "Under $10k/mo",
    notes: ""
  });

  const slots: BookingSlot[] = [
    { date: "Tomorrow", time: "10:00 AM (EST)", available: true },
    { date: "Tomorrow", time: "11:00 AM (EST)", available: true },
    { date: "Tomorrow", time: "1:30 PM (EST)", available: false },
    { date: "Tomorrow", time: "3:00 PM (EST)", available: true },
    { date: "Next Day", time: "9:30 AM (EST)", available: true },
    { date: "Next Day", time: "11:00 AM (EST)", available: true },
    { date: "Next Day", time: "2:00 PM (EST)", available: true },
    { date: "Next Day", time: "4:30 PM (EST)", available: false }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      alert("Please fill in the required fields (Name, Email, Website)");
      return;
    }
    setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0c0c0d]/95 border border-white/[0.08] shadow-2xl backdrop-blur-2xl p-6 md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-white transition p-1 bg-white/[0.03] rounded-full hover:bg-white/[0.08]"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 1 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-wider font-mono bg-[#f27d26]/10 text-[#f27d26] px-2.5 py-0.5 rounded-full font-bold">
                      Growth Audit
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-amber-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5" /> 1-on-1 with Tawheed
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                    Book Your Growth Strategy Call
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Let's analyze your D2C Shopify system, conversion rate, ads strategy, and potential automations.
                  </p>
                </div>

                {/* Date & Time Selector */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#f27d26]" /> Select Date & Time Slot:
                  </span>
                  <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto p-1.5 bg-black/40 rounded-xl border border-white/[0.05]">
                    {slots.map((slot, i) => (
                      <button
                        key={i}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => {
                          setSelectedDate(slot.date);
                          setSelectedTime(slot.time);
                        }}
                        className={`text-left p-2.5 rounded-lg border text-xs font-mono transition flex flex-col ${
                          !slot.available
                            ? "opacity-30 border-dashed border-white/[0.03] cursor-not-allowed bg-black/20"
                            : selectedDate === slot.date && selectedTime === slot.time
                            ? "bg-[#f27d26]/10 border-[#f27d26] text-white font-bold shadow-[0_0_15px_-3px_rgba(242,125,38,0.15)]"
                            : "bg-white/[0.01] border-white/[0.05] text-slate-300 hover:border-white/[0.15] hover:bg-white/[0.02]"
                        }`}
                      >
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{slot.date}</span>
                        <span className="text-[11px] mt-0.5">{slot.time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Tawheed"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/[0.08] focus:border-[#f27d26]/50 rounded-lg p-2.5 text-xs text-white outline-none transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="growth@brand.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/[0.08] focus:border-[#f27d26]/50 rounded-lg p-2.5 text-xs text-white outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Current Website *</label>
                      <input
                        type="url"
                        name="website"
                        required
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/[0.08] focus:border-[#f27d26]/50 rounded-lg p-2.5 text-xs text-white outline-none transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Monthly Revenue Tier</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleInputChange}
                        className="w-full bg-[#131315] border border-white/[0.08] focus:border-[#f27d26]/50 rounded-lg p-2.5 text-xs text-white outline-none transition"
                      >
                        <option>Under $10k/mo</option>
                        <option>$10k - $50k/mo</option>
                        <option>$50k - $250k/mo</option>
                        <option>Over $250k/mo</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Core bottleneck we should discuss</label>
                    <textarea
                      name="notes"
                      rows={2}
                      placeholder="e.g. low Shopify load times, Meta ad account bans, poor customer retention..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/[0.08] focus:border-[#f27d26]/50 rounded-lg p-2.5 text-xs text-white outline-none resize-none transition"
                    />
                  </div>
                </div>

                {/* Footer trust indicator */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                  <span className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Private Data Protection
                  </span>
                  <button
                    type="submit"
                    className="bg-[#f27d26] text-black hover:scale-105 glow-orange font-bold px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase transition flex items-center gap-1.5 group cursor-pointer shadow-lg duration-300"
                  >
                    Lock Meeting Slot <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-8 space-y-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-125"></div>
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 relative" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                    Growth Call Confirmed!
                  </h3>
                  <p className="text-slate-300 font-mono text-xs">
                    {selectedDate} at <span className="text-[#f27d26] font-bold">{selectedTime}</span>
                  </p>
                  <p className="text-slate-400 text-xs px-4 max-w-sm mx-auto">
                    A secure calendar confirmation and a Google Meet video link have been sent to <strong className="text-white">{formData.email}</strong>.
                  </p>
                </div>

                {/* Founder welcome block */}
                <div className="bg-white/[0.02] border border-white/[0.05] p-4 rounded-xl max-w-sm text-left relative space-y-2">
                  <p className="text-[11px] text-slate-300 italic leading-relaxed">
                    "Hey {formData.name}, looking forward to our strategy session. I'll personally review your D2C setup at {new URL(formData.website).hostname || formData.website} beforehand so we can jump straight into high-ROI tactics."
                  </p>
                  <div className="flex items-center gap-2 pt-1 border-t border-white/[0.04]">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                      TS
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">Tawheed Shafi</p>
                      <p className="text-[8px] text-slate-500 uppercase font-mono">Founder, TOKA</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStep(1);
                    onClose();
                  }}
                  className="bg-[#f27d26] text-black font-bold px-6 py-2.5 rounded-lg text-xs tracking-wider uppercase transition cursor-pointer hover:scale-105 duration-300 shadow-md"
                >
                  Return to Site
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
