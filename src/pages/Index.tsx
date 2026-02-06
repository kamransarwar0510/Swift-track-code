import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import WhatWeOffer from "@/components/WhatWeOffer";
import ContactBanner from "@/components/ContactBanner";
import OurServices from "@/components/OurServices";
import WorldwideNetwork from "@/components/WorldwideNetwork";
import TrackShipment from "@/components/TrackShipment";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceCards />
      <WhatWeOffer />
      <ContactBanner />
      <OurServices />
      <WorldwideNetwork />
      <TrackShipment />
      <Testimonials />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
