// ─── Salon Booking System — Type Definitions ─────────────────────────────────

// ── Service Types ────────────────────────────────────────────────────────────

export type ServiceCategory = "hair" | "skin" | "nails" | "wellness";

export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: ServiceCategory;
  popular?: boolean;
  image?: string;
}

// ── Stylist Types ─────────────────────────────────────────────────────────────

export interface StylistAvailability {
  date: string; // ISO date string
  slots: string[]; // e.g. ["09:00", "09:30", ...]
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialties: ServiceCategory[];
  bio: string;
  image: string;
  rating: number;
  reviewCount: number;
  experience: number; // years
  availability?: StylistAvailability[];
  featured?: boolean;
}

// ── Booking Types ─────────────────────────────────────────────────────────────

export type BookingStep = 1 | 2 | 3 | 4;

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export interface BookingPersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface Booking {
  id: string;
  service: ServiceOption;
  stylist: Stylist;
  date: string; // ISO date string
  time: string; // "HH:mm"
  personalDetails: BookingPersonalDetails;
  status: BookingStatus;
  createdAt: string;
  totalPrice: number;
}

export interface BookingDraft {
  service?: ServiceOption;
  stylist?: Stylist;
  date?: string;
  time?: string;
  personalDetails?: Partial<BookingPersonalDetails>;
}

// ── Testimonial Types ─────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

// ── Navigation Types ──────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

// ── Dashboard Types ───────────────────────────────────────────────────────────

export interface DashboardStats {
  totalBookings: number;
  upcomingBookings: number;
  completedBookings: number;
  totalSpent: number;
}

// ── UI Component Prop Types ───────────────────────────────────────────────────

export interface BookingCardProps {
  booking: Booking;
  variant?: "upcoming" | "past";
  onCancel?: (id: string) => void;
  onRebook?: (booking: Booking) => void;
}

export interface ServiceCardProps {
  service: ServiceOption;
  selected?: boolean;
  onSelect?: (service: ServiceOption) => void;
}

export interface StylistCardProps {
  stylist: Stylist;
  selected?: boolean;
  onSelect?: (stylist: Stylist) => void;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface TimeSlotPickerProps {
  availableSlots: string[];
  selectedTime?: string;
  onSelectTime: (time: string) => void;
}

export interface StepIndicatorProps {
  currentStep: BookingStep;
  steps: {
    number: BookingStep;
    label: string;
  }[];
}
