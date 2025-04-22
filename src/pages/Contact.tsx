
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-24 px-4">
        <div className="container mx-auto py-10">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <p className="text-muted-foreground">Coming soon - Contact form section</p>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
