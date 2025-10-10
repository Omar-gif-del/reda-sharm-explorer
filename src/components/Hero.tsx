import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sharm.jpg";

export const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sharm El Sheikh Red Sea coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in-up">
          Reda Gabr
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Your Expert Tour Guide in Sharm El Sheikh
        </p>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Experience the beauty of Egypt's Red Sea paradise with professional transportation
          and personalized tour services
        </p>
        <Button
          size="lg"
          onClick={scrollToServices}
          className="animate-scale-in bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-warm)]"
          style={{ animationDelay: "0.6s" }}
        >
          Explore Services
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
