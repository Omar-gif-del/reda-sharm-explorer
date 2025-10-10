import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import airportImage from "@/assets/airport-transfer.jpg";
import safariImage from "@/assets/safari-authentic.jpg";
import dahabImage from "@/assets/dahab-authentic.jpg";
import rasMohamedImage from "@/assets/ras-mohamed-real.jpg";
import stCatherineImage from "@/assets/st-catherine.jpg";
import fishingImage from "@/assets/fishing-real.jpg";
import sohoImage from "@/assets/soho-square.jpg";
import naamaBayImage from "@/assets/naama-twilight.jpg";
import oldMarketImage from "@/assets/market-spices.jpg";
import farshaCafeImage from "@/assets/farsha-cafe.jpg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  delay?: string;
  featured?: boolean;
}

const ServiceCard = ({ title, description, image, imageAlt, delay = "0s", featured = false }: ServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Reda, I'm interested in ${title}`);
    window.open(`https://wa.me/201094466775?text=${message}`, "_blank");
  };

  return (
    <Card 
      className={`overflow-hidden group hover:shadow-[var(--shadow-warm)] transition-all duration-500 animate-fade-in bg-card border-border hover:-translate-y-2 ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
            <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
            <span className="text-xs font-semibold text-primary-foreground">Popular</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={handleWhatsApp}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300 group/btn"
        >
          <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
          Book via WhatsApp
        </Button>
      </div>
    </Card>
  );
};

export const Services = () => {
  const services = [
    {
      title: "Airport Transfers",
      description: "Luxurious and punctual transportation from Sharm El Sheikh Airport to your hotel. Modern, air-conditioned vehicles with professional drivers.",
      image: airportImage,
      imageAlt: "Airport transfer service in Sharm El Sheikh",
      featured: true
    },
    {
      title: "Desert Safari Adventure",
      description: "Immerse yourself in authentic Bedouin culture with thrilling 4x4 desert safaris. Experience traditional hospitality under the stars in the stunning Sinai mountains.",
      image: safariImage,
      imageAlt: "Authentic Bedouin desert safari in Sinai",
      featured: true
    },
    {
      title: "Dahab Day Trip",
      description: "Discover the laid-back charm of Dahab, featuring world-class diving at the Blue Hole, Bedouin cafes, and spectacular views across the Gulf of Aqaba.",
      image: dahabImage,
      imageAlt: "Dahab Blue Hole and beach restaurants"
    },
    {
      title: "Ras Mohamed National Park",
      description: "Dive into Egypt's premier marine park with vibrant coral reefs teeming with tropical fish. Experience the underwater paradise of the Red Sea.",
      image: rasMohamedImage,
      imageAlt: "Ras Mohamed coral reef underwater",
      featured: true
    },
    {
      title: "Saint Catherine Monastery",
      description: "Visit the sacred Mount Sinai and ancient Saint Catherine's Monastery. Witness breathtaking sunrise views from this historic pilgrimage site.",
      image: stCatherineImage,
      imageAlt: "Saint Catherine Monastery at Mount Sinai"
    },
    {
      title: "Fishing Expeditions",
      description: "Experience traditional Red Sea fishing with local expertise. Perfect for both seasoned anglers and those seeking a peaceful day on the water.",
      image: fishingImage,
      imageAlt: "Traditional fishing on the Red Sea"
    },
    {
      title: "Soho Square",
      description: "Explore Sharm's vibrant entertainment complex with world-class restaurants, cafes, ice bar, and nightlife in a modern, lively atmosphere.",
      image: sohoImage,
      imageAlt: "Soho Square entertainment hub"
    },
    {
      title: "Naama Bay Promenade",
      description: "Stroll along the iconic beachfront with palm-lined walkways, upscale dining, shopping, and stunning bay views at the heart of Sharm's tourism.",
      image: naamaBayImage,
      imageAlt: "Naama Bay at twilight"
    },
    {
      title: "Old Market Bazaar",
      description: "Immerse yourself in authentic Egyptian culture. Browse traditional handicrafts, aromatic spices, textiles, and souvenirs in a vibrant local atmosphere.",
      image: oldMarketImage,
      imageAlt: "Traditional spice market in Old Sharm"
    },
    {
      title: "Farsha Cafe Experience",
      description: "Unwind at the legendary Farsha Cafe with its unique traditional decor, stunning sunset views, and magical ambiance overlooking the Red Sea.",
      image: farshaCafeImage,
      imageAlt: "Farsha Cafe with traditional Egyptian atmosphere"
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary font-semibold">Premium Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Discover <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Sharm El Sheikh</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From thrilling desert adventures to serene underwater explorations, experience the very best 
            of Egypt's Red Sea paradise with expertly guided tours
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
