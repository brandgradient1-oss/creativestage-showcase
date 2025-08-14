import { useState, useEffect } from "react";

export const useScrollGradient = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate gradient shifts based on scroll position
  const getGradientStyle = (baseHue = 220, maxShift = 60) => {
    const scrollPercent = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
    const hueShift = scrollPercent * maxShift;
    const saturation = 70 + (scrollPercent * 30);
    const lightness = 50 + (Math.sin(scrollPercent * Math.PI) * 20);
    
    return {
      background: `linear-gradient(135deg, 
        hsl(${baseHue + hueShift}, ${saturation}%, ${lightness}%) 0%, 
        hsl(${baseHue + hueShift + 30}, ${saturation + 10}%, ${lightness + 10}%) 50%,
        hsl(${baseHue + hueShift - 20}, ${saturation - 5}%, ${lightness - 5}%) 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      transition: 'all 0.3s ease-out'
    };
  };

  const getParallaxOffset = (factor = 0.5) => scrollY * factor;

  return { scrollY, getGradientStyle, getParallaxOffset };
};