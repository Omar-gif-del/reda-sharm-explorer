import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-night.jpg";

export const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sharm El Sheikh night view"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">Your Gateway to Red Sea Adventures</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent animate-fade-in [animation-delay:200ms]">
          Discover Sharm El Sheikh
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
          Experience the magic of Egypt's premier resort destination with personalized tours and unforgettable adventures
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:600ms]">
          <Button
            onClick={scrollToServices}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          >
            Explore Tours
            <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            variant="outline"
            className="border-accent/50 hover:border-accent hover:bg-accent/10 backdrop-blur-sm"
          >
            Contact Reda
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};
