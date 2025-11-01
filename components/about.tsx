import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen } from "lucide-react"

const nyuCourses = [
  { name: "Machine Learning", icon: "🤖" },
  { name: "Natural Language Processing", icon: "💬" },
  { name: "Advanced Computer Vision", icon: "👁️" },
  { name: "High Performance ML", icon: "⚡" },
  { name: "Efficient AI: Accelerator Design", icon: "🔧" },
  { name: "Machine Learning Operations", icon: "🔄" },
  { name: "Big Data Management", icon: "📊" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a 
            href="https://www.nyu.edu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all group cursor-pointer h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:animate-glow">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    New York University
                  </h3>
                  <p className="text-primary font-semibold tracking-wide">Master of Science in Computer Engineering</p>
                  <p className="text-muted-foreground font-light text-sm">Sep 2024 – May 2026 (Expected)</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">GPA: 3.9/4.0</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </a>

          <a 
            href="https://iitgoa.ac.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 backdrop-blur-sm bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all group cursor-pointer h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 group-hover:animate-glow">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-secondary transition-colors duration-300">
                    Indian Institute of Technology
                  </h3>
                  <p className="text-secondary font-semibold tracking-wide">Bachelor of Technology in Computer Science</p>
                  <p className="text-muted-foreground font-light text-sm">Nov 2020 – May 2024</p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">Goa, India</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
