import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Download my complete resume or view a summary of my professional experience and education.
          </p>
          <a 
           href="https://drive.google.com/file/d/1OKJEOTSvL09ziBWEbkHVH9mASdl9-IyA/view?usp=drive_link">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume (PDF)
          </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Briefcase className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Internships</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-blue-200 pl-4">
                <h3 className="font-semibold text-gray-900">Frontend Developer</h3>
                <p className="text-blue-600 text-sm">Labmentix Pvt.Ltd •  2025</p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Built responsive web applications using React.js and TypeScript</li>
                  <li>• Integrated REST APIs and implemented state management</li>
                  <li>• Worked closely with designers to implement pixel-perfect UIs</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
            </CardContent>
          </Card>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border-l-2 border-green-200 pl-4">
                  <h3 className="font-semibold text-gray-900">Bachelor of Technology</h3>
                  <p className="text-green-600 text-sm">Information Technology</p>
                  <p className="text-gray-600 text-sm">Ajay Kumar Garg Engineering College • 2022 - 2026</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Development, Software
                    Engineering
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">MongoDB Certified Developer</span>
                  <span className="text-xs text-gray-500">2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Data Science</span>
                  <span className="text-xs text-gray-500">2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Data Science with Machine Learning</span>
                  <span className="text-xs text-gray-500">2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
