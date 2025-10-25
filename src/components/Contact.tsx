import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/201094466775?text=Hello%20Reda%2C%20I%27m%20interested%20in%20your%20tour%20services";
  };

  const handleEmail = () => {
    window.location.href = "mailto:reda.gabr.tours@gmail.com?subject=Tour%20Inquiry&body=Hello%20Reda%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20tour%20services%20in%20Sharm%20El%20Sheikh.";
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
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
            {/* WhatsApp Card */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 group animate-fade-in [animation-delay:100ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">Quick responses, easy booking</p>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 group animate-fade-in [animation-delay:200ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground mb-4">Detailed inquiries welcome</p>
                  <Button
                    onClick={handleEmail}
                    variant="outline"
                    className="w-full border-accent/50 hover:border-accent hover:bg-accent/10"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in [animation-delay:300ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground mb-2">Direct line to Reda</p>
                  <a
                    href="tel:+201094466775"
                    className="text-lg font-mono text-accent hover:text-accent/80 transition-colors"
                  >
                    +20 109 446 6775
                  </a>
                </div>
              </div>
            </Card>

            {/* Location Card */}
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in [animation-delay:400ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground">Sharm El Sheikh</p>
                  <p className="text-muted-foreground">South Sinai, Egypt</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Availability Notice */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20 animate-fade-in [animation-delay:500ms]">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="p-4 rounded-2xl bg-accent/10">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">
                  Available 24/7
                </h3>
                <p className="text-muted-foreground text-lg">
                  I'm here to help you plan the perfect Sharm El Sheikh experience, 
                  any time of day. Your adventure awaits!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
