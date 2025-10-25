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
    const message = encodeURIComponent(`Hello Reda, I'm interested in booking: ${title}`);
    window.location.href = `https://wa.me/201094466775?text=${message}`;
  };

  return (
    <Card
      className={`overflow-hidden group hover:shadow-[var(--shadow-warm)] transition-all duration-500 animate-fade-in bg-card border-border hover:-translate-y-2 ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
        {featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span>Popular</span>
          </div>
        )}
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button
          onClick={handleWhatsApp}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-lg transition-all duration-300 group/btn"
        >
          <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
          Book with Reda
        </Button>
      </div>
    </Card>
  );
};

export const Services = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Desert Safari Adventure",
      description: "Experience the thrill of quad biking and camel rides through the stunning Sinai Desert. Watch the sunset paint the dunes in golden hues while enjoying authentic Bedouin hospitality and traditional tea.",
      image: safariImage,
      imageAlt: "Desert safari with quad bikes and camels",
      delay: "0ms",
      featured: true,
    },
    {
      title: "Ras Mohamed National Park",
      description: "Explore Egypt's first national park, home to pristine coral reefs and diverse marine life. Snorkel in crystal-clear waters where the Red Sea meets the Gulf of Suez, discovering underwater wonders.",
      image: rasMohamedImage,
      imageAlt: "Ras Mohamed coral reefs",
      delay: "100ms",
      featured: true,
    },
    {
      title: "Dahab Day Trip",
      description: "Visit the laid-back coastal town of Dahab, famous for the Blue Hole diving site and vibrant beachfront cafes. Experience world-class snorkeling and the unique atmosphere of this bohemian paradise.",
      image: dahabImage,
      imageAlt: "Dahab coastal town",
      delay: "200ms",
    },
    {
      title: "St. Catherine Monastery",
      description: "Journey to one of the world's oldest working monasteries at the foot of Mount Sinai. Witness where Moses received the Ten Commandments and marvel at priceless religious artifacts and ancient manuscripts.",
      image: stCatherineImage,
      imageAlt: "St. Catherine Monastery",
      delay: "300ms",
    },
    {
      title: "Red Sea Fishing",
      description: "Set sail on a traditional fishing boat for an unforgettable day on the Red Sea. Try your hand at catching local fish species while enjoying the stunning coastal views and warm Egyptian hospitality.",
      image: fishingImage,
      imageAlt: "Red Sea fishing experience",
      delay: "400ms",
    },
    {
      title: "SOHO Square",
      description: "Experience Sharm's premier entertainment complex with its dancing fountains, open-air cinema, ice rink, and diverse dining options. A perfect evening destination for families and couples alike.",
      image: sohoImage,
      imageAlt: "SOHO Square entertainment",
      delay: "500ms",
    },
    {
      title: "Naama Bay Nightlife",
      description: "Discover the vibrant heart of Sharm El Sheikh's nightlife. Stroll along the illuminated promenade, enjoy beachfront dining, and experience the electric atmosphere of bars and clubs.",
      image: naamaBayImage,
      imageAlt: "Naama Bay at night",
      delay: "600ms",
    },
    {
      title: "Old Market Sharm",
      description: "Immerse yourself in authentic Egyptian culture at the bustling Old Market. Haggle for spices, textiles, and handicrafts while savoring traditional street food and aromatic shisha.",
      image: oldMarketImage,
      imageAlt: "Old Market spices and goods",
      delay: "700ms",
    },
    {
      title: "Farsha Cafe",
      description: "Relax at this iconic clifftop cafe in Sharm's Old Town. Lounge on colorful cushions, sip refreshing drinks, and watch spectacular sunsets over the Red Sea in this unique bohemian setting.",
      image: farshaCafeImage,
      imageAlt: "Farsha Cafe sunset view",
      delay: "800ms",
    },
    {
      title: "Airport Transfer",
      description: "Start your journey stress-free with reliable airport pickup and drop-off service. Enjoy comfortable, air-conditioned transportation with a friendly local driver who knows Sharm inside out.",
      image: airportImage,
      imageAlt: "Airport transfer service",
      delay: "900ms",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Unforgettable Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the magic of Sharm El Sheikh with our carefully curated tours and activities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
