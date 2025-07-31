"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "emailjs-com" // ✅ Import EmailJS
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      "YOUR_SERVICE_ID",     // 👉 Replace with your actual EmailJS Service ID
      "YOUR_TEMPLATE_ID",    // 👉 Replace with your actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY"      // 👉 Replace with your EmailJS Public Key
    ).then(
      () => {
        alert("✅ Message sent successfully!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      },
      (error) => {
        console.error("❌ Failed to send message:", error)
        alert("❌ Message failed to send. Please try again.")
      }
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:yadavashutosh162@gmail.com" className="text-blue-600 hover:text-blue-700 text-sm">
                        yadavashutosh162@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+7800059065" className="text-green-600 hover:text-green-700 text-sm">
                        7800059065
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600 text-sm">New Delhi, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-3">
                    <a href="https://github.com/iashutoshyadav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:scale-105">
                      <Github className="h-5 w-5 text-gray-700" />
                      <span className="text-gray-700">GitHub</span>
                    </a>
                    <a href="http://linkedin.com/in/ashutosh-yadav-401208290" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:scale-105">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">LinkedIn</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:scale-105">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-700">Twitter</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={400} className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="What's this about?" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell me about your project or just say hello!" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
