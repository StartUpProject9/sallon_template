import Link from "next/link";
import { Scissors, MapPin, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { NAV_LINKS } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ backgroundColor: "var(--bg-subtle)", borderTop: "1px solid var(--border-2)" }}>
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-16">

          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ border: "1px solid var(--gold-border)" }}>
                <Scissors size={14} style={{ color: "var(--gold)" }} className="rotate-45" />
              </div>
              <span className="font-display text-xl">
                <span style={{ color: "var(--text)" }} className="font-semibold">Luxe</span>
                <span style={{ color: "var(--gold)" }} className="font-light tracking-[0.12em] ml-0.5"> Salon</span>
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed max-w-[260px]" style={{ color: "var(--text-muted)" }}>
              Where artistry meets luxury. Bespoke beauty treatments crafted for the discerning individual.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded flex items-center justify-center transition-all duration-300 hover:opacity-100"
                  style={{ border: "1px solid var(--border)", color: "var(--text-dim)" }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "var(--text-dim)" }}>Navigation</p>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[14px] transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "var(--text-dim)" }}>Hours</p>
            <ul className="space-y-3">
              {[
                { day: "Mon – Fri", hours: "09:00 – 20:00" },
                { day: "Saturday", hours: "09:00 – 18:00" },
                { day: "Sunday", hours: "Closed" },
              ].map((row) => (
                <li key={row.day} className="flex justify-between gap-4 text-[13px]">
                  <span style={{ color: "var(--text-muted)" }}>{row.day}</span>
                  <span style={{ color: row.hours === "Closed" ? "var(--text-dim)" : "var(--gold)", fontWeight: row.hours === "Closed" ? 400 : 600 }}>
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-6" style={{ color: "var(--text-dim)" }}>Contact</p>
            <ul className="space-y-4">
              {[
                { Icon: MapPin, content: <span>123 Mayfair Avenue<br />London, W1K 7QE</span>, href: undefined },
                { Icon: Phone, content: "+44 123 456 7890", href: "tel:+441234567890" },
                { Icon: Mail, content: "hello@luxesalon.com", href: "mailto:hello@luxesalon.com" },
              ].map(({ Icon, content, href }, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Icon size={15} style={{ color: "var(--gold)" }} className="mt-0.5 shrink-0" />
                  {href ? (
                    <a href={href} className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{content}</a>
                  ) : (
                    <span className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-2)" }}>
        <div className="container-luxury py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "var(--text-dim)" }}>© {year} Luxe Salon. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((t) => (
              <a key={t} href="#" className="text-[12px] transition-colors" style={{ color: "var(--text-dim)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
