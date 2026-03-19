import React from "react";
import { ExtrasLayout } from "@/app/layouts/ExtrasLayout";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { SectionBgText } from "@/app/components/SectionBgText";

export default function Extras() {
  return (
    <main className="flex flex-col items-center justify-center py-16 bg-background dark:bg-neutral-900 min-h-screen bg-grid">

      <Header />

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="EXTRAS" />
        <div className="relative z-10 w-full max-w-5xl">

          <div className="hero-eyebrow mb-3">After Hours</div>
          <h1 className="text-4xl md:text-5xl font-abril text-gray-900 dark:text-white">
            There really is no reason for this page
          </h1>
          <div className="hero-divider" style={{ marginTop: "1rem", maxWidth: "360px" }} />

          <p className="text-gray-500 dark:text-gray-400 text-sm mb-12 max-w-lg" style={{ fontFamily: "'Share Tech Mono', monospace", letterSpacing: "0.05em" }}>
            // things that don't belong on a resume
          </p>

          <ExtrasLayout />
        </div>
      </section>

      <Footer />
    </main>
  );
}
