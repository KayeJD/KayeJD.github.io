import { BentoCard } from "@/app/components/BentoCard";
import { Music, BookOpen, CheckCircle2, Coffee, Gamepad2 } from "lucide-react";

export const ExtrasLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] w-full">

      {/* <img
        src="app/assets/images/extras/book_note.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[10px] right-[70px] w-50 pointer-events-none select-none z-20"
      /> */}

      {/* Song of the Month — green (music vibes) */}
      <BentoCard title="Song of the Month" icon={Music} accent="green" className="md:col-span-2">
        <div className="flex items-center gap-4">
          <div className="bento-icon-box" style={{ "--card-accent": "#4caf7d", "--card-accent-glow": "rgba(76,175,125,0.2)" } as React.CSSProperties}>
            <Music size={24} style={{ color: "#4caf7d" }} />
          </div>
          <div>
            <p className="font-bold text-lg truncate text-gray-900 dark:text-white">
              A Little Thing Like Love
            </p>
            <p className="text-sm text-muted-foreground truncate">Kayla Cross</p>
          </div>
        </div>
      </BentoCard>

      {/* Reading — purple (thoughtful, literary) */}
      <BentoCard title="Reading" icon={BookOpen} accent="purple" className="md:col-span-1">
        <p className="text-base font-serif italic text-gray-700 dark:text-neutral-200 leading-snug">
          "The Count of Monte Cristo"
          <span className="block not-italic text-sm text-muted-foreground mt-1">Alexandre Dumas</span>
        </p>
      </BentoCard>

      {/* Fuel — amber (coffee = warm) */}
      <BentoCard title="Fuel" icon={Coffee} accent="amber" className="md:col-span-1">
        <div className="text-center">
          <span className="text-5xl font-black text-gray-900 dark:text-white">04</span>
          <p className="text-xs text-muted-foreground mt-1 tracking-widest uppercase" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Cups This Week
          </p>
        </div>
      </BentoCard>

      {/* Focus — blue (on-theme, task list)
      <BentoCard title="Focus" icon={CheckCircle2} accent="blue" className="md:row-span-2 md:col-span-1">
        <ul className="space-y-4">
          {["Portfolio UI", "Rust Docs", "Gym"].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="bento-focus-dot" />
              {item}
            </li>
          ))}
        </ul>
      </BentoCard> */}

      {/* Recently Played — teal */}
      <BentoCard title="Recently Played" icon={Gamepad2} accent="teal" className="md:col-span-2">
        <div className="flex justify-between items-end">
          <h3 className="text-3xl font-bold tracking-tighter italic text-gray-900 dark:text-white">
            THE BLUE PRINCE
          </h3>
          <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            DAY 32
          </p>
        </div>
      </BentoCard>

      {/* Status — red (standout, personal) */}
      <BentoCard title="Status" accent="red" className="md:col-span-1">
        <p className="text-sm leading-relaxed text-gray-600 dark:text-neutral-400">
          Most likely trying to find my cat
        </p>
      </BentoCard>

    </div>
  );
};
