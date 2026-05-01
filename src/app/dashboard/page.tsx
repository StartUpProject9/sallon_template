"use client";

import { useState } from "react";
import { Calendar, History, LogOut, Settings, User, TrendingUp, DollarSign } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingCard from "@/components/dashboard/BookingCard";
import { MOCK_BOOKINGS } from "@/data";

const upcoming = MOCK_BOOKINGS.filter((b) => ["confirmed","pending"].includes(b.status));
const past = MOCK_BOOKINGS.filter((b) => ["completed","cancelled"].includes(b.status));

export default function DashboardPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = tab === "upcoming" ? upcoming : past;

  const stats = [
    { icon: Calendar, label: "Total Bookings", value: MOCK_BOOKINGS.length },
    { icon: TrendingUp, label: "Upcoming", value: upcoming.length },
    { icon: DollarSign, label: "Total Spent", value: `$${MOCK_BOOKINGS.reduce((a, b) => a + b.totalPrice, 0)}` },
  ];

  const navItems = [
    { icon: Calendar, label: "Appointments", active: true },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Profile */}
              <div className="card p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-ink-4 border border-gold/20 flex items-center justify-center font-display text-2xl font-semibold text-gold mx-auto">
                  AM
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-silk">Alexandra Mills</p>
                  <p className="text-[11px] text-gold/50 uppercase tracking-[0.14em] font-bold mt-0.5">Gold Member</p>
                </div>
              </div>

              {/* Nav */}
              <nav className="space-y-1">
                {navItems.map(({ icon: Icon, label, active }) => (
                  <button
                    key={label}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-semibold transition-all duration-200 ${
                      active
                        ? "bg-gold/10 text-gold border border-gold/20"
                        : "text-silk/35 hover:text-silk hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <Icon size={15} />
                    {label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 text-[13px] font-semibold text-red-400/40 hover:text-red-400 transition-colors mt-6">
                  <LogOut size={15} />
                  Sign Out
                </button>
              </nav>
            </aside>

            {/* Main */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="card p-5 space-y-3">
                    <div className="w-8 h-8 rounded border border-white/[0.07] flex items-center justify-center">
                      <Icon size={15} className="text-gold/60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-silk/25">{label}</p>
                      <p className="font-display text-[1.5rem] text-silk font-semibold mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Appointment Tabs */}
              <div>
                <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/[0.06]">
                  <h2 className="font-display text-[1.25rem] text-silk">Appointments</h2>
                  <div className="flex p-1 bg-ink-2 rounded-sm border border-white/[0.06]">
                    {(["upcoming", "past"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded text-[11px] font-bold uppercase tracking-[0.1em] transition-all ${
                          tab === t ? "bg-gold text-ink shadow-sm" : "text-silk/30 hover:text-silk"
                        }`}
                      >
                        {t === "upcoming" ? <Calendar size={11} /> : <History size={11} />}
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {list.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {list.map((b) => (
                      <BookingCard key={b.id} booking={b} variant={tab} />
                    ))}
                  </div>
                ) : (
                  <div className="card border-dashed py-20 text-center">
                    <p className="text-[14px] text-silk/20 italic">No appointments found.</p>
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
