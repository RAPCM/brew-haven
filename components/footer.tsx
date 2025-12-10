import { Coffee, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-foreground">
                Brew Haven
              </span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Where every cup tells a story. Premium specialty coffee and a cozy
              haven for coffee lovers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#visit"
                  className="text-foreground/70 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/60 text-sm">
            © {currentYear} Brew Haven. All rights reserved. Crafted with ☕ and
            care.
          </p>
        </div>
      </div>
    </footer>
  );
}
