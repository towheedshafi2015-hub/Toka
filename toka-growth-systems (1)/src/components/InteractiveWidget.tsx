import React, { useState, useEffect, useRef } from "react";
import { 
  Flame, 
  TrendingUp, 
  MessageSquare, 
  PhoneCall, 
  Split, 
  LayoutDashboard, 
  Play, 
  Volume2, 
  Check, 
  Send,
  HelpCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";

// --- WIDGET 1: Speed Test Performance ---
export function SpeedTestWidget() {
  const [imagesOptimized, setImagesOptimized] = useState(false);
  const [cacheEnabled, setCacheEnabled] = useState(false);
  const [codeMinified, setCodeMinified] = useState(false);
  
  const score = 65 + (imagesOptimized ? 15 : 0) + (cacheEnabled ? 12 : 0) + (codeMinified ? 7 : 0);
  const loadTime = Math.max(0.6, 4.5 - (imagesOptimized ? 1.8 : 0) - (cacheEnabled ? 1.4 : 0) - (codeMinified ? 0.7 : 0)).toFixed(1);

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-[#f27d26]">Pillar 01 // Speed Audit</span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">
          <Sparkles className="w-3 h-3" /> Live Sandbox
        </span>
      </div>

      {/* Speedometer Radial */}
      <div className="flex flex-col items-center justify-center py-3 bg-black/20 rounded-lg border border-white/[0.03] mb-4">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              className="stroke-slate-800"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              className="stroke-[#f27d26] transition-all duration-500"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * score) / 100}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-xl font-bold font-display text-white">{score}</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest">Mobile Score</span>
          </div>
        </div>
        <div className="mt-2 text-center">
          <p className="text-slate-400 text-[11px]">
            Load Time: <strong className="text-white font-mono text-xs">{loadTime}s</strong>
          </p>
          <p className="text-[10px] text-slate-500">
            {score >= 90 ? "🚀 Ultra Fast Shopify Setup" : "⚠️ Conversion rates drop by 20% per second!"}
          </p>
        </div>
      </div>

      {/* Control sliders */}
      <div className="space-y-2">
        <label className="flex items-center justify-between p-2 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] rounded-lg cursor-pointer transition">
          <span className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={imagesOptimized} 
              onChange={() => setImagesOptimized(!imagesOptimized)}
              className="accent-[#f27d26] h-3.5 w-3.5 rounded"
            />
            <span>Next-Gen Image Formats</span>
          </span>
          <span className="text-[#f27d26] font-mono text-[10px]">+15 Pts</span>
        </label>

        <label className="flex items-center justify-between p-2 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] rounded-lg cursor-pointer transition">
          <span className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={cacheEnabled} 
              onChange={() => setCacheEnabled(!cacheEnabled)}
              className="accent-[#f27d26] h-3.5 w-3.5 rounded"
            />
            <span>Edge Cache & Shopify CDN</span>
          </span>
          <span className="text-[#f27d26] font-mono text-[10px]">+12 Pts</span>
        </label>

        <label className="flex items-center justify-between p-2 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] rounded-lg cursor-pointer transition">
          <span className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={codeMinified} 
              onChange={() => setCodeMinified(!codeMinified)}
              className="accent-[#f27d26] h-3.5 w-3.5 rounded"
            />
            <span>Critical CSS & Code Purging</span>
          </span>
          <span className="text-[#f27d26] font-mono text-[10px]">+7 Pts</span>
        </label>
      </div>
    </div>
  );
}

