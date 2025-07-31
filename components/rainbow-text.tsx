"use client"

import { useEffect, useRef, useState } from "react"

interface RainbowTextProps {
  text: string
  className?: string
  delay?: number
}

export function RainbowText({ text, className = "", delay = 0 }: RainbowTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const rainbowColors = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-purple-500",
    "text-pink-500",
  ]

  return (
    <div ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ${rainbowColors[index % rainbowColors.length]}`}
          style={{
            transform: isVisible ? "translateY(0) rotate(0deg)" : "translateY(50px) rotate(180deg)",
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${index * 0.1}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
