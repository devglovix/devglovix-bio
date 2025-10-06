import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8"
        >
          <AlertCircle className="w-10 h-10" />
        </motion.div>
        
        <h1 className="font-heading font-bold text-6xl md:text-8xl text-foreground mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild size="lg">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
