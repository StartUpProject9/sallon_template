# Aurore Luxe Salon — Premium Next.js 15 Booking System Template

![Luxe Salon Hero](/public/images/hero.png)

Aurore is an ultra-premium, modern, and high-performance **Salon Booking System** frontend template. Designed for luxury hair salons, spas, and wellness centers, it provides a seamless user experience with a sophisticated aesthetic of Deep Black, Pure White, and Premium Gold.

Built with the latest technologies (**Next.js 15**, **React 19**, **Tailwind CSS 4**, and **TypeScript**), this template is optimized for speed, SEO, and marketplace distribution on platforms like **Codester**.

---

## ✨ Key Features

### 💎 Premium Design & UX
- **Luxury Aesthetics**: Curated color palette with gold accents (#D4AF37).
- **Glassmorphism & Gradients**: Modern UI elements with subtle transparency and smooth transitions.
- **Fully Responsive**: Mobile-first architecture ensures a perfect look on iPhones, Androids, and iPads.
- **Micro-Animations**: Smooth, professional interactions powered by **Framer Motion**.

### 🗓️ Advanced Booking System
- **Logical 4-Step Flow**:
    1. **Service**: Select from categorized treatments (Hair, Skin, Nails, Wellness).
    2. **Stylist**: Choose from master artisans with detailed bios and ratings.
    3. **Date & Time**: Real-time availability simulation with morning/afternoon slots.
    4. **Confirmation**: Final review with personal details capture.

### 👤 User Dashboard & Auth
- **Client Dashboard**: A centralized hub for managing upcoming, completed, and canceled appointments.
- **Professional Auth Pages**: High-end Login and Registration pages with split-screen layouts.
- **Form Validation**: Clean, user-friendly input handling.

### 🛠️ Developer Excellence
- **Next.js 15 App Router**: Utilizing the latest React Server Components and optimized routing.
- **Tailwind CSS 4**: Semantic design tokens using CSS variables for effortless branding updates.
- **Strongly Typed**: 100% TypeScript coverage for a robust development experience.
- **Local Assets**: All images are bundled locally — no external dependencies or broken links.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Library**: [React 19+](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Playfair Display (Headings), Inter (Body), Cormorant Garamond (Accents)

---

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router (Pages & API)
│   ├── booking/          # Multi-step booking engine
│   ├── dashboard/        # Customer account management
│   ├── services/         # Category-based treatments
│   ├── contact/          # Professional contact interface
│   ├── login/            # Auth pages (Login)
│   ├── register/         # Auth pages (Signup)
│   └── globals.css       # Design System & Utility tokens
├── components/           # Reusable UI Architecture
│   ├── home/             # Hero, Featured Services, Testimonials
│   ├── layout/           # Global Navbar & Luxury Footer
│   ├── dashboard/        # Appointment cards & Stats
│   └── shared/           # Modular UI (Cards, Toggles, Headers)
├── data/                 # Centralized Mock Data (Services, Stylists, etc.)
├── types/                # Strict TypeScript Interface definitions
└── providers/            # Context Providers (Theme, Auth simulation)
```

---

## ⚙️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/aurore-luxe-salon.git
    cd aurore-luxe-salon
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

4.  **Build for Production**:
    ```bash
    npm run build
    npm run start
    ```

## 🌐 Deployment Guide
When you are ready to launch your site:

### Deploy to Netlify (Recommended for this template)
1. **Push to GitHub**: Create a new repository on GitHub and push your code.
2. **Connect to Netlify**:
   - Log in to [Netlify](https://www.netlify.com/).
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select **GitHub** and choose your repository.
   - Netlify will automatically detect the settings from the `netlify.toml` file we've included.
3. **Deploy**: Click **"Deploy site"**. Your premium salon will be live in minutes!

### Alternative: Deploy to Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Vercel will automatically detect the Next.js settings and deploy.

---

## 🎨 Customization Guide

- **Brand Colors**: Open `src/app/globals.css` to modify the CSS variables (e.g., `--gold`, `--bg`, `--surface`).
- **Content Updates**: All services, stylists, and testimonials are located in `src/data/index.ts`. Update this file to change your pricing, descriptions, and team members.
- **SEO & Metadata**: Edit `src/app/layout.tsx` to update the site title, description, and favicon.

---

## 📄 License

Premium Template — Created for marketplace distribution. All rights reserved.
For support or customization requests, please contact [your-email@example.com].

---

*Handcrafted with ❤️ for the Beauty Industry.*
