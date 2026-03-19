import { useState, useRef, useCallback } from "react";
import { Zap } from "lucide-react";
import { BentoCard } from "@/app/components/BentoCard";

type Phase = "idle" | "waiting" | "ready" | "result" | "toosoon";

const BEST_KEY = "reaction_best";

export function ReactionTimer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ms, setMs] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(() => {
    const s = localStorage.getItem(BEST_KEY);
    return s ? parseInt(s, 10) : null;
  });

  const startRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback(() => {
    setPhase("waiting");
    setMs(null);
    // Random delay 1.5s – 4s
    const delay = 1500 + Math.random() * 2500;
    timerRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("ready");
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (phase === "idle" || phase === "result" || phase === "toosoon") {
      start();
      return;
    }
    if (phase === "waiting") {
      // Clicked too early
      if (timerRef.current) clearTimeout(timerRef.current);
      setPhase("toosoon");
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startRef.current);
      setMs(elapsed);
      setBest((prev) => {
        const next = prev === null ? elapsed : Math.min(prev, elapsed);
        localStorage.setItem(BEST_KEY, String(next));
        return next;
      });
      setPhase("result");
    }
  }, [phase, start]);

  const getRating = (ms: number) => {
    if (ms < 180) return { label: "LEGENDARY", color: "#f0a832" };
    if (ms < 220) return { label: "FAST",      color: "#4caf7d" };
    if (ms < 280) return { label: "GOOD",      color: "#5b9bd5" };
    if (ms < 350) return { label: "AVERAGE",   color: "#9b7fd4" };
    return               { label: "SLOW",      color: "#d9534f" };
  };

  const rating = ms !== null ? getRating(ms) : null;

  return (
    <BentoCard title="Reaction Timer" icon={Zap} accent="amber" className="md:col-span-2">
      <div className="reaction-wrapper" onClick={handleClick}>

        {/* ── Idle ── */}
        {phase === "idle" && (
          <div className="reaction-center">
            <div className="reaction-node reaction-node--idle" />
            <p className="reaction-prompt">Tap to start</p>
          </div>
        )}

        {/* ── Waiting ── */}
        {phase === "waiting" && (
          <div className="reaction-center">
            <div className="reaction-node reaction-node--waiting" />
            <p className="reaction-prompt">Wait for it...</p>
          </div>
        )}

        {/* ── Ready — CLICK NOW ── */}
        {phase === "ready" && (
          <div className="reaction-center">
            <div className="reaction-node reaction-node--ready" />
            <p className="reaction-prompt reaction-prompt--go">CLICK!</p>
          </div>
        )}

        {/* ── Too soon ── */}
        {phase === "toosoon" && (
          <div className="reaction-center">
            <div className="reaction-node reaction-node--toosoon" />
            <p className="reaction-prompt reaction-prompt--bad">Too soon!</p>
            <p className="reaction-sub">Tap to try again</p>
          </div>
        )}

        {/* ── Result ── */}
        {phase === "result" && ms !== null && rating && (
          <div className="reaction-center">
            <p className="reaction-ms" style={{ color: rating.color, textShadow: `0 0 18px ${rating.color}55` }}>
              {ms}<span className="reaction-ms-unit">ms</span>
            </p>
            <p className="reaction-rating" style={{ color: rating.color }}>{rating.label}</p>
            {best !== null && (
              <p className="reaction-sub">Best: {best}ms</p>
            )}
            <p className="reaction-sub" style={{ marginTop: "4px" }}>Tap to go again</p>
          </div>
        )}

      </div>
    </BentoCard>
  );
}
