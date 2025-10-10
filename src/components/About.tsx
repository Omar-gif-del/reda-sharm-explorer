import { Card } from "@/components/ui/card";
import { MapPin, Award, Users, Clock, Shield, Star } from "lucide-react";
import redaGabrImage from "@/assets/reda-gabr.jpg";

export const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <img
                  src={redaGabrImage}
                  alt="Reda Gabr - Professional Tour Guide"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="animate-fade-in-up order-1 md:order-2">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm text-primary font-semibold">Your Expert Guide</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Meet <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Reda Gabr</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to your gateway to Sharm El Sheikh's wonders! As a professional tour guide with deep roots 
                in this stunning Red Sea paradise, I bring extensive experience and genuine passion to every journey.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From luxurious airport transfers to authentic desert adventures, I ensure every moment is comfortable, 
                safe, and unforgettable. My mission is to share the true beauty and culture of Egypt with travelers 
                from around the world.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-warm)] group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Professional</p>
                      <p className="text-sm text-muted-foreground">Certified Guide</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-warm)] group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">Expert</p>
                      <p className="text-sm text-muted-foreground">Local Knowledge</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose My Services?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference of personalized, professional tour guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 border-border hover:border-primary/30 group hover:-translate-y-2">
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                Local Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover hidden gems and authentic experiences that only a true local can reveal. 
                Every location has its story, and I know them all.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 border-border hover:border-accent/30 group hover:-translate-y-2">
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                24/7 Availability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your schedule is my priority. Available around the clock for airport transfers 
                and custom tours with punctual, reliable service.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 border-border hover:border-primary/30 group hover:-translate-y-2">
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                Safety & Comfort
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Your well-being comes first. Modern vehicles, safety standards, and personalized 
                attention ensure peace of mind throughout your journey.
              </p>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 animate-fade-in">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">Premium</p>
                  <p className="text-sm text-muted-foreground">Service Quality</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">Licensed</p>
                  <p className="text-sm text-muted-foreground">Tour Guide</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">Personalized</p>
                  <p className="text-sm text-muted-foreground">Attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
