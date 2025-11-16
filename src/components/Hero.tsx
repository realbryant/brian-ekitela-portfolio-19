import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Welcome to Brian Ekitela Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          I'm a Frontend Web Developer
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
        >
          Know More
        </Button>
      </div>
    </section>
  );
};

export default Hero;
