"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface StaggerAnimationProps {
  children: React.ReactNode[]
  delay?: number
  className?: string
}

export function StaggerAnimation({ children, delay = 100, className = "" }: StaggerAnimationProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * delay)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [children, delay])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          style={{
            transform: visibleItems[index] ? "translateY(0) scale(1)" : "translateY(50px) scale(0.8)",
            opacity: visibleItems[index] ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
