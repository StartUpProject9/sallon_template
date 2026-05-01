"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scissors, Star } from "lucide-react";

const stats = [
  { value: "2,500+", label: "Happy Clients" },
  { value: "18+", label: "Master Stylists" },
  { value: "4.9", label: "Star Rating" },
  { value: "12yr", label: "Of Excellence" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 right-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--gold-alpha) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--gold-alpha) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "linear-gradient(var(--border-2) 1px, transparent 1px), linear-gradient(90deg, var(--border-2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-luxury relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="eyebrow">Premium London Salon</div>

            <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.05] tracking-[-0.03em]" style={{ color: "var(--text)" }}>
              Where Beauty{" "}
              <span className="text-gold-gradient italic">Becomes</span>
              <br />Art
            </h1>

            <p className="text-[15px] leading-[1.75] max-w-[440px]" style={{ color: "var(--text-muted)" }}>
              Experience bespoke hair, skin, and nail treatments from our award-winning stylists. Every appointment, a masterpiece.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn-primary">
                Book an Appointment
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-6 pt-6" style={{ borderTop: "1px solid var(--border-2)" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[1.625rem] font-display font-semibold leading-none" style={{ color: "var(--gold)" }}>{s.value}</p>
                  <p className="text-[11px] mt-1.5 uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--text-dim)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div
              className="relative rounded-sm overflow-hidden aspect-[4/5]"
              style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <div className="absolute inset-0 flex items-end justify-start p-8 z-10">
                <div className="card-gold rounded-sm w-full p-6">
                  <p className="font-serif italic text-[16px] leading-relaxed" style={{ color: "var(--text)" }}>
                    &ldquo;The most exceptional salon experience I&apos;ve ever had.&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                      ))}
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: "var(--gold)" }}>
                      — Sarah Jenkins
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 card flex items-center gap-3.5 px-4 py-3.5 z-20 hidden sm:flex"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                <Scissors size={18} style={{ color: "var(--gold)" }} className="rotate-45" />
              </div>
              <div>
                <p className="text-[13px] font-semibold leading-tight" style={{ color: "var(--text)" }}>Award Winning</p>
                <p className="text-[11px] uppercase tracking-[0.12em] mt-0.5" style={{ color: "var(--text-dim)" }}>Master Stylists</p>
              </div>
            </motion.div>

            <div className="absolute -left-6 top-10 bottom-10 w-px hidden lg:block" style={{ background: "linear-gradient(to bottom, transparent, var(--gold-border), transparent)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