// --- WIDGET 2: Meta Ads ROI Calculator ---
export function AdCalculatorWidget() {
  const [budget, setBudget] = useState(5000);
  const [roas, setRoas] = useState(2.8);

  const sales = Math.round(budget * roas);
  const costPerAcquisition = (budget / (sales / 85)).toFixed(1); // assumed average order value $85
  const profit = sales - budget;

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-[#f27d26]">Pillar 02 // Meta Acquisition</span>
        <span className="flex items-center gap-1 text-[10px] text-orange-400 bg-orange-950/20 px-2 py-0.5 rounded-full border border-orange-500/20">
          <TrendingUp className="w-3 h-3" /> Growth Engine
        </span>
      </div>

      <div className="space-y-4 mb-4">
        {/* Budget Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-slate-400">
            <span>Monthly Ad Spend</span>
            <span className="text-white font-mono font-bold">${budget.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            step="1000"
            value={budget} 
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-[#f27d26] bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* ROAS Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-slate-400">
            <span>Target ROAS</span>
            <span className="text-white font-mono font-bold">{roas.toFixed(1)}x</span>
          </div>
          <input 
            type="range" 
            min="1.5" 
            max="6.0" 
            step="0.1"
            value={roas} 
            onChange={(e) => setRoas(Number(e.target.value))}
            className="w-full accent-[#f27d26] bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Calculations Grid */}
      <div className="grid grid-cols-2 gap-2 bg-black/30 p-3 rounded-lg border border-white/[0.03]">
        <div>
          <span className="text-[10px] text-slate-500 block">Projected Revenue</span>
          <span className="text-sm font-bold font-display text-emerald-400">${sales.toLocaleString()}</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-500 block">Net System Profit</span>
          <span className="text-sm font-bold font-display text-white">${profit.toLocaleString()}</span>
        </div>
        <div className="col-span-2 pt-2 border-t border-white/[0.04]">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-slate-400">Est. CAC (at $85 Average Basket)</span>
            <span className="font-mono text-amber-400 font-bold">${costPerAcquisition}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- WIDGET 3: A/B CRO Split Tester ---
export function CroSplitWidget() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("B");

  const conversionRate = activeTab === "A" ? "1.8%" : "4.6%";
  const revenuePer1k = activeTab === "A" ? "$1,530" : "$3,910";

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-emerald-400">Pillar 03 // Conversion Optimizer</span>
        <span className="flex items-center gap-1 text-[10px] text-[#f27d26] bg-[#f27d26]/10 border border-[#f27d26]/20 px-2 py-0.5 rounded-full">
          <Split className="w-3 h-3" /> A/B Sandbox
        </span>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-900/60 p-1 rounded-lg mb-3 border border-white/[0.03]">
        <button
          onClick={() => setActiveTab("A")}
          className={`flex-1 py-1 rounded text-center transition font-mono ${activeTab === "A" ? "bg-white/[0.08] text-white font-bold" : "text-slate-500 hover:text-slate-300"}`}
        >
          Control (Variant A)
        </button>
        <button
          onClick={() => setActiveTab("B")}
          className={`flex-1 py-1 rounded text-center transition font-mono ${activeTab === "B" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-500 hover:text-slate-300"}`}
        >
          TOKA System (Variant B)
        </button>
      </div>

      {/* Interface Mock */}
      <div className="bg-black/30 p-3 rounded-lg border border-white/[0.03] space-y-3 mb-3">
        {activeTab === "A" ? (
          <div className="space-y-2 opacity-80">
            <h4 className="font-bold text-slate-200">Welcome To Our Online Shopify Store</h4>
            <p className="text-[10px] text-slate-400">We offer high quality products and shipping times are standard. Register now.</p>
            <button className="w-full bg-slate-700 py-1.5 rounded font-bold text-[10px] uppercase tracking-wide">Submit Details</button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 rounded font-mono">⚡ Speed Boosted</span>
              <span className="text-[9px] text-amber-400 bg-amber-950/60 px-1.5 py-0.2 rounded">🔥 48 People viewed today</span>
            </div>
            <h4 className="font-bold text-white font-display">Get Yours in 2 Days. Risk-Free Guarantee.</h4>
            <p className="text-[10px] text-slate-300">Join 12,000+ happy brand founders scaling with speed.</p>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 py-2 rounded font-bold text-slate-950 text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
              Add to Cart <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* Metrics Result */}
      <div className="flex justify-between items-center bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.04]">
        <div>
          <span className="text-[9px] text-slate-500 uppercase">Conversion Rate</span>
          <p className={`text-lg font-bold font-mono ${activeTab === "B" ? "text-emerald-400" : "text-slate-400"}`}>{conversionRate}</p>
        </div>
        <div className="text-right">
          <span className="text-[9px] text-slate-500 uppercase">Rev. per 1,000 Visitors</span>
          <p className={`text-lg font-bold font-mono ${activeTab === "B" ? "text-emerald-400" : "text-slate-400"}`}>{revenuePer1k}</p>
        </div>
      </div>
    </div>
  );
}

// --- WIDGET 4: Voice AI Agent Simulator ---
export function VoiceAiWidget() {
  const [callState, setCallState] = useState<"idle" | "calling" | "connected" | "ended">("idle");
  const [waveform, setWaveform] = useState<number[]>(Array(15).fill(4));
  const [transcript, setTranscript] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (callState === "connected") {
      const dialogue = [
        "🤖 AI Agent: Hi, Tawheed here from TOKA's voice bot. Let me review your Shopify metrics...",
        "📞 Client: Sounds great! We need to scale our conversion rate and automate FAQs.",
        "🤖 AI Agent: Understood. Our automation drops support response time to 1.2 seconds.",
        "🤖 AI Agent: Sending a calendar booking link to your WhatsApp number right now..."
      ];
      let lineIndex = 0;
      setTranscript(dialogue[0]);

      // Waveform animation
      intervalRef.current = setInterval(() => {
        setWaveform(Array(15).fill(0).map(() => Math.floor(Math.random() * 24) + 4));
        
        if (Math.random() < 0.25) {
          lineIndex = (lineIndex + 1) % dialogue.length;
          setTranscript(dialogue[lineIndex]);
        }
      }, 150);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setWaveform(Array(15).fill(4));
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callState]);

  const handleStartCall = () => {
    setCallState("calling");
    setTimeout(() => {
      setCallState("connected");
    }, 1500);
  };

  const handleEndCall = () => {
    setCallState("ended");
    setTimeout(() => setCallState("idle"), 1000);
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-[#f27d26]">Pillar 04 // AI Voice Agent</span>
        <span className="flex items-center gap-1 text-[10px] text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-full">
          <Volume2 className="w-3 h-3" /> Voice Demo
        </span>
      </div>

      <div className="bg-black/30 p-3 rounded-lg border border-white/[0.03] flex flex-col items-center justify-center space-y-4 py-4 min-h-[140px]">
        {callState === "idle" && (
          <div className="text-center space-y-3">
            <p className="text-slate-400 text-[10px]">Test a real-time smart conversation workflow</p>
            <button 
              onClick={handleStartCall}
              className="bg-[#f27d26] hover:bg-orange-500 text-black font-bold px-4 py-2 rounded-full flex items-center gap-2 transition mx-auto text-[11px]"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Start Interactive Call
            </button>
          </div>
        )}

        {callState === "calling" && (
          <div className="text-center space-y-3 animate-pulse">
            <p className="text-[#f27d26] font-mono text-[11px] tracking-widest">DIALING TOKA WORKFLOW AGENT...</p>
            <div className="w-8 h-8 rounded-full border-2 border-[#f27d26] border-t-transparent animate-spin mx-auto"></div>
          </div>
        )}

        {callState === "connected" && (
          <div className="w-full space-y-3 text-center">
            {/* Audio Waveform */}
            <div className="flex items-center justify-center gap-1 h-8">
              {waveform.map((height, idx) => (
                <div 
                   key={idx} 
                   style={{ height: `${height}px` }}
                   className="w-1 bg-[#f27d26] rounded-full transition-all duration-150"
                ></div>
              ))}
            </div>
            
            <p className="text-emerald-400 text-[9px] font-mono tracking-widest uppercase flex items-center justify-center gap-1 animate-pulse">
              ● Connected to TOKA AI
            </p>

            <div className="bg-black/40 p-2.5 rounded border border-white/[0.05] text-left text-[10px] leading-relaxed italic text-slate-300 min-h-[50px] transition-all">
              {transcript}
            </div>

            <button 
              onClick={handleEndCall}
              className="bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/30 font-bold px-3 py-1 rounded-full text-[10px] transition mx-auto"
            >
              Disconnect Call
            </button>
          </div>
        )}

        {callState === "ended" && (
          <div className="text-center space-y-1">
            <p className="text-slate-400 text-[11px]">Call Ended Successfully</p>
            <p className="text-slate-500 text-[9px]">Calibrating system parameters...</p>
          </div>
        )}
      </div>
    </div>
  );
}

// --- WIDGET 5: WhatsApp automation preview ---
export function WhatsappWidget() {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string; time: string }>>([
    { sender: "bot", text: "Hello! Thank you for contacting our brand. How can I help you scale today?", time: "09:30 AM" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const simulateReply = (userQuery: string, botReply: string) => {
    // Add user message
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: "user", text: userQuery, time: now }]);
    setIsTyping(true);

    // Simulated typing lag
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: "bot", text: botReply, time: now }]);
    }, 1200);
  };

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-[#f27d26]">Pillar 05 // WhatsApp Automations</span>
        <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full">
          <MessageSquare className="w-3 h-3" /> Conversational commerce
        </span>
      </div>

      {/* WhatsApp Chat interface */}
      <div className="bg-[#0b141a] border border-[#202c33] rounded-lg overflow-hidden flex flex-col h-[180px]">
        {/* Header bar */}
        <div className="bg-[#202c33] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#f27d26] flex items-center justify-center font-bold text-[9px] text-black">
              T
            </div>
            <div>
              <p className="text-white font-semibold text-[10px]">TOKA Interactive Agent</p>
              <p className="text-[#8696a0] text-[8px]">online</p>
            </div>
          </div>
        </div>

        {/* Messages list */}
        <div className="flex-1 p-2.5 overflow-y-auto space-y-2 bg-[radial-gradient(rgba(10,25,30,0.2)_1px,transparent_1px)] [background-size:16px_16px]">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`max-w-[80%] rounded-lg p-2 text-[10px] leading-relaxed relative ${msg.sender === "user" ? "bg-[#005c4b] text-white ml-auto" : "bg-[#202c33] text-slate-200"}`}
            >
              <p>{msg.text}</p>
              <span className="text-[8px] text-slate-400 block text-right mt-1">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="bg-[#202c33] text-slate-400 max-w-[50%] rounded-lg p-2 text-[9px] flex items-center gap-1">
              <span>typing</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce [animation-delay:0.2s]">.</span>
              <span className="animate-bounce [animation-delay:0.4s]">.</span>
            </div>
          )}
        </div>

        {/* Interactive suggestions quick buttons */}
        <div className="bg-[#1f2c34] p-1.5 flex gap-1 border-t border-[#2a3942] overflow-x-auto">
          <button 
            disabled={isTyping}
            onClick={() => simulateReply("Where is my order?", "📦 Checking your database... Order #8491 was handed to DHL and is arriving tomorrow morning! Here is your tracking link.")}
            className="whitespace-nowrap bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded hover:bg-slate-700 transition text-[9px] cursor-pointer"
          >
            "Where is my order?"
          </button>
          <button 
            disabled={isTyping}
            onClick={() => simulateReply("Claim D2C Discount", "🎉 Claimed! Use code TOKA_GROWTH at checkout for a 15% discount on our systems design audit.")}
            className="whitespace-nowrap bg-slate-800 text-slate-300 border border-slate-700 px-2 py-1 rounded hover:bg-slate-700 transition text-[9px] cursor-pointer"
          >
            "Claim Discount"
          </button>
        </div>
      </div>
    </div>
  );
}

