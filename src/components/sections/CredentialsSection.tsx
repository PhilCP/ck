"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award, BookOpen, Briefcase, Star } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Double Diploma — Cookery & Pastry",
    institution: "International Center for Culinary Arts (ICCA), Dubai",
    accreditation: "City & Guilds London Accredited",
    detail:
      "A prestigious dual qualification covering both savory cookery and the full scope of pastry arts — one of the few chefs to hold both simultaneously.",
    badge: "City & Guilds · London",
    color: "gold",
  },
  {
    icon: BookOpen,
    title: "Finance & Business Management",
    institution: "University Degree",
    accreditation: "Undergraduate Qualification",
    detail:
      "The business backbone that set Chef Christian apart — enabling him to found CK-Unlimited and approach kitchen management with strategic clarity.",
    badge: "Business Strategy",
    color: "cream",
  },
  {
    icon: Star,
    title: "Mentorship -Chef Mathieu Balbino under Pierre Gagnaire ",
    institution: "CHOIX par Pierre Gagnaire, Dubai",
    accreditation: "Multi-Michelin-Starred Mentor",
    detail:
      "Direct mentorship under chef Mathieu Balbino working for one of the world's most decorated French chefs a distinction reserved for only the most dedicated culinary professionals. Following my closed and daily leader Chef Drigo Lim (Sous Chef) .",
    badge: "Michelin Excellence",
    color: "gold",
  },
  {
    icon: Briefcase,
    title: "Boma International Hospitality College",
    institution: "Nairobi, Kenya",
    accreditation: "Formal Culinary Training",
    detail:
      "Structured culinary education at one of Kenya's leading hospitality institutions, forming the professional foundation for an international career.",
    badge: "Kenya · Hospitality",
    color: "cream",
  },
];

const skills = [
  { label: "French Cuisine", level: 95 },
  { label: "Pastry Arts", level: 90 },
  { label: "Italian Cuisine", level: 85 },
  { label: "Grill & Rôtisserie", level: 88 },
  { label: "Menu Development", level: 92 },
  { label: "Kitchen Management", level: 85 },
];

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="py-28 md:py-40 bg-dark-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Education & Credentials"
          title={
            <>
              Built on a<br />
              <span className="italic">Strong Foundation</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  className="group relative border border-gold/10 hover:border-gold/25 p-7 transition-all duration-400 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 border border-gold/25 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                        <Icon size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-widest px-2.5 py-1 border ${
                          cred.color === "gold"
                            ? "text-gold/70 border-gold/25"
                            : "text-cream/30 border-cream/10"
                        }`}
                      >
                        {cred.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-light text-cream mb-1 leading-snug">
                      {cred.title}
                    </h3>
                    <p className="text-xs text-cream/40 mb-1">{cred.institution}</p>
                    <p className="text-[11px] uppercase tracking-wider text-gold/50 mb-4">
                      {cred.accreditation}
                    </p>

                    <div className="w-8 h-px bg-gold/25 mb-4" />

                    <p className="text-sm text-cream/50 leading-6 font-light">
                      {cred.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills chart */}
          <div className="lg:col-span-1">
            <motion.div
              className="border border-gold/10 p-7 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-gold/20 to-transparent" />

              <p className="text-label uppercase text-gold/60 mb-8">
                Culinary Proficiency
              </p>

              <div className="space-y-7">
                {skills.map((skill, i) => (
                  <div key={skill.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cream/70">{skill.label}</span>
                      <span className="font-mono text-xs text-gold/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-cream/8 relative overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-gold to-gold-light"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + i * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-10 pt-6 border-t border-gold/8">
                <p className="text-xs text-cream/30 leading-5 italic font-serif">
                  "Excellence is not a destination but a continuous journey that never ends."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
