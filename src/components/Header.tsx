import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Air Freight", href: "#air-freight" },
    { name: "Sea Freight", href: "#sea-freight" },
    { name: "Land Transport", href: "#land-transport" },
    { name: "Warehousing", href: "#warehousing" },
    { name: "Logistics Solutions", href: "#logistics" },
    { name: "Forwarding Services", href: "#forwarding" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary py-2">
        <div className="container flex items-center justify-between text-primary-foreground text-sm">
          <span>Have any questions?</span>
          <a
            href="mailto:info@swifttrackcarrier.com"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@swifttrackcarrier.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
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
                <span className="text-xl font-bold text-primary leading-tight">
                  SWIFT TRACK
                </span>
                <span className="text-sm font-semibold text-secondary leading-tight">
                  CARRIER
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="nav-link nav-link-active">
              HOME
            </Link>
            
            <div className="relative group">
              <button className="nav-link flex items-center gap-1">
                COMPANY
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <button 
                className="nav-link flex items-center gap-1"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                OUR SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 bg-background shadow-lg rounded-md py-2 min-w-[200px] z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#track" className="nav-link">
              TRACK SHIPMENT
            </a>
            <a href="#payment" className="nav-link">
              ONLINE PAYMENT
            </a>
            <a href="#contact" className="nav-link">
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t">
            <div className="container py-4 flex flex-col gap-4">
              <Link to="/" className="nav-link nav-link-active">
                HOME
              </Link>
              <button className="nav-link text-left">COMPANY</button>
              <div className="pl-4 flex flex-col gap-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-accent"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a href="#track" className="nav-link">
                TRACK SHIPMENT
              </a>
              <a href="#payment" className="nav-link">
                ONLINE PAYMENT
              </a>
              <a href="#contact" className="nav-link">
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
