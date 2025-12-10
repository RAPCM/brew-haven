export default function MenuHighlights() {
  const drinks = [
    {
      name: "Espresso",
      description: "Pure, concentrated coffee excellence in every shot",
      price: "$3.50",
    },
    {
      name: "Cappuccino",
      description: "Silky microfoam paired with rich espresso",
      price: "$4.50",
    },
    {
      name: "Latte",
      description: "Smooth and creamy milk coffee perfection",
      price: "$4.50",
    },
    {
      name: "Cold Brew",
      description: "Smooth, refreshing cold-steeped coffee delight",
      price: "$4.00",
    },
    {
      name: "Flat White",
      description: "Dense, velvety microfoam with bold espresso",
      price: "$4.75",
    },
    {
      name: "Macchiato",
      description: "Espresso marked with a touch of creamy foam",
      price: "$4.25",
    },
  ];

  const pastries = [
    {
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: "$3.50",
    },
    {
      name: "Blueberry Muffin",
      description: "Fresh blueberries in a soft, moist cake",
      price: "$4.00",
    },
    {
      name: "Chocolate Cake",
      description: "Rich, decadent chocolate indulgence",
      price: "$4.50",
    },
    {
      name: "Almond Croissant",
      description: "Flaky pastry with smooth almond filling",
      price: "$4.25",
    },
  ];

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Signature Menu
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Drinks Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-10 reveal">
            Signature Drinks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {drinks.map((drink, index) => (
              <div
                key={drink.name}
                className="reveal group bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:border-accent transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-foreground">
                    {drink.name}
                  </h4>
                  <span className="text-accent font-bold">{drink.price}</span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {drink.description}
                </p>
                <div className="mt-4 h-1 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pastries Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-10 reveal">
            Fresh Pastries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastries.map((pastry, index) => (
              <div
                key={pastry.name}
                className="reveal group bg-card border border-border rounded-lg p-6 hover:shadow-2xl hover:border-accent transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-foreground">
                    {pastry.name}
                  </h4>
                  <span className="text-accent font-bold text-sm">
                    {pastry.price}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {pastry.description}
                </p>
                <div className="mt-4 h-1 w-0 bg-accent group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
