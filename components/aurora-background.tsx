"use client"

import { useEffect, useRef } from "react"

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create aurora effect with multiple layers
      for (let i = 0; i < 5; i++) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

        // Beautiful aurora colors
        const colors = [
          { r: 138, g: 92, b: 246, a: 0.1 }, // Purple
          { r: 59, g: 130, b: 246, a: 0.08 }, // Blue
          { r: 16, g: 185, b: 129, a: 0.06 }, // Emerald
          { r: 236, g: 72, b: 153, a: 0.05 }, // Pink
          { r: 245, g: 158, b: 11, a: 0.04 }, // Amber
        ]

        const color = colors[i]
        const wave1 = Math.sin(time * 0.01 + i * 0.5) * 0.5 + 0.5
        const wave2 = Math.cos(time * 0.015 + i * 0.3) * 0.5 + 0.5

        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
        gradient.addColorStop(wave1, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
        gradient.addColorStop(wave2, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 0.5})`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      time += 1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
