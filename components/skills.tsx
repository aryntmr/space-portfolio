import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "Go", "SQL"],
    color: "primary",
  },
  {
    title: "Frontend & UI",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Streamlit", "WebSocket", "Socket.io"],
    color: "secondary",
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "FastAPI", "REST API", "GraphQL", "Prisma", "JWT", "OAuth", "Microservices"],
    color: "accent",
  },
  {
    title: "Databases & Vector Stores",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Chroma", "FAISS", "MinIO", "TileDB"],
    color: "primary",
  },
  {
    title: "DevOps & Cloud Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "TensorRT", "Vercel", "Prometheus"],
    color: "secondary",
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "MLFlow",
      "Ray",
      "LangChain",
      "LangGraph",
      "RAG",
      "OpenAI API",
      "GPT-4",
      "Whisper",
      "Computer Vision",
      "GANs",
      "Few-Shot Learning",
      "Knowledge Distillation",
    ],
    color: "accent",
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3 className={`text-xl font-bold mb-4 text-${category.color}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className={`bg-${category.color}/10 text-${category.color} border-${category.color}/20`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
