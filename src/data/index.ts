import type {
  ServiceOption,
  Stylist,
  Testimonial,
  NavLink,
  Booking,
} from "@/types";

// ─── Navigation Links ─────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Now", href: "/booking" },
  { label: "Dashboard", href: "/dashboard" },
];

// ─── Services Data ────────────────────────────────────────────────────────────

export const SERVICES: ServiceOption[] = [
  // Hair
  {
    id: "hair-001",
    name: "Signature Cut & Style",
    description:
      "Precision cut tailored to your face shape with a luxurious blow-dry finish.",
    duration: 75,
    price: 120,
    category: "hair",
    popular: true,
  },
  {
    id: "hair-002",
    name: "Balayage & Highlights",
    description:
      "Hand-painted colour technique for a natural, sun-kissed effect with dimensional depth.",
    duration: 150,
    price: 220,
    category: "hair",
    popular: true,
  },
  {
    id: "hair-003",
    name: "Deep Conditioning Treatment",
    description:
      "Intensive repair mask infused with keratin and argan oil for silky, healthy strands.",
    duration: 45,
    price: 80,
    category: "hair",
  },
  {
    id: "hair-004",
    name: "Keratin Smoothing",
    description:
      "Professional smoothing system that eliminates frizz and adds lasting shine for up to 6 months.",
    duration: 180,
    price: 350,
    category: "hair",
  },
  // Skin
  {
    id: "skin-001",
    name: "Radiance Facial",
    description:
      "A multi-step brightening facial with vitamin C serum, enzyme exfoliation, and hydration boost.",
    duration: 60,
    price: 150,
    category: "skin",
    popular: true,
  },
  {
    id: "skin-002",
    name: "Anti-Ageing Treatment",
    description:
      "Retinol-infused deep treatment to firm, plump, and restore youthful luminosity.",
    duration: 90,
    price: 200,
    category: "skin",
  },
  {
    id: "skin-003",
    name: "Microdermabrasion",
    description:
      "Crystal microdermabrasion to resurface skin, minimize pores, and even skin tone.",
    duration: 60,
    price: 130,
    category: "skin",
  },
  {
    id: "skin-004",
    name: "Hydra Detox Facial",
    description:
      "Deep cleansing hydration facial with charcoal mask and hyaluronic acid infusion.",
    duration: 75,
    price: 160,
    category: "skin",
  },
  // Nails
  {
    id: "nails-001",
    name: "Luxury Gel Manicure",
    description:
      "Long-lasting gel polish with cuticle care, hand massage, and premium finish.",
    duration: 60,
    price: 65,
    category: "nails",
    popular: true,
  },
  {
    id: "nails-002",
    name: "Spa Pedicure",
    description:
      "Relaxing foot soak, exfoliation, callus removal, and gel colour application.",
    duration: 75,
    price: 85,
    category: "nails",
  },
  {
    id: "nails-003",
    name: "Nail Art Design",
    description:
      "Custom hand-painted nail art by our specialist artists — from subtle to statement.",
    duration: 90,
    price: 100,
    category: "nails",
  },
  {
    id: "nails-004",
    name: "Acrylic Extensions",
    description:
      "Full set of acrylic nail extensions shaped to your preference with gel overlay.",
    duration: 120,
    price: 120,
    category: "nails",
  },
  // Wellness
  {
    id: "wellness-001",
    name: "Scalp Revive Massage",
    description:
      "Therapeutic scalp massage with warm oil to stimulate circulation and reduce tension.",
    duration: 45,
    price: 70,
    category: "wellness",
  },
  {
    id: "wellness-002",
    name: "Head & Shoulder Massage",
    description:
      "Deeply relaxing massage targeting the neck, shoulders, and scalp to melt away stress.",
    duration: 60,
    price: 95,
    category: "wellness",
    popular: true,
  },
];

// ─── Stylists Data ────────────────────────────────────────────────────────────

