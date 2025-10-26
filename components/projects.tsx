import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Code2, Network, Brain, Eye, Sparkles, Video, MessageSquare, Target, ImageIcon } from "lucide-react"

const sdeProjects = [
  {
    title: "Real-Time Collaborative Code Editor",
    description:
      "Full-stack real-time code editor supporting multi-user live editing via WebSockets. Designed backend with Node.js and Express.js to manage room-based sessions and broadcast synchronization.",
    tech: ["React", "Node.js", "Express.js", "Socket.io", "CodeMirror"],
    github: "https://github.com/aryntmr/collaborative-code-editor",
    gradient: "from-primary to-secondary",
    icon: Code2,
    image: "/collaborative-code-editor-with-multiple-cursors-an.jpg",
  },
  {
    title: "Distributed File Storage System",
    description:
      "Peer-to-peer encrypted file storage system with AES encryption and SHA-1 content addressing over TCP. Achieved secure and efficient multi-peer broadcasting and concurrent TCP connection management.",
    tech: ["Go", "Networking", "Cryptography", "TCP", "Concurrent Systems"],
    github: "https://github.com/aryntmr/distributed-file-storage-v1",
    gradient: "from-secondary to-accent",
    icon: Network,
    image: "/distributed-network-nodes-with-encrypted-file-tran.jpg",
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
  {
    title: "Image Captioning System",
    description:
      "Built image captioning model using XceptionNet for feature extraction and LSTM for text generation. Achieved BLEU-4 score of 34.6 on MSCOCO dataset and improved it to 37.3 with Faster RCNN.",
    tech: ["TensorFlow", "Keras", "XceptionNet", "LSTM", "Faster RCNN"],
    github: "https://github.com/aryntmr/Image-Captioning-System",
    gradient: "from-primary via-secondary to-accent",
    icon: ImageIcon,
    image: "/image-captioning-ai-generating-text-from-photos.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 z-10">
      <div className="max-w-7xl mx-auto space-y-24">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Software Development Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-light tracking-wider text-lg">
            Full-stack systems engineering and distributed architectures
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {sdeProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                >
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
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Machine Learning Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-light tracking-wider text-lg">
            Advanced ML research, computer vision, and intelligent systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden backdrop-blur-sm bg-card/50 border-accent/20 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
                >
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
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
