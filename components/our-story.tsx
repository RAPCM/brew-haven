export default function OurStory() {
  return (
    <section id="story" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/coffee-shop-interior-warm-lighting-cozy.jpg"
                alt="Brew Haven interior"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="reveal">
            <div className="bg-background/50 p-8 rounded-lg border border-border">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Founded in 2015, Brew Haven began as a passion project to bring
                specialty coffee culture to our community. We believe that
                coffee is more than just a beverage—it&apos;s a ritual, a moment
                of connection, and a story waiting to be told.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Every bean we source is carefully selected from ethical,
                sustainable farms around the world. Our master roasters work
                tirelessly to bring out the unique flavors and aromas that make
                each origin special.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Whether you&apos;re a coffee connoisseur or just starting your
                coffee journey, our knowledgeable baristas are here to guide you
                and ensure every cup exceeds your expectations.
              </p>
              <div className="flex gap-4">
                <div className="text-accent text-3xl font-bold">9+</div>
                <div className="text-foreground/80">
                  <p className="font-semibold">Years of Excellence</p>
                  <p className="text-sm">Serving the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
