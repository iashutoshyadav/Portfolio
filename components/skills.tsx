import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server, Smartphone, GitBranch, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FloatingDots } from "@/components/floating-dots"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js", "REST APIs",   "Authentication (JWT)" ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL",  "Firebase", "Database Design",],
  },
  {
    title: "DevOps & Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git & GitHub", "Vercel", "Netlify", "Render"],
  },
  {
    title: "Programming Languages",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["JavaScript",  "Python", "Java", "C++", ],
  },
 
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <FloatingDots count={8} maxSize={2} speed={0.15} />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains of software development.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors duration-300"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Technology Icons */}
        <ScrollReveal direction="up" delay={600}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "TypeScript",
                "Python",
                "Git",
                "AWS",
                "MySQL",
                ,
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
