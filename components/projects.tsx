import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Mic, Activity, Hotel, MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SimpleDots } from "@/components/simple-dots"

const projects = [
  {
    title: "Echo Script.AI",
    description:
      "Real-time speech recognition application with voice commands and text processing capabilities. Built with Web Speech API and modern JavaScript.",
    icon: <Mic className="h-6 w-6" />,
    technologies: ["JavaScript", "Web Speech API", "HTML5", "CSS3", "Node.js","React","MongoDB","Express"],
    githubUrl: "https://github.com/iashutoshyadav/SpeechToText",
    demoUrl: "https://speech-to-text-pearl-iota.vercel.app/",
    image: "/text.jpg?height=200&width=400",
  },
  // {
  //   title: "Smart Healthcare Analytics",
  //   description:
  //     "Comprehensive healthcare data analytics platform with patient management, appointment scheduling, and real-time health monitoring dashboards.",
  //   icon: <Activity className="h-6 w-6" />,
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Socket.io"],
  //   githubUrl: "https://github.com/ashutoshyadav/healthcare-analytics",
  //   demoUrl: "https://healthcare-analytics-demo.vercel.app",
  //   image: "/placeholder.svg?height=200&width=400",
  // },
  // {
  //   title: "Hotel Booking System",
  //   description:
  //     "Full-featured hotel reservation system with room management, booking calendar, payment integration, and admin dashboard.",
  //   icon: <Hotel className="h-6 w-6" />,
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
  //   githubUrl: "https://github.com/ashutoshyadav/hotel-booking",
  //   demoUrl: "https://hotel-booking-demo.vercel.app",
  //   image: "/placeholder.svg?height=200&width=400",
  // },
  // {
  //   title: "Real-time Chat Application",
  //   description:
  //     "Modern chat application with real-time messaging, file sharing, group chats, and user authentication. Built with Socket.io for instant communication.",
  //   icon: <MessageCircle className="h-6 w-6" />,
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
  //   githubUrl: "https://github.com/ashutoshyadav/chat-app",
  //   demoUrl: "https://chat-app-demo.vercel.app",
  //   image: "/placeholder.svg?height=200&width=400",
  // },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      <SimpleDots />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, real-time
              applications, and modern web technologies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="transition-all duration-300 hover:scale-105 bg-transparent"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="transition-all duration-300 hover:scale-105" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
