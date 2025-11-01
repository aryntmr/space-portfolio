import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "Go"],
    color: "primary",
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Angular", "Redux", "Tailwind CSS"],
    color: "secondary",
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "REST", "FastAPI", "GraphQL", "Prisma", "JWT", "OAuth", "Microservices"],
    color: "accent",
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB"],
    color: "primary",
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Heroku", "CI/CD", "GitHub Actions", "Jenkins", "Git", "Linux", "Vercel"],
    color: "secondary",
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "MLFlow",
      "Ray",
      "LangChain",
      "LangGraph",
      "TensorRT",
      "OpenAI API",
      "Computer Vision",
      "NLP",
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
