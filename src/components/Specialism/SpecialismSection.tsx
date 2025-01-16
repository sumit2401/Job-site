"use client";

import { motion } from "framer-motion";
import { 
  Globe, MapPin, Package, Ship, Frame, Scale, 
  Cpu, Home, Wallet, Users2, LineChart, Warehouse
} from "lucide-react";

const specialisms = [
  { icon: Globe, title: "Global\nMobility" },
  { icon: MapPin, title: "Relocation\nServices" },
  { icon: Package, title: "Moving\nServices" },
  { icon: Ship, title: "Shipping" },
  { icon: Frame, title: "Fine Art &\nGallery" },
  { icon: Scale, title: "Legal &\nImmigration" },
  { icon: Cpu, title: "Technology" },
  { icon: Home, title: "Corporate\nHousing" },
  { icon: Wallet, title: "Total Reward" },
  { icon: Users2, title: "Human\nResources" },
  { icon: LineChart, title: "Finance" },
  { icon: Warehouse, title: "Logistics" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const SpecialismsSection=()=> {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Specialisms</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Alchemy has gained the reputation as being the go-to talent partner in Aerospace and the following industry sectors
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {specialisms.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-slate-200 rounded-lg p-6 cursor-pointer overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-pink-500 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-black font-medium whitespace-pre-line">
                  {item.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-pink-500"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}