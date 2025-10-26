"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift animate-text-glow">
            Aryan Tomar
          </h1>
          <p className="text-2xl md:text-3xl font-bold tracking-wide animate-color-cycle transition-colors duration-1000">
            Software Developer & Machine Learning Engineer
          </p>
        </div>

       <p className="text-xl md:text-2xl font-bold text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide transition-colors duration-700 ease-in-out hover:text-white">
          Building intelligent, full-stack systems that merge functionality with intelligence. From crafting robust APIs
          to designing ML pipelines, I engineer products that make data useful, scalable, and impactful.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow font-medium tracking-wide"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium tracking-wide bg-transparent"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium tracking-wide bg-transparent"
            onClick={() => scrollToSection("about")}
          >
            Education
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium tracking-wide bg-transparent"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium tracking-wide bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-8">
          <a
            href="https://github.com/aryntmr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-tomar-29ab811ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:at6304@nyu.edu" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:+16463319157" className="text-foreground/60 hover:text-primary transition-colors">
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  )
}
