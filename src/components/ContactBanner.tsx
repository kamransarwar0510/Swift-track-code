import { Button } from "@/components/ui/button";

const ContactBanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
          Contact us now to get quote for all your global shipping and cargo need.
        </h2>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold rounded-full"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default ContactBanner;
