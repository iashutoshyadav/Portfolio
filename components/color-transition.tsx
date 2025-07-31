"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface ColorTransitionProps {
  children: React.ReactNode
  className?: string
}

export function ColorTransition({ children, className = "" }: ColorTransitionProps) {
  const [colorIndex, setColorIndex] = useState(0)

  const gradients = [
    "from-violet-600 via-purple-600 to-blue-600",
    "from-blue-600 via-cyan-600 to-teal-600",
    "from-teal-600 via-emerald-600 to-green-600",
    "from-green-600 via-lime-600 to-yellow-600",
    "from-yellow-600 via-orange-600 to-red-600",
    "from-red-600 via-pink-600 to-purple-600",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradients.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [gradients.length])

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradients[colorIndex]} opacity-10 transition-all duration-1000 ease-in-out rounded-lg`}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
