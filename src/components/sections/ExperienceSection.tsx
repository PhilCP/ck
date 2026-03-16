"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, Calendar, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  period: string;
  role: string;
  org: string;
  location: string;
  type: "current" | "uae" | "kenya";
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: "choix",
    period: "Present",
    role: "Jr. Sous Chef",
    org: "CHOIX par Pierre Gagnaire & Pierre's TT",
    location: "Dubai, UAE",
    type: "current",
    description:
      "Refining the art of French fine dining under the direct mentorship of multi-Michelin-starred Chef Pierre Gagnaire — one of the world's most celebrated culinary figures.",
    highlights: [
      "Executing world-class French fine dining",
      "Mentored by Pierre Gagnaire",
      "Leading stations in savory & pastry",
      "Contributing to menu innovation",
    ],
  },
  {
    id: "intercontinental",
    period: "2022–2023",
    role: "Chef de Partie",
    org: "InterContinental Dubai Festival City",
    location: "Dubai, UAE",
    type: "uae",
    description:
      "Contributed to culinary excellence at one of Dubai's premier five-star properties, developing expertise across multiple stations in a high-volume luxury environment.",
    highlights: [
      "Multi-station proficiency",
      "5-star property standards",
      "High-volume luxury dining",
      "International cuisine mastery",
    ],
  },
  {
    id: "carnival",
    period: "2021–2022",
    role: "Demi Chef de Partie",
    org: "Carnival by Tresind",
    location: "Dubai, UAE",
    type: "uae",
    description:
      "Mastered contemporary Indian-fusion cuisine at one of Dubai's most celebrated and innovative dining concepts under award-winning chefs.",
    highlights: [
      "Contemporary Indian-fusion",
      "Innovative plating techniques",
      "Award-winning culinary team",
      "Creative menu development",
    ],
  },
  {
    id: "tryp",
    period: "2020–2021",
    role: "Commis Chef",
    org: "TRYP by Wyndham",
    location: "Dubai, UAE",
    type: "uae",
    description:
      "First Dubai posting — built foundational experience in a fast-paced international hotel environment, sharpening technique and discipline.",
    highlights: [
      "International hotel dining",
      "Foundations of Dubai dining",
      "Multi-cuisine exposure",
      "Team collaboration",
    ],
  },
  {
    id: "ckunlimited",
    period: "2018–2020",
    role: "Founder & Head Chef",
    org: "CK-Unlimited Food Brand",
    location: "Nairobi, Kenya",
    type: "kenya",
    description:
      "Founded and operated an independent food delivery concept in Kenya, combining culinary skill with Finance & Business Management expertise to build a customer-loved brand.",
    highlights: [
      "Entrepreneurial food brand",
      "Concept to execution",
      "Business & culinary fusion",
      "Kenya's food delivery scene",
    ],
  },
  {
    id: "education",
    period: "2016–2018",
    role: "Culinary Education",
    org: "Boma International Hospitality College & Hemingways",
    location: "Nairobi, Kenya",
    type: "kenya",
    description:
      "Formalized culinary training at two of Kenya's most respected institutions, laying the technical groundwork for an international career.",
    highlights: [
      "Boma International College",
      "Hemingways Nairobi",
      "Culinary foundations",
      "Hospitality management",
    ],
  },
];

const typeColors = {
  current: "text-gold border-gold",
  uae: "text-cream/50 border-cream/20",
  kenya: "text-cream/40 border-cream/15",
};

export default function ExperienceSection() {
  const [active, setActive] = useState("choix");

  const activeExp = experiences.find((e) => e.id === active)!;

  return (
    <section id="experience" className="py-28 md:py-40 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Career Journey"
          title={<>A Path of<br /><span className="italic">Purposeful Mastery</span></>}
          subtitle="From Nairobi's entrepreneurial spirit to Dubai's Michelin-starred kitchens."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Timeline list */}
          <div className="lg:col-span-2 space-y-0 relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/10 to-transparent" />

            {experiences.map((exp, i) => (
              <motion.button
                key={exp.id}
                onClick={() => setActive(exp.id)}
                className={`w-full text-left pl-8 pr-4 py-5 relative group transition-all duration-300 ${
                  active === exp.id ? "bg-dark-200" : "hover:bg-dark-200/50"
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Active dot */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[3px] w-[7px] h-[7px] border transition-all duration-300 rotate-45 ${
                    active === exp.id
                      ? "bg-gold border-gold scale-125"
                      : "bg-dark border-gold/30 group-hover:border-gold/60"
                  }`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className={`text-label-sm uppercase mb-1 transition-colors ${
                      active === exp.id ? "text-gold" : "text-cream/30"
                    }`}>
                      {exp.period} · {exp.location}
                    </p>
                    <p className={`font-serif text-lg transition-colors leading-tight ${
                      active === exp.id ? "text-cream" : "text-cream/60 group-hover:text-cream/80"
                    }`}>
                      {exp.role}
                    </p>
                    <p className={`text-sm mt-0.5 transition-colors ${
                      active === exp.id ? "text-cream/50" : "text-cream/30"
                    }`}>
                      {exp.org}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className={`mt-1 flex-shrink-0 transition-all ${
                      active === exp.id ? "text-gold" : "text-cream/20 group-hover:text-cream/40"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="border border-gold/10 p-8 md:p-10 h-full relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-12">
                    <div className="absolute top-0 left-0 w-full h-px bg-gold/40" />
                    <div className="absolute top-0 left-0 h-full w-px bg-gold/40" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-12 h-12">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-gold/40" />
                    <div className="absolute bottom-0 right-0 h-full w-px bg-gold/40" />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={12} className="text-gold/60" />
                    <span className="text-label uppercase text-gold/60">{activeExp.period}</span>
                    <span className="text-cream/20">·</span>
                    <MapPin size={12} className="text-cream/30" />
                    <span className="text-label uppercase text-cream/30">{activeExp.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-light text-cream mt-3 mb-1 leading-tight">
                    {activeExp.role}
                  </h3>
                  <p className="text-cream/50 text-sm mb-6">{activeExp.org}</p>

                  <div className="w-12 h-px bg-gold/30 mb-6" />

                  <p className="text-cream/65 leading-8 font-light mb-8 text-base">
                    {activeExp.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <p className="text-label uppercase text-cream/25 mb-4">Highlights</p>
                    <div className="grid grid-cols-2 gap-3">
                      {activeExp.highlights.map((h, i) => (
                        <motion.div
                          key={h}
                          className="flex items-center gap-2.5"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                          <span className="text-sm text-cream/55">{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className="mt-8 pt-6 border-t border-gold/8">
                    <span className={`text-label-sm uppercase border px-3 py-1 ${typeColors[activeExp.type]}`}>
                      {activeExp.type === "current" ? "Current Position" : activeExp.type === "uae" ? "UAE Experience" : "Kenya Origins"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
