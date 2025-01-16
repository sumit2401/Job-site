'use client'

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ end, duration = 2, label }: { end: number; duration?: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 2000)

        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, isInView])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M+`
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`
    }
    return num.toString()
  }

  return (
    <div ref={ref} className="text-cente r">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl lg:text-7xl text-center font-bold text-[#1F1225] mb-2"
      >
        {formatNumber(count)}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#1F1225]  text-lg font-bold text-center md:text-xl"
      >
        {label}
      </motion.div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="container py-4">
      <div className=" px-4">
        <div className="grid grid-cols-1   md:grid-cols-3 gap-12 ">
          <AnimatedCounter end={8000000} label="Matches Made" />
          <AnimatedCounter end={150000} label="Tech Jobs" />
          <AnimatedCounter end={10000000} label="Startup Ready Candidates" />
        </div>
        
        {/* <div className="flex flex-wrap justify-center items-center gap-12">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ByNqD2PmJ0fJQ7FDgDLY04xUqMtT46.png`}
            alt="Company logos"
            className="h-8 object-contain brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
          />
        </div> */}
      </div>
    </section>
  )
}

