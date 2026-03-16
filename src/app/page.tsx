"use client";

import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SignatureDishesSection from "@/components/sections/SignatureDishesSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

export default function Home() {
  return (
    <main className="relative bg-dark overflow-hidden">
      <Navigation />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ExperienceSection />
      <PhilosophySection />
      <SignatureDishesSection />
      <CredentialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
