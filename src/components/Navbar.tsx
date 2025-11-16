import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">
            Brian Ekitela
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.id === "projects" ? (
                <Link
                  key={item.id}
                  to="/blog"
                  className={`text-foreground hover:text-primary transition-colors ${
                    window.location.pathname === "/blog" ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary transition-colors ${
                    activeSection === item.id ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <Link
              to="/blog"
              className={`text-foreground hover:text-primary transition-colors ${
                window.location.pathname === "/blog" ? "text-primary font-semibold" : ""
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
