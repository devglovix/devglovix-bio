import { motion } from "framer-motion";
import { Users, TrendingUp, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Specialists",
    description: "Every project is handled by specialists with 3+ years of focused experience in their discipline for faster, more accurate delivery.",
  },
  {
    icon: TrendingUp,
    title: "Built for Scale",
    description: "We design systems that grow — from MVPs to enterprise-grade solutions with reliable infrastructure.",
  },
  {
    icon: Sparkles,
    title: "Design & UX Excellence",
    description: "Pixel-perfect UI and a balanced UX that delights both desktop and mobile users.",
  },
  {
    icon: Shield,
    title: "Trusted Processes",
    description: "Division of labor for speed, code reviews, CI/CD, and strong quality assurance.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose Devglovix
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with a team that values quality craftsmanship, innovative thinking, and reliable delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
