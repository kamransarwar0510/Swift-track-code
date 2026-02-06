import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const TrackShipment = () => {
  return (
    <section id="track" className="py-16 bg-secondary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-6">
          Track Shipment
        </h2>
        <Button
          size="lg"
          variant="outline"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold rounded-full"
        >
          <Search className="w-5 h-5 mr-2" />
          Track Now
        </Button>
      </div>
    </section>
  );
};

export default TrackShipment;
