"use client";

import { Calendar, Clock, User, MoreHorizontal } from "lucide-react";
import type { BookingCardProps } from "@/types";

const STATUS: Record<string, { color: string; bg: string; border: string; label: string }> = {
  pending:   { color: "var(--amber)", bg: "rgba(240,169,64,0.1)",    border: "rgba(240,169,64,0.3)",  label: "Pending" },
  confirmed: { color: "var(--green)", bg: "rgba(91,190,160,0.1)",    border: "rgba(91,190,160,0.3)",  label: "Confirmed" },
  completed: { color: "var(--text-dim)", bg: "var(--overlay)",        border: "var(--border)",         label: "Completed" },
  cancelled: { color: "var(--red)",   bg: "rgba(224,91,91,0.1)",     border: "rgba(224,91,91,0.3)",   label: "Cancelled" },
};

export default function BookingCard({ booking, variant = "upcoming", onCancel, onRebook }: BookingCardProps) {
  const isPast = variant === "past";
  const s = STATUS[booking.status] || STATUS.completed;
  const date = new Date(booking.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div
      className="rounded-sm transition-all duration-300"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "1.5rem",
        opacity: isPast ? 0.7 : 1,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="space-y-2">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em]"
            style={{ color: s.color, backgroundColor: s.bg, border: `1px solid ${s.border}` }}
          >
            {s.label}
          </span>
          <h3 className="font-display text-[1.0625rem] leading-tight" style={{ color: "var(--text)" }}>
            {booking.service.name}
          </h3>
        </div>
        <button className="transition-colors mt-1" style={{ color: "var(--text-dim)" }}>
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2.5 mb-5">
        {[
          { Icon: Calendar, text: date },
          { Icon: Clock,    text: `${booking.time} · ${booking.service.duration} min` },
          { Icon: User,     text: booking.stylist.name },
        ].map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-[13px]" style={{ color: "var(--text-muted)" }}>
            <Icon size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 flex items-center justify-between gap-3" style={{ borderTop: "1px solid var(--border-2)" }}>
        <p className="font-display text-[1.25rem] font-semibold" style={{ color: "var(--text)" }}>
          ${booking.totalPrice}
        </p>
        <div className="flex gap-2">
          {!isPast ? (
            <>
              <button
                onClick={() => onCancel?.(booking.id)}
                className="text-[11px] font-bold uppercase tracking-[0.08em] transition-colors"
                style={{ color: "var(--red)", background: "none", border: "none", cursor: "pointer" }}
              >
                Cancel
              </button>
              <button className="btn-secondary py-2 px-4 text-[11px]">Modify</button>
            </>
          ) : (
            <button onClick={() => onRebook?.(booking)} className="btn-primary py-2.5 px-5 text-[11px]">
              Book Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
