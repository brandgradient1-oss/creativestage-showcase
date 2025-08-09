import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Camera, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Bespoke websites built with cutting-edge technology, optimized for performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete branding solutions that capture your essence and resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Materials"]
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Data-driven social media campaigns that build community and drive meaningful engagement.",
      features: ["Content Strategy", "Community Management", "Analytics", "Paid Advertising"]
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Stunning visuals that tell your story and showcase your products in the best possible light.",
      features: ["Product Photography", "Brand Photography", "Event Coverage", "Post-Production"]
    }
  ];

  return (
    <section className="py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our
            <span className="gradient-primary bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and amplify your brand presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/80"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 gradient-accent rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;