import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Air Freight",
    description:
      "Our Air freight professionals identify the forwarding and logistics services that are best to help you meet your objectives.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
  },
  {
    title: "Sea Freight",
    description:
      "By using a combination of sea and air freight, you bring added flexibility to your supply chain.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop",
  },
  {
    title: "Land Transport",
    description:
      "When it comes to Land transport services, Swift Track Carrier has connections you can trust.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
  },
  {
    title: "Warehousing and storage",
    description:
      "Swift Track Carrier is able to offer heated or unheated warehouse solutions both for short-term and for long-term storage.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    title: "Logistics solutions",
    description:
      "Smart and sustainable business requires the skills of logistics experts who are able to think ahead.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
  },
  {
    title: "Forwarding services",
    description:
      "With our extensive network, we will find a competitive and efficient solution to your next assignment.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
  },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="section-title text-primary">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive logistics solutions tailored to your needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary/80 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
