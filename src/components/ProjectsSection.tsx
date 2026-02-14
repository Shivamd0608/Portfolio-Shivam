import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Shield, Zap, Users, Server, Layers, Code2 } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import { projects, legacyProjects, type Project } from "@/data";

const categoryColors: Record<string, string> = {
  DeFi: "bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20",
  Web3: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20",
  Infrastructure: "bg-neon-green/10 text-neon-green border-neon-green/20",
  Hackathon: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20",
};

const priorityBadges: Record<string, { label: string; color: string }> = {
  highest: { label: "Flagship", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  high: { label: "Featured", color: "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30" },
  medium: { label: "", color: "" },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "tech">("overview");

  // Filter to only show featured projects (the 3 main ones)
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">03. What I've Built</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Production-grade blockchain systems with real impact. 
          Click on any project to explore the technical architecture.
        </p>
      </FadeInUp>

      {/* Featured Projects Grid */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <motion.div
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-6 cursor-pointer glow-border group h-full flex flex-col relative"
            >
              {/* Priority Badge */}
              {project.priority !== "medium" && (
                <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-medium border ${priorityBadges[project.priority].color}`}>
                  {project.priority === "highest" ? "🚀" : "⭐"} {priorityBadges[project.priority].label}
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${categoryColors[project.category]}`}>
                      {project.category}
                    </span>
                    {project.achievement && (
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                        🏆 {project.achievement.result}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{project.tagline}</p>
                </div>
                <ChevronRight className="text-gray-600 group-hover:text-cyber-cyan group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.quickSummary}
              </p>

              {/* Impact Metrics Preview */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.impactMetrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="bg-dark-800/50 rounded-lg p-2 text-center">
                    <p className="text-cyber-cyan font-bold text-sm">{metric.value}</p>
                    <p className="text-gray-500 text-xs">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.slice(0, 2).flatMap(cat => cat.technologies.slice(0, 2)).slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-dark-700/50 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                <span className="px-2 py-1 bg-dark-700/50 text-gray-500 text-xs rounded">
                  +more
                </span>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Other Projects Section */}
      <FadeInUp delay={0.2}>
        <div className="border-t border-white/5 pt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {legacyProjects.map((project) => (
              <div key={project.id} className="glass-card p-4 glow-border">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-white">{project.title}</h4>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyber-cyan transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-dark-700/50 text-gray-400 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInUp>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-950/90 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="glass-card max-w-4xl w-full my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-white/5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${categoryColors[selectedProject.category]}`}>
                        {selectedProject.category}
                      </span>
                      <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-dark-700 text-gray-400 border border-white/5">
                        {selectedProject.timeline}
                      </span>
                      {selectedProject.team && (
                        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-dark-700 text-gray-400 border border-white/5">
                          <Users size={12} className="inline mr-1" />
                          {selectedProject.team}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <p className="text-cyber-cyan mt-1">{selectedProject.tagline}</p>
                    
                    {selectedProject.achievement && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-sm">
                        🏆 {selectedProject.achievement.title}: {selectedProject.achievement.result}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 mt-6">
                  {(["overview", "architecture", "tech"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "bg-cyber-cyan text-dark-950"
                          : "bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {/* Problem & Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <Zap size={14} className="text-red-400" />
                            The Problem
                          </h4>
                          <p className="text-gray-300">{selectedProject.problemSolved}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <Shield size={14} className="text-green-400" />
                            The Solution
                          </h4>
                          <p className="text-gray-300">{selectedProject.quickSummary}</p>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                          Impact Metrics
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          {selectedProject.impactMetrics.map((metric) => (
                            <div key={metric.label} className="bg-dark-800/50 rounded-lg p-3 text-center border border-white/5">
                              <p className="text-cyber-cyan font-bold text-lg">{metric.value}</p>
                              <p className="text-gray-400 text-xs">{metric.label}</p>
                              {metric.description && (
                                <p className="text-gray-500 text-xs mt-1">{metric.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {selectedProject.keyFeatures.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-cyber-cyan mt-0.5">▹</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Security Features (if present) */}
                      {selectedProject.securityFeatures && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Shield size={14} className="text-green-400" />
                            Security Features
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedProject.securityFeatures.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                <span className="text-green-400 mt-0.5">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "architecture" && (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <Layers size={14} className="text-cyber-cyan" />
                        Core Components
                      </h4>
                      <div className="space-y-4">
                        {selectedProject.coreComponents.map((component, i) => (
                          <div key={i} className="bg-dark-800/50 rounded-lg p-4 border border-white/5">
                            <div className="flex items-center gap-2 mb-2">
                              <Server size={16} className="text-cyber-cyan" />
                              <h5 className="font-semibold text-white">{component.name}</h5>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{component.description}</p>
                            {component.techDetails && (
                              <ul className="space-y-1">
                                {component.techDetails.map((detail, j) => (
                                  <li key={j} className="flex items-start gap-2 text-gray-300 text-xs font-mono">
                                    <span className="text-cyber-cyan mt-0.5">•</span>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "tech" && (
                    <motion.div
                      key="tech"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <Code2 size={14} className="text-cyber-cyan" />
                        Technology Stack
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.techStack.map((category) => (
                          <div key={category.category} className="bg-dark-800/50 rounded-lg p-4 border border-white/5">
                            <h5 className="font-medium text-white mb-3">{category.category}</h5>
                            <div className="flex flex-wrap gap-2">
                              {category.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 bg-dark-700 text-gray-300 text-sm rounded-lg border border-white/5"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Footer - Links */}
              <div className="p-6 md:p-8 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.hackathonUrl && (
                    <a
                      href={selectedProject.hackathonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-lg hover:bg-cyber-purple/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Hackathon Showcase
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {selectedProject.altGithub && (
                    <a
                      href={selectedProject.altGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-gray-400 rounded-lg hover:bg-dark-600 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      Related Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