// --- WIDGET 6: Live Growth KPI Dashboard ---
export function GrowthKpiWidget() {
  const [metricView, setMetricView] = useState<"blended" | "sales">("blended");

  return (
    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-xs font-sans text-slate-300">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-[10px] text-[#f27d26]">Pillar 06 // Live Growth KPI</span>
        <span className="flex items-center gap-1 text-[10px] text-[#f27d26] bg-[#f27d26]/10 border border-[#f27d26]/25 px-2 py-0.5 rounded-full">
          <LayoutDashboard className="w-3 h-3" /> Core Hub
        </span>
      </div>

      <div className="flex justify-between items-center bg-black/40 p-1.5 rounded-md border border-white/[0.03] mb-3">
        <button
          onClick={() => setMetricView("blended")}
          className={`flex-1 text-[9px] py-1 text-center rounded font-semibold transition ${metricView === "blended" ? "bg-white/[0.08] text-white" : "text-slate-500 hover:text-slate-300"}`}
        >
          Blended Metrics
        </button>
        <button
          onClick={() => setMetricView("sales")}
          className={`flex-1 text-[9px] py-1 text-center rounded font-semibold transition ${metricView === "sales" ? "bg-white/[0.08] text-white" : "text-slate-500 hover:text-slate-300"}`}
        >
          Growth Scale
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        {metricView === "blended" ? (
          <>
            <div className="bg-slate-900/60 p-2.5 rounded-md border border-white/[0.03] text-left">
              <span className="text-[9px] text-slate-500 block uppercase">Blended ROAS</span>
              <strong className="text-white text-sm font-mono">4.82x</strong>
              <span className="text-[8px] text-emerald-400 block mt-0.5">+42% YoY</span>
            </div>
            <div className="bg-slate-900/60 p-2.5 rounded-md border border-white/[0.03] text-left">
              <span className="text-[9px] text-slate-500 block uppercase">LTV:CAC Ratio</span>
              <strong className="text-white text-sm font-mono">5.2 : 1</strong>
              <span className="text-[8px] text-emerald-400 block mt-0.5">Optimal Scale</span>
            </div>
          </>
        ) : (
          <>
            <div className="bg-slate-900/60 p-2.5 rounded-md border border-white/[0.03] text-left">
              <span className="text-[9px] text-slate-500 block uppercase">Daily Revenue</span>
              <strong className="text-white text-sm font-mono">$18,430</strong>
              <span className="text-[8px] text-[#f27d26] block mt-0.5">Shopify Flowing</span>
            </div>
            <div className="bg-slate-900/60 p-2.5 rounded-md border border-white/[0.03] text-left">
              <span className="text-[9px] text-slate-500 block uppercase">Conversion rate</span>
              <strong className="text-white text-sm font-mono">5.12%</strong>
              <span className="text-[8px] text-emerald-400 block mt-0.5">+18% this month</span>
            </div>
          </>
        )}
      </div>

      {/* Mini Bar Chart */}
      <div className="bg-black/20 p-2 rounded-md border border-white/[0.03] space-y-1">
        <span className="text-[8px] text-slate-500 block uppercase font-mono">Revenue Velocity (Trailing 6 Months)</span>
        <div className="flex items-end justify-between h-8 pt-2 px-1">
          <div className="w-2.5 bg-slate-800 rounded-t h-2"></div>
          <div className="w-2.5 bg-slate-700 rounded-t h-3.5"></div>
          <div className="w-2.5 bg-slate-600 rounded-t h-4"></div>
          <div className="w-2.5 bg-slate-500 rounded-t h-5.5"></div>
          <div className="w-2.5 bg-[#f27d26]/70 rounded-t h-7"></div>
          <div className="w-2.5 bg-[#f27d26] rounded-t h-8"></div>
        </div>
      </div>
    </div>
  );
}
