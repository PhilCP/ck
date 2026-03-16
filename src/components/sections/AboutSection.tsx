"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const specialties = [
  "French Cuisine",
  "Italian Cuisine",
  "Pastry Arts",
  "Fine Dining",
  "Grill Mastery",
  "Business Strategy",
  "Kitchen Management",
  "Menu Development",
];

const images = [
  "/images/about.jpeg",
  "/images/experience.jpeg",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-dark-100 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Images */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Main image */}
            <motion.div
              className="absolute left-0 top-0 w-[65%] h-[75%] overflow-hidden"
              style={{ y: y1 }}
            >
              <div className="relative w-full h-full img-overlay">
                <Image
                  src={images[0]}
                  alt="Fine dining preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 border border-gold/10" />
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/50" />
            </motion.div>

            {/* Secondary image */}
            <motion.div
              className="absolute right-0 bottom-0 w-[55%] h-[60%] overflow-hidden"
              style={{ y: y2 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[1]}
                  alt="Chef plating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark/30 to-transparent" />
              </div>
              <div className="absolute inset-0 border border-gold/10" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/50" />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute left-[35%] top-[40%] z-20 bg-dark-200 border border-gold/25 px-5 py-4 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-gold font-serif text-3xl font-light leading-none">8</div>
              <div className="text-label-sm uppercase text-cream/40 mt-1">Years of<br/>Excellence</div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div>
            <SectionHeader
              eyebrow="The Chef"
              title={<>Where Finance<br /><span className="italic">Meets the Kitchen</span></>}
            />

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="font-serif text-xl font-light italic text-cream/80 leading-relaxed border-l-2 border-gold/40 pl-5">
                "A culinary professional who bridges the worlds of high-level kitchen operations and business strategy."
              </p>

              <p className="text-cream/55 leading-8 font-light">
                My journey began with a degree in Finance and Business Management — a foundation that later fueled
                the launch of my own food delivery brand, <strong className="text-cream/75 font-medium">CK-Unlimited</strong>, in Kenya.
              </p>

              <p className="text-cream/55 leading-8 font-light">
                After formalizing training at <strong className="text-cream/75 font-medium">Boma International Hospitality College</strong> and Kenya's
                renowned <strong className="text-cream/75 font-medium">Hemingways</strong>, I moved to Dubai to master both savory and pastry
                arts at the <strong className="text-cream/75 font-medium">International Center for Culinary Arts (ICCA)</strong>.
              </p>

              <p className="text-cream/55 leading-8 font-light">
                Currently refining my craft at <strong className="text-cream/75 font-medium">CHOIX par Pierre Gagnaire</strong> and Pierre's TT
                under the mentorship of the world-renowned, multi-Michelin-starred French chef, Pierre Gagnaire.
              </p>
            </motion.div>

            {/* Specialties */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-label uppercase text-cream/30 mb-4">Specializations</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s, i) => (
                  <motion.span
                    key={s}
                    className="text-xs uppercase tracking-wider text-gold/70 border border-gold/20 hover:border-gold/50 hover:text-gold px-3 py-1.5 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
