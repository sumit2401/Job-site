'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import avatar1 from '../../assets/avatar-1.png'
import avatar2 from '../../assets/avatar-2.png'
import avatar3 from '../../assets/avatar-3.png'

import Image from "next/image"
import { Candidate, CandidateCard } from "../CandidatesCard/Candidatecard"
import { twMerge } from "tailwind-merge"
import { Poppins, Zeyada } from "next/font/google"


const candidates: Candidate[] = [
  {
    id: "1",
    name: "Joshua Moret",
    avatar: avatar1,
    experience: ["PYTHON"],
    status: "INTERESTED"
  },
  {
    id: "2",
    name: "Naomi Liu",
    avatar: avatar2,
    experience: ["PYTHON"],
    status: "INTERESTED"
  },
  {
    id: "3",
    name: "Guy Leonardo",
    avatar: avatar3,
    experience: ["PYTHON"],
    status: "INTERESTED"
  }
]

const floatingAvatars = Array(8).fill(null).map((_, i) => ({
  id: i,
  src: avatar1,
  initialX: Math.random() * 300 - 150,
  initialY: Math.random() * 300 - 150,
}))

const dancingScript = Zeyada({
  subsets: ["latin"],
  weight: "400", // Include only the weights you need
});

export const ChatInterface=()=> {
  const [isSearching, setIsSearching] = useState(true)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-[700px]">
      
      
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 border-2 border-white/20 rounded-full">
            <Image src={avatar1} alt="AI Assistant" width={40} height={40}/>
          </div>
          <div className="bg-white text-gray-900 p-3 rounded-br-3xl rounded-tr-3xl rounded-bl-3xl max-w-full shadow-xl">
            <p className="flex items-center gap-2 text-sm">
              Send me candidates interested in
              <span className="bg-amber-100 text-amber-900 font-normal">FINTECH</span>
              with experience in
              <span className="bg-purple-100 text-purple-900 font-normal">PYTHON</span>
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-pink-500 text-white text-sm py-2 px-6 rounded-br-3xl rounded-tl-3xl rounded-bl-3xl max-w-md ml-auto mr-3 shadow-xl"
        >
          Sending you a list of relevant candidates now.
        
        </motion.div>

        {isSearching && (
          <div className="relative h-40">
            <p className={twMerge("text-pink-500 text-4xl ml-14",dancingScript.className)}>searching...</p>
            {/* <div className="absolute inset-0">
              <AnimatePresence>
                {floatingAvatars.map((avatar) => (
                  <motion.div
                    key={avatar.id}
                    className="absolute"
                    initial={{ 
                      x: avatar.initialX,
                      y: avatar.initialY,
                      opacity: 0,
                      scale: 0.5
                    }}
                    animate={{ 
                      x: [avatar.initialX, avatar.initialX + 50, avatar.initialX - 50],
                      y: [avatar.initialY, avatar.initialY - 50, avatar.initialY + 50],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: avatar.id * 0.2
                    }}
                  >
                    <div className="w-10 h-10 border border-white/20">
                      <Image src={avatar2} alt="Floating Avatar" width={40} height={40} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div> */}
          </div>
        )}

        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className=" bg-[#FCF1F3] z-50 p-6 mt-8 rounded-br-3xl rounded-tl-3xl w-[80%] ml-auto rounded-bl-3xl"
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-8">
              Your qualified candidate review list
            </h2>
            <div className="space-y-7">
              {candidates.map((candidate, index) => (
                <CandidateCard key={candidate.id} candidate={candidate} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
