import { Card } from "@/components/ui/card";
import { MapPin, Award, Users, Clock } from "lucide-react";
import redaGabrImage from "@/assets/reda-gabr.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img
                src={redaGabrImage}
                alt="Reda Gabr - Professional Tour Guide"
                className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto object-cover"
              />
            </div>
            
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Meet Your Guide
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome! I'm Reda Gabr, a professional tour guide based in Sharm El Sheikh. 
                With extensive experience in the tourism industry, I specialize in providing 
                exceptional transportation services and unforgettable tours throughout the 
                Red Sea region.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My passion is helping visitors discover the stunning beauty of Sharm El Sheikh, 
                from its world-renowned coral reefs to its vibrant nightlife and ancient historical sites. 
                I ensure every journey is comfortable, safe, and memorable.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-secondary border-none">
                  <Award className="w-8 h-8 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">Professional</p>
                  <p className="text-sm text-muted-foreground">Certified Guide</p>
                </Card>
                <Card className="p-4 bg-secondary border-none">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">Expert</p>
                  <p className="text-sm text-muted-foreground">Local Knowledge</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="p-6 bg-card hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 border-border">
              <MapPin className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep knowledge of all the best spots, hidden gems, and must-visit locations 
                in Sharm El Sheikh and surrounding areas.
              </p>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 border-border">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Flexible Service</h3>
              <p className="text-muted-foreground">
                Available 24/7 for airport transfers and custom tours. Your schedule 
                is my priority, with punctual and reliable service.
              </p>
            </Card>
            
            <Card className="p-6 bg-card hover:shadow-[var(--shadow-warm)] transition-shadow duration-300 border-border">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Customer First</h3>
              <p className="text-muted-foreground">
                Personalized attention to ensure your comfort and satisfaction. 
                Making your trip extraordinary is my mission.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
