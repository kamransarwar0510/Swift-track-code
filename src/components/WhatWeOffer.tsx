import { Package, Share2, Ship, PawPrint, Warehouse, Cog } from "lucide-react";

const offerings = [
  {
    icon: Package,
    title: "Packaged goods transport",
    description:
      "Focuses on the packaging requirements of goods in transit, in particular for items traveling overland by road or rail.",
  },
  {
    icon: Share2,
    title: "Forwarding services",
    description:
      "With our extensive network, we will find a competitive and efficient solution to your next assignment.",
  },
  {
    icon: Ship,
    title: "Sea and air freight",
    description:
      "By using a combination of sea and air freight, you bring added flexibility to your supply chain.",
  },
  {
    icon: PawPrint,
    title: "Pet transport",
    description:
      "Experience a seamless solution for transporting live animals from your home, ensuring effortless travel for your pet by airplane.",
  },
  {
    icon: Warehouse,
    title: "Warehousing and storage",
    description:
      "We are able to offer heated or unheated warehouse solutions both for short-term and for long-term storage.",
  },
  {
    icon: Cog,
    title: "Logistics solutions",
    description:
      "Smart and sustainable business requires the skills of logistics experts who are able to think ahead.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title text-primary">What we offer</h2>
        <p className="section-subtitle">
          From around the corner to around the globe. We will take care of your cargo or your passenger and deliver them safe and on time.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className="group p-6 rounded-lg hover:bg-muted transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                <offering.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {offering.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
