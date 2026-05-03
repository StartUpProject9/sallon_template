"use client";

import { Star, Award } from "lucide-react";
import type { StylistCardProps } from "@/types";

export default function StylistCard({ stylist, selected, onSelect }: StylistCardProps) {
  return (
    <div
      onClick={() => onSelect?.(stylist)}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.(stylist)}
      className="group rounded-sm overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: "var(--surface)",
        border: `1px solid ${selected ? "var(--gold-border)" : "var(--border)"}`,
        boxShadow: selected ? "0 0 0 1px var(--gold-alpha)" : "none",
      }}
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: "var(--surface-2)" }}>
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to top, var(--surface) 0%, transparent 60%)" }}
        />

        {/* Image */}
        <img
          src={stylist.image}
          alt={stylist.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Featured badge */}
        {stylist.featured && (
          <div className="absolute top-3 left-3 z-20">
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "var(--gold)", backgroundColor: "var(--gold-alpha)", border: "1px solid var(--gold-border)" }}
            >
              <Award size={9} />
              Featured
            </span>
          </div>
        )}

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
          <h3 className="font-display text-[1.125rem] leading-tight transition-colors" style={{ color: "var(--text)" }}>
            {stylist.name}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.14em] mt-1 font-semibold" style={{ color: "var(--text-dim)" }}>
            {stylist.role}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  style={i < Math.floor(stylist.rating)
                    ? { fill: "var(--gold)", color: "var(--gold)" }
                    : { fill: "var(--border)", color: "var(--border)" }
                  }
                />
              ))}
            </div>
            <span className="text-[12px] font-bold" style={{ color: "var(--text)" }}>{stylist.rating}</span>
            <span className="text-[11px]" style={{ color: "var(--text-dim)" }}>({stylist.reviewCount})</span>
          </div>
          <span className="text-[11px] font-semibold" style={{ color: "var(--text-dim)" }}>{stylist.experience}yr exp.</span>
        </div>

        <p className="text-[12px] leading-relaxed italic line-clamp-2 mb-4" style={{ color: "var(--text-muted)" }}>
          &ldquo;{stylist.bio}&rdquo;
        </p>

        <div className="flex flex-wrap gap-1.5">
          {stylist.specialties.map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "var(--text-dim)", backgroundColor: "var(--overlay)", border: "1px solid var(--border)" }}
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
