"use client"

import { motion } from "framer-motion"
import aboutImage from '../../assets/Images/about/cta-image-1.jpg'
import Image from "next/image"
import SpotlightButton from "../Button/Button"

export default function AboutSection() {
  return (
    <section className="relative -z-20   py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-blue-500 sm:text-5xl lg:text-6xl"
            >
              Global Recruiters
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-xl font-semibold text-gray-500">
                Alchemy are recruitment experts with over 25 years of experience placing
                talent across multiple industries worldwide.
              </p>

              <p className="text-gray-600 font-medium">
                Our knowledge and experience in global recruitment is unparalleled, and
                our international network spans over 50 countries worldwide, from London
                to Australia, Hong Kong to New York - our reach is truly global!
              </p>

              <p className="text-gray-700">
                In addition to our specialist markets, we maintain a substantial global talent
                pool across multiple industries - meaning we can find you the best talent, no
                matter the role or location.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <SpotlightButton title="Find Out More"/>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image with Animated Border */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              {/* Top Left Corner Glow */}
              <motion.div 
                className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-blue-500/30 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Bottom Right Corner Glow */}
              <motion.div 
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-orange-400 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2, // Offset timing for alternating effect
                }}
              />

              {/* Rotating Border Effect */}
              <motion.div 
                className="absolute -inset-[2px] rounded-2xl opacity-75"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(249, 115, 22, 0.5), transparent)',
                }}
                animate={{
                  backgroundPosition: ['200% 50%', '-200% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden bg-blue-300 h-full"
              >
                <Image
                  src={aboutImage}
                  alt="Professional woman in an office setting"
                  className="h-full w-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </motion.div>
            </div>

            {/* Additional Ambient Glow */}
            <div className="absolute inset-16 rounded-xl bg-gradient-to-r from-blue-500 -z-10 via-transparent to-orange-500 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

