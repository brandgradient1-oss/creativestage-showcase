import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Rocket, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Rocket, value: "5+", label: "Years Experience" },
    { icon: Heart, value: "24/7", label: "Support" }
  ];

  const values = [
    "Innovation-Driven",
    "Client-Focused",
    "Quality-Obsessed",
    "Results-Oriented"
  ];

  return (
    <section className="py-24 gradient-hero text-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital
            <span className="gradient-accent bg-clip-text text-transparent"> Experiences</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            We're a passionate team of designers, developers, and strategists who believe in the power of exceptional digital experiences. Our mission is to transform your vision into reality through innovative solutions that drive growth and success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value) => (
              <Badge 
                key={value} 
                variant="outline" 
                className="text-lg py-2 px-6 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                {value}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;