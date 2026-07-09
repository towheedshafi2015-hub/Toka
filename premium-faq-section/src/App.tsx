import { useState } from 'react';
import { 
  Sparkles, Sliders, HelpCircle, FileText, CheckCircle, ArrowRight, Github, Code, RefreshCw 
} from 'lucide-react';
import { FaqSectionConfig } from './types';
import FaqSection from './components/FaqSection';
import LiveEditor from './components/LiveEditor';

const DEFAULT_CONFIG: FaqSectionConfig = {
  badge: "Inquiries & Responses",
  badgeColor: "#C5A059", // Premium Gold accent
  title: "Frequently asked questions",
  highlightedWord: "questions",
  subtitle: "This section serves as a repository for technical and conceptual queries regarding our architectural standards and execution protocols.",
  column1: [
    {
      id: "q1",
      question: "How does the architecture sustain high-traffic volatility?",
      answer: "Our distributed server-side rendering layer is paired with global edge caching and proactive load balancing. This allows instantaneous response scaling without cold starts or database bottlenecks."
    },
    {
      id: "q2",
      question: "What are the protocols for integrated security audits?",
      answer: "Every endpoint underwent continuous automated static analysis, dynamic taint checks, and strict OAuth authentication flows. Our system is fully auditable with isolated, non-custodial cryptographic keys."
    },
    {
      id: "q3",
      question: "Can I book a private strategy consultation online?",
      answer: "Yes, you can easily secure dedicated architectural advisory sessions instantly. Choose your desired time slot and our core engineering leads will confirm the digital strategy session with secure access tokens."
    }
  ],
  column2: [
    {
      id: "q4",
      question: "How is data integrity maintained across cloud instances?",
      answer: "We utilize multi-region transactional consensus engines with sub-millisecond replication logs. Continuous database schema consistency guarantees that active states remain synchronized flawlessly."
    },
    {
      id: "q5",
      question: "What is the typical lifecycle of a bespoke digital asset?",
      answer: "Each asset begins with a schema definition, proceeds through isolated staging environments for rigorous runtime checks, and is deployed via immutable container environments with roll-back fail-safes."
    },
    {
      id: "q6",
      question: "Can custom API endpoints be localized?",
      answer: "Absolutely. Our modular full-stack configuration supports isolated deployment configurations. You can customize endpoint controllers to bind securely to any third-party datastore or localized secure network."
    }
  ]
};

export default function App() {
  const [config, setConfig] = useState<FaqSectionConfig>(DEFAULT_CONFIG);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isFramed, setIsFramed] = useState<boolean>(true);

  const handleReset = () => {
    setConfig(DEFAULT_CONFIG);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-300 flex flex-col justify-center font-sans selection:bg-amber-950/40 selection:text-[#C5A059] py-12 px-4 sm:px-6">
      
      {/* Pristine, Isolated FAQ Section */}
      <main className="w-full max-w-7xl mx-auto">
        <FaqSection 
          config={config} 
          onUpdateConfig={setConfig} 
          isEditable={isEditable}
          onToggleEditable={() => setIsEditable(!isEditable)}
          onOpenEditor={() => setIsEditorOpen(true)}
          isFramed={isFramed}
          onToggleFramed={() => setIsFramed(!isFramed)}
        />
      </main>

      {/* Floating minimalist utility trigger to easily toggle edit mode and copy code */}
      <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
        <button
          onClick={() => setIsEditable(!isEditable)}
          className={`px-3 py-2 rounded-lg text-xs font-semibold border backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer shadow-lg ${
            isEditable 
              ? 'bg-amber-500/10 text-[#C5A059] border-[#C5A059]/30' 
              : 'bg-neutral-900/80 text-neutral-400 border-white/10 hover:text-white hover:bg-neutral-900'
          }`}
          title="Toggle Click-to-Edit Mode in preview"
        >
          <Code size={13} />
          <span>{isEditable ? 'Developer: Edit On' : 'User Preview'}</span>
        </button>

        <button 
          onClick={() => setIsEditorOpen(true)}
          className="bg-[#C5A059] hover:bg-[#b28e4a] text-black font-semibold p-2.5 rounded-lg flex items-center justify-center transition-all shadow-xl hover:scale-105"
          title="Open Schema Configurator / Export Code"
        >
          <Sliders size={16} />
        </button>
      </div>

      {/* Slide-out Config Side Panel */}
      <LiveEditor 
        config={config}
        onChange={setConfig}
        onReset={handleReset}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
      />

    </div>
  );
}
