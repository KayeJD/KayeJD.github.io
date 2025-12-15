export function SectionBgText({ text }: { text: string }) {
  return (
    <div className="absolute inset-0 flex justify-start overflow-hidden pointer-events-none">
      <h1
        className="
          text-[41vw]
          text-gray-900/5 dark:text-white/5 
          leading-none select-none 
          pl-[1vw] pb-[6vh]
          whitespace-nowrap
        "
      >
        {text}
      </h1>
    </div>
  );
}

