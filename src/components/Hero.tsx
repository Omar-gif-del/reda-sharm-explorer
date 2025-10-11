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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Premium Tour Guide Services</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground animate-fade-in-up bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
          Reda Gabr
        </h1>
        
        <p className="text-2xl md:text-4xl mb-4 text-foreground/90 animate-fade-in-up font-playfair font-medium" style={{ animationDelay: "0.2s" }}>
          Your Expert Tour Guide
        </p>
        
        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Experience the magic of Sharm El Sheikh with premium transportation and personalized tours
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-scale-in w-full max-w-md md:max-w-none mx-auto px-4" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            onClick={scrollToServices}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 w-full md:w-auto"
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.location.href = "https://wa.me/201094466775?text=Hello%20Reda%2C%20I%27m%20interested%20in%20your%20tour%20services"}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 text-base md:text-lg px-6 md:px-8 w-full md:w-auto"
          >
            Contact Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 animate-float text-foreground/60 hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll Down</span>
          <ChevronDown className="w-8 h-8 group-hover:translate-y-1 transition-transform" />
        </div>
      </button>
    </section>
  );
};
