"use client"

import { useEffect, useState } from "react"
import { Code2, Database, Server, Smartphone, Globe, Zap } from "lucide-react"

const techIcons = [
  { Icon: Code2, color: "text-blue-500", name: "Frontend" },
  { Icon: Database, color: "text-green-500", name: "Database" },
  { Icon: Server, color: "text-purple-500", name: "Backend" },
  { Icon: Smartphone, color: "text-pink-500", name: "Mobile" },
  { Icon: Globe, color: "text-indigo-500", name: "Web" },
  { Icon: Zap, color: "text-yellow-500", name: "Performance" },
]

interface FloatingCard {
  id: number
  Icon: typeof Code2
  color: string
  name: string
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  scale: number
}

export function FloatingCards() {
  const [cards, setCards] = useState<FloatingCard[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const newCards: FloatingCard[] = techIcons.map((tech, index) => ({
      id: index,
      Icon: tech.Icon,
      color: tech.color,
      name: tech.name,
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1,
      scale: 0.8 + Math.random() * 0.4,
    }))

    setCards(newCards)

    const animate = () => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          let newX = card.x + card.vx
          let newY = card.y + card.vy
          let newVx = card.vx
          let newVy = card.vy

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - 80) {
            newVx = -card.vx
            newX = Math.max(0, Math.min(window.innerWidth - 80, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight - 80) {
            newVy = -card.vy
            newY = Math.max(0, Math.min(window.innerHeight - 80, newY))
          }

          return {
            ...card,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: card.rotation + card.rotationSpeed,
          }
        }),
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {cards.map((card) => {
        const { Icon } = card
        return (
          <div
            key={card.id}
            className="absolute bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20"
            style={{
              left: card.x,
              top: card.y,
              transform: `rotate(${card.rotation}deg) scale(${card.scale})`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Icon className={`w-6 h-6 ${card.color}`} />
          </div>
        )
      })}
    </div>
  )
}
