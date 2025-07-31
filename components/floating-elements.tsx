"use client"

import { useEffect, useState } from "react"
import { Code, Database, Server, Smartphone, GitBranch, Cpu } from "lucide-react"

const icons = [Code, Database, Server, Smartphone, GitBranch, Cpu]

interface FloatingElement {
  id: number
  Icon: typeof Code
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  size: number
  opacity: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Initialize floating elements
    const newElements: FloatingElement[] = []
    for (let i = 0; i < 8; i++) {
      newElements.push({
        id: i,
        Icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: Math.random() * 20 + 30,
        opacity: Math.random() * 0.1 + 0.05,
      })
    }
    setElements(newElements)

    // Animation loop
    const animate = () => {
      setElements((prevElements) =>
        prevElements.map((element) => ({
          ...element,
          x: element.x + element.vx,
          y: element.y + element.vy,
          rotation: element.rotation + element.rotationSpeed,
          // Wrap around edges
          x:
            element.x < -50
              ? window.innerWidth + 50
              : element.x > window.innerWidth + 50
                ? -50
                : element.x + element.vx,
          y:
            element.y < -50
              ? window.innerHeight + 50
              : element.y > window.innerHeight + 50
                ? -50
                : element.y + element.vy,
        })),
      )
    }

    const intervalId = setInterval(animate, 50)

    return () => clearInterval(intervalId)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {elements.map((element) => {
        const { Icon } = element
        return (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: element.x,
              top: element.y,
              transform: `rotate(${element.rotation}deg)`,
              opacity: element.opacity,
            }}
          >
            <Icon size={element.size} className="text-blue-500" />
          </div>
        )
      })}
    </div>
  )
}
