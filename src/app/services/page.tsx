"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/shared/ServiceCard";
import { SERVICES, CATEGORY_META } from "@/data";
import { ServiceCategory } from "@/types";
import { ArrowRight } from "lucide-react";

const CATS = Object.keys(CATEGORY_META) as ServiceCategory[];

export default function ServicesPage() {
  const [active, setActive] = useState<ServiceCategory | "all">("all");
  const filtered = active === "all" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-14" style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border-2)" }}>
        <div className="container-luxury">
          <div className="eyebrow mb-5">Treatments & Rituals</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[-0.03em] leading-tight max-w-lg" style={{ color: "var(--text)" }}>
              Our Complete Service Menu
            </h1>
            <p className="text-[14px] leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Every treatment is crafted with precision, premium products, and dedicated care.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-10">
            {["all", ...CATS].map((cat) => {
              const isSel = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat as ServiceCategory | "all")}
                  className="px-5 py-2 rounded-sm text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-200"
                  style={{
                    backgroundColor: isSel ? "var(--gold)" : "transparent",
                    border: `1px solid ${isSel ? "var(--gold)" : "var(--border)"}`,
                    color: isSel ? "#080808" : "var(--text-muted)",
                  }}
                >
                  {cat === "all" ? "All Services" : CATEGORY_META[cat].label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-luxury">
        <div className="container-luxury">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((s) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServiceCard service={s} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Gift card */}
      <section className="section-luxury" style={{ backgroundColor: "var(--bg-subtle)", borderTop: "1px solid var(--border-2)" }}>
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-4">
            <div className="space-y-4 max-w-lg">
              <div className="eyebrow">Gift of Luxury</div>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight" style={{ color: "var(--text)" }}>
                Give Someone the Gift of Luxe
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Beautifully presented digital gift certificates, valid for any treatment on our menu.
              </p>
              <button className="btn-primary">Purchase Gift Card <ArrowRight size={15} /></button>
            </div>

            {/* Decorative card */}
            <div
              className="rounded-sm p-8 md:w-72 shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--gold-alpha), rgba(184,148,31,0.03))",
                border: "1px solid var(--gold-border)",
              }}
            >
              <p className="font-display text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: "var(--gold)" }}>Luxe Salon</p>
              <p className="font-display text-[2.25rem] font-semibold leading-none mb-2" style={{ color: "var(--text)" }}>Gift Card</p>
              <p className="text-[12px] tracking-[0.08em]" style={{ color: "var(--text-dim)" }}>Any amount · Any service</p>
              <div className="mt-6 h-px" style={{ background: "linear-gradient(90deg, var(--gold-border), var(--gold), var(--gold-border))" }} />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[11px] uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>Valid forever</p>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--gold)" }}>Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
