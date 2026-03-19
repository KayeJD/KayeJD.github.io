import { useEffect, useState, useCallback } from "react";
import { BentoCard } from "@/app/components/BentoCard";
import {
  Music, BookOpen, CheckCircle2, Coffee,
  Gamepad2, GitCommit, Quote, Zap,
} from "lucide-react";


// ══════════════════════════════════════════════════════
//   Coffee Counter
// ══════════════════════════════════════════════════════
function useCoffeeCounter() {
  const [cups, setCups] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("coffee_data");
    const today = new Date().toDateString();
    if (stored) {
      const { date, count } = JSON.parse(stored);
      setCups(date === today ? count : 0);
    }
  }, []);

  const save = (count: number) =>
    localStorage.setItem("coffee_data", JSON.stringify({ date: new Date().toDateString(), count }));

  const add = useCallback(() => setCups((prev) => { const n = prev + 1; save(n); return n; }), []);
  const reset = useCallback(() => { setCups(0); save(0); }, []);

  return { cups, add, reset };
}

// ══════════════════════════════════════════════════════
//  Rotating Quotes
// ══════════════════════════════════════════════════════
const QUOTES = [
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "The most dangerous phrase: 'we've always done it this way.'", author: "Grace Hopper" },
  { text: "The rock, the tree, and the river", author: "Madea" },
];

function useRotatingQuote(ms = 7000) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIndex((i) => (i + 1) % QUOTES.length); setVisible(true); }, 400);
    }, ms);
    return () => clearInterval(t);
  }, [ms]);

  return { quote: QUOTES[index], visible };
}

// ══════════════════════════════════════════════════════
//  Reading Progress (localStorage)
// ══════════════════════════════════════════════════════
function useReadingProgress(key: string, total: number) {
  const [page, setPage] = useState(() => {
    const s = localStorage.getItem(`reading_${key}`);
    return s ? parseInt(s, 10) : 0;
  });

  const updatePage = (n: number) => {
    const clamped = Math.max(0, Math.min(n, total));
    setPage(clamped);
    localStorage.setItem(`reading_${key}`, String(clamped));
  };

  return { page, percent: Math.round((page / total) * 100), updatePage };
}


// ══════════════════════════════════════════════════════
//  LAYOUT
// ══════════════════════════════════════════════════════
export const ExtrasLayout = () => {
  const { cups, add: addCup, reset: resetCups } = useCoffeeCounter();
  const { quote, visible: quoteVisible } = useRotatingQuote();
  const { page, percent, updatePage } = useReadingProgress("monte-cristo", 1276);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] w-full">

      {/* Annotation PNG */}
      {/* <img
        src="app/assets/images/extras/book_note.png"
        alt="" aria-hidden="true"
        className="absolute top-[10px] right-[70px] w-50 pointer-events-none select-none z-20"
      /> */}

      {/* ── Song of the Month ──── */}
      <BentoCard title="Song of the Month" icon={Music} accent="green" className="md:col-span-2">
        <div className="flex items-center gap-4">
          <div className="bento-icon-box" style={{ "--card-accent": "#4caf7d", "--card-accent-glow": "rgba(76,175,125,0.2)" } as React.CSSProperties}>
            <Music size={24} style={{ color: "#4caf7d" }} />
          </div>
          <div>
            <p className="font-bold text-lg truncate text-gray-900 dark:text-white">A Little Thing Like Love</p>
            <p className="text-sm text-muted-foreground truncate">Kayla Cross</p>
          </div>
        </div>
      </BentoCard>

      {/* ── Rotating Quote ────────────────────── */}
      <BentoCard title="Quote" icon={Quote} accent="teal" className="md:col-span-2">
        <div className="rotating-quote" style={{ opacity: quoteVisible ? 1 : 0 }}>
          <p className="rotating-quote-text">"{quote.text}"</p>
          <p className="rotating-quote-author">— {quote.author}</p>
        </div>
      </BentoCard>

      {/* ── Coffee Counter ── */}
      <BentoCard title="Fuel" icon={Coffee} accent="amber" className="md:col-span-1">
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={addCup}
            className="coffee-counter-btn"
            style={{ "--card-accent": "#f0a832", "--card-accent-glow": "rgba(240,168,50,0.35)" } as React.CSSProperties}
            title="Click to add a cup"
          >
            <span className="text-5xl font-black text-gray-900 dark:text-white leading-none">
              {String(cups).padStart(2, "0")}
            </span>
            <span className="coffee-counter-label">cups · tap +1</span>
          </button>
          <button onClick={resetCups} className="coffee-reset-btn">reset</button>
        </div>
      </BentoCard>

      {/* ── Reading ───── */}
      <BentoCard title="Reading" icon={BookOpen} accent="purple" className="md:col-span-1 md:row-span-1">
        <div className="flex flex-col justify-between h-full gap-3">
          <p className="text-sm font-serif italic text-gray-700 dark:text-neutral-200 leading-snug">
            "The Count of Monte Cristo"
            <span className="block not-italic text-xs text-muted-foreground mt-1">Alexandre Dumas</span>
          </p>
          <div>
            <div className="reading-progress-bar-track">
              <div className="reading-progress-bar-fill"
                style={{ width: `${percent}%`, "--card-accent": "#9b7fd4", "--card-accent-glow": "rgba(155,127,212,0.4)" } as React.CSSProperties}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="reading-progress-label">p. {page}</span>
              <span className="reading-progress-label">{percent}%</span>
            </div>
            <div className="flex gap-2 mt-2">
              <input
                type="number" min={0} max={1276} value={page}
                onChange={(e) => updatePage(Number(e.target.value))}
                className="reading-page-input" placeholder="page #"
              />
              <button
                onClick={() => updatePage(page + 10)}
                className="reading-page-btn"
                style={{ "--card-accent": "#9b7fd4", "--card-accent-glow": "rgba(155,127,212,0.3)" } as React.CSSProperties}
              >+10</button>
            </div>
          </div>
        </div>
      </BentoCard>

      {/* ── Focus ─────────────────────────────── */}
      {/* <BentoCard title="Focus" icon={CheckCircle2} accent="blue" className="md:col-span-1 md:row-span-2">
        <ul className="space-y-4">
          {["Portfolio UI", "Rust Docs", "Gym"].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="bento-focus-dot" />
              {item}
            </li>
          ))}
        </ul>
      </BentoCard> */}

      

      {/* ── Recently Played ───────────────────── */}
      <BentoCard title="Recently Played" icon={Gamepad2} accent="teal" className="md:col-span-2">
        <div className="flex justify-between items-end">
          <h3 className="text-3xl font-bold tracking-tighter italic text-gray-900 dark:text-white">THE BLUE PRINCE</h3>
          <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'Share Tech Mono', monospace" }}>LVL 150</p>
        </div>
      </BentoCard>

    </div>
  );
};
