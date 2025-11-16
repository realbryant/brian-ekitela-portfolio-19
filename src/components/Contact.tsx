import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          CONTACT ME
        </h2>

        {/* FormSubmit Form */}
        <form
          action="https://formsubmit.co/realbryant.b@gmail.com"
          method="POST"
          className="space-y-6 animate-fade-in-up"
        >
          {/* Name */}
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full"
            />
          </div>

          {/* Email */}
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full"
            />
          </div>

          {/* Phone */}
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="w-full"
            />
          </div>

          {/* Message */}
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              required
              rows={8}
              className="w-full resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

