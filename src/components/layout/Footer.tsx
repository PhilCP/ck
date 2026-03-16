"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Signature Dishes", href: "#dishes" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-200 border-t border-gold/8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="py-14 grid md:grid-cols-3 gap-10 md:gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 border border-gold/40 flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <span className="font-serif text-sm text-gold font-medium">
                  CK
                </span>
              </div>
              <div>
                <p className="font-serif text-lg text-cream font-light">
                  Chef Christian
                </p>
                <p className="text-xs text-cream/30">Kabilambali</p>
              </div>
            </div>
            <p className="text-sm text-cream/35 leading-6 max-w-xs font-light">
              Jr. Sous Chef at CHOIX par Pierre Gagnaire & Pierre&apos;s TT,
              Dubai. Dual-specialist in Cookery & Pastry.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-label uppercase text-cream/25 mb-5">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-cream/40 hover:text-cream/80 transition-colors hover-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label uppercase text-cream/25 mb-5">Connect</p>
            <div className="space-y-3">
              <a
                href="mailto:ckabilambali@gmail.com"
                className="flex items-center gap-3 text-sm text-cream/40 hover:text-cream/80 transition-colors group"
              >
                <Mail
                  size={12}
                  className="text-gold/40 group-hover:text-gold transition-colors"
                />
                ckabilambali@gmail.com
              </a>
              <a
                href="tel:+971528642354"
                className="flex items-center gap-3 text-sm text-cream/40 hover:text-cream/80 transition-colors group"
              >
                <Phone
                  size={12}
                  className="text-gold/40 group-hover:text-gold transition-colors"
                />
                +971 52 864 2354
              </a>
              <a
                href="https://instagram.com/chef_ck_unlimited_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream/40 hover:text-cream/80 transition-colors group"
              >
                <Instagram
                  size={12}
                  className="text-gold/40 group-hover:text-gold transition-colors"
                />
                @chef_ck_unlimited_
              </a>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-cream/30">
                Based in Dubai, UAE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-gold/6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/20">
            © {new Date().getFullYear()} Christian Kabilambali. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs text-cream/15">
              Fine Dining · Dubai · Kenya
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs text-cream/25 hover:text-gold transition-colors group flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <motion.span
                className="inline-block"
                whileHover={{ y: -2 }}
              >
                ↑
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
