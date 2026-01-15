import React from "react";
import { ExtrasLayout } from "@/app/layouts/ExtrasLayout";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { SectionBgText } from "@/app/components/SectionBgText";

export default function Extras() {
  return (
    <main className="flex flex-col items-center justify-center py-16 bg-neutral-50 dark:bg-neutral-900 min-h-screen bg-grid">
      
      <Header />

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="EXTRAS" />
        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-abril text-gray-900 dark:text-white mb-12">
              After Hours
          </h1>

          <ExtrasLayout />
        </div>
      </section>
      <Footer />

    </main>
    
  );
}