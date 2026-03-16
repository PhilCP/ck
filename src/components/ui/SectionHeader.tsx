"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        className={`flex items-center gap-4 mb-5 ${align === "center" ? "justify-center" : ""}`}
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {align !== "center" && (
          <div className="w-8 h-px bg-gold" />
        )}
        <span className="text-label uppercase text-gold">{eyebrow}</span>
        {align === "center" && (
          <div className="w-8 h-px bg-gold opacity-60" />
        )}
      </motion.div>

      <motion.h2
        className={`font-serif font-light text-display-md leading-none ${
          light ? "text-dark" : "text-cream"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`mt-4 text-base font-light max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-dark/60" : "text-cream/50"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
