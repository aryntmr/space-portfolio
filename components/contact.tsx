import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <Card className="p-12 backdrop-blur-sm bg-card/50 border-primary/20 text-center space-y-8">
          <p className="text-xl text-foreground/80 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary/30 hover:border-primary bg-transparent"
              asChild
            >
              <a href="mailto:at6304@nyu.edu">
                <Mail className="w-5 h-5 mr-2" />
                at6304@nyu.edu
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary/30 hover:border-primary bg-transparent"
              asChild
            >
              <a href="tel:+16463319157">
                <Phone className="w-5 h-5 mr-2" />
                +1-646-331-9157
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-secondary/30 hover:border-secondary bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/aryan-tomar-29ab811ba/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-accent/30 hover:border-accent bg-transparent"
              asChild
            >
              <a href="https://github.com/aryntmr" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </Card>

        <p className="text-center text-muted-foreground mt-12">
          © 2025 Aryan Tomar. Built with Next.js and passion for innovation.
        </p>
      </div>
    </section>
  )
}
