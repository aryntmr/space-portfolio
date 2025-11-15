"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Code2, Network, Brain, Eye, Sparkles, Video, MessageSquare, Target, ImageIcon, BarChart3, Users, Briefcase, KanbanSquare, Laptop } from "lucide-react"
import { useState } from "react"

const sdeProjects = [
  {
    title: "CareerCoachAI",
    description:
      "Full-stack career development platform with AI-powered resume analysis, interview simulation, and email generation. Built with Next.js, PostgreSQL, and dual AI APIs. Features tier-based authentication, job queue processing, and containerized AWS deployment",
    tech: ["Next.js", "PostgreSQL", "AI APIs", "AWS", "Docker", "Authentication"],
    github: "https://github.com/aryntmr/CareerCoachAI",
    gradient: "from-primary to-secondary",
    icon: Briefcase,
    image: "/career-coach-ai-platform.svg",
  },
  {
    title: "CodeStreamAI",
    description:
      "Real-time collaborative code editor supporting 10+ languages with live cursor tracking and instant synchronization. Features WebSocket-based multi-user sessions, AI-powered code completion via GPT-4, and simultaneous code execution for seamless remote team collaboration.",
    tech: ["React", "Node.js", "WebSocket", "GPT-4", "Socket.io", "CodeMirror"],
    github: "https://github.com/aryntmr/collaborative-code-editor",
    gradient: "from-secondary to-accent",
    icon: Code2,
    image: "/collaborative-code-editor-with-multiple-cursors-an.jpg",
  },
  {
    title: "Project Management Application (JIRA)",
    description:
      "Project management application with drag-and-drop Kanban board enabling real-time task tracking across four workflow stages. Built with Next.js and PostgreSQL, featuring Clerk authentication, Prisma ORM integration, and relational database design with automated cascading deletes.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "Kanban", "TypeScript"],
    github: "https://github.com/aryntmr/jira-clone",
    gradient: "from-accent to-primary",
    icon: KanbanSquare,
    image: "/jira-kanban-board-task-management.svg",
  },
  {
    title: "Distributed File Storage System",
    description:
      "Peer-to-peer encrypted file storage system with AES encryption and SHA-1 content addressing over TCP. Achieved secure and efficient multi-peer broadcasting and concurrent TCP connection management.",
    tech: ["Go", "Networking", "Cryptography", "TCP", "Concurrent Systems"],
    github: "https://github.com/aryntmr/distributed-file-storage-v1",
    gradient: "from-primary via-secondary to-accent",
    icon: Network,
    image: "/distributed-network-nodes-with-encrypted-file-tran.jpg",
  },
  {
    title: "MERN Voting App",
    description:
      "A full-stack MERN voting application where users can create, share, and vote on polls. Features authentication, real-time results visualization with charts, and the ability to add custom poll options.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Chart.js"],
    github: "https://github.com/aryntmr/mern-voting-app",
    gradient: "from-secondary to-primary",
    icon: BarChart3,
    image: "/voting-app-preview.svg",
  },
  {
    title: "Discord Clone",
    description:
      "A Discord clone built with the MERN stack (MongoDB, Express, React, Node.js) and Redux for state management. Features real-time chat functionality, user authentication via Firebase, and a modern Discord-inspired UI.",
    tech: ["MongoDB", "Express.js", "React", "Redux Toolkit", "Socket.io", "Node.js"],
    github: "https://github.com/aryntmr/discord-clone",
    gradient: "from-accent via-primary to-secondary",
    icon: Users,
    image: "/discord-clone-preview.svg",
  },
]

