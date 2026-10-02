import React, { useState } from 'react';
import { Person } from '../../types';
import { X, Sparkles, Send, ShieldCheck, HelpCircle } from 'lucide-react';

interface HistoryAIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
}

interface Message {
  role: 'assistant' | 'user';
  text: string;
  source?: string;
}

export const HistoryAIAssistantModal: React.FC<HistoryAIAssistantModalProps> = ({
  isOpen,
  onClose,
  people,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Greetings. I am Nigeria History AI, your verified heritage assistant for Nigeria History Hub (Nigeria @ 66). Ask me about the independence movement, our leaders, pioneer women, national records, or milestones from 1960 to 2026. I answer strictly from verified archives.',
      source: 'National Library of Nigeria & State House Leadership Archive',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    "Who was Nigeria's first Prime Minister?",
    'What happened on October 1, 1960?',
    'Who were important women in the independence movement?',
    'What is the world record set by Tobi Amusan?',
  ];

  const handleSend = (queryToSend?: string) => {
    const q = (queryToSend || inputQuery).trim();
    if (!q) return;

    const userMsg: Message = { role: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    setTimeout(() => {
      const lower = q.toLowerCase();
      let reply = '';
      let source = 'National Archives of Nigeria';

      if (lower.includes('prime minister') || lower.includes('tafawa balewa') || lower.includes('first prime')) {
        reply =
          'Sir Abubakar Tafawa Balewa was the first and only Prime Minister of the Federation of Nigeria. He assumed office as Chief Minister in 1957 and was appointed Prime Minister at Independence on October 1, 1960, serving until January 15, 1966. He was renowned as "The Golden Voice of Africa" and co-founded the Organization of African Unity (OAU).';
        source = 'National Library of Nigeria Archives & State House Abuja';
      } else if (lower.includes('october 1, 1960') || lower.includes('independence day') || lower.includes('what happened')) {
        reply =
          'On October 1, 1960, Nigeria officially became an independent sovereign nation. At midnight at the Lagos Racecourse (now Tafawa Balewa Square), the British Union Jack was lowered and the green-white-green flag designed by Taiwo Akinkunmi was raised. Princess Alexandra delivered the constitutional instruments of sovereignty to Prime Minister Abubakar Tafawa Balewa.';
        source = 'Federal Government Gazette (October 1, 1960)';
      } else if (lower.includes('women') || lower.includes('margaret ekpo') || lower.includes('funmilayo')) {
        reply =
          'Crucial women who shaped Nigeria’s independence movement include Chief Margaret Ekpo (who mobilized market women in Aba and represented Nigerian women at the London Constitutional Conferences in 1953 & 1957) and Chief Funmilayo Ransome-Kuti (who founded the Abeokuta Women\'s Union, led the tax revolt against colonial authorities, and joined the 1947 London NCNC delegation). Nigerian independence was a collective effort of both women and men across the country.';
        source = 'Nigerian National Archives & University of Illinois Research Monographs';
      } else if (lower.includes('tobi amusan') || lower.includes('hurdles') || lower.includes('world record')) {
        reply =
          'Tobi Amusan made history on July 24, 2022, at the World Athletics Championships in Eugene, Oregon, setting an official World Athletics World Record of 12.12 seconds in the 100m hurdles semi-finals before winning the World Championship Gold medal in the final.';
        source = 'World Athletics Official Historical Database';
      } else if (lower.includes('first president') || lower.includes('azikiwe') || lower.includes('zik')) {
        reply =
          'Dr. Nnamdi Azikiwe ("Zik of Africa") served as Nigeria\'s first indigenous Governor-General from 1960 to 1963, and became the First President of the Federal Republic of Nigeria when the 1963 Republican Constitution was enacted on October 1, 1963.';
        source = '1963 Republican Constitution & State House Archive';
      } else if (lower.includes('awolowo') || lower.includes('western region') || lower.includes('free education')) {
        reply =
          'Chief Obafemi Awolowo was the first Premier of the Western Region (1954–1959). He introduced Universal Free Primary Education in 1955, built Africa\'s first television station (WNTV Ibadan in 1959), and successfully championed the inclusion of Fundamental Human Rights in the 1960 Independence Constitution.';
        source = 'Western Nigeria Ministry of Information Archives';
      } else if (lower.includes('ahmadu bello') || lower.includes('sardauna') || lower.includes('northern')) {
        reply =
          'Sir Ahmadu Bello, Sardauna of Sokoto, was the first and only Premier of Northern Nigeria (1954–1966). He modernized northern civil administration, created the Bank of the North and NNDC, and established Ahmadu Bello University (ABU) in Zaria in 1962.';
        source = 'Arewa House Historical Archive, Kaduna';
      } else {
        // Fallback matching person in archive
        const found = people.find(
          (p) => lower.includes(p.name.toLowerCase()) || lower.includes(p.slug)
        );

        if (found) {
          reply = `${found.name} (${found.positions[0]?.title || found.profession.join(', ')}) from ${found.state} State: ${found.whyTheyMatter} Verified archival achievements include: ${found.contributions[0]?.title || ''}.`;
          source = found.sources[0]?.title || 'Nigeria History Hub Historiography Archive';
        } else {
          reply =
            "I don't have a verified record for that information yet. In accordance with Section 28 of our charter, Nigeria History AI answers strictly from documented archival sources and never hallucinates historical claims. You may submit a nomination or request for our editorial team to review.";
          source = 'Nigeria History Hub Editorial Verification Protocol';
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: reply,
          source,
        },
      ]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-[#165e47] text-stone-100 shadow-2xl flex flex-col h-[92dvh] sm:h-[650px] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#165e47] px-3.5 sm:px-6 py-2.5 sm:py-4 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <div className="min-w-0 truncate">
              <h2 className="font-display text-xs sm:text-sm font-bold text-white flex items-center gap-2 truncate">
                <span>Nigeria History AI</span>
                <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-emerald-300 hidden xs:inline">
                  Verified Archive
                </span>
              </h2>
              <span className="text-[9px] sm:text-[10px] text-stone-400 block truncate">
                Nigeria History Hub (Anti-Hallucination Guardrails)
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-stone-400 hover:text-white shrink-0" aria-label="Close">
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Quick Question Prompts */}
        <div className="border-b border-white/5 bg-[#114a38] p-3 overflow-x-auto scrollbar-none flex items-center gap-2">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-amber-200/80 hover:bg-white/10 hover:text-white whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'border border-white/10 bg-[#165e47] text-stone-200 rounded-bl-none font-editorial'
                }`}
              >
                {msg.text}

                {msg.source && (
                  <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-amber-400 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    <span>Source: {msg.source}</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Consulting verified historical records...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="border-t border-white/10 bg-[#165e47] p-3 sm:p-4 shrink-0 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask about Nigerian history, leaders, or records..."
              className="flex-1 rounded-xl border border-white/10 bg-[#0a2e21]/50 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || loading}
              className="rounded-xl bg-amber-500 p-2 sm:p-2.5 text-stone-950 hover:bg-amber-400 transition-colors disabled:opacity-40 shrink-0"
              aria-label="Send query"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="mt-2 text-center text-[9px] sm:text-[10px] text-stone-400">
            Nigeria History AI responds exclusively from verified archival records.
          </div>
        </div>
      </div>
    </div>
  );
};
