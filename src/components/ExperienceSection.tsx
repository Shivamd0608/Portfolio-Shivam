import { motion } from "framer-motion";
import { FadeInUp } from "./motion";
import { Briefcase, Users, Calendar, GraduationCap, Mic } from "lucide-react";
import { experiences } from "@/data";

const typeIcons = {
  work: <Briefcase size={18} />,
  mentorship: <GraduationCap size={18} />,
  community: <Mic size={18} />,
};

const typeColors = {
  work: "bg-cyber-cyan/10 text-cyber-cyan",
  mentorship: "bg-yellow-500/10 text-yellow-400",
  community: "bg-cyber-purple/10 text-cyber-purple",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">04. Where I've Worked</p>
        <h2 className="section-title">Experience & Leadership</h2>
        <p className="section-subtitle">
          Professional work and community contributions that shaped my journey in blockchain development.
        </p>
      </FadeInUp>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan via-cyber-blue to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-2">
              <div className="w-full h-full bg-cyber-cyan rounded-full" />
              <div className="absolute inset-0 bg-cyber-cyan rounded-full animate-ping opacity-20" />
            </div>

            {/* Content */}
            <div
              className={`flex-1 ml-8 md:ml-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="glass-card p-6 glow-border inline-block text-left w-full md:max-w-md"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${typeColors[exp.type]}`}>
                    {typeIcons[exp.type]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{exp.title}</h3>
                    <p className="text-gray-400 text-sm">{exp.organization}</p>
                    {exp.location && (
                      <p className="text-gray-500 text-xs">{exp.location}</p>
                    )}
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                  <Calendar size={12} />
                  {exp.period}
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="text-cyber-cyan mt-0.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Outcome (if present) */}
                {exp.outcome && (
                  <div className="mb-4 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                    <p className="text-yellow-400 text-xs font-medium">Outcome</p>
                    <p className="text-gray-300 text-sm mt-1">{exp.outcome}</p>
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-dark-700/50 text-gray-400 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
