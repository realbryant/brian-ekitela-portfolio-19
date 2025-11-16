import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_g0j0xyg",      // Your Service ID
        "template_g7ry7rm",     // Your Template ID
        form.current,
        "3MS0jVfMVEZSQLWx5"     // Your Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error("Failed to send message. Try again.");
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in-up">
          CONTACT ME
        </h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div>
            <Input type="text" name="name" placeholder="Your Name" required className="w-full" />
          </div>

          <div>
            <Input type="email" name="email" placeholder="Your Email" required className="w-full" />
          </div>

          <div>
            <Input type="tel" name="phone" placeholder="Your Phone Number" required className="w-full" />
          </div>

          <div>
            <Textarea name="message" placeholder="Your Message" required rows={8} className="w-full resize-none" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


