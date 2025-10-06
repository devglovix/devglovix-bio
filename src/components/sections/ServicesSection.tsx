import { motion } from "framer-motion";
import { Globe, Smartphone, Monitor, Cloud, Shield, Wrench, Code, Server, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Globe, title: "Website Development", description: "Modern, responsive websites that engage and convert." },
  { icon: Code, title: "Web Applications", description: "Scalable web apps built with cutting-edge technologies." },
  { icon: Smartphone, title: "Mobile Apps", description: "Native iOS & Android apps for seamless experiences." },
  { icon: Monitor, title: "Desktop Applications", description: "Powerful desktop software for Windows, Mac, and Linux." },
  { icon: Wrench, title: "Maintenance & Support", description: "Reliable ongoing support to keep your software running." },
  { icon: Server, title: "Software Engineering", description: "Infrastructure and backend engineering at scale." },
  { icon: Cloud, title: "DevOps & Cloud", description: "CI/CD pipelines and cloud infrastructure management." },
  { icon: Shield, title: "Cybersecurity", description: "Security audits and protection for your systems." },
  { icon: Lock, title: "Custom Development", description: "Tailored software solutions for unique requirements." },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive software solutions designed to elevate your business and bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
