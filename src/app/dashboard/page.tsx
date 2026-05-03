"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, History, LogOut, Settings, User, TrendingUp, DollarSign, Plus, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingCard from "@/components/dashboard/BookingCard";
import { MOCK_BOOKINGS } from "@/data";
import type { Booking } from "@/types";

const upcoming = MOCK_BOOKINGS.filter((b) => ["confirmed", "pending"].includes(b.status));
const past = MOCK_BOOKINGS.filter((b) => ["completed", "cancelled"].includes(b.status));

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<string>("dash-appointments");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = tab === "upcoming" ? upcoming : past;

  const totalSpent = MOCK_BOOKINGS.reduce((a, b) => a + b.totalPrice, 0);

  const stats = [
    { icon: Calendar,    label: "Total Bookings", value: MOCK_BOOKINGS.length },
    { icon: TrendingUp,  label: "Upcoming",        value: upcoming.length },
    { icon: DollarSign,  label: "Total Spent",     value: `$${totalSpent}` },
  ];

  const navItems = [
    { icon: Calendar, label: "Appointments", id: "dash-appointments" },
    { icon: User,     label: "Profile",       id: "dash-profile" },
    { icon: Settings, label: "Settings",      id: "dash-settings" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dash-profile":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-[1.5rem]" style={{ color: "var(--text)" }}>Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { l: "Full Name", v: "Alexandra Mills" },
                { l: "Email", v: "alexandra.mills@example.com" },
                { l: "Phone", v: "+44 7700 900123" },
                { l: "Member Since", v: "January 15, 2023" },
              ].map(({ l, v }) => (
                <div key={l} className="p-5 rounded-sm" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--gold)" }}>{l}</p>
                  <p className="text-[15px] mt-1" style={{ color: "var(--text)" }}>{v}</p>
                </div>
              ))}
            </div>
            <button className="btn-secondary py-3 px-8 text-[13px]">Edit Profile</button>
          </motion.div>
        );
      case "dash-settings":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-[1.5rem]" style={{ color: "var(--text)" }}>Account Settings</h2>
            <div className="space-y-4">
              {[
                "Email Notifications",
                "SMS Reminders",
                "Two-Factor Authentication",
                "Dark Mode Sync",
              ].map((s) => (
                <div key={s} className="flex items-center justify-between p-5 rounded-sm" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                  <span className="text-[14px]" style={{ color: "var(--text)" }}>{s}</span>
                  <div className="w-10 h-5 rounded-full relative bg-gold-alpha" style={{ border: "1px solid var(--gold-border)" }}>
                    <div className="absolute right-1 top-1 w-3 h-3 rounded-full bg-gold" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-sm p-5 space-y-3 transition-all duration-300"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center"
                    style={{ border: "1px solid var(--border)", backgroundColor: "var(--gold-alpha)" }}
                  >
                    <Icon size={15} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {label}
                    </p>
                    <p className="font-display text-[1.5rem] font-semibold mt-0.5" style={{ color: "var(--text)" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Loyalty Card */}
            <div className="rounded-sm p-8 flex flex-col md:flex-row items-center gap-8" 
                 style={{ background: "linear-gradient(135deg, var(--gold-alpha), rgba(184,148,31,0.05))", border: "1px solid var(--gold-border)" }}>
              <div className="flex-1 space-y-3">
                <div className="eyebrow !bg-gold/20 !border-gold/30">Loyalty Rewards</div>
                <h3 className="font-display text-[1.5rem]" style={{ color: "var(--text)" }}>You're almost there!</h3>
                <p className="text-[14px]" style={{ color: "var(--text-muted)" }}>
                  You have <span className="font-bold" style={{ color: "var(--gold)" }}>850 points</span>. 
                  Only 150 more points until your next free <span className="italic">HydraFacial</span>.
                </p>
                <div className="w-full h-1.5 bg-black/20 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-gold" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="w-32 h-32 rounded-full border-4 flex items-center justify-center relative" style={{ borderColor: "var(--gold-border)" }}>
                <span className="font-display text-3xl font-bold" style={{ color: "var(--gold)" }}>85%</span>
                <div className="absolute -bottom-2 bg-gold text-black text-[9px] font-black px-2 py-0.5 rounded uppercase">Level 4</div>
              </div>
            </div>

            {/* Appointments */}
            <div>
              <div
                className="flex items-center justify-between mb-5 pb-5"
                style={{ borderBottom: "1px solid var(--border-2)" }}
              >
                <h2 className="font-display text-[1.25rem]" style={{ color: "var(--text)" }}>
                  Appointments
                </h2>
                <div
                  className="flex p-1 rounded-sm"
                  style={{ backgroundColor: "var(--surface-2)", border: "1px solid var(--border)" }}
                >
                  {(["upcoming", "past"] as const).map((t) => (
                    <button
                      key={t}
                      id={`tab-${t}`}
                      onClick={() => setTab(t)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
                      style={
                        tab === t
                          ? { backgroundColor: "var(--gold)", color: "#080808" }
                          : { color: "var(--text-dim)", backgroundColor: "transparent" }
                      }
                    >
                      {t === "upcoming" ? <Calendar size={11} /> : <History size={11} />}
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {list.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {list.map((b: Booking) => (
                    <BookingCard key={b.id} booking={b} variant={tab} />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-sm py-20 text-center"
                  style={{
                    border: "1px dashed var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <p className="text-[14px] italic" style={{ color: "var(--text-dim)" }}>
                    No {tab} appointments.
                  </p>
                  {tab === "upcoming" && (
                    <Link
                      href="/booking"
                      className="inline-flex btn-primary mt-6 py-2.5 px-6 text-[12px]"
                    >
                      Book Now
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Recommended Section */}
            <div className="pt-8 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-[1.25rem]" style={{ color: "var(--text)" }}>Recommended for You</h2>
                <Link href="/services" className="text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--gold)" }}>View All Services</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Balayage Transformation", duration: "180 min", price: "£145", img: "/images/services/skin.jpg" },
                  { name: "Luxury Manicure", duration: "60 min", price: "£45", img: "/images/services/nails.jpg" }
                ].map((s) => (
                  <div key={s.name} className="group relative rounded-sm overflow-hidden aspect-[16/9] flex items-end p-6 cursor-pointer" style={{ border: "1px solid var(--border)" }}>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="relative w-full flex items-center justify-between text-white">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--gold)" }}>{s.duration} • {s.price}</p>
                        <h4 className="font-display text-[1.125rem] mt-1">{s.name}</h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center transition-colors group-hover:bg-gold group-hover:text-black">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">

            {/* Sidebar */}
            <aside className="space-y-4">
              <div
                className="rounded-sm p-6 text-center space-y-3"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl font-semibold mx-auto"
                  style={{
                    backgroundColor: "var(--gold-alpha)",
                    border: "1px solid var(--gold-border)",
                    color: "var(--gold)",
                  }}
                >
                  AM
                </div>
                <div>
                  <p className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>Alexandra Mills</p>
                  <p
                    className="text-[11px] uppercase tracking-[0.14em] font-bold mt-1"
                    style={{ color: "var(--gold)" }}
                  >
                    Gold Member
                  </p>
                </div>
              </div>

              <nav
                className="rounded-sm overflow-hidden"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {navItems.map(({ icon: Icon, label, id }) => {
                  const active = activeTab === id;
                  return (
                    <button
                      key={id}
                      id={id}
                      onClick={() => setActiveTab(id)}
                      className="w-full flex items-center gap-3 px-4 py-3.5 text-[13px] font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: active ? "var(--gold-alpha)" : "transparent",
                        color: active ? "var(--gold)" : "var(--text-muted)",
                        borderLeft: active ? `2px solid var(--gold)` : "2px solid transparent",
                      }}
                    >
                      <Icon size={15} />
                      {label}
                    </button>
                  );
                })}
                <div style={{ borderTop: "1px solid var(--border-2)" }}>
                  <Link
                    href="/"
                    id="dash-signout"
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-[13px] font-semibold transition-colors"
                    style={{ color: "var(--red)", background: "none" }}
                  >
                    <LogOut size={15} />
                    Sign Out
                  </Link>
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-display text-[1.875rem] leading-tight" style={{ color: "var(--text)" }}>
                    My Dashboard
                  </h1>
                  <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>
                    Manage your appointments and preferences
                  </p>
                </div>
                <Link href="/booking" className="btn-primary py-2.5 px-5 text-[12px]">
                  <Plus size={14} />
                  New Booking
                </Link>
              </div>

              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
