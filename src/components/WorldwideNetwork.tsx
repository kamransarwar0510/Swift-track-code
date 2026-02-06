import { Button } from "@/components/ui/button";

const WorldwideNetwork = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* World map pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          <path
            fill="currentColor"
            className="text-primary-foreground"
            d="M250,100 Q300,50 350,100 Q400,150 450,100 Q500,50 550,100 Q600,150 650,100 L650,300 Q600,350 550,300 Q500,250 450,300 Q400,350 350,300 Q300,250 250,300 Z"
          />
        </svg>
      </div>

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Our worldwide network
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
          The worldwide network of our group and that of our associates allows us to perform in the international business, catering to our clients needs through the coordination of harmonized multimodal transportation
        </p>
      </div>
    </section>
  );
};

export default WorldwideNetwork;
