
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  type: "professional" | "leadership";
  logo: string;
};

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "professional" | "leadership">("all");

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

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  
const experiences: Experience[] = [
  {
    id: 1,
    title: "Lead Web Developer and Founding Member",
    company: "Cozync",
    location: "Remote & IIT ISM Dhanbad",
    period: "June 2020 - Present",
    description: [
      "Led the development of the company's main web application using React and Node.js.",
      "Co-founded and established the company, coordinating with cross-functional teams to define and implement new features.",
      "Mentored junior developers and established coding standards.",
      "Implemented responsive UI designs and integrated payment gateways and third-party APIs.",
      "Built and maintained the organization's website and technical infrastructure."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "CI/CD", "Leadership", "Mentorship"],
    type: "professional",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA_KtQ9YzfWNyB_FXnVgIOm_TzcLAf2B-ow&s"
  },
  {
    id: 2,
    title: "Mentor",
    company: "Cyberlabs (Blockchain Division)",
    location: "IIT(ISM) Dhanbad",
    period: "August 2023 - Present",
    description: [
      "Guiding students in Ethereum smart contracts, dApp development, and core blockchain concepts."
    ],
    skills: ["Solidity", "dApp Development", "Blockchain", "Mentorship"],
    type: "leadership",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBK8ekPv5JhmB-PTyuxKxylsPJAdNB0gibkg&s"
  },
  {
    id: 3,
    title: "Mentor",
    company: "RoboISM",
    location: "IIT ISM Dhanbad",
    period: "September 2023 - Present",
    description: [
      "Guiding students in robotics, design, and modeling."
    ],
    skills: ["Robotics", "Design", "Modeling", "Mentorship"],
    type: "leadership",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteelL88dgmkYlP-MTdiaDfEP4cMzDlRIVLw&s"
  },
  {
    id: 4,
    title: "Mentor",
    company: "Mic.drop",
    location: "IIT ISM Dhanbad",
    period: "September 2023 - Present",
    description: [
      "Supporting students in developing public speaking and communication skills."
    ],
    skills: ["Public Speaking", "Communication", "Mentorship"],
    type: "leadership",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9I-hv52q6Z-sFRKsAwL4embtsnN9-5FCqZw&s"
  },
  {
    id: 5,
    title: "Organiser",
    company: "PR Team Srijan 25",
    location: "IIT (ISM) Dhanbad",
    period: "January 2025",
    description: [
      "Organised events in PR Team Srijan 25, the annual technical fest of IIT (ISM) Dhanbad; RoboRumble, RobolSM, IIT Dhanbad; Robowars, Concetto'24."
    ],
    skills: ["Event Management", "Public Relations", "Teamwork"],
    type: "leadership",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRziLA9lQN1M02eDRdyrjyeqMMKXrSJRHpg6g&s"
  }
];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="section-container">
      <h2 className={`section-title ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <span className="section-title-number">04.</span> Experience
      </h2>

      {/* Experience Type Tabs */}
      <div className={`flex border-b border-highlight/20 mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "all"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "professional"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("leadership")}
          className={`px-4 py-2 font-medium text-sm transition-colors duration-300 ${
            activeTab === "leadership"
              ? "border-b-2 border-highlight text-highlight"
              : "text-slate hover:text-slate-light"
          }`}
        >
          Leadership
        </button>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {filteredExperiences.map((exp, index) => (
          <Card
            key={exp.id}
            className={`bg-navy-light border border-highlight/20 overflow-hidden ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${300 + index * 150}ms` }}
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-navy-dark p-6 flex justify-center items-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-light">
                        {exp.title}
                      </h3>
                      <p className="text-highlight">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <Badge className="bg-highlight/20 text-highlight">
                        {exp.period}
                      </Badge>
                      <p className="text-slate text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-highlight mr-2">▹</span>
                        <span className="text-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-highlight/30 text-slate-light">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
