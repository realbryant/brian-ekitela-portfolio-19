import Navbar from "@/components/Navbar";

const Blog = () => {
  const blogPosts = [
    {
      content: "My journey into tech began with nothing more than curiosity and a stubborn desire to understand how the digital world works. Over the years, I've learned to speak multiple \"languages\"—not French or Spanish, but HTML, CSS, JavaScript, C, and React. If human languages help us talk to people, programming languages help us talk to computers… although sometimes JavaScript acts like it didn't hear you the first time. Through patience, practice, and the right mentorship—especially my ALX Frontend Development course—I grew from a learner to a freelance web designer and developer, crafting clean, efficient websites that solve real problems.",
    },
    {
      content: "Long before coding entered my world, I was deeply rooted in environmental work. My time at Wildlife Clubs of Kenya shaped how I see responsibility, teamwork, and purpose. I worked as a financial assistant, organized campaigns, helped promote recycling initiatives, and planted countless trees—proof that growth happens both in nature and in people. That experience taught me discipline and sustainability, lessons that follow me even in tech. Turns out, debugging and planting trees require the same thing: patience, intention, and sometimes silent prayers.",
    },
    {
      content: "Outside work and code, I'm a person of many passions. Music is one of them. I like to say I'm versatile—I'll vibe to Kendrick Lamar one minute, then switch to Tems the next. Kendrick remains my favorite (don't tell Drake; he might write a whole album about it), mostly because of how poetic and grounded his storytelling is. As for Tems, she's simply unmatched—her voice is smooth and airy, the kind that feels like midnight wind; her fashion is effortless, elegant, and bold. And yes, I admire A$AP Rocky too, not because he rhymes \"fashion\" with \"passion,\" but because he genuinely pushes creativity in style the way developers push new frameworks.",
    },
    {
      content: "I'm also a certified car enthusiast—the type who can talk for hours about engines, torque, and German engineering. Mercedes has my heart: efficient, powerful, luxurious, and consistent. The G-Wagon remains my favorite beast on wheels, followed closely by the Mercedes-Benz GLE. There's something satisfying about the hum of a well-tuned engine; it reminds me that every masterpiece—whether a car, website, or song—is built layer by layer with great attention to detail.",
    },
    {
      content: "Through all these experiences—from tech to environmental work, music, fashion, cars, and even accounting—I've learned that success is a journey of patience. Some days are hard, some are easy, but every day is a step forward. Programming languages may give you headaches, life may throw unexpected bugs your way, but with consistency, passion, and a little humor, you can build the kind of life you dream of. After all, if JavaScript can eventually behave, anything is possible.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
            My Journey & Passions
          </h1>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-foreground text-lg leading-relaxed">
                  {post.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
