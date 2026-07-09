import React, { useState } from 'react';
import { X, Calendar, Clock, User, Check, Sparkles } from 'lucide-react';

interface TeeTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'booking' | 'membership';
}

export default function TeeTimeModal({ isOpen, onClose, title, type }: TeeTimeModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    players: '2',
    handicap: 'none',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" id="tee-time-modal">
      <div 
        className="w-full max-w-lg bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl relative transition-all duration-300"
        id="modal-content"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1 block">
                {type === 'booking' ? 'Reservation Portal' : 'Club Membership'}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-white/60 mt-1">
                {type === 'booking' 
                  ? 'Book your next tee time at Leeuwarder Golfclub in seconds.'
                  : 'Start your journey at Friesland’s premium 18-hole club today.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="E.g., John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                  />
                </div>
              </div>

              {type === 'booking' ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Select Date</label>
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Preferred Time</label>
                      <input 
                        type="time" 
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Number of Players</label>
                      <select 
                        value={formData.players}
                        onChange={(e) => setFormData({ ...formData, players: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      >
                        <option value="1" className="bg-slate-900">1 Player</option>
                        <option value="2" className="bg-slate-900">2 Players</option>
                        <option value="3" className="bg-slate-900">3 Players</option>
                        <option value="4" className="bg-slate-900">4 Players</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Avg. Handicap (GVB)</label>
                      <select 
                        value={formData.handicap}
                        onChange={(e) => setFormData({ ...formData, handicap: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                      >
                        <option value="none" className="bg-slate-900">No official GVB</option>
                        <option value="beginner" className="bg-slate-900">Beginner (36 - 54)</option>
                        <option value="mid" className="bg-slate-900">Amateur (18 - 35)</option>
                        <option value="low" className="bg-slate-900">Advanced (&lt; 18)</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1">Membership Type</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all"
                  >
                    <option className="bg-slate-900">Full 18-Hole Membership (€1,150/yr)</option>
                    <option className="bg-slate-900">Young Professional (&lt; 30 yrs) (€595/yr)</option>
                    <option className="bg-slate-900">Beginner Academy GVB Package (€295)</option>
                    <option className="bg-slate-900">Corporate Elite Partnership</option>
                  </select>
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 mt-6"
              >
                {type === 'booking' ? 'Confirm Reservation' : 'Submit Membership Request'}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <Check className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-1.5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Request Submitted!
            </h3>
            <p className="text-white/70 max-w-sm text-sm">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have sent a confirmation email to <span className="text-white font-semibold">{formData.email}</span>. Our marshal will verify your details and follow up shortly.
            </p>
            <button 
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="mt-6 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 border border-white/15"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
