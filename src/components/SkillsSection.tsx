
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Skill = {
  name: string;
  proficiency: number;
  category: string;
  description: string;
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("All");

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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
const skills: Skill[] = [
  {
    name: "JavaScript",
    proficiency: 90, 
    category: "Languages",
    description: "Core programming language for web development."
  },
  {
    name: "C",
    proficiency: 85,
    category: "Languages",
    description: "A foundational programming language for system programming."
  },
  {
    name: "C++",
    proficiency: 85,
    category: "Languages",
    description: "A powerful object-oriented programming language."
  },
  {
    name: "Solidity",
    proficiency: 75,
    category: "Languages",
    description: "Object-oriented programming language for writing smart contracts."
  },
  {
    name: "Rust",
    proficiency: 65, // Rust is a general-purpose programming language emphasizing performance and reliability. It is noted for its memory safety without a garbage collector.
    category: "Languages",
    description: "A systems programming language focused on safety, performance, and concurrency."
  },
  {
    name: "Node.js",
    proficiency: 85,
    category: "Technologies",
    description: "Server-side JavaScript runtime for building scalable network applications."
  },
  {
    name: "MySQL",
    proficiency: 75,
    category: "Databases",
    description: "An open-source relational database management system."
  },
  {
    name: "MongoDB",
    proficiency: 80,
    category: "Databases",
    description: "A NoSQL database for modern applications with flexible schema design."
  },
  {
    name: "Express.js",
    proficiency: 85,
    category: "Technologies",
    description: "Fast, unopinionated, minimalist web framework for Node.js."
  },
  {
    name: "React.js",
    proficiency: 90,
    category: "Technologies",
    description: "Building interactive UIs with React and its ecosystem."
  },
  {
    name: "Tailwind CSS",
    proficiency: 85,
    category: "Technologies",
    description: "A utility-first CSS framework for rapid UI development."
  },
  {
    name: "Web3.js",
    proficiency: 75,
    category: "Technologies",
    description: "A library for interacting with the Ethereum blockchain."
  },
  {
    name: "Ethers.js",
    proficiency: 75,
    category: "Technologies",
    description: "A complete and compact library for interacting with the Ethereum blockchain."
  },
  {
    name: "Foundry",
    proficiency: 70,
    category: "Technologies",
    description: "A blazing fast, portable, and modular toolkit for Ethereum application development."
  },
  {
    name: "Git",
    proficiency: 90,
    category: "Developer Tools",
    description: "Distributed version control system for tracking changes in source code."
  },
  {
    name: "GitHub",
    proficiency: 90,
    category: "Developer Tools",
    description: "A platform for hosting and collaborating on Git repositories."
  },
  {
    name: "Postman",
    proficiency: 85,
    category: "Developer Tools",
    description: "An API platform for building and using APIs."
  },
  {
    name: "VS Code",
    proficiency: 95,
    category: "Developer Tools",
    description: "A powerful and popular code editor for web and software development."
  }
];

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];
  const filteredSkills = filter === "All" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">02.</span> Skills & Expertise
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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <TooltipProvider key={skill.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  className={`bg-navy-light border border-highlight/20 overflow-hidden hover:border-highlight/50 transition-all duration-300 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  } card-hover`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-slate-light">{skill.name}</h3>
                      <Badge className="bg-highlight/20 text-highlight">
                        {skill.category}
                      </Badge>
                    </div>
                    <div className="w-full animated-skill-bar mb-2">
                      <div
                        className="h-full bg-highlight"
                        style={{ width: `${skill.proficiency}%`, transition: "width 1s ease-in-out" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent className="bg-navy-light border-highlight/30 p-3 max-w-xs">
                <p>{skill.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
