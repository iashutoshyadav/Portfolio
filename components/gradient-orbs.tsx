"use client"

export function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Medium orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-orange-600/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-gradient-to-br from-indigo-400/15 to-purple-600/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Small orbs */}
      <div
        className="absolute top-3/4 right-1/2 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-red-600/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-br from-teal-400/15 to-cyan-600/15 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}
