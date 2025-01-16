"use client"

import { motion, useAnimation, useTransform, useSpring, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingTagProps {
  text: string
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  x: number
  y: number
  containerWidth: number
  containerHeight: number
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)


export function FloatingTag({ text, mouseX, mouseY, x, y, containerWidth, containerHeight }: FloatingTagProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [tagSize, setTagSize] = useState({ width: 120, height: 40 }) // Default size estimate

  // Create spring-animated position values with smoother response
  const springConfig = { damping: 30, stiffness: 150, mass: 0.8 }
  const tagX = useSpring(x, springConfig)
  const tagY = useSpring(y, springConfig)

  // Update position based on mouse movement with more freedom
  useEffect(() => {
    const unsubscribeX = mouseX.onChange((latestX) => {
      const dx = latestX - x
      const distance = Math.sqrt(dx * dx)
      const maxDistance = containerWidth / 4
      const influence = Math.max(0, 1 - distance / maxDistance)
      const movement = dx * influence * 0.7
      const padding = tagSize.width / 2
      const newX = clamp(x + movement, padding, containerWidth - padding)
      tagX.set(newX)
    })

    const unsubscribeY = mouseY.onChange((latestY) => {
      const dy = latestY - y
      const distance = Math.sqrt(dy * dy)
      const maxDistance = containerHeight / 2
      const influence = Math.max(0, 1 - distance / maxDistance)
      const movement = dy * influence * 0.7
      
      const padding = tagSize.height / 5
      const newY = clamp(y + movement, padding, containerHeight - padding)
      tagY.set(newY)
    })

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [mouseX, mouseY, x, y, tagX, tagY, containerWidth, containerHeight])

  return (
    <motion.div
      className="absolute cursor-pointer overflow-hidden rounded-full"
      style={{
        x: tagX,
        y: tagY,
        zIndex: isHovered ? 9999 : 1000,
      }}
      initial={{ scale: 1, y: y }}
      whileHover={{
        scale: 1.3,
        backgroundColor:"#EC4899",
        // y: y - 20,
        transition: { 
          type: "spring",
          stiffness: 800,
          damping: 50
        }
      }}
     
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="rounded-full bg-white px-4 py-2 shadow-lg"
        animate={{
          opacity: isHovered ? 1 : 0.6,
          boxShadow: isHovered 
            ? "0 8px 16px rgba(0, 0, 0, 0.1)" 
            : "0 1px 3px rgba(0, 1, 1, 0.1)",
          backgroundColor: isHovered ? "#EC4899" : "#fff",
          
          border: isHovered ? "1px solid rgba(0, 0, 0, 0.1)" : "1px solid transparent",
        }}
        transition={{
          duration: 0.3
        }}
      >
        <span className={`text-sm font-medium ${isHovered ? 'text-gray-900 shadow-sm' : 'text-gray-800'}`}>
          {text}
        </span>
      </motion.div>
    </motion.div>
  )
}

