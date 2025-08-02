
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "HealthAI",
      description: "A comprehensive healthcare platform with AI-powered disease prediction.",
      longDescription: "Architected and deployed a comprehensive healthcare platform in 48 hours during a hackathon, implementing 7+ core features including telemedicine, appointment management, and AI-powered disease prediction. The platform integrates a custom BERT-based disease prediction model with 92% accuracy across 100+ common diseases and processes symptom inputs in under 3 seconds. It also features a secure telemedicine infrastructure supporting 1080p video quality with 99.9% uptime, and a prescription management system capable of handling 1000+ medical records daily.",
      image: "https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?semt=ais_hybrid&w=740&q=80",
      techStack: ["React", "Tailwind", "Firebase", "Python"],
      category: "AI/ML",
      liveUrl: undefined,
      githubUrl: "https://github.com/shivam",
      features: [
        "Architected and deployed a full-featured healthcare platform in 48 hours during a hackathon.",
        "Implemented 7+ core features, including telemedicine and appointment management.",
        "Developed a custom BERT-based disease prediction model with 92% accuracy across 100+ common diseases.",
        "Processed symptom inputs in under 3 seconds for rapid diagnosis assistance.",
        "Implemented a secure telemedicine infrastructure with 1080p video quality and 99.9% uptime.",
        "Integrated a prescription management system capable of handling 1000+ medical records daily.",
      ],
    },
    {
      id: 2,
      title: "BLOCKROLL",
      description: "A secure, transparent blockchain-based payroll system.",
      longDescription: "Developed a blockchain-based payroll system that leverages blockchain technology to automate salary distribution, ensuring payments are secure, transparent, and executed automatically without manual intervention. The system integrates Web3.js and Truffle to enable transparent, tamper-proof payroll transactions by connecting the frontend with Ethereum smart contracts (Solidity). The frontend is built with React.js and Material-UI for a seamless user experience.",
      image: "https://pbs.twimg.com/profile_images/1876611855931580416/ixedAURS_400x400.jpg",
      techStack: ["React.js", "Material-UI", "Bootstrap", "Web3.js", "Truffle", "Ethereum", "Solidity"],
      category: "Blockchain",
      liveUrl: undefined,
      githubUrl: "https://github.com/shivam",
      features: [
        "Developed a blockchain-based payroll system to automate salary distribution.",
        "Ensured payments are secure, transparent, and automatically executed without manual intervention.",
        "Integrated Web3.js and Truffle to enable transparent, tamper-proof payroll transactions.",
        "Used Ethereum smart contracts (Solidity) for backend logic.",
        "Built a modern React.js frontend with Material-UI for a seamless user experience.",
        "Transfers tokens, mints new tokens, and allows users to buy tokens.",
      ],
    },
    {
      id: 3,
      title: "YouTube Clone",
      description: "A basic YouTube UI clone built with pure HTML and CSS.",
      longDescription: "A front-end-only project that recreates the user interface of YouTube. It focuses on pixel-perfect design and responsive layouts using only HTML and CSS. The project demonstrates strong proficiency in fundamental web development skills, including semantic HTML and modern CSS techniques for layout and styling.",
      image: "https://i.pinimg.com/736x/10/0d/92/100d925f120c7b3c1a53b2aaea2ec11c.jpg",
      techStack: ["HTML", "CSS"],
      category: "Web Application",
      liveUrl: undefined,
      githubUrl: undefined,
      features: [
        "Replicated the YouTube user interface layout and design.",
        "Implemented a responsive design to work on various screen sizes.",
        "Utilized advanced CSS techniques like Flexbox and Grid for layout.",
        "Demonstrated a strong understanding of core front-end technologies.",
      ],
    },
    {
      id: 4,
      title: "React Crypto Wallet",
      description: "A basic crypto wallet connecting to Ethereum and Solana.",
      longDescription: "A foundational crypto wallet application built with React, connecting to both Ethereum and Solana networks. It allows users to manage and view their balances on both chains. This project highlights the ability to integrate with different blockchain networks using modern libraries and demonstrates an understanding of multi-chain web3 development principles.",
      image: "https://static.news.bitcoin.com/wp-content/uploads/2023/12/solanaeth.jpg",
      techStack: ["React.js", "Solana", "Ethereum"],
      category: "Blockchain",
      liveUrl: undefined,
      githubUrl: undefined,
      features: [
        "Connects to both Ethereum and Solana blockchains.",
        "Allows users to view wallet balances on both networks.",
        "Demonstrates basic wallet functionalities and multi-chain integration.",
        "Uses libraries like Web3.js and Ethers.js for blockchain interaction.",
      ],
    },
  ];
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">03.</span> My Projects
      </h2>

      {/* Category Filters */}
      <div className={`mb-10 flex flex-wrap gap-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        {categories.map((category) => (
          <Badge
            key={category}
            className={`cursor-pointer text-sm py-2 px-4 ${
              filter === category
                ? "bg-highlight text-navy"
                : "bg-navy-light hover:bg-navy-light/80"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            className={`bg-navy-light border border-highlight/20 overflow-hidden ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            } card-hover`}
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader className="pb-2">
              <h3 className="text-xl font-semibold text-slate-light">{project.title}</h3>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-slate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge key={tech} className="bg-highlight/10 text-highlight">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge className="bg-highlight/10 text-highlight">
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="text-highlight hover:bg-highlight/10 hover:text-highlight"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-navy border border-highlight/20">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-light">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-slate">
                {selectedProject.longDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="h-64 overflow-hidden rounded-md my-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-light mb-2">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-highlight mr-2">▹</span>
                      <span className="text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-light mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} className="bg-highlight/10 text-highlight">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {selectedProject.liveUrl && (
                  <Button className="bg-highlight text-navy hover:bg-highlight/90" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10" asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
