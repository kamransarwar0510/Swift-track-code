import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-trucks.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            International road transport
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            The road transport industry is the backbone of strong economies and dynamic societies.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold rounded-full flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            TRACK SHIPMENT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
