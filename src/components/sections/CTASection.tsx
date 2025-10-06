import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            Let's discuss your project and bring your vision to life with innovative software solutions.
          </p>
          <Button asChild size="lg" variant="default" className="group">
            <Link 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                to="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
