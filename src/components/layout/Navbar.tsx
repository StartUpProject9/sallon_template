"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Scissors, Phone } from "lucide-react";
import { NAV_LINKS } from "@/data";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY.current && y > 100);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 95%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-2)" : "1px solid transparent",
        }}
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300"
                style={{ border: "1px solid var(--gold-border)" }}
              >
                <Scissors size={15} style={{ color: "var(--gold)" }} className="rotate-45" />
              </div>
              <span className="font-display text-xl tracking-tight">
                <span style={{ color: "var(--text)" }} className="font-semibold">Luxe</span>
                <span style={{ color: "var(--gold)" }} className="font-light tracking-[0.12em] ml-0.5"> Salon</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  style={{
                    color: active(link.href) ? "var(--gold)" : "var(--text-muted)",
                  }}
                  className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 group hover:opacity-80"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px scale-x-0 transition-transform duration-300 origin-center ${
                      active(link.href) ? "scale-x-100" : "group-hover:scale-x-100"
                    }`}
                    style={{ backgroundColor: "var(--gold)", opacity: 0.6 }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+441234567890"
                className="hidden lg:flex items-center gap-2 text-[13px] transition-colors"
                style={{ color: "var(--text-dim)" }}
                id="nav-phone"
              >
                <Phone size={13} />
                +44 123 456 7890
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />

              <Link
                href="/booking"
                id="nav-book"
                className="hidden md:flex btn-primary py-2.5 px-5 text-[12px]"
              >
                Book Now
              </Link>

              <button
                id="nav-menu-toggle"
                onClick={() => setOpen(!open)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded transition-all"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={19} />
                    </motion.span>
                  ) : (
                    <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={19} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mob"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: "var(--bg)", backdropFilter: "blur(24px)" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
          >
            <div
              className="flex items-center justify-between px-6 h-[72px]"
              style={{ borderBottom: "1px solid var(--border-2)" }}
            >
              <Link href="/" className="flex items-center gap-3">
                <Scissors size={15} style={{ color: "var(--gold)" }} className="rotate-45" />
                <span className="font-display text-xl">
                  <span style={{ color: "var(--text)" }} className="font-semibold">Luxe</span>
                  <span style={{ color: "var(--gold)" }} className="font-light ml-0.5 tracking-[0.12em]"> Salon</span>
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button onClick={() => setOpen(false)} style={{ color: "var(--text-muted)" }} aria-label="Close">
                  <X size={20} />
                </button>
              </div>
            </div>

            <nav className="flex flex-col flex-1 px-6 py-10 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    id={`mob-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    style={{
                      color: active(link.href) ? "var(--gold)" : "var(--text-muted)",
                      borderBottom: "1px solid var(--border-2)",
                    }}
                    className="flex items-center justify-between py-5 text-xl font-display font-medium"
                  >
                    {link.label}
                    {active(link.href) && <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--gold)" }} />}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-10 space-y-3">
              <Link href="/booking" className="btn-primary w-full justify-center py-4">Book Your Appointment</Link>
              <a href="tel:+441234567890" className="flex items-center justify-center gap-2 text-sm" style={{ color: "var(--text-dim)" }}>
                <Phone size={14} />
                +44 123 456 7890
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
