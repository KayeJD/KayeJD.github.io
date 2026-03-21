import React from "react";
import { ExtrasLayout } from "@/app/layouts/ExtrasLayout";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { SectionBgText } from "@/app/components/SectionBgText";
// import { CursorTrail } from "@/app/components/CursorTrail";

export default function Extras() {
  return (
    <main className="flex flex-col items-center justify-center py-16 bg-background dark:bg-neutral-900 min-h-screen bg-grid">

      {/* <CursorTrail /> */}

      <Header />

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="EXTRAS" />
        <div className="relative z-10 w-full max-w-5xl">

          <div className="hero-eyebrow mb-3">After Hours</div>
          <h1 className="text-4xl md:text-5xl font-abril text-gray-900 dark:text-white">
            Some Fun Stuff
          </h1>
          <div className="hero-divider" style={{ marginTop: "1rem", maxWidth: "360px" }} />
          <p className="text-sm mb-12 text-muted-foreground" style={{ fontFamily: "'Share Tech Mono', monospace", letterSpacing: "0.05em" }}>
            // things that don't belong on a resume. i still want to share them tho...so here we are :)
          </p>

          <ExtrasLayout />
        </div>
      </section>

      <Footer />
    </main>
  );
}
