import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, Instagram, Facebook, Twitter, Send, Github, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    preferredContact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Budget: ${formData.budget || "N/A"}
Preferred Contact: ${formData.preferredContact || "Any"}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/2349031215988?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your message...",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: "devglovix@gmail.com", href: "mailto:devglovix@gmail.com" },
    { icon: Phone, label: "Phone", value: "+234 903 121 5988", href: "tel:+2349031215988" },
    { icon: MessageSquare, label: "WhatsApp", value: "+234 903 121 5988", href: "https://wa.me/2349031215988" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/devglovix", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581115486209", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/devglovix", label: "X" },
    { icon: Send, href: "https://t.me/devglovixofficial", label: "Telegram" },
    { icon: Github, href: "https://github.com/devglovix", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 pt-36 md:pt-48 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
                Contact DevGlovix
              </h1>
              <p className="text-xl text-secondary-foreground/80">
                We're excited to hear about your project. Reach out via email, phone, or social — we typically reply within 1–2 business days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl mb-8">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      target="_blank"
                      href={method.href}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{method.label}</div>
                        <div className="text-muted-foreground">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Follow Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $1,000</SelectItem>
                        <SelectItem value="5k-10k">$2,000 - $5,000</SelectItem>
                        <SelectItem value="10k-25k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="25k-50k">$10,000 - $15,000</SelectItem>
                        <SelectItem value="50k-plus">$20,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleChange("preferredContact", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="How should we reach you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message via WhatsApp
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
