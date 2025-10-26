import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, FlaskConical, TrendingUp } from "lucide-react"

const experiences = [
  {
    company: "Recruit Co. Ltd.",
    role: "AI Engineering Intern",
    location: "Tokyo, Japan",
    period: "Jun 2025 – Jul 2025",
    icon: Building2,
    color: "primary",
    highlights: [
      "Engineered a MERN-based CRM platform for real estate brokers with MongoDB and vector retrieval",
      "Integrated AI agent via FastAPI with LangGraph-powered ReAct prompting for dynamic queries",
      "Automated handling of 80% of routine client queries through AI-driven workflows",
    ],
    tags: ["AI", "CRM", "MERN", "LangGraph"],
  },
  {
    company: "Indian Institute of Technology Delhi",
    role: "Research Assistant",
    location: "Delhi, India",
    period: "Jun 2024 – Aug 2024",
    icon: FlaskConical,
    color: "secondary",
    highlights: [
      "Integrated Faster-RCNN into GBCNet pipeline for gallbladder cancer detection",
      "Optimized inference with TensorRT for NVIDIA Jetson Orin Nano (75s → 3s)",
    ],
    tags: ["Computer Vision", "TensorRT", "Medical AI"],
  },
  {
    company: "Optimal Solutions Inc.",
    role: "Data Science Intern",
    location: "New York, NY",
    period: "Jun 2023 – Nov 2023",
    icon: TrendingUp,
    color: "accent",
    highlights: [
      "Developed ML pipeline for sensor data analysis with Fourier Transform preprocessing",
      "Optimized regression models boosting accuracy from 75% to 90% and reducing RMSE from 2550 to 2070",
    ],
    tags: ["ML Pipeline", "Regression", "Signal Processing"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card
                key={index}
                className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all group hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${exp.color}/10 group-hover:animate-glow`}>
                    <IconComponent className={`w-6 h-6 text-${exp.color}`} />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{exp.company}</h3>
                      <p className={`text-lg text-${exp.color} font-semibold tracking-wide`}>{exp.role}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{exp.location}</Badge>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                    </div>
                    <div className="border-l-2 border-primary/30 pl-4">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-base text-foreground/95 flex items-start gap-3 font-medium leading-[1.8] tracking-wide font-[family-name:var(--font-inter)] [text-shadow:0_1px_2px_rgba(0,0,0,0.3),0_0_8px_rgba(147,51,234,0.15)]"
                          >
                            <span className="text-primary mt-1.5 text-lg">◆</span>
                            <span className="flex-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tags.map((tag, i) => (
                        <Badge key={i} className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/20`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
