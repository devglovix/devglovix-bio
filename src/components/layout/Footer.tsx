import { Link } from "react-router-dom";
import { Network, Mail, Phone, Instagram, Facebook, Twitter, Send, Github } from "lucide-react";
import LogoIcon from "../ui/logo-icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/devglovix", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581115486209", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/devglovix", label: "X (Twitter)" },
    { icon: Send, href: "https://t.me/devglovixofficial", label: "Telegram" },
    { icon: Github, href: "https://github.com/devglovix", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <LogoIcon/>
              <span className="font-heading font-semibold text-2xl text-secondary-foreground">
                DEVGLOVIX
              </span>
            </Link>
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              Software services powered by innovation and handled by experienced specialists. Building modern solutions for web, mobile, desktop and infrastructure.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:devglovix@gmail.com"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">devglovix@gmail.com</span>
              </a>
              <a
                href="tel:+2349031215988"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+234 903 121 5988</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Devglovix. A subsidiary of Xonvix — Software Innovation Powerhouse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