export const STYLISTS: Stylist[] = [
  {
    id: "stylist-001",
    name: "Isabelle Laurent",
    role: "Creative Director & Hair Artist",
    specialties: ["hair"],
    bio: "With over 18 years of experience in Parisian salons, Isabelle brings avant-garde techniques and timeless elegance to every appointment.",
    image: "/images/stylists/isabelle.jpg",
    rating: 4.9,
    reviewCount: 412,
    experience: 18,
    featured: true,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["09:00", "10:30", "12:00", "14:00", "15:30"],
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        slots: ["10:00", "11:30", "13:00", "16:00"],
      },
    ],
  },
  {
    id: "stylist-002",
    name: "Marcus Chen",
    role: "Senior Colour Specialist",
    specialties: ["hair"],
    bio: "Marcus is a master colorist known for his breathtaking balayage and editorial colour work featured in top beauty publications.",
    image: "/images/stylists/marcus.jpg",
    rating: 4.8,
    reviewCount: 287,
    experience: 12,
    featured: true,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["09:30", "11:00", "13:30", "15:00", "16:30"],
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        slots: ["09:00", "10:30", "14:00", "16:00"],
      },
    ],
  },
  {
    id: "stylist-003",
    name: "Sophia Adeyemi",
    role: "Lead Skin Therapist",
    specialties: ["skin", "wellness"],
    bio: "A certified dermal therapist with a holistic approach, Sophia crafts personalised skin journeys that restore confidence and radiance.",
    image: "/images/stylists/sophia.jpg",
    rating: 4.9,
    reviewCount: 356,
    experience: 10,
    featured: true,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["08:30", "10:00", "12:30", "14:30", "16:00"],
      },
    ],
  },
  {
    id: "stylist-004",
    name: "Zara Patel",
    role: "Nail Artist & Technician",
    specialties: ["nails"],
    bio: "Zara transforms nails into miniature works of art. Her intricate designs and impeccable technique have earned a loyal following.",
    image: "/images/stylists/zara.jpg",
    rating: 4.7,
    reviewCount: 198,
    experience: 7,
    featured: false,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"],
      },
    ],
  },
  {
    id: "stylist-005",
    name: "Elara Morin",
    role: "Wellness & Massage Therapist",
    specialties: ["wellness", "skin"],
    bio: "Elara blends Eastern and Western healing modalities to deliver deeply restorative treatments that soothe body and mind.",
    image: "/images/stylists/elara.jpg",
    rating: 5.0,
    reviewCount: 143,
    experience: 9,
    featured: false,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["10:00", "11:30", "14:00", "15:30"],
      },
    ],
  },
  {
    id: "stylist-006",
    name: "James Okafor",
    role: "Men's Grooming Specialist",
    specialties: ["hair", "wellness"],
    bio: "James redefines men's grooming with precision cuts, expert beard sculpting, and a refined eye for contemporary style.",
    image: "/images/stylists/james.jpg",
    rating: 4.8,
    reviewCount: 221,
    experience: 11,
    featured: false,
    availability: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        slots: ["08:00", "09:30", "11:00", "13:00", "15:00", "16:30"],
      },
    ],
  },
];

// ─── Testimonials Data ────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-001",
    name: "Camille Dubois",
    role: "Fashion Designer",
    rating: 5,
    text: "Luxe Salon has completely transformed my relationship with my hair. Isabelle understood exactly what I wanted — the balayage she created is absolutely flawless. The booking experience was seamless and the salon atmosphere is divine.",
    service: "Balayage & Highlights",
    date: "2024-11-15",
  },
  {
    id: "t-002",
    name: "Priya Sharma",
    role: "Marketing Executive",
    rating: 5,
    text: "Sophia's Radiance Facial left my skin glowing for weeks. I've been to many high-end spas but nothing compares to the personalised care here. Already booked my next three appointments!",
    service: "Radiance Facial",
    date: "2024-11-28",
  },
  {
    id: "t-003",
    name: "Alexandra Mills",
    role: "Architect",
    rating: 5,
    text: "The nail art Zara created for my wedding day was beyond my wildest dreams. She listened so carefully to my vision and executed it perfectly. Luxe Salon made the whole experience feel truly special.",
    service: "Nail Art Design",
    date: "2024-12-02",
  },
  {
    id: "t-004",
    name: "David Nguyen",
    role: "Entrepreneur",
    rating: 5,
    text: "As someone who values efficiency and quality, Luxe Salon delivers on both. Marcus's colour work is exceptional — I walked out looking and feeling like a million dollars. The online booking is perfect.",
    service: "Signature Cut & Style",
    date: "2024-12-10",
  },
  {
    id: "t-005",
    name: "Sofia Blanc",
    role: "Editor",
    rating: 5,
    text: "Elara's massage therapy is genuinely life-changing. After years of tension headaches, her scalp and shoulder massage finally brought me relief. The ambiance at Luxe Salon is pure luxury.",
    service: "Head & Shoulder Massage",
    date: "2024-12-18",
  },
];

