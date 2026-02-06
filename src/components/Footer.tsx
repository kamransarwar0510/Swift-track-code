import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-accent-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M1 3h15v13H1z" />
                  <path d="M16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">SWIFT TRACK</span>
                <span className="text-sm font-semibold text-secondary leading-tight">CARRIER</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              International logistics and transportation solutions for businesses worldwide. Reliable, efficient, and always on time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Air Freight
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sea Freight
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Land Transport
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Warehousing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Logistics Way, Transport City, TC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@swifttrackcarrier.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@swifttrackcarrier.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Swift Track Carrier. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
