"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/philosophy.jpeg"
          alt="Fine dining kitchen"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-gold/50" />
          <span className="text-label uppercase text-gold/70 tracking-[0.3em]">
            Philosophy
          </span>
          <div className="w-12 h-px bg-gold/50" />
        </motion.div>

        <motion.blockquote
          className="font-serif font-light italic text-cream leading-tight mb-8"
          style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          &ldquo;Cooking is the art of{" "}
          <span className="text-shimmer not-italic">adjustment</span>
          &rdquo;
        </motion.blockquote>

        <motion.p
          className="text-sm text-cream/40 uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          — A guiding principle in every kitchen
        </motion.p>

        {/* Decorative diamonds */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rotate-45 border border-gold/30 ${
                i === 2 ? "w-3 h-3 bg-gold/20" : "w-1.5 h-1.5"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
