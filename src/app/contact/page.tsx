"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="eyebrow">Connect With Us</div>
                <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-tight" style={{ color: "var(--text)" }}>
                  Get in <span className="text-gold-gradient italic">Touch</span>
                </h1>
                <p className="text-[15px] leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
                  Have a question about our services or want to book a private event? Our team is here to assist you in creating your perfect experience.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                    <MapPin size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px]" style={{ color: "var(--text)" }}>Our Location</h4>
                    <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>124 Mayfair Street,<br />London, W1J 7JZ</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                    <Phone size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px]" style={{ color: "var(--text)" }}>Call Us</h4>
                    <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>+44 20 7123 4567<br />+44 20 7987 6543</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                    <Mail size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px]" style={{ color: "var(--text)" }}>Email Us</h4>
                    <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>concierge@aurore.com<br />bookings@aurore.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}>
                    <Clock size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px]" style={{ color: "var(--text)" }}>Hours</h4>
                    <p className="text-[13px] mt-1" style={{ color: "var(--text-muted)" }}>Mon - Sat: 9am - 8pm<br />Sun: 10am - 6pm</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <p className="text-[12px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--text-dim)" }}>Follow our story</p>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-sm border flex items-center justify-center transition-all hover:border-gold group" style={{ borderColor: "var(--border)" }}>
                      <Icon size={16} className="transition-colors group-hover:text-gold" style={{ color: "var(--text-dim)" }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 lg:p-12 space-y-8"
            >
              <div className="space-y-2">
                <h3 className="font-display text-[24px]" style={{ color: "var(--text)" }}>Send a Message</h3>
                <p className="text-[13px]" style={{ color: "var(--text-muted)" }}>Fields marked with * are required.</p>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Full Name *</label>
                    <input type="text" required className="w-full h-12 px-4 rounded-sm bg-transparent border outline-none transition-all focus:border-gold" style={{ borderColor: "var(--border)", color: "var(--text)" }} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Email Address *</label>
                    <input type="email" required className="w-full h-12 px-4 rounded-sm bg-transparent border outline-none transition-all focus:border-gold" style={{ borderColor: "var(--border)", color: "var(--text)" }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Subject</label>
                  <select className="w-full h-12 px-4 rounded-sm bg-transparent border outline-none transition-all focus:border-gold" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                    <option>General Inquiry</option>
                    <option>Booking Question</option>
                    <option>Career Opportunities</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--text-dim)" }}>Message *</label>
                  <textarea required rows={5} className="w-full p-4 rounded-sm bg-transparent border outline-none transition-all focus:border-gold resize-none" style={{ borderColor: "var(--border)", color: "var(--text)" }}></textarea>
                </div>

                <button type="submit" className="btn-primary w-full h-14 justify-center text-[14px] font-bold tracking-widest uppercase">
                  Send Message <Send size={16} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
