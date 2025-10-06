import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Award, Target, Heart, Zap, Code, Users } from "lucide-react";
import aboutImage from "@/assets/about-workspace.jpg";

const About = () => {
  const values = [
    { icon: Code, label: "Craftsmanship" },
    { icon: Award, label: "Reliability" },
    { icon: Zap, label: "Scalability" },
    { icon: Target, label: "Clarity" },
    { icon: Heart, label: "Ethical Innovation" },
    { icon: Users, label: "Collaboration" },
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
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6">
                About DevGlovix
              </h1>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                DevGlovix is a specialist software services company delivering production-ready web, mobile, desktop and infrastructure solutions. We pair experienced developers with product-driven design to ship software that scales.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={aboutImage}
                  alt="DevGlovix workspace"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DevGlovix was founded to bring dependable, innovative software solutions to businesses and creators around the world. We are a subsidiary of Xonvix — a software solutions powerhouse — and our team is made up of focused specialists: front-end engineers, backend engineers, DevOps engineers, security experts, and UI/UX designers.
                  </p>
                  <p>
                    Each specialist at DevGlovix has at least 3+ years of professional experience in their discipline, enabling a division of labour that makes delivery faster, more reliable, and more accurate.
                  </p>
                  <p>
                    Our origin is rooted in invention and hands-on building. Our founder, Emeka Divine Emeka, began as a hardware tinkerer and inventor before transitioning into mechatronics and software engineering. That journey shaped our philosophy: products must be thoughtfully designed, carefully engineered, and sustainably maintained.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Meet Our Founder
              </h2>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                Emeka Divine Emeka
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Emeka is a builder by nature — from cardboard prototypes to full-stack projects. He leads DevGlovix with a focus on craftsmanship in software engineering and an eye for product design. Emeka is also the founder of Xonvix, the parent software solutions company, bringing years of experience in both hardware innovation and software development to create solutions that truly work.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide every decision we make and every line of code we write.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-card hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <span className="font-medium">{value.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
