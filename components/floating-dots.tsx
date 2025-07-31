"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  color: string
}

interface FloatingDotsProps {
  count?: number
  maxSize?: number
  speed?: number
}

export function FloatingDots({ count = 15, maxSize = 4, speed = 0.3 }: FloatingDotsProps) {
  const [dots, setDots] = useState<Dot[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const colors = [
      "rgba(59, 130, 246, 0.4)", // Blue
      "rgba(147, 51, 234, 0.3)", // Purple
      "rgba(16, 185, 129, 0.3)", // Emerald
      "rgba(236, 72, 153, 0.3)", // Pink
      "rgba(245, 158, 11, 0.3)", // Amber
    ]

    const newDots: Dot[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * maxSize + 1,
      opacity: Math.random() * 0.5 + 0.1,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setDots(newDots)

    const animate = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let newX = dot.x + dot.vx
          let newY = dot.y + dot.vy
          let newVx = dot.vx
          let newVy = dot.vy

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx = -dot.vx
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVy = -dot.vy
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          return {
            ...dot,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        }),
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [count, maxSize, speed])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
