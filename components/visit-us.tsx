import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="visit" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="reveal space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-foreground/70">
                  123 Coffee Lane
                  <br />
                  Brew City, BC V1A 2B3
                  <br />
                  Canada
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-foreground/70">(604) 555-0123</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-foreground/70">hello@brewhaven.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Hours
                </h3>
                <div className="text-foreground/70 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block mt-4 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-accent/90 transition-colors duration-300 uppercase tracking-wide text-sm"
            >
              Get Directions
            </a>
          </div>

          {/* Map Placeholder */}
          <div className="reveal">
            <div className="relative rounded-lg overflow-hidden h-96 bg-card border-2 border-border">
              <img
                src="/map-location-coffee-shop-downtown.jpg"
                alt="Location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                  <p className="text-foreground font-semibold">Brew Haven</p>
                  <p className="text-foreground/70 text-sm">123 Coffee Lane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
