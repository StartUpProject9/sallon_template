# Luxe Salon — Premium Booking System Template

A high-quality, professional, and luxurious Salon Booking System frontend template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed for marketplace distribution on platforms like Codester or ThemeForest.

## ✨ Features

- **Premium Aesthetics**: A sophisticated palette of Deep Black, Pure White, and Premium Gold (#D4AF37).
- **Responsive Design**: Mobile-first architecture ensuring a seamless experience across all devices.
- **Multi-step Booking**: A logical 4-step booking flow (Service → Stylist → Time → Details).
- **User Dashboard**: Professional interface for clients to manage their appointments.
- **Animations**: Subtle, smooth micro-interactions powered by Framer Motion.
- **SEO Optimized**: Pre-configured metadata and semantic HTML structure.
- **Scalable Architecture**: Clean folder structure and strongly typed components.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (Headings), Inter (Body), Cormorant Garamond (Accents)

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router Pages
│   ├── booking/          # Multi-step booking flow
│   ├── dashboard/        # User appointment management
│   ├── services/         # Category-based service listing
│   └── globals.css       # Design tokens & Global styles
├── components/           # Reusable UI Components
│   ├── home/             # Landing page specific sections
│   ├── layout/           # Navbar, Footer
│   ├── dashboard/        # Dashboard specific components
│   └── shared/           # Cross-page UI elements (Cards, Headers)
├── data/                 # Mock data for demonstration
└── types/                # TypeScript Interface definitions
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

- **Colors**: Update the brand palette in `tailwind.config.ts`.
- **Mock Data**: Modify `src/data/index.ts` to change services, stylists, or testimonials.
- **SEO**: Edit metadata in `src/app/layout.tsx`.

## 📄 License

Professional Template — Created for Codester/Marketplace Distribution.
