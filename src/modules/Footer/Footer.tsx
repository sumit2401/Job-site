"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const Footer=()=> {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="text-xl font-bold">Logo</span>
            </motion.div>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6  text-primary text-pink-500" />
                <p className="text-sm"> North Melbourne VIC 3051, Australia.</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary text-pink-500" />
                <p>123 456 7890</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary text-pink-500" />
                <p>support@superio.com</p>
              </div>
            </div>
          </motion.div>

          {/* For Candidates */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">For Candidates</h3>
            <ul className="space-y-2 text-muted-foreground">
              {["Browse Jobs", "Browse Categories", "Candidate Dashboard", "Job Alerts", "My Bookmarks"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="hover:text-primary transition-colors"
                >
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* For Employers */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">For Employers</h3>
            <ul className="space-y-2 text-muted-foreground">
              {["Browse Candidates", "Employer Dashboard", "Add Job", "Job Packages"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="hover:text-primary transition-colors"
                >
                  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Resources */}
          
        </div>
        <div className="z-50">
        <motion.div variants={itemVariants} className="space-y-4 mt-8">
          
            <ul className=" flex gap-5">
              {["Site Map", "Terms of Use", "Privacy Center", "Security Center", "Accessibility Center"].map((item,index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  className="hover:text-primary transition-colors"
                >
                <span className="text-pink-500 mr-2">{index}</span>  <Link href="#">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        {/* Footer Bottom */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t"
        >
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {currentYear} Superio by ib-themes. All Right Reserved.
          </p>
          <motion.div 
            className="flex space-x-4 text-pink-500"
            variants={itemVariants}
          >
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3 }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        </div>
      
      </motion.div>
    </footer>
  );
}