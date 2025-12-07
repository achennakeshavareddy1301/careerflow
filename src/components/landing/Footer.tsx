const footerLinks = [
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-muted/50 border-t border-border overflow-hidden">
      {/* Large Background Text with Colors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[6rem] sm:text-[8rem] lg:text-[10rem] xl:text-[14rem] font-extrabold whitespace-nowrap tracking-tighter leading-none opacity-[0.08] animate-pulse" style={{ animationDuration: '4s' }}>
          <span className="text-foreground">Career</span>
          <span className="text-primary">flow</span>
        </span>
      </div>

      {/* Gradient overlay for visual effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left */}
          <div>
            <p className="text-sm text-muted-foreground max-w-md">
              Careerflow is a job application management system for students and early-career professionals. 
              Take control of your job search and never miss an opportunity again.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-8 lg:justify-end items-start">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Careerflow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;