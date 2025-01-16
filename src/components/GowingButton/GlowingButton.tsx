'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NeonButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="grid min-h-screen place-content-center">
      <motion.button
        className="group relative z-0 aspect-square w-[400px] cursor-pointer rounded-[20px] border-none bg-transparent text-[30px] text-black transition-[0.3s]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          boxShadow: '0 0 0 1px #666',
        }}
      >
        {/* Gradient Border */}
        <motion.div
          className="absolute inset-[-8px] rounded-[28px] p-2"
          style={{
            background: 'conic-gradient(from 0deg, #21D4FD, transparent 30deg 120deg, #B721FF 150deg 180deg, transparent 210deg 300deg, #21D4FD 330deg)',
            WebkitMaskImage: 'linear-gradient(#000 0 0), linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'intersect',
          }}
          animate={
            isHovered
              ? {
                  background: [
                    'conic-gradient(from 0deg, #21D4FD, transparent 30deg 120deg, #B721FF 150deg 180deg, transparent 210deg 300deg, #21D4FD 330deg)',
                    'conic-gradient(from 3600deg, #21D4FD, transparent 30deg 120deg, #B721FF 150deg 180deg, transparent 210deg 300deg, #21D4FD 330deg)',
                  ],
                }
              : {}
          }
          transition={{
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Radial Gradient Glow */}
        <motion.div
          className=" opacity-50 z-50 bg-white w-[200px]"
          style={{
            background: `
              radial-gradient(80px at left 150px top 120px, #21D4FD 98% ),
              radial-gradient(80px at right 150px bottom 120px, #B721FF 98%)
            `,
            filter: 'blur(60px)',
          }}
          animate={
            isHovered
              ? {
                  rotate: 3600,
                }
              : {}
          }
          transition={{
            duration: 60,
            ease: 'linear',
          }}
        />

        {/* Button Text */}
        <span className="relative ">Hover Me</span>
      </motion.button>
    </div>
  )
}

