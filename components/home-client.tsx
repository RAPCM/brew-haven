// src/components/home-client.tsx (or "@/components/home-client")
"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import OurStory from "@/components/our-story";
import Gallery from "@/components/gallery";
import VisitUs from "@/components/visit-us";
import Footer from "@/components/footer";

type HomeClientProps = {
  children: React.ReactNode; // this will be <MenuHighlights />
};

export default function HomeClient({ children }: HomeClientProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Reveal animations on scroll
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount (optional)
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <OurStory />
      {/* This is the server-rendered MenuHighlights passed from page.tsx */}
      {children}
      <Gallery />
      <VisitUs />
      <Footer />
    </main>
  );
}
