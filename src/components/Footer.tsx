import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Brian_Ekitela_Resume.pdf';
    link.download = 'Brian_Ekitela_Resume.pdf';
    link.click();
  };

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="bg-background text-foreground hover:bg-background/90 border-2 px-8 py-6 text-lg font-semibold"
            >
              Download Resume
            </Button>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-lg font-semibold">Brian Ekitela</p>
            <p>Email: realbryant.b@gmail.com</p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/brian-ekitela-0a3491396"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Brian Ekitela
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/realbryant.yb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                realbryant.yb
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-background/20">
          <p className="text-sm">
            © {new Date().getFullYear()} Brian Ekitela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
