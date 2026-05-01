import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className={`section-label mb-4 ${centered ? "justify-center" : ""}`}>
        {label}
      </div>
      <h2 className="text-display-sm md:text-display-md mb-6 text-balance max-w-2xl mx-auto md:mx-0">
        {title}
      </h2>
      {description && (
        <p className={`text-white/50 max-w-xl ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      <div className={`divider-gold mt-8 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
