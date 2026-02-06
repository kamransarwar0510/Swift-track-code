import { Plane, Ship, Truck } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "AIR FREIGHT",
    description:
      "We understand that air freight plays a vital role in the success of your business and strive to...",
  },
  {
    icon: Ship,
    title: "SEA FREIGHT",
    description:
      "Our Sea/ Ocean freight service offers a superior means of transporting your goods by sea.",
  },
  {
    icon: Truck,
    title: "LAND TRANSPORT",
    description:
      "The road transport industry is the backbone of strong economies and dynamic societies.",
  },
];

const ServiceCards = () => {
  return (
    <section className="relative -mt-24 z-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card-gradient rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <service.icon className="w-12 h-12 text-service-foreground" />
              </div>
              <h3 className="text-xl font-bold text-service-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-service-foreground/90 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
