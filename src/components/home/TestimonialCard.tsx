import { Star, Quote } from "lucide-react";
import type { TestimonialCardProps } from "@/types";

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="relative rounded-sm flex flex-col gap-6 transition-all duration-300"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "2rem",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            style={i < testimonial.rating
              ? { fill: "var(--gold)", color: "var(--gold)" }
              : { fill: "var(--border)", color: "var(--border)" }
            }
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <Quote size={28} className="absolute -top-2 -left-1" style={{ color: "var(--gold-alpha)" }} />
        <p className="font-serif italic text-[15px] leading-[1.8] pl-4" style={{ color: "var(--text-muted)" }}>
          {testimonial.text}
        </p>
      </div>

      {/* Author */}
      <div className="mt-auto pt-5 flex items-center gap-3.5" style={{ borderTop: "1px solid var(--border-2)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-[15px]"
          style={{
            backgroundColor: "var(--surface-2)",
            border: "1px solid var(--border)",
            color: "var(--gold)",
          }}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[13px] font-semibold" style={{ color: "var(--text)" }}>{testimonial.name}</p>
          <p className="text-[11px] uppercase tracking-[0.12em] font-bold mt-0.5" style={{ color: "var(--gold)" }}>
            {testimonial.service}
          </p>
        </div>
      </div>
    </div>
  );
}
