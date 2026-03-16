"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle,
} from "lucide-react";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971 52 864 2354",
    href: "tel:+971528642354",
    hint: "Available for consultations",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ckabilambali@gmail.com",
    href: "mailto:ckabilambali@gmail.com",
    hint: "Responds within 24 hours",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@ck_unlimitedd",
    href: "https://instagram.com/ck_unlimitedd",
    hint: "Follow for culinary updates",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    href: "#",
    hint: "Available for international opportunities",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-40 bg-dark overflow-hidden relative"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-4 mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-gold/50" />
            <span className="text-label uppercase text-gold">Get in Touch</span>
            <div className="w-8 h-px bg-gold/50" />
          </motion.div>

          <motion.h2
            className="font-serif font-light text-display-md text-cream leading-none mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let&apos;s Create
            <br />
            <span className="italic text-gold">Something Exceptional</span>
          </motion.h2>

          <motion.p
            className="text-cream/40 font-light max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Whether for collaboration, consultation, or culinary experiences —
            I&apos;d love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact links */}
          <div>
            <motion.p
              className="text-label uppercase text-cream/30 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Direct Contact
            </motion.p>

            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-5 border border-gold/10 hover:border-gold/30 p-5 transition-all duration-300 relative overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    {/* Hover bg */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 w-10 h-10 border border-gold/20 group-hover:border-gold/50 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon size={14} className="text-gold/50 group-hover:text-gold transition-colors" />
                    </div>

                    <div className="relative z-10 flex-1 min-w-0">
                      <p className="text-label-sm uppercase text-cream/30 mb-0.5">
                        {link.label}
                      </p>
                      <p className="text-base text-cream/80 group-hover:text-cream transition-colors truncate">
                        {link.value}
                      </p>
                      <p className="text-xs text-cream/25 mt-0.5">{link.hint}</p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="relative z-10 text-gold/30 group-hover:text-gold transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Availability note */}
            <motion.div
              className="mt-8 p-5 border border-gold/10 bg-dark-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-label-sm uppercase text-green-400/70">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm text-cream/45 leading-6">
                Currently based in Dubai and open to consulting engagements,
                collaborations, and international culinary projects.
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-label uppercase text-cream/30 mb-6">
              Send a Message
            </p>

            {submitted ? (
              <motion.div
                className="border border-gold/20 p-10 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-cream mb-2">
                  Message Received
                </h3>
                <p className="text-cream/50 text-sm">
                  Thank you for reaching out. Chef Christian will be in touch
                  shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-label-sm uppercase text-cream/30 block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-transparent border border-gold/15 focus:border-gold/40 text-cream text-sm px-4 py-3 outline-none transition-colors placeholder:text-cream/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-label-sm uppercase text-cream/30 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-transparent border border-gold/15 focus:border-gold/40 text-cream text-sm px-4 py-3 outline-none transition-colors placeholder:text-cream/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-label-sm uppercase text-cream/30 block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full bg-transparent border border-gold/15 focus:border-gold/40 text-cream text-sm px-4 py-3 outline-none transition-colors placeholder:text-cream/20"
                    placeholder="Collaboration / Consultation / Other"
                  />
                </div>

                <div>
                  <label className="text-label-sm uppercase text-cream/30 block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-transparent border border-gold/15 focus:border-gold/40 text-cream text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-cream/20"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-light disabled:opacity-60 text-dark text-label uppercase py-4 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {loading ? (
                    <motion.div
                      className="w-4 h-4 border border-dark/30 border-t-dark rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
