import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/201094466775?text=Hello%20Reda%2C%20I%27m%20interested%20in%20your%20tour%20services", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:reda.gabr.tours@gmail.com?subject=Tour%20Inquiry&body=Hello%20Reda%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20tour%20services%20in%20Sharm%20El%20Sheikh.", "_blank");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm text-primary font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Let's Plan Your <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to explore Sharm El Sheikh? Reach out for bookings, questions, 
              or custom tour arrangements.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-warm)] transition-all duration-500 animate-fade-in border-border group hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Quick responses and instant communication
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-4">
                    +20 109 446 6775
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300 group/btn"
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                Chat on WhatsApp
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:shadow-[var(--shadow-warm)] transition-all duration-500 animate-fade-in border-border group hover:-translate-y-2" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground mb-4">
                    For detailed inquiries and bookings
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-4">
                    Available for contact
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleEmail}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 group/btn"
              >
                <Send className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                Send Email
              </Button>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-border animate-fade-in hover:border-primary/30 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Sharm El Sheikh, South Sinai, Egypt
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-secondary/50 backdrop-blur-sm border-border animate-fade-in hover:border-accent/30 transition-all duration-300" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-accent/10">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-foreground">Availability</h3>
                  <p className="text-muted-foreground">
                    24/7 for airport transfers & tours
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-10 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20 animate-fade-in text-center" style={{ animationDelay: "0.4s" }}>
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-3 text-foreground">
              Ready to Book Your Tour?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact me now to customize your perfect Sharm El Sheikh experience
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300 text-lg px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Planning Your Journey
            </Button>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-border/50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-foreground mb-2 font-playfair">Reda Gabr</h4>
                <p className="text-muted-foreground">
                  Professional Tour Guide Services in Sharm El Sheikh
                </p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleWhatsApp}
                  className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleEmail}
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
              <p>© {new Date().getFullYear()} Reda Gabr. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