const mlProjects = [
  {
    title: "Distributed Face Recognition MLOps Pipeline",
    description:
      "Architected GPU-accelerated facial recognition training pipeline using PyTorch (ArcFace), MLFlow, and Ray. Integrated Dockerized workflows, Kubernetes orchestration, and MinIO object storage for scalable MLOps.",
    tech: ["PyTorch", "MLFlow", "Ray", "Docker", "Kubernetes", "Prometheus"],
    github: "https://github.com/MoulikShah/MLOps_Project",
    gradient: "from-primary via-accent to-secondary",
    icon: Brain,
    image: "/facial-recognition-ai-with-neural-network-visualiz.jpg",
  },
  {
    title: "Few-Shot Class-Incremental Learning for Face Recognition",
    description:
      "Designed few-shot class-incremental learning framework integrating patch-based knowledge distillation and CosFace margin loss. Trained incrementally (25 steps) over 40,000 identities with only 4 samples per identity.",
    tech: ["Few-Shot Learning", "Continual Learning", "Knowledge Distillation", "Face Recognition"],
    github: "https://github.com/aryntmr/Few-Shot-Class-Incremental-Learning-for-Large-Scale-Face-Recognition",
    gradient: "from-secondary via-primary to-accent",
    icon: Eye,
    image: "/few-shot-learning-with-face-recognition-samples.jpg",
  },
  {
    title: "Single Image Super-Resolution using GANs",
    description:
      "Implemented SRGAN, ESRGAN, and SRResNet architectures to enhance image resolution. Improved SSIM to 0.79 using perceptual loss and reduced network depth by 50% with double residual connections.",
    tech: ["PyTorch", "GANs", "SRGAN", "ESRGAN", "Image Processing"],
    github: "https://github.com/aryntmr/Single-Image-Super-Resolution-using-GANs",
    gradient: "from-accent to-primary",
    icon: Sparkles,
    image: "/image-super-resolution-before-and-after-comparison.jpg",
  },
  {
    title: "Video-based AI Assistant",
    description:
      "Streamlit-based video AI assistant that extracts frames and transcribes audio using Whisper, generates LLM responses, and provides product recommendations using DuckDuckGo API.",
    tech: ["Python", "Streamlit", "Whisper", "GPT API", "MoviePy"],
    github: "https://github.com/aryntmr/ai-video-assistant",
    gradient: "from-primary to-accent",
    icon: Video,
    image: "/ai-video-assistant-analyzing-video-content.jpg",
  },
  {
    title: "Doc Chat Bot",
    description:
      "Document-based chatbot using Streamlit and RAG with PDF parsing, FAISS vector search, and LangChain integration. Enabled conversational Q&A over uploaded PDFs with OpenAI GPT models.",
    tech: ["Streamlit", "LangChain", "FAISS", "Sentence Transformers", "OpenAI API"],
    github: "https://github.com/aryntmr/doc-chat",
    gradient: "from-secondary to-primary",
    icon: MessageSquare,
    image: "/chatbot-interface-with-document-analysis.jpg",
  },
  {
    title: "Bayesian Optimization for Neural Networks",
    description:
      "Compared Bayesian Optimization vs. Grid Search for tuning neural network hyperparameters. Reduced tuning time from 65 hours to 28 minutes while maintaining accuracy.",
    tech: ["Python", "scikit-learn", "Bayesian Optimization", "Hyperparameter Tuning"],
    github: "https://github.com/aryntmr/Bayesian-Optimization",
    gradient: "from-accent to-secondary",
    icon: Target,
    image: "/bayesian-optimization-hyperparameter-search-visual.jpg",
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState<"sde" | "ml">("sde")

  return (
    <section id="projects" className="relative py-24 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-8 font-light tracking-wider text-lg">
          Explore my work across different domains
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <Button
            size="lg"
            onClick={() => setActiveTab("sde")}
            className={`px-8 py-6 text-lg font-bold tracking-wide transition-all flex items-center gap-3 ${
              activeTab === "sde"
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/60 scale-105"
                : "bg-transparent border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60"
            }`}
          >
            <Laptop className="w-6 h-6" />
            Software Development
          </Button>
          <Button
            size="lg"
            onClick={() => setActiveTab("ml")}
            className={`px-8 py-6 text-lg font-bold tracking-wide transition-all flex items-center gap-3 ${
              activeTab === "ml"
                ? "bg-accent text-accent-foreground shadow-xl shadow-accent/60 scale-105"
                : "bg-transparent border-2 border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent/60"
            }`}
          >
            <Brain className="w-6 h-6" />
            Machine Learning
          </Button>
        </div>

        {/* Software Development Projects */}
        {activeTab === "sde" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center mb-8">
              <p className="text-muted-foreground font-light tracking-wider text-base">
                AI-powered Full-stack systems and Distributed architectures
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sdeProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <h3
                        className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </h3>
                      <div className="border-l-2 border-primary/30 pl-4 py-1">
                        <p className="text-base text-foreground/95 leading-[1.8] font-medium tracking-wide font-[family-name:var(--font-crimson)] [text-shadow:0_1px_2px_rgba(0,0,0,0.3),0_0_8px_rgba(147,51,234,0.15)]">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-2">
                        <div className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-3 w-full">
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
        )}

        {/* Machine Learning Projects */}
        {activeTab === "ml" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="text-center mb-8">
              <p className="text-muted-foreground font-light tracking-wider text-base">
                Advanced ML research, Computer vision, and Distributed ML training systems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mlProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-accent/20 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 cursor-pointer h-full">
                    <div className="relative h-40 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3
                        className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </h3>
                      <div className="border-l-2 border-accent/30 pl-3 py-0.5">
                        <p className="text-sm text-foreground/95 leading-[1.75] font-medium tracking-wide font-[family-name:var(--font-crimson)] [text-shadow:0_1px_2px_rgba(0,0,0,0.3),0_0_8px_rgba(147,51,234,0.15)]">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-accent/10 text-accent border-accent/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="pt-2">
                        <div className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-3 w-full">
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              )
            })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
