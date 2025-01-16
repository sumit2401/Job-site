'use client'

import { useState, useRef, useEffect } from 'react'



interface IButtonProps{
  title:string
}
export default function SpotlightButton(props:IButtonProps) {

  const {title}=props
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Update mouse position relative to button
  const updateMousePosition = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <div className="">
      <button
        ref={buttonRef}
        onMouseMove={updateMousePosition}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-full bg-white px-10 py-2  text-[#c7a573] transition-all hover:scale-105 border-2 border-[#c7a573] hover:text-black text-2xl font-bold"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity"
          style={{
            opacity: isHovered ? 1 : 0,
        
            background: `radial-gradient(50px circle at ${x}px ${y}px, rgba(255,138,76,.1), transparent 60%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity"
          style={{
            opacity: isHovered ? 1 : 0,
          
            background: `radial-gradient(50px circle at ${x}px ${y}px, #5C5470, transparent 80%)`,
          }}
        />
       {title}
      </button>
    </div>
  )
}

