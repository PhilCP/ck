"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Floating particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 8 + 6,
}));

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation on chars - simplified
      gsap.fromTo(
        ".hero-name-char",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 1,
          ease: "power4.out",
          delay: 2.6,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-dark"
      id="hero"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 65% 40%, rgba(201,168,76,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 50%),
              linear-gradient(180deg, #080706 0%, #0E0D0B 50%, #080706 100%)
            `,
          }}
        />
      </div>

      {/* Geometric grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical divider line */}
      <motion.div
        className="absolute hidden lg:block top-0 bottom-0 left-[58%] w-px"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.15) 20%, rgba(201,168,76,0.15) 80%, transparent 100%)",
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
      />

      {/* Main layout */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 items-end">

            {/* Left: Text */}
            <motion.div
              className="lg:col-span-3"
              style={{ y: textY, opacity }}
            >
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                <div className="w-10 h-px bg-gold" />
                {/* <span className="-mb-22 text-label uppercase text-gold/80 tracking-[0.3em]">
                  Jr. Sous Chef · Pierre Gagnaire Dubai
                </span> */}
              </motion.div>

              {/* Name — large display */}
              <div className="overflow-hidden mb-2">
                <h1 className="font-serif font-light text-cream leading-none" style={{ fontSize: "clamp(52px, 9vw, 130px)" }}>
                  <span className="block overflow-hidden">
                    <span className="hero-name-char block" style={{ display: "block", opacity: 0 }}>
                      Chef
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-name-char block italic text-gradient-gold" style={{ display: "block", opacity: 0 }}>
                      Christian
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="hero-name-char block" style={{ display: "block", opacity: 0, fontSize: "0.55em", letterSpacing: "-0.01em" }}>
                      Kabilambali
                    </span>
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <motion.p
                className="text-base md:text-lg text-cream/40 font-light tracking-wide mt-6 mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                Bridging the gap between <em className="text-cream/60 font-normal not-italic">culinary mastery</em> and{" "}
                <em className="text-cream/60 font-normal not-italic">business excellence</em> — from Nairobi to Dubai.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.4, duration: 0.8 }}
              >
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center gap-3 bg-gold hover:bg-gold-light text-dark text-label uppercase px-7 py-3.5 transition-all duration-300"
                >
                  <span>Work Together</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-3 border border-gold/30 hover:border-gold/60 text-cream/60 hover:text-cream text-label uppercase px-7 py-3.5 transition-all duration-300"
                >
                  Discover Story
                </button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="flex gap-10 mt-14 pt-10 border-t border-gold/8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6, duration: 0.8 }}
              >
                {[
                  { num: "8+", label: "Years" },
                  { num: "2", label: "City & Guilds Diplomas" },
                  { num: "5+", label: "Establishments" },
                ].map((s) => (
                  <div key={s.num}>
                    <div className="font-serif text-4xl font-light text-gold leading-none mb-1">{s.num}</div>
                    <div className="text-label-sm uppercase text-cream/30">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div
              className="lg:col-span-2 lg:pl-12"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8, duration: 1.2 }}
            >
              <div
                ref={imageRef}
                className="relative overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Image */}
                <motion.div className="absolute inset-0" style={{ y: imageY }}>
                  <Image
                    src="/images/chris.jpeg"
                    alt="Chef Christian Kabilambali"
                    fill
                    className="object-cover object-center scale-110"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative border */}
                <div className="absolute inset-3 border border-gold/20 pointer-events-none z-10" />

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold/60 z-10" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold/60 z-10" />

                {/* Caption badge */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="bg-dark/80 backdrop-blur-sm border border-gold/20 px-4 py-2">
                    <p className="text-label-sm uppercase text-gold/70">Currently at</p>
                    <p className="text-sm text-cream font-light mt-0.5">CHOIX · Pierre Gagnaire</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="text-label-sm uppercase text-cream/25 group-hover:text-cream/50 transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gold/40 group-hover:text-gold transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}
