"use client"

import { useEffect, useRef } from "react"

interface MorphingBlobProps {
  size?: number
  color?: string
  className?: string
}

export function MorphingBlob({ size = 200, color = "#3B82F6", className = "" }: MorphingBlobProps) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    let animationId: number

    const animate = () => {
      if (pathRef.current) {
        const time = Date.now() * 0.002
        const path = `M ${50 + 30 * Math.sin(time)} ${50 + 20 * Math.cos(time * 1.1)} 
                     Q ${80 + 20 * Math.sin(time * 1.3)} ${30 + 25 * Math.cos(time * 0.9)} 
                     ${120 + 25 * Math.sin(time * 0.8)} ${60 + 30 * Math.cos(time * 1.2)}
                     Q ${100 + 30 * Math.sin(time * 1.1)} ${100 + 20 * Math.cos(time * 0.7)} 
                     ${70 + 20 * Math.sin(time * 1.4)} ${110 + 25 * Math.cos(time * 1.0)}
                     Q ${40 + 25 * Math.sin(time * 0.9)} ${90 + 30 * Math.cos(time * 1.3)} 
                     ${50 + 30 * Math.sin(time)} ${50 + 20 * Math.cos(time * 1.1)} Z`

        pathRef.current.setAttribute("d", path)
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className={`absolute ${className}`} style={{ width: size, height: size }}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" className="opacity-20">
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path ref={pathRef} fill="url(#blobGradient)" />
      </svg>
    </div>
  )
}
