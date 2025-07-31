"use client"

import { useEffect, useState } from "react"

interface ColorOrb {
  id: number
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
  opacity: number
}

export function ColorOrbs() {
  const [orbs, setOrbs] = useState<ColorOrb[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const colors = [
      "from-violet-400 to-purple-600",
      "from-blue-400 to-cyan-500",
      "from-emerald-400 to-teal-500",
      "from-pink-400 to-rose-500",
      "from-amber-400 to-orange-500",
      "from-indigo-400 to-blue-500",
    ]

    const newOrbs: ColorOrb[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 100 + Math.random() * 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: 0.1 + Math.random() * 0.1,
    }))

    setOrbs(newOrbs)

    const animate = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => {
          const newX = orb.x + orb.vx
          const newY = orb.y + orb.vy

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - orb.size) {
            orb.vx = -orb.vx
          }
          if (newY <= 0 || newY >= window.innerHeight - orb.size) {
            orb.vy = -orb.vy
          }

          return {
            ...orb,
            x: Math.max(0, Math.min(window.innerWidth - orb.size, newX)),
            y: Math.max(0, Math.min(window.innerHeight - orb.size, newY)),
          }
        }),
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl animate-pulse`}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            opacity: orb.opacity,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
