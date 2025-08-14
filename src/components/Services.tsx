import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Camera, Share2 } from "lucide-react";
import { useScrollGradient } from "@/hooks/use-scroll-gradient";

const Services = () => {
  const { scrollY, getGradientStyle, getParallaxOffset } = useScrollGradient();

  const services = [
    {
      icon: Code,
      title: "Digital Architecture",
      subtitle: "Custom Website Development",
      description: "We don't build websites. We architect digital experiences that convert visitors into customers and browsers into believers.",
      features: ["AI-Powered UX", "Lightning Performance", "Future-Proof Code", "Conversion Optimized"],
      conversational: "Think of us as your digital architects—every line of code serves a purpose, every animation tells a story."
    },
    {
      icon: Palette,
      title: "Brand Alchemy",
      subtitle: "Identity & Visual Design",
      description: "Your brand isn't just a logo—it's the emotional connection between you and your customers. We make that connection unforgettable.",
      features: ["Psychological Design", "Global Appeal", "Timeless Aesthetics", "Brand Psychology"],
      conversational: "We study what makes people remember, what makes them trust, what makes them choose you over everyone else."
    },
    {
      icon: Share2,
      title: "Social Mastery",
      subtitle: "Strategic Digital Presence",
      description: "Social media isn't about posting—it's about creating movements. We turn your audience into your community, your community into your advocates.",
      features: ["Viral Strategy", "Community Building", "Data-Driven Content", "Global Reach"],
      conversational: "We don't just manage social media. We orchestrate digital conversations that matter."
    },
    {
      icon: Camera,
      title: "Visual Storytelling",
      subtitle: "Professional Photography",
      description: "Every image we capture tells your story before you say a word. We create visuals that stop scrolls and start conversations.",
      features: ["Cinematic Quality", "Brand-Aligned", "Multi-Platform", "Story-Driven"],
      conversational: "Our cameras don't just capture moments—they capture the essence of what makes your business extraordinary."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="services">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${getParallaxOffset(0.2)}px)` }}
      >
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full gradient-glass animate-glass-shimmer"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full glass-dark animate-parallax-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="glass rounded-3xl p-8 max-w-4xl mx-auto mb-8">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
              We don't do
              <span 
                className="font-bold"
                style={getGradientStyle(240, 100)}
              > ordinary</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              While others build websites, we architect digital empires. While others design logos, 
              we craft legacies. Here's how we transform businesses into phenomena.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const parallaxOffset = getParallaxOffset(index % 2 === 0 ? 0.1 : -0.1);
            
            return (
              <Card 
                key={service.title}
                className="group glass-subtle border-border/20 transition-glass hover:glass hover:shadow-glass hover:-translate-y-2 rounded-3xl overflow-hidden"
                style={{
                  transform: `translateY(${parallaxOffset}px)`,
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <CardHeader className="relative p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Titles */}
                  <div className="space-y-2">
                    <p className="text-accent font-medium text-sm uppercase tracking-wider">
                      {service.subtitle}
                    </p>
                    <CardTitle className="text-3xl group-hover:text-accent transition-colors font-light">
                      {service.title}
                    </CardTitle>
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 gradient-glass rounded-full opacity-20 group-hover:animate-rotate-3d"></div>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  {/* Main Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Conversational Insight */}
                  <div className="glass-dark rounded-2xl p-4 mb-6">
                    <p className="text-sm text-white/90 italic leading-relaxed">
                      "{service.conversational}"
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm group">
                        <div className="w-2 h-2 gradient-accent rounded-full mr-3 flex-shrink-0 group-hover:animate-pulse-glow"></div>
                        <span className="text-muted-foreground group-hover:text-accent transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to see what extraordinary looks like?
            </p>
            <p className="text-accent font-medium">
              Let's create something the world has never seen before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;