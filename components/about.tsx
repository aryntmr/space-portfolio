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
          <Card className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:animate-glow">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-card-foreground">New York University</h3>
                <p className="text-primary font-semibold tracking-wide">Master of Science in Computer Engineering</p>
                <p className="text-muted-foreground font-light text-sm">Sep 2024 – May 2026 (Expected)</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">GPA: 3.9/4.0</Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-secondary/10 group-hover:animate-glow">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-card-foreground">Indian Institute of Technology</h3>
                <p className="text-secondary font-semibold tracking-wide">Bachelor of Technology in Computer Science</p>
                <p className="text-muted-foreground font-light text-sm">Nov 2020 – May 2024</p>
                <div className="flex items-center gap-2">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">Goa, India</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-foreground tracking-wide">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>NYU Coursework</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {nyuCourses.map((course, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10"
                >
                  <span className="text-2xl">{course.icon}</span>
                  <span className="text-base text-foreground/90 font-light tracking-wide">{course.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
