"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, Check, Scissors,
  User, Calendar, Clock, ShieldCheck, ArrowRight, CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/shared/ServiceCard";
import StylistCard from "@/components/shared/StylistCard";
import { SERVICES, STYLISTS, BOOKING_STEPS, generateTimeSlots } from "@/data";
import type { BookingStep, BookingDraft, ServiceOption, Stylist } from "@/types";

const SLOTS = generateTimeSlots(9, 18, 30);
const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const MONTH_START = 4;

export default function BookingPage() {
  const [step, setStep] = useState<BookingStep>(1);
  const [draft, setDraft] = useState<BookingDraft>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const next = () => setStep((p) => Math.min(p + 1, 4) as BookingStep);
  const back = () => setStep((p) => Math.max(p - 1, 1) as BookingStep);
  const pickService = (s: ServiceOption) => { setDraft((d) => ({ ...d, service: s })); next(); };
  const pickStylist = (s: Stylist) => { setDraft((d) => ({ ...d, stylist: s })); next(); };
  const pickTime = (t: string) => { setDraft((d) => ({ ...d, time: t, date: d.date || "2024-11-15" })); next(); };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); }, 1800);
  };

  // Shared back button
  const BackBtn = () => (
    <button
      onClick={back}
      className="w-9 h-9 rounded flex items-center justify-center transition-all"
      style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
    >
      <ChevronLeft size={17} />
    </button>
  );

  if (success) return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="rounded-sm p-12 max-w-md w-full text-center space-y-6"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
            style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
            <CheckCircle size={30} style={{ color: "var(--gold)" }} />
          </div>
          <div>
            <h1 className="font-display text-[1.875rem] mb-2" style={{ color: "var(--text)" }}>Confirmed!</h1>
            <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Your <span style={{ color: "var(--text)" }}>{draft.service?.name}</span> with{" "}
              <span style={{ color: "var(--text)" }}>{draft.stylist?.name}</span> is booked for{" "}
              <span style={{ color: "var(--text)" }}>{draft.date} at {draft.time}</span>.
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <Link href="/dashboard" className="btn-primary w-full justify-center py-3.5">View My Appointments</Link>
            <Link href="/" className="btn-secondary w-full justify-center py-3.5">Back to Home</Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );

  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />

      {/* Step Bar */}
      <div className="pt-28 pb-10" style={{ backgroundColor: "var(--bg-subtle)", borderBottom: "1px solid var(--border-2)" }}>
        <div className="container-luxury max-w-3xl">
          <div className="flex items-center">
            {BOOKING_STEPS.map((s, i) => (
              <div key={s.number} className="flex items-center flex-1 last:flex-none">
                <div className="relative flex flex-col items-center">
                  <div className={`step-node ${step === s.number ? "step-node-active" : step > s.number ? "step-node-done" : "step-node-idle"}`}>
                    {step > s.number ? <Check size={14} /> : s.number}
                  </div>
                  <span className="absolute -bottom-7 text-[10px] font-bold uppercase tracking-[0.12em] whitespace-nowrap" style={{ color: "var(--text-dim)" }}>
                    {s.label}
                  </span>
                </div>
                {i < BOOKING_STEPS.length - 1 && (
                  <div className={`step-connector ${step > s.number ? "step-connector-done" : "step-connector-idle"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-luxury py-16 min-h-[60vh]">
        <AnimatePresence mode="wait">

          {/* Step 1 */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <h2 className="font-display text-[1.75rem] mb-8" style={{ color: "var(--text)" }}>Choose a Service</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((s) => <ServiceCard key={s.id} service={s} selected={draft.service?.id === s.id} onSelect={pickService} />)}
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <div className="flex items-center gap-4 mb-8"><BackBtn /><h2 className="font-display text-[1.75rem]" style={{ color: "var(--text)" }}>Choose Your Artist</h2></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {STYLISTS.map((s) => <StylistCard key={s.id} stylist={s} selected={draft.stylist?.id === s.id} onSelect={pickStylist} />)}
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <div className="flex items-center gap-4 mb-8"><BackBtn /><h2 className="font-display text-[1.75rem]" style={{ color: "var(--text)" }}>Date & Time</h2></div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-5">
                  {/* Calendar */}
                  <div className="rounded-sm p-6" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-[15px] flex items-center gap-2" style={{ color: "var(--text)" }}>
                        <Calendar size={15} style={{ color: "var(--gold)" }} />November 2024
                      </h3>
                      <div className="flex gap-1">
                        {[ChevronLeft, ChevronRight].map((Icon, i) => (
                          <button key={i} className="w-7 h-7 flex items-center justify-center rounded transition-colors"
                            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                            <Icon size={14} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d) => (
                        <div key={d} className="text-center text-[10px] font-bold uppercase tracking-[0.1em] py-1" style={{ color: "var(--text-dim)" }}>{d}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: MONTH_START }).map((_, i) => <div key={`e${i}`} />)}
                      {DAYS.map((day) => {
                        const val = `2024-11-${String(day).padStart(2, "0")}`;
                        const sel = draft.date === val;
                        return (
                          <button key={day} onClick={() => setDraft((d) => ({ ...d, date: val }))}
                            className="aspect-square flex items-center justify-center rounded text-[13px] font-medium transition-all"
                            style={{
                              backgroundColor: sel ? "var(--gold)" : "transparent",
                              color: sel ? "#080808" : "var(--text-muted)",
                              fontWeight: sel ? 700 : 500,
                            }}>
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="rounded-sm p-6" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                    <h3 className="font-semibold text-[15px] flex items-center gap-2 mb-5" style={{ color: "var(--text)" }}>
                      <Clock size={15} style={{ color: "var(--gold)" }} />Available Slots
                    </h3>
                    <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                      {SLOTS.map((t) => {
                        const sel = draft.time === t;
                        return (
                          <button key={t} onClick={() => pickTime(t)}
                            className="py-2.5 rounded text-[12px] font-bold transition-all"
                            style={{
                              backgroundColor: sel ? "var(--gold)" : "transparent",
                              border: `1px solid ${sel ? "var(--gold)" : "var(--border)"}`,
                              color: sel ? "#080808" : "var(--text-muted)",
                            }}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Summary Sidebar */}
                <div>
                  <div className="rounded-sm p-6 space-y-5 sticky top-28"
                    style={{ background: "linear-gradient(135deg, var(--gold-alpha), rgba(184,148,31,0.02))", border: "1px solid var(--gold-border)" }}>
                    <h3 className="font-display text-[1.125rem] pb-4" style={{ color: "var(--text)", borderBottom: "1px solid var(--gold-border)" }}>Summary</h3>
                    {[
                      { Icon: Scissors, label: "Service", val: draft.service?.name ?? "—" },
                      { Icon: User, label: "Artist", val: draft.stylist?.name ?? "—" },
                      { Icon: Calendar, label: "Date", val: draft.date ?? "—" },
                    ].map(({ Icon, label, val }) => (
                      <div key={label} className="flex gap-3">
                        <Icon size={14} className="mt-0.5 shrink-0" style={{ color: "var(--gold)" }} />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--gold)" }}>{label}</p>
                          <p className="text-[13px] mt-0.5" style={{ color: "var(--text)" }}>{val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
              <div className="flex items-center gap-4 mb-8"><BackBtn /><h2 className="font-display text-[1.75rem]" style={{ color: "var(--text)" }}>Your Details</h2></div>
              <div className="grid lg:grid-cols-5 gap-10">
                <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[["First Name","Alexandra"],["Last Name","Mills"]].map(([l, ph]) => (
                      <div key={l} className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>{l}</label>
                        <input type="text" required className="input-field" placeholder={ph} />
                      </div>
                    ))}
                  </div>
                  {[
                    { l: "Email", ph: "alex@example.com", t: "email" },
                    { l: "Phone", ph: "+44 7700 900000", t: "tel" },
                  ].map(({ l, ph, t }) => (
                    <div key={l} className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>{l}</label>
                      <input type={t} required className="input-field" placeholder={ph} />
                    </div>
                  ))}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>Notes (Optional)</label>
                    <textarea rows={3} className="input-field resize-none" placeholder="Any allergies or special requests..." />
                  </div>
                  <div className="flex gap-3 p-4 rounded" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                    <ShieldCheck size={15} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                    <p className="text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      By booking you agree to our 24-hour cancellation policy.
                    </p>
                  </div>
                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-4">
                    {submitting ? "Confirming..." : "Confirm Appointment"}
                    {!submitting && <ArrowRight size={15} />}
                  </button>
                </form>

                <div className="lg:col-span-2">
                  <div className="rounded-sm p-6 space-y-4 sticky top-28" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                    <h3 className="font-display text-[1.125rem] pb-4" style={{ color: "var(--text)", borderBottom: "1px solid var(--border-2)" }}>Order Summary</h3>
                    <div className="space-y-3">
                      {[
                        { l: draft.service?.name || "—", v: `$${draft.service?.price ?? 0}` },
                        { l: `Artist · ${draft.stylist?.name || "—"}`, v: "Included" },
                        { l: "Booking Fee", v: "$0" },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-[13px]">
                          <span style={{ color: "var(--text-muted)" }}>{l}</span>
                          <span style={{ color: "var(--text)" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex justify-between items-center" style={{ borderTop: "1px solid var(--border-2)" }}>
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--gold)" }}>Total</span>
                      <span className="font-display text-[1.75rem] font-semibold" style={{ color: "var(--text)" }}>${draft.service?.price ?? 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </main>
  );
}
