"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

export const NewsletterSection=()=> {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-slate-200 from-primary/5 via-primary/10 to-primary/5 py-24">
      {/* Background animated elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Stay in the Loop
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Subscribe to our newsletter for exclusive updates, insights, and special offers.
          </motion.p>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="relative flex-1 min-w-[300px]">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-3 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,0,0,0)",
                      "0 0 0 2px rgba(0,0,0,0.1)",
                      "0 0 0 0 rgba(0,0,0,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 rounded-full bg-pink-500 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Subscribe <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-lg font-medium text-primary"
            >
              <Sparkles className="w-5 h-5" />
              Thanks for subscribing!
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}