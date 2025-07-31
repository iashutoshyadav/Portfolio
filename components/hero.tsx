import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingDots } from "@/components/floating-dots"

export function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-white relative">
      <FloatingDots count={12} maxSize={3} speed={0.2} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <ScrollReveal direction="left">
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Ashutosh Yadav</h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-6">Full-Stack Developer</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={200}>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Passionate full-stack developer with expertise in the MERN stack, building scalable web applications
                  and real-time systems. I specialize in creating efficient REST APIs, implementing modern frontend
                  solutions, and developing innovative applications that solve real-world problems.
                </p>
              </div>
            </ScrollReveal>

            
            <ScrollReveal direction="left" delay={600}>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="https://github.com/iashutoshyadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="http://linkedin.com/in/ashutosh-yadav-401208290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-900 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:yadavashutosh162@gmail.com"
                  className="text-gray-600 hover:text-blue-900 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  <img
                    src="/images/ashutosh-profile.jpg"
                    alt="Ashutosh Yadav"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
