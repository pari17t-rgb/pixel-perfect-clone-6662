import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Memories", href: "#memories" },
    { name: "Letter", href: "#letter" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-foreground mb-8"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span className="font-serif text-xl font-semibold">
              Friendship Letter
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-24 h-px bg-border mb-8" />

          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-6 max-w-md">
            Celebrating the beautiful bonds of friendship. Create your own letter
            to tell someone how much they mean to you.
          </p>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> 
            &copy; {currentYear} Friendship Letter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
