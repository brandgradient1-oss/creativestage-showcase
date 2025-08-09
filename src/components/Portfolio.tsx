import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      category: "Website Development",
      image: portfolio1,
      description: "Modern e-commerce platform with seamless user experience and advanced analytics."
    },
    {
      id: 2,
      title: "Brand Identity Transformation",
      category: "Branding",
      image: portfolio2,
      description: "Complete rebrand for tech startup including logo, guidelines, and brand assets."
    },
    {
      id: 3,
      title: "Social Media Mastery",
      category: "Social Media",
      image: portfolio3,
      description: "360° social media campaign that increased engagement by 400% in 3 months."
    }
  ];

  return (
    <section className="py-24 bg-background" id="portfolio">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="gradient-accent bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-card transition-all duration-500 hover:-translate-y-1 border-border/50"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <Button size="icon" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-white/30">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 hover:shadow-elegant transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;