'use client'

import { motion } from "framer-motion"
import { Check, X } from 'lucide-react'
import Image, { StaticImageData } from "next/image"
import React from "react"


interface CandidateCardProps {
  candidate: Candidate
  index: number
}

export interface Candidate {
    id: string
    name: string
    avatar: StaticImageData
    experience: string[]
    status: 'INTERESTED'
  }
  

export function CandidateCard({ candidate, index }: CandidateCardProps) {

    const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: isHovered?1.1:1 }}
      transition={{ delay: isHovered?0: index * 0.1 + 0.5 }}
      className="bg-white rounded-xl p-4 shadow-lg relative"
      style={{
        marginTop: index > 0 ? '10px' : 0,
        zIndex: isHovered?5: 3 - index,
        rotate: isHovered ?index * 3: 0
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-gray-100">
            <Image src={candidate.avatar} alt={candidate.name}  width={40} height={40}/>
          </div >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900">{candidate.name}</span>
              <span  className="bg-emerald-50 text-emerald-700 text-xs font-medium">
                {candidate.status}
              </span  >
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Experience in</span>
              <span  className="bg-purple-100 text-purple-900 font-normal">
                {candidate.experience[0]}
              </span >
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <button className="p-1.5 rounded-full text-emerald-500 hover:bg-emerald-50 transition-colors">
            <Check className="w-5 h-5" />
          </button>
          <button className="p-1.5 rounded-full text-rose-500 hover:bg-rose-50 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

