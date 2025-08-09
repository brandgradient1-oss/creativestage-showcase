import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Scene3D from "./Scene3D";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden gradient-hero">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full gradient-glass opacity-20 animate-parallax-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full glass-dark opacity-30 animate-parallax-float [animation-delay:2s]"></div>
      </div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 z-20 glass-subtle"></div>

      {/* Content */}
      <div 
        className="relative z-30 min-h-screen flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tight">
                We don't just build
                <span className="block font-bold gradient-accent bg-clip-text text-transparent">
                  We architect dreams
                </span>
              </h1>
            </div>
            
            {/* Conversational Subtitle */}
            <div className="glass rounded-3xl p-8 mb-12 animate-slide-up [animation-delay:0.3s] max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Here's what we believe: your business deserves more than a website—it deserves a 
                <span className="text-accent font-medium"> digital masterpiece</span>. 
                We're not your typical agency. We're the team that Fortune 500 companies call when they need 
                <span className="text-white font-medium"> extraordinary results</span>.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up [animation-delay:0.6s]">
              <Button 
                variant="hero" 
                size="lg"
                className="text-xl px-12 py-6 rounded-2xl shadow-glow animate-pulse-glow glass-subtle border border-white/20 hover:shadow-elegant transition-glass"
              >
                See Our Masterpieces
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-xl px-12 py-6 rounded-2xl text-white border-white/30 glass-subtle hover:glass backdrop-blur-md transition-glass"
              >
                Let's Talk Strategy
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 animate-fade-in [animation-delay:0.9s]">
              <div className="glass rounded-2xl p-6 inline-block">
                <p className="text-white/70 text-sm mb-3">Trusted by industry leaders worldwide</p>
                <div className="flex items-center justify-center space-x-8 text-white/50 text-xs">
                  <span>500+ Projects Delivered</span>
                  <span>•</span>
                  <span>50+ Countries Served</span>
                  <span>•</span>
                  <span>99.9% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-float">
        <div className="glass-subtle rounded-full p-4">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;