"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

interface Dish {
  id: number;
  name: string;
  subtitle: string;
  origin: string;
  story: string;
  image: string;
  tags: string[];
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Les Beignets de Maman",
    subtitle: "Mother's Beignets",
    origin: "Family Heritage · Classic",
    story:
      "A cherished family recipe transformed into an elegant dessert. Light, airy, and dusted with warmth — these beignets carry the soul of home in every bite.",
    image: "/images/beignets.jpeg",
    tags: ["Pastry", "Heritage", "Sweet"],
  },
  {
    id: 2,
    name: "CK-Unlimited Wings",
    subtitle: "Ultimate Favourite Chicken Wings",
    origin: "Signature · CK-Unlimited Brand",
    story:
      "The dish that built a brand. Perfected over hundreds of iterations, these wings became the cornerstone of CK-Unlimited in Nairobi — bold, saucy, and utterly addictive.",
    image: "/images/wings.jpg",
    tags: ["Signature", "Grill", "Nairobi"],
  },
  {
    id: 3,
    name: "Fish & Beans",
    subtitle: "East African Comfort",
    origin: "Kenyan · Comfort Dining",
    story:
      "A reimagined East African classic — coastal fish paired with slow-cooked beans, elevated with French technique while keeping its soulful roots intact.",
    image: "/images/beans.jpg",
    tags: ["Kenyan", "Seafood", "Comfort"],
  },
  {
    id: 4,
    name: "Tomatoes Tart",
    subtitle: "Tarte aux Tomates",
    origin: "French Pastry · Fine Dining",
    story:
      "A refined French tart showcasing peak-season tomatoes on a buttery, hand-laminated pastry shell — precise, elegant, and deeply satisfying in its simplicity.",
    image: "/images/tart.jpg",
    tags: ["French", "Pastry", "Vegetarian"],
  },
  {
    id: 5,
    name: "Kuku wa Kenyeji",
    subtitle: "My Mother's Free-Range Chicken",
    origin: "Kenyan · Family Recipe",
    story:
      "The most personal dish in the repertoire. My mother's free-range chicken stew — slow-cooked with Kenyan spices, now presented with fine dining finesse but never losing its heart.",
    image: "/images/kuku.jpg",
    tags: ["Kenyan", "Heritage", "Poultry"],
  },
];

export default function SignatureDishesSection() {
  const [active, setActive] = useState<Dish>(dishes[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="dishes"
      className="py-28 md:py-40 bg-dark-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="Signature Dishes"
          title={
            <>
              A Table of<br />
              <span className="italic">Cherished Memories</span>
            </>
          }
          subtitle="Each dish carries a story — from family traditions to fine dining interpretations."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: dish list */}
          <div className="space-y-0">
            {dishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                className={`group relative py-6 border-b cursor-pointer transition-all duration-300 ${
                  active.id === dish.id
                    ? "border-gold/30"
                    : "border-cream/8 hover:border-cream/15"
                }`}
                onClick={() => setActive(dish)}
                onMouseEnter={() => setHoveredId(dish.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {/* Active bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-gold"
                  initial={false}
                  animate={{ scaleY: active.id === dish.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start justify-between gap-4 pl-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-xs text-gold/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-label-sm uppercase text-cream/30">
                        {dish.origin}
                      </span>
                    </div>
                    <h3
                      className={`font-serif text-2xl font-light transition-colors duration-200 ${
                        active.id === dish.id
                          ? "text-cream"
                          : "text-cream/60 group-hover:text-cream/85"
                      }`}
                    >
                      {dish.name}
                    </h3>
                    <p className="text-sm text-cream/35 mt-0.5 italic font-serif">
                      {dish.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-1.5 flex-wrap justify-end max-w-[140px]">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 transition-colors ${
                          active.id === dish.id
                            ? "text-gold/70 border border-gold/25"
                            : "text-cream/25 border border-cream/10"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: active dish detail */}
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden mb-8" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-200/90 via-transparent to-transparent" />

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/50" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/50" />

                  {/* Number */}
                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-4xl font-light text-gold/20">
                      {String(active.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Text detail */}
                <div>
                  <p className="text-label uppercase text-gold/60 mb-2">
                    {active.origin}
                  </p>
                  <h3 className="font-serif text-3xl font-light text-cream mb-1">
                    {active.name}
                  </h3>
                  <p className="font-serif italic text-cream/50 mb-5">
                    {active.subtitle}
                  </p>
                  <p className="text-cream/60 leading-8 font-light">
                    {active.story}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
