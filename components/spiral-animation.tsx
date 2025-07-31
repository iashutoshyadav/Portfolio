"use client"

import { useEffect, useRef } from "react"

export function SpiralAnimation() {
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

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Draw multiple spirals
      for (let spiral = 0; spiral < 3; spiral++) {
        ctx.beginPath()

        const colors = [
          { r: 139, g: 92, b: 246 }, // Purple
          { r: 59, g: 130, b: 246 }, // Blue
          { r: 236, g: 72, b: 153 }, // Pink
        ]

        const color = colors[spiral]
        const offset = (spiral * (Math.PI * 2)) / 3

        for (let i = 0; i < 200; i++) {
          const angle = i * 0.1 + time * 0.01 + offset
          const radius = i * 2
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        const gradient = ctx.createLinearGradient(centerX - 200, centerY - 200, centerX + 200, centerY + 200)
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.1)`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()
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

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
