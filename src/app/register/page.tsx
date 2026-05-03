"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, User, Eye, EyeOff, Scissors, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const benefits = [
    "Manage bookings effortlessly",
    "Exclusive member-only rewards",
    "Track your style history",
    "Priority stylist access"
  ];

  return (
    <main className="min-h-screen flex bg-luxury-dark overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Left Side: Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative z-10">
        <div className="max-w-[400px] w-full mx-auto space-y-8">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
              <Scissors size={20} style={{ color: "var(--gold)" }} />
            </div>
            <span className="font-display text-[20px] font-bold tracking-tight uppercase" style={{ color: "var(--text)" }}>Aurore</span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-display text-[32px] tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              Create <span className="text-gold-gradient italic">Account</span>
            </h1>
            <p className="text-[14px]" style={{ color: "var(--text-muted)" }}>
              Join our exclusive club and start your beauty journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>First Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-gold" size={16} style={{ color: "var(--text-dim)" }} />
                    <input
                      type="text"
                      placeholder="Jane"
                      required
                      className="w-full h-12 pl-11 pr-4 rounded-sm bg-transparent border transition-all outline-none text-[14px]"
                      style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Last Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Doe"
                      required
                      className="w-full h-12 px-4 rounded-sm bg-transparent border transition-all outline-none text-[14px]"
                      style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-gold" size={16} style={{ color: "var(--text-dim)" }} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="w-full h-12 pl-11 pr-4 rounded-sm bg-transparent border transition-all outline-none text-[14px]"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-gold" size={16} style={{ color: "var(--text-dim)" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="w-full h-12 pl-11 pr-11 rounded-sm bg-transparent border transition-all outline-none text-[14px]"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors hover:text-gold"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="terms" required className="mt-1 accent-gold" />
              <label htmlFor="terms" className="text-[12px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I agree to the <Link href="/terms" className="underline hover:text-gold transition-colors">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-gold transition-colors">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full h-12 justify-center text-[14px] font-bold tracking-wide mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <p className="text-center text-[14px]" style={{ color: "var(--text-muted)" }}>
            Already have an account?{" "}
            <Link href="/login" className="font-bold hover:text-gold transition-colors" style={{ color: "var(--gold)" }}>Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Benefits/Branding */}
      <div className="hidden lg:block lg:w-[55%] relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="/images/services/skin.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury Salon Treatment"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/20 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex flex-col justify-center px-24 space-y-12">
          <div className="space-y-6">
            <div className="eyebrow !text-white !bg-gold/20 !border-gold/30">Join the Elite</div>
            <h2 className="font-display text-[56px] text-white leading-tight">
              A World of <br />
              <span className="italic text-gold-gradient">Beauty</span> Awaits.
            </h2>
          </div>

          <div className="space-y-5">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-4 text-white/90 group">
                <div className="w-6 h-6 rounded-full flex items-center justify-center transition-colors group-hover:bg-gold" style={{ border: "1px solid var(--gold)" }}>
                  <CheckCircle2 size={12} className="text-gold group-hover:text-black" />
                </div>
                <span className="text-[15px] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
