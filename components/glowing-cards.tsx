"use client"

import type React from "react"

import { useRef, useState } from "react"

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({ children, className = "", glowColor = "blue" }: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.4)",
    purple: "rgba(147, 51, 234, 0.4)",
    pink: "rgba(236, 72, 153, 0.4)",
    green: "rgba(16, 185, 129, 0.4)",
    orange: "rgba(245, 158, 11, 0.4)",
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background: isHovering
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${
              glowColors[glowColor as keyof typeof glowColors]
            }, transparent 50%)`
          : "transparent",
      }}
    >
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg">
        {children}
      </div>
      {isHovering && (
        <div
          className="absolute pointer-events-none rounded-full blur-xl opacity-60 transition-all duration-300"
          style={{
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
            width: 100,
            height: 100,
            background: glowColors[glowColor as keyof typeof glowColors],
          }}
        />
      )}
    </div>
  )
}
