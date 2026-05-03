"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, History, LogOut, Settings, User, TrendingUp, DollarSign, Plus } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingCard from "@/components/dashboard/BookingCard";
import { MOCK_BOOKINGS } from "@/data";
import type { Booking } from "@/types";

const upcoming = MOCK_BOOKINGS.filter((b) => ["confirmed", "pending"].includes(b.status));
const past = MOCK_BOOKINGS.filter((b) => ["completed", "cancelled"].includes(b.status));

export default function DashboardPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = tab === "upcoming" ? upcoming : past;

  const totalSpent = MOCK_BOOKINGS.reduce((a, b) => a + b.totalPrice, 0);

  const stats = [
    { icon: Calendar,    label: "Total Bookings", value: MOCK_BOOKINGS.length },
    { icon: TrendingUp,  label: "Upcoming",        value: upcoming.length },
    { icon: DollarSign,  label: "Total Spent",     value: `$${totalSpent}` },
  ];

  const navItems = [
    { icon: Calendar, label: "Appointments", id: "dash-appointments", active: true },
    { icon: User,     label: "Profile",       id: "dash-profile",      active: false },
    { icon: Settings, label: "Settings",      id: "dash-settings",     active: false },
  ];

  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">

            {/* ── Sidebar ─────────────────────────────────────────────── */}
            <aside className="space-y-4">
              {/* Profile card */}
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
                <div
                  className="mt-2 pt-4 text-[12px]"
                  style={{ borderTop: "1px solid var(--border-2)", color: "var(--text-dim)" }}
                >
                  Member since Jan 2023
                </div>
              </div>

              {/* Nav */}
              <nav
                className="rounded-sm overflow-hidden"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                {navItems.map(({ icon: Icon, label, id, active }) => (
                  <button
                    key={label}
                    id={id}
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
                ))}
                <div style={{ borderTop: "1px solid var(--border-2)" }}>
                  <button
                    id="dash-signout"
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-[13px] font-semibold transition-colors"
                    style={{ color: "var(--red)", background: "none" }}
                  >
                    <LogOut size={15} />
                    Sign Out
                  </button>
                </div>
              </nav>
            </aside>

            {/* ── Main Content ─────────────────────────────────────────── */}
            <div className="space-y-8">

              {/* Page header */}
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

              {/* Appointments */}
              <div>
                {/* Tab header */}
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

                {/* List */}
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
