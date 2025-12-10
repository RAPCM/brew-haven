"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=dark-coffee-shop-interior-cozy-aesthetic)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Where Every Cup Tells a Story
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-2xl text-foreground/90 mb-10 font-light">
            Discover the art of specialty coffee in our cozy haven.
            <br />
            Premium beans, skilled baristas, and unforgettable experiences.
          </p>
        </div>

        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-accent/90 transition-colors duration-300 uppercase tracking-wide text-sm"
          >
            View Menu
          </a>
          <a
            href="#visit"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#visit")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border-2 border-foreground text-foreground font-semibold rounded-sm hover:bg-foreground/10 transition-colors duration-300 uppercase tracking-wide text-sm"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce text-accent/60">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
