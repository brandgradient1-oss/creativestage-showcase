import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  const footerLinks = {
    Services: [
      "Website Development",
      "Brand Design",
      "Social Media",
      "Photography"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Contact"
    ],
    Resources: [
      "Blog",
      "Case Studies",
      "FAQ",
      "Support"
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-primary bg-clip-text text-transparent">Creative</span>
              <span className="text-background">Studio</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              We transform businesses through exceptional digital experiences. From custom websites to comprehensive branding solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-12 mt-12">
          <div className="max-w-md">
            <h3 className="font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Get the latest insights and tips delivered to your inbox.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg focus:outline-none focus:border-primary transition-colors text-background placeholder-background/60"
              />
              <Button 
                variant="default"
                className="px-6 shadow-glow hover:shadow-elegant transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm">
            © 2024 CreativeStudio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/80 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background/80 hover:text-primary hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;