# Aurore Luxe Salon — Installation & Documentation Guide

Thank you for purchasing the **Aurore Luxe Salon** template! This guide will help you set up, customize, and deploy your new premium salon website.

---

## 📋 Table of Contents
1. System Requirements
2. Installation Guide
3. Project Structure
4. Customization Guide
   - Changing the Brand Name
   - Updating Colors
   - Modifying Services & Stylists
   - SEO & Metadata
5. Deployment Guide
6. Support & Licensing

---

## 1. System Requirements
To run this template, you need the following installed on your computer:
- **Node.js**: Version 18.x or higher (Recommended: 20+)
- **NPM** or **Yarn**: For package management
- **Code Editor**: VS Code (Recommended)

---

## 2. Installation Guide
Follow these steps to get your project running locally:

1. **Extract the Files**: Unzip the purchase folder on your computer.
2. **Open Terminal**: Open your terminal or command prompt in the project's root directory.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
5. **View the Site**: Open your browser and go to `http://localhost:3000`.

---

## 3. Project Structure
- `/src/app`: Contains the pages and routing (Home, Services, Booking, etc.).
- `/src/components`: Reusable UI components (Shared, Layout, Dashboard).
- `/src/data`: **Central Source of Truth** for all text content, prices, and images.
- `/src/types`: TypeScript definitions for data structures.
- `/public`: Static assets like images and fonts.

---

## 4. Customization Guide

### Changing the Brand Name
Open `/src/components/layout/Navbar.tsx` and `/src/components/layout/Footer.tsx` to update the logo text and copyright information.

### Updating Colors (Branding)
We use Tailwind CSS 4 Design Tokens. Open `/src/app/globals.css` and modify the following variables:
- `--gold`: Primary brand color.
- `--bg`: Main background color.
- `--surface`: Card/Section background color.

### Modifying Services & Stylists
All salon data is centralized in `/src/data/index.ts`. 
- To add a new service: Update the `SERVICES` array.
- To update the team: Update the `STYLISTS` array.
- To change reviews: Update the `TESTIMONIALS` array.

### SEO & Metadata
Open `/src/app/layout.tsx` to update the site title, description, and meta tags for better search engine ranking.

---

## 5. Deployment Guide
When you are ready to launch your site:

### Deploying to Netlify (Recommended)
1. **Push your code to GitHub**: Create a repository and push all files.
2. **Connect to Netlify**:
   - Log in to your Netlify account.
   - Click "Add new site" and select "Import an existing project".
   - Connect to GitHub and select this repository.
   - Netlify will automatically read the `netlify.toml` file included in this template.
3. **Finish**: Click "Deploy site" and wait for the build to complete.

### Deploying to Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will detect Next.js and deploy automatically.

---

## 6. Support & Licensing
This template is licensed for use on one (1) project unless an extended license is purchased.

**Need Help?**
If you have any questions or need custom modifications, please reach out to us at:
📧 **support@yourdomain.com**

---
*Created with excellence for the Beauty Industry.*
