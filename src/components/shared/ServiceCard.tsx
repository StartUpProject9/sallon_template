"use client";

import { Clock, Star } from "lucide-react";
import Image from "next/image";
import type { ServiceCardProps } from "@/types";

const CATEGORY_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  hair:     { color: "var(--gold)",  bg: "var(--gold-alpha)",       border: "var(--gold-border)" },
  skin:     { color: "var(--green)", bg: "rgba(91,190,160,0.1)",    border: "rgba(91,190,160,0.3)" },
  nails:    { color: "var(--amber)", bg: "rgba(240,169,64,0.1)",    border: "rgba(240,169,64,0.3)" },
  wellness: { color: "var(--text-dim)", bg: "var(--overlay)", border: "var(--border)" },
};

export default function ServiceCard({ service, selected, onSelect }: ServiceCardProps) {
  const cat = CATEGORY_STYLES[service.category] || CATEGORY_STYLES.wellness;

  return (
    <div
      onClick={() => onSelect?.(service)}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.(service)}
      className="group relative rounded-sm cursor-pointer transition-all duration-300 overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        border: `1px solid ${selected ? "var(--gold-border)" : "var(--border)"}`,
        boxShadow: selected ? "0 0 0 1px var(--gold-alpha)" : "none",
      }}
    >
      {/* Image if provided */}
      {service.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div style={{ padding: "1.5rem" }}>
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: "var(--gold)", backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}
          >
            <Star size={8} style={{ fill: "var(--gold)", color: "var(--gold)" }} />
            Popular
          </span>
        </div>
      )}

      {/* Category tag */}
      <div className="mb-5">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: cat.color, backgroundColor: cat.bg, border: `1px solid ${cat.border}` }}
        >
          {service.category}
        </span>
      </div>

      {/* Name + Price */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="font-display text-[1.125rem] leading-tight transition-colors duration-200"
          style={{ color: selected ? "var(--gold)" : "var(--text)" }}
        >
          {service.name}
        </h3>
        <p className="font-display text-[1.375rem] font-semibold whitespace-nowrap" style={{ color: "var(--gold)" }}>
          ${service.price}
        </p>
      </div>

      <p className="text-[13px] leading-relaxed mb-6 line-clamp-2" style={{ color: "var(--text-muted)" }}>
        {service.description}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
        <Clock size={12} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em]">{service.duration} min</span>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, var(--gold-border), transparent)",
          opacity: selected ? 1 : 0,
        }}
      />
      </div>
    </div>
  );
}
