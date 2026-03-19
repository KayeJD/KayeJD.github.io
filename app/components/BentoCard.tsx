import { motion } from "framer-motion";

type BentoAccent = "blue" | "purple" | "teal" | "amber" | "green" | "red";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  accent?: BentoAccent;
}

// Maps accent name → CSS custom property values injected inline.
// This lets each card glow its own color without needing separate CSS classes
// for every permutation — one .bento-card rule handles them all via var(--card-accent).
const accentTokens: Record<BentoAccent, { color: string; glow: string; dim: string }> = {
  blue:   { color: "#5b9bd5", glow: "rgba(91,155,213,0.28)",  dim: "#2d5a8a" },
  purple: { color: "#9b7fd4", glow: "rgba(155,127,212,0.25)", dim: "#5c3d9e" },
  teal:   { color: "#4db6ac", glow: "rgba(77,182,172,0.25)",  dim: "#2a7b74" },
  amber:  { color: "#f0a832", glow: "rgba(240,168,50,0.25)",  dim: "#9a6610" },
  green:  { color: "#4caf7d", glow: "rgba(76,175,125,0.25)",  dim: "#2a7a4f" },
  red:    { color: "#d9534f", glow: "rgba(217,83,79,0.25)",   dim: "#8b2a27" },
};

export const BentoCard = ({
  children,
  className = "",
  title,
  icon: Icon,
  accent = "blue",
}: BentoCardProps) => {
  const tokens = accentTokens[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`bento-card ${className}`}
      style={{
        "--card-accent":     tokens.color,
        "--card-accent-glow": tokens.glow,
        "--card-accent-dim":  tokens.dim,
      } as React.CSSProperties}
    >
      {/* Left accent trace bar */}
      <div className="bento-card-trace" />

      {/* Header */}
      {title && (
        <div className="bento-card-header">
          {Icon && <Icon size={14} className="bento-card-icon" />}
          <span className="bento-card-label">{title}</span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center w-full overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};