// ─── Mock Booking Data (Dashboard) ───────────────────────────────────────────

export const MOCK_BOOKINGS: Booking[] = [
  {
    id: "bk-001",
    service: SERVICES[1], // Balayage
    stylist: STYLISTS[1], // Marcus
    date: new Date(Date.now() + 3 * 86400000).toISOString().split("T")[0],
    time: "10:30",
    personalDetails: {
      firstName: "Alexandra",
      lastName: "Mills",
      email: "alex.mills@email.com",
      phone: "+44 7700 900123",
      notes: "Please use ammonia-free colour",
    },
    status: "confirmed",
    createdAt: new Date().toISOString(),
    totalPrice: 220,
  },
  {
    id: "bk-002",
    service: SERVICES[4], // Radiance Facial
    stylist: STYLISTS[2], // Sophia
    date: new Date(Date.now() + 10 * 86400000).toISOString().split("T")[0],
    time: "14:00",
    personalDetails: {
      firstName: "Alexandra",
      lastName: "Mills",
      email: "alex.mills@email.com",
      phone: "+44 7700 900123",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    totalPrice: 150,
  },
  {
    id: "bk-003",
    service: SERVICES[0], // Signature Cut
    stylist: STYLISTS[0], // Isabelle
    date: new Date(Date.now() - 14 * 86400000).toISOString().split("T")[0],
    time: "09:00",
    personalDetails: {
      firstName: "Alexandra",
      lastName: "Mills",
      email: "alex.mills@email.com",
      phone: "+44 7700 900123",
    },
    status: "completed",
    createdAt: new Date(Date.now() - 20 * 86400000).toISOString(),
    totalPrice: 120,
  },
  {
    id: "bk-004",
    service: SERVICES[8], // Luxury Gel Manicure
    stylist: STYLISTS[3], // Zara
    date: new Date(Date.now() - 30 * 86400000).toISOString().split("T")[0],
    time: "11:00",
    personalDetails: {
      firstName: "Alexandra",
      lastName: "Mills",
      email: "alex.mills@email.com",
      phone: "+44 7700 900123",
    },
    status: "completed",
    createdAt: new Date(Date.now() - 35 * 86400000).toISOString(),
    totalPrice: 65,
  },
];

// ─── Time Slot Generation ─────────────────────────────────────────────────────

export const generateTimeSlots = (start = 8, end = 19, intervalMin = 30): string[] => {
  const slots: string[] = [];
  for (let h = start; h < end; h++) {
    for (let m = 0; m < 60; m += intervalMin) {
      slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return slots;
};

// ─── Category Meta ────────────────────────────────────────────────────────────

export const CATEGORY_META: Record<
  string,
  { label: string; icon: string; description: string }
> = {
  hair: {
    label: "Hair",
    icon: "✂",
    description: "Precision cuts, colour, and treatments",
  },
  skin: {
    label: "Skin",
    icon: "✦",
    description: "Facials, peels, and skin therapies",
  },
  nails: {
    label: "Nails",
    icon: "◈",
    description: "Manicures, pedicures, and nail art",
  },
  wellness: {
    label: "Wellness",
    icon: "◎",
    description: "Massages and restorative therapies",
  },
};

// ─── Booking Steps ────────────────────────────────────────────────────────────

export const BOOKING_STEPS = [
  { number: 1 as const, label: "Service" },
  { number: 2 as const, label: "Stylist" },
  { number: 3 as const, label: "Date & Time" },
  { number: 4 as const, label: "Confirm" },
];
