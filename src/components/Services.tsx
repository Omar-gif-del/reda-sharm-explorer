import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import airportImage from "@/assets/airport-transfer.jpg";
import safariImage from "@/assets/safari.jpg";
import dahabImage from "@/assets/dahab.jpg";
import rasMohamedImage from "@/assets/ras-mohamed.jpg";
import stCatherineImage from "@/assets/st-catherine.jpg";
import fishingImage from "@/assets/fishing.jpg";
import sohoImage from "@/assets/soho-square.jpg";
import naamaBayImage from "@/assets/naama-bay.jpg";
import oldMarketImage from "@/assets/old-market.jpg";
import farshaCafeImage from "@/assets/farsha-cafe.jpg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  delay?: string;
}

const ServiceCard = ({ title, description, image, imageAlt, delay = "0s" }: ServiceCardProps) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Reda, I'm interested in ${title}`);
    window.open(`https://wa.me/201094466775?text=${message}`, "_blank");
  };

  return (
    <Card 
      className="overflow-hidden group hover:shadow-[var(--shadow-warm)] transition-all duration-300 animate-fade-in bg-card border-border"
      style={{ animationDelay: delay }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary-foreground">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={handleWhatsApp}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
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
      description: "Comfortable and reliable transportation from Sharm El Sheikh Airport to your hotel. Professional service with modern, air-conditioned vehicles.",
      image: airportImage,
      imageAlt: "Airport transfer service in Sharm El Sheikh"
    },
    {
      title: "Desert Safari",
      description: "Experience the thrill of the desert with exciting 4x4 safari adventures. Discover the stunning Sinai mountains and Bedouin culture.",
      image: safariImage,
      imageAlt: "Desert safari adventure in Sharm El Sheikh"
    },
    {
      title: "Dahab Day Trip",
      description: "Visit the beautiful coastal town of Dahab, famous for its relaxed atmosphere, stunning beaches, and the world-famous Blue Hole diving spot.",
      image: dahabImage,
      imageAlt: "Dahab beach and Blue Hole"
    },
    {
      title: "Ras Mohamed National Park",
      description: "Explore Egypt's first national park with its incredible coral reefs, diverse marine life, and breathtaking underwater world.",
      image: rasMohamedImage,
      imageAlt: "Ras Mohamed National Park coral reefs"
    },
    {
      title: "Saint Catherine Monastery",
      description: "Journey to the historic Saint Catherine's Monastery at the foot of Mount Sinai. Experience ancient spiritual heritage and stunning mountain views.",
      image: stCatherineImage,
      imageAlt: "Saint Catherine Monastery at Mount Sinai"
    },
    {
      title: "Fishing Trips",
      description: "Enjoy a peaceful day of fishing on the Red Sea. Perfect for both experienced anglers and beginners looking for a relaxing experience.",
      image: fishingImage,
      imageAlt: "Fishing trip on the Red Sea"
    },
    {
      title: "Soho Square",
      description: "Visit Sharm's modern entertainment hub featuring restaurants, cafes, shops, and nightlife. Experience the vibrant atmosphere of this popular destination.",
      image: sohoImage,
      imageAlt: "Soho Square entertainment complex"
    },
    {
      title: "Naama Bay",
      description: "Explore the famous Naama Bay promenade with its beautiful beaches, restaurants, and shopping. The heart of Sharm El Sheikh's tourism scene.",
      image: naamaBayImage,
      imageAlt: "Naama Bay beach promenade"
    },
    {
      title: "Old Market",
      description: "Experience authentic Egyptian culture at the traditional Old Market. Shop for spices, textiles, handicrafts, and souvenirs in a vibrant local atmosphere.",
      image: oldMarketImage,
      imageAlt: "Traditional Old Market bazaar"
    },
    {
      title: "Farsha Cafe",
      description: "Visit the iconic Farsha Cafe, one of Sharm's most unique venues. Enjoy stunning sunset views, traditional decor, and a magical atmosphere.",
      image: farshaCafeImage,
      imageAlt: "Farsha Cafe with traditional Egyptian decor"
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Services & Tours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the wonders of Sharm El Sheikh with professional transportation 
            and expertly guided tours
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
