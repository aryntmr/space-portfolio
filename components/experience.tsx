import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, FlaskConical, TrendingUp } from "lucide-react"

const experiences = [
  {
    company: "Recruit Co. Ltd.",
    role: "Software Engineer (AI/ML) Intern",
    location: "Tokyo, Japan",
    period: "Jun 2025 – Jul 2025",
    icon: Building2,
    color: "primary",
    link: "https://recruit-holdings.com/en/",
    highlights: [
      "Built a full-stack CRM with React, Node.js, Express, and MongoDB that handles 10K+ concurrent users, ensuring system availability with database replica sets, and strategic indexing that reduced average query time by 65%",
      "Created 5 FastAPI endpoints connecting LLM multi-agent system with RAG for semantic property search using vector embeddings and Map API lookups, handling 500+ requests and automating 80% of broker tasks",
      "Collaborated with product leads and UX designers to refine scope and optimize workflows, aligning the CRM prototype with user feedback and expediting validation for future AI-driven enhancements",
    ],
    tags: ["AI", "CRM", "MERN", "LangGraph", "FastAPI", "RAG"],
  },
  {
    company: "Indian Institute of Technology Delhi",
    role: "Junior Research Fellow",
    location: "Delhi, India",
    period: "Jun 2024 – Aug 2024",
    icon: FlaskConical,
    color: "secondary",
    link: "https://vision-iitd.github.io",
    highlights: [
      "Integrated Faster-RCNN into the GBCNet pipeline with a custom dataloader, bypassing JSON-stored ROI boxes and eliminating manual data annotation for streamlined gallbladder cancer detection pipeline",
      "Optimized inference performance by converting GBCxFasterRCNN to a TensorRT model for NVIDIA Jetson Orin Nano, reducing inference time significantly from approximately ~75 seconds to just ~3 seconds",
    ],
    tags: ["Computer Vision", "TensorRT", "Medical AI", "Faster-RCNN"],
  },
  {
    company: "Optimal Solutions Inc.",
    role: "Software Engineer Intern",
    location: "Chantilly, VA (Remote)",
    period: "May 2023 – Nov 2023",
    icon: TrendingUp,
    color: "accent",
    link: "https://www.osiopt.com",
    highlights: [
      "Built microservices with REST APIs and Docker to process 50+ GB of sensor data using async I/O and parallel processing, improving throughput by 40% compared to the previous sequential implementation",
      "Designed data pipeline with PostgreSQL for metadata, Redis for caching, and TileDB for time-series storage, reducing query response times by 25% through database indexing and connection pooling",
      "Set up CI/CD workflows with GitHub Actions running automated tests, static analysis, and A/B testing on every commit, eliminating manual deployment steps and maintaining 99.9% service availability",
      "Added structured logging, health check endpoints, and monitoring dashboards to track system performance, which helped cut average debugging time by 30% and increased test coverage to 85%",
    ],
    tags: ["Microservices", "Docker", "PostgreSQL", "Redis", "CI/CD", "GitHub Actions"],
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
              <a
                key={index}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className="p-8 backdrop-blur-sm bg-card/50 border-primary/30 hover:border-primary/60 transition-all duration-500 group
                    shadow-[0_8px_30px_rgb(0,0,0,0.12),0_4px_16px_rgb(147,51,234,0.2)] 
                    hover:shadow-[0_20px_60px_rgb(0,0,0,0.3),0_8px_30px_rgb(147,51,234,0.4),0_0_0_1px_rgb(147,51,234,0.3)]
                    hover:-translate-y-2 hover:scale-[1.02]
                    relative overflow-hidden
                    before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-br before:from-primary/40 before:via-secondary/30 before:to-accent/40 before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                    cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${exp.color}/10 group-hover:bg-${exp.color}/20 
                      transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                      shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:shadow-[0_8px_24px_rgba(147,51,234,0.4)]
                      border border-${exp.color}/20 group-hover:border-${exp.color}/40`}>
                      <IconComponent className={`w-6 h-6 text-${exp.color} transition-all duration-500 group-hover:scale-110`} />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.company}
                        </h3>
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
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
