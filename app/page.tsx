"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import OurStory from "@/components/our-story";
import MenuHighlights from "@/components/menu-highlights";
import Gallery from "@/components/gallery";
import VisitUs from "@/components/visit-us";
import Footer from "@/components/footer";

export default function Home() {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <OurStory />
      <MenuHighlights />
      <Gallery />
      <VisitUs />
      <Footer />
    </main>
  );
}
