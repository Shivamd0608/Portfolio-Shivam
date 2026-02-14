import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import { skillCategories, projects } from "@/data";
import type { SkillLevel } from "@/data/personal";

const levelColors: Record<SkillLevel, string> = {
  expert: "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/40",
  advanced: "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/40",
  intermediate: "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/40",
  learning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
};

const levelLabels: Record<SkillLevel, string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Proficient",
  learning: "Learning",
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Find which projects use the hovered skill
  const getProjectsForSkill = (skillName: string) => {
    const skillInfo = skillCategories
      .flatMap(cat => cat.skills)
      .find(s => s.name === skillName);
    
    if (!skillInfo?.usedIn?.length) return [];
    
    return projects.filter(p => skillInfo.usedIn?.includes(p.id));
  };

  return (
    <section id="skills" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">02. What I Work With</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I use to build production-grade blockchain systems. Hover on any skill to see which projects use it.
        </p>
      </FadeInUp>

      {/* Legend */}
      <FadeInUp delay={0.1}>
        <div className="flex flex-wrap gap-4 mb-8">
          {(Object.keys(levelColors) as SkillLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-medium border ${levelColors[level]}`}>
                {levelLabels[level]}
              </span>
            </div>
          ))}
        </div>
      </FadeInUp>

      {/* Skills Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <StaggerItem key={category.id}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`glass-card p-6 glow-border h-full cursor-pointer transition-all ${
                activeCategory === category.id ? "ring-1 ring-cyber-cyan/50" : ""
              }`}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-default ${levelColors[skill.level]} ${
                      hoveredSkill === skill.name ? "ring-2 ring-white/20" : ""
                    }`}
                  >
                    {skill.name}
                    {skill.usedIn && skill.usedIn.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan rounded-full" />
                    )}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Project Connection Panel */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-card p-4 glow-border max-w-md"
          >
            <p className="text-sm text-gray-400 mb-2">
              <span className="text-cyber-cyan font-medium">{hoveredSkill}</span> used in:
            </p>
            <div className="flex flex-wrap gap-2">
              {getProjectsForSkill(hoveredSkill).length > 0 ? (
                getProjectsForSkill(hoveredSkill).map(project => (
                  <span
                    key={project.id}
                    className="px-2 py-1 bg-dark-700/50 text-gray-300 text-xs rounded border border-white/5"
                  >
                    {project.title}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-xs">Various personal projects</span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech Stack Summary */}
      <FadeInUp delay={0.3}>
        <div className="mt-12 glass-card p-6 glow-border">
          <h3 className="text-lg font-semibold text-white mb-4">Primary Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg bg-dark-800/50">
              <p className="text-2xl mb-2">⛓️</p>
              <p className="text-sm font-medium text-white">Solidity</p>
              <p className="text-xs text-gray-500">Smart Contracts</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-dark-800/50">
              <p className="text-2xl mb-2">🦀</p>
              <p className="text-sm font-medium text-white">Rust</p>
              <p className="text-xs text-gray-500">ICP Canisters</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-dark-800/50">
              <p className="text-2xl mb-2">⚛️</p>
              <p className="text-sm font-medium text-white">React / Next.js</p>
              <p className="text-xs text-gray-500">Frontend</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-dark-800/50">
              <p className="text-2xl mb-2">🔷</p>
              <p className="text-sm font-medium text-white">TypeScript</p>
              <p className="text-xs text-gray-500">Type Safety</p>
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};

export default SkillsSection;
