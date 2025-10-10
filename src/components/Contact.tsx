import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/201094466775", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:redagabr@example.com";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
            Ready to explore Sharm El Sheikh? Contact me to book your tour or 
            for any questions about my services.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-card hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 animate-fade-in border-border">
              <Phone className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">
                +20 109 446 6775
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </Card>

            <Card className="p-8 bg-card hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 animate-fade-in border-border" style={{ animationDelay: "0.1s" }}>
              <Mail className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground mb-4">
                Contact me via email
              </p>
              <Button 
                onClick={handleEmail}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </Card>
          </div>

          <Card className="p-8 bg-secondary border-none animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              Based in Sharm El Sheikh
            </h3>
            <p className="text-lg text-muted-foreground">
              Serving all areas of South Sinai, Egypt
            </p>
          </Card>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground">
              Available 24/7 for airport transfers and tour bookings
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Reda Gabr - Professional Tour Guide Services in Sharm El Sheikh
          </p>
        </div>
      </footer>
    </section>
  );
};
