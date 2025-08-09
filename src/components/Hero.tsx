import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Creative agency hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            We Create
            <span className="block gradient-accent bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s]">
            Custom websites, powerful branding, strategic social media, and stunning photography that elevate your business to new heights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:0.4s]">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 shadow-glow animate-pulse-glow"
            >
              View Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10 backdrop-blur-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;