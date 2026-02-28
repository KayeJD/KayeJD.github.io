import { BentoCard } from "@/app/components/BentoCard";
import { Music, BookOpen, CheckCircle2, Coffee, Gamepad2 } from "lucide-react";

export const ExtrasLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] w-full">

      {/* Handwritten note pointing to Song of the Month card */}
      <img
        src="app\images\extras\book_note.png"
        alt=""
        aria-hidden="true"
        className="absolute top-[10px] right-[70px] w-50 pointer-events-none select-none z-2"
      />
      
      {/* Song of the day/month */}
      <BentoCard title="Song of the Month" icon={Music} className="md:col-span-2">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center">
             <Music className="text-green-500" />
          </div>
          <div>
            <p className="font-bold text-lg truncate">A Little Thing Like Love</p>
            <p className="text-sm text-neutral-500 truncate">Kayla Cross</p>
          </div>
        </div>
      </BentoCard>

      {/* Most recent read */}
      <BentoCard title="Reading" icon={BookOpen} className="md:col-span-1">
        <p className="text-xl font-serif italic text-neutral-700 dark:text-neutral-200">
          "The Count of Monte Cristo" by Alexandre Dumas
        </p>
      </BentoCard>

      {/* I don't know what this will be */}
      <BentoCard title="Fuel" icon={Coffee} className="md:col-span-1">
        <div className="text-center">
          <span className="text-5xl font-black">04</span>
          <p className="text-xs text-neutral-500 mt-1">CUPS TODAY</p>
        </div>
      </BentoCard>

      {/* Songs I want to learn still */}
      <BentoCard title="Focus" icon={CheckCircle2} className="md:row-span-2 md:col-span-1">
        <ul className="space-y-4">
          {['Portfolio UI', 'Rust Docs', 'Gym'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm opacity-80">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {item}
            </li>
          ))}
        </ul>
      </BentoCard>

      {/* Games? */}
      <BentoCard title="Recently Played" icon={Gamepad2} className="md:col-span-2">
        <div className="flex justify-between items-end">
          <h3 className="text-3xl font-bold tracking-tighter italic">THE BLUE PRINCE</h3>
          <p className="text-xs opacity-50 mb-1">LVL 150</p>
        </div>
      </BentoCard>

      {/* 6. A "Status" or "Mood" box */}
      <BentoCard title="Status" className="md:col-span-1">
        <p className="text-sm leading-tight text-neutral-600 dark:text-neutral-400">
          Currently exploring the intersection of IoT and modern web UX.
        </p>
      </BentoCard>

    </div>
  );
};