import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Faith Townsend",
    content:
      "Swift Track Carrier is great to work with. They have many locations, competitive rates, and their staff is excellent will go above and beyond for their partners. I look forward to working with them in the future. Thank you!",
  },
  {
    name: "Tia Hodgson",
    content:
      "Thank you for delivering the shipping containers to us so quickly. Your delivery guys were most helpful and courteous. You have been a pleasure to deal with and we will not hesitate to use your services again or recommend you.",
  },
  {
    name: "Jake Dyer",
    content:
      "We have always found them to be highly professional and reliable, and have assisted us in delivering a high standard service to our customers. Swift Track Carrier have been a valuable supplier to Truflo and continue to be so.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="section-title text-primary">What clients say.</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <Quote className="w-8 h-8 text-secondary mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {testimonial.content}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
