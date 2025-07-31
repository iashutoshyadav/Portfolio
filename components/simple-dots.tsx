"use client"

export function SimpleDots() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Static positioned dots with CSS animations */}
      <div
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-32 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
      />
      <div
        className="absolute top-64 left-1/4 w-3 h-3 bg-emerald-400/25 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-96 right-1/3 w-2 h-2 bg-pink-400/35 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "3.5s" }}
      />
      <div
        className="absolute bottom-32 left-16 w-1 h-1 bg-amber-400/30 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "2.8s" }}
      />
      <div
        className="absolute bottom-64 right-24 w-2 h-2 bg-indigo-400/25 rounded-full animate-bounce"
        style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}
      />
      <div
        className="absolute top-1/2 left-8 w-1 h-1 bg-rose-400/40 rounded-full animate-bounce"
        style={{ animationDelay: "1.2s", animationDuration: "2.7s" }}
      />
      <div
        className="absolute top-1/3 right-12 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}
      />
      <div
        className="absolute bottom-20 left-1/2 w-2 h-2 bg-violet-400/30 rounded-full animate-bounce"
        style={{ animationDelay: "1.8s", animationDuration: "3.3s" }}
      />
      <div
        className="absolute top-40 left-1/3 w-1 h-1 bg-teal-400/35 rounded-full animate-bounce"
        style={{ animationDelay: "0.7s", animationDuration: "2.9s" }}
      />
    </div>
  )
}
