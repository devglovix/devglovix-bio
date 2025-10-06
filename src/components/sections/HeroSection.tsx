import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-network.jpg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90 z-10" />
        <img
          src={heroImage}
          alt="Network visualization"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Powered by Innovation
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary-foreground mb-6 leading-tight"
          >
            Building Innovative Software for a{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Smarter Tomorrow
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            DevGlovix delivers modern software services — web, mobile, desktop and infrastructure — handled by experienced specialists to power your next product.
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="group">
              <Link 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-secondary-foreground/80 text-secondary-foreground">
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Happy Clients", value: "98%" },
              { label: "Service Availability", value: "24/7" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
