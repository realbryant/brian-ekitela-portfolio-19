import brianPhoto from "@/assets/brian-photo.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              ABOUT ME
            </h2>
            <p className="text-foreground mb-6 text-lg leading-relaxed">
              Hi, I'm Brian Ekitela, a frontend developer and student at the Co-operative University of Kenya. I am a focused and goal-oriented professional with excellent interpersonal skills, a strong ability to work in teams, and a proven track record of delivering high-quality services.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              I have 2 years of experience in frontend development and have acquired additional skills in finance management and accounting from my work as a Financial Assistant at Wildlife Clubs of Kenya. I am also an aspiring cybersecurity specialist, combining my technical and organizational skills to drive impactful projects.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={brianPhoto}
                alt="Brian Ekitela"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
