import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleBlogClick = () => {
    if (location.pathname === "/blog") {
      navigate("/");
    } else {
      navigate("/blog");
    }
    setMobileMenuOpen(false);
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
                <button
                  key={item.id}
                  onClick={handleBlogClick}
                  className={`text-foreground hover:text-primary transition-colors ${
                    location.pathname === "/blog" ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-foreground hover:text-primary transition-colors ${
                    activeSection === item.id && location.pathname === "/" ? "text-primary font-semibold" : ""
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <button
              onClick={handleBlogClick}
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === "/blog" ? "text-primary font-semibold" : ""
              }`}
            >
              Blog
            </button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    item.id === "projects" ? (
                      <button
                        key={item.id}
                        onClick={handleBlogClick}
                        className={`text-lg text-left text-foreground hover:text-primary transition-colors ${
                          location.pathname === "/blog" ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-lg text-left text-foreground hover:text-primary transition-colors ${
                          activeSection === item.id && location.pathname === "/" ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                  <button
                    onClick={handleBlogClick}
                    className={`text-lg text-left text-foreground hover:text-primary transition-colors ${
                      location.pathname === "/blog" ? "text-primary font-semibold" : ""
                    }`}
                  >
                    Blog
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
