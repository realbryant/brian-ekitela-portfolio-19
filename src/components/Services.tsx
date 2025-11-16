import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "UI/UX Designer",
      description: "With extensive experience in Figma and a deep understanding of UI/UX design principles, I create intuitive and visually appealing interfaces that enhance user experience and drive engagement.",
      delay: "0ms",
    },
    {
      title: "Web Design",
      description: "Proficient in HTML, CSS, JavaScript, and React, I build responsive, modern, and performant web applications that bring ideas to life with clean code and beautiful design.",
      delay: "100ms",
    },
    {
      title: "Social Media Marketing",
      description: "Skilled in social media management and digital marketing strategies, I help brands grow their online presence through engaging content and effective audience targeting.",
      delay: "200ms",
    },
    {
      title: "Accounting",
      description: "Drawing from my experience as a Financial Assistant at Wildlife Clubs of Kenya, I provide accurate financial management, bookkeeping, and accounting services with attention to detail.",
      delay: "300ms",
    },
    {
      title: "Video Editing",
      description: "Proficient in CapCut and DaVinci Resolve, I create compelling video content with professional editing techniques, smooth transitions, and engaging storytelling.",
      delay: "400ms",
    },
    {
      title: "Future Skills",
      description: "Always learning and expanding my expertise. Currently exploring cybersecurity, cloud technologies, and advanced frontend frameworks to stay at the cutting edge of technology.",
      delay: "500ms",
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          SERVICES
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 animate-float border-2 hover:border-primary cursor-pointer"
              style={{
                animationDelay: service.delay,
                animationDuration: "3s",
              }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
