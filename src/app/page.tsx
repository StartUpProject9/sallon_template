import Link from "next/link";
import { ArrowRight, Scissors, Wind, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import StylistCard from "@/components/shared/StylistCard";
import TestimonialCard from "@/components/home/TestimonialCard";
import { SERVICES, STYLISTS, TESTIMONIALS } from "@/data";

const featured = SERVICES.filter((s) => s.popular).slice(0, 3);
const stylists = STYLISTS.filter((s) => s.featured).slice(0, 3);
const features = [
  { icon: Scissors, title: "Precision Artistry", text: "Every treatment delivered with uncompromising technique and a refined eye for detail." },
  { icon: Sparkles, title: "Premium Products", text: "We exclusively use professional-grade products from global beauty industry leaders." },
  { icon: Wind, title: "Tranquil Atmosphere", text: "A minimalist sanctuary designed for total relaxation and sensory indulgence." },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)" }} className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Services */}
      <section className="section-luxury" style={{ backgroundColor: "var(--bg-subtle)" }}>
        <div className="container-luxury">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14">
            <div>
              <div className="eyebrow mb-4">Signature Services</div>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em] leading-tight" style={{ color: "var(--text)" }}>
                Curated Treatments
              </h2>
            </div>
            <Link href="/services" className="btn-ghost shrink-0">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-14 rounded-sm overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="px-8 py-8" style={{ backgroundColor: "var(--bg-subtle)" }}>
                <div className="w-9 h-9 rounded flex items-center justify-center mb-5" style={{ border: "1px solid var(--gold-border)" }}>
                  <Icon size={17} style={{ color: "var(--gold)" }} />
                </div>
                <h4 className="font-semibold text-[14px] mb-2" style={{ color: "var(--text)" }}>{title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists */}
      <section className="section-luxury" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-luxury">
          <div className="text-center mb-14">
            <div className="eyebrow justify-center mb-4">Our Team</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em]" style={{ color: "var(--text)" }}>
              Master Artisans
            </h2>
            <p className="text-[14px] mt-4 max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Award-winning artists bringing international expertise and refined vision to every chair.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stylists.map((s) => <StylistCard key={s.id} stylist={s} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-luxury" style={{ backgroundColor: "var(--bg-subtle)" }}>
        <div className="container-luxury">
          <div className="mb-14">
            <div className="eyebrow mb-4">Client Stories</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.02em]" style={{ color: "var(--text)" }}>
              What They Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.slice(0, 3).map((t) => <TestimonialCard key={t.id} testimonial={t} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-luxury" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container-luxury">
          <div className="card-gold rounded-sm px-8 py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, var(--gold-alpha) 0%, transparent 70%)" }} />
            <div className="relative z-10 space-y-6 max-w-xl mx-auto">
              <div className="eyebrow justify-center">Reserve Your Moment</div>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] italic leading-tight" style={{ color: "var(--text)" }}>
                Ready for Your<br />
                <span className="not-italic font-semibold text-gold-gradient">Transformation?</span>
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Secure your appointment with one of our master stylists and experience the Luxe Salon difference.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link href="/booking" className="btn-primary px-10 py-4">Book Now <ArrowRight size={15} /></Link>
                <Link href="/services" className="btn-secondary px-10 py-4">Explore Treatments</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
