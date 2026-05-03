"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, Eye, EyeOff, Scissors } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <main className="min-h-screen flex bg-luxury-dark overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Left Side: Form */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-12 relative z-10">
        <div className="max-w-[400px] w-full mx-auto space-y-10">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
              <Scissors size={20} style={{ color: "var(--gold)" }} />
            </div>
            <span className="font-display text-[20px] font-bold tracking-tight uppercase" style={{ color: "var(--text)" }}>Aurore</span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-display text-[32px] tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              Welcome <span className="text-gold-gradient italic">Back</span>
            </h1>
            <p className="text-[14px]" style={{ color: "var(--text-muted)" }}>
              Please enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-gold" size={18} style={{ color: "var(--text-dim)" }} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="w-full h-14 pl-12 pr-4 rounded-sm bg-transparent border transition-all outline-none"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Password</label>
                  <Link href="/forgot-password" className="text-[12px] font-semibold hover:text-gold transition-colors" style={{ color: "var(--gold)" }}>Forgot Password?</Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors group-focus-within:text-gold" size={18} style={{ color: "var(--text-dim)" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    className="w-full h-14 pl-12 pr-12 rounded-sm bg-transparent border transition-all outline-none"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors hover:text-gold"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full h-14 justify-center text-[15px] font-bold tracking-wide"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>Sign In <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
            <span className="text-[12px] uppercase font-bold tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Or continue with</span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-12 rounded-sm border flex items-center justify-center gap-3 transition-all hover:bg-white/5" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
              <Image src="https://www.google.com/favicon.ico" width={16} height={16} className="grayscale" alt="Google" />
              <span className="text-[13px] font-semibold">Google</span>
            </button>
            <button className="h-12 rounded-sm border flex items-center justify-center gap-3 transition-all hover:bg-white/5" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
              <Image src="https://www.apple.com/favicon.ico" width={16} height={16} className="grayscale invert" alt="Apple" />
              <span className="text-[13px] font-semibold">Apple</span>
            </button>
          </div>

          <p className="text-center text-[14px]" style={{ color: "var(--text-muted)" }}>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-bold hover:text-gold transition-colors" style={{ color: "var(--gold)" }}>Sign up for free</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Image/Branding */}
      <div className="hidden lg:block lg:w-[55%] relative overflow-hidden bg-surface-2">
        <Image
          src="/images/hero.png"
          alt="Luxury Salon Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute bottom-20 left-20 right-20 space-y-6">
          <div className="eyebrow !text-white !bg-gold/20 !border-gold/30">Luxe Membership</div>
          <h2 className="font-display text-[48px] text-white leading-tight">
            Elevate Your <span className="italic">Self-Care</span> <br />
            Experience.
          </h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Scissors key={i} size={14} style={{ color: "var(--gold)" }} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
