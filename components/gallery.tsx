"use client";

import { useState } from "react";

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      image: "/latte-art-coffee-foam-design.jpg",
      caption: "Latte Art Perfection",
    },
    {
      image: "/coffee-beans-roasted-dark-aromatic.jpg",
      caption: "Premium Beans",
    },
    {
      image: "/morning-coffee-cup-cozy-aesthetic.jpg",
      caption: "Morning Ritual",
    },
    {
      image: "/espresso-shot-dark-crema-professional.jpg",
      caption: "Pure Espresso",
    },
    {
      image: "/coffee-shop-interior-seating-ambiance.jpg",
      caption: "Cozy Atmosphere",
    },
    {
      image: "/barista-making-cappuccino-latte-milk-steaming.jpg",
      caption: "Crafted with Care",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Atmosphere
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="reveal relative group overflow-hidden rounded-lg h-64 md:h-72 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-foreground text-xl font-semibold text-center">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
