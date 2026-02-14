import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import { Trophy, Heart, Medal, Code2, ExternalLink, Calendar } from "lucide-react";
import { achievements } from "@/data";

const iconMap = {
  trophy: <Trophy className="w-6 h-6" />,
  vote: <Heart className="w-6 h-6" />,
  medal: <Medal className="w-6 h-6" />,
  code: <Code2 className="w-6 h-6" />,
};

const iconColors = {
  trophy: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  vote: "bg-red-500/20 text-red-400 border-red-500/30",
  medal: "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30",
  code: "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30",
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">05. Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Hackathon wins, community validation, and competitive recognition that demonstrate technical excellence.
        </p>
      </FadeInUp>

      {/* Achievement Timeline */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {achievements.map((achievement) => (
          <StaggerItem key={achievement.id}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-6 glow-border h-full flex flex-col"
            >
              {/* Icon and Date */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg border ${iconColors[achievement.icon]}`}>
                  {iconMap[achievement.icon]}
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Calendar size={12} />
                  {achievement.date}
                </div>
              </div>

              {/* Title and Event */}
              <h3 className="text-lg font-bold text-white mb-1">{achievement.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{achievement.event}</p>

              {/* Result Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 text-cyber-cyan border border-cyber-cyan/30 rounded-lg text-sm font-semibold">
                  {achievement.result}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {achievement.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {achievement.projectLink && (
                  <a
                    href={achievement.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-dark-700 text-gray-300 text-xs rounded hover:bg-dark-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} />
                    Project
                  </a>
                )}
                {achievement.competitionLink && (
                  <a
                    href={achievement.competitionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-dark-700 text-gray-300 text-xs rounded hover:bg-dark-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={12} />
                    Competition
                  </a>
                )}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Summary Stats */}
      <FadeInUp delay={0.3}>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-4 text-center glow-border">
            <p className="text-3xl font-bold gradient-text">3</p>
            <p className="text-gray-400 text-sm">National Hackathons</p>
          </div>
          <div className="glass-card p-4 text-center glow-border">
            <p className="text-3xl font-bold gradient-text">#2</p>
            <p className="text-gray-400 text-sm">Highest National Rank</p>
          </div>
          <div className="glass-card p-4 text-center glow-border">
            <p className="text-3xl font-bold gradient-text">612</p>
            <p className="text-gray-400 text-sm">Community Votes</p>
          </div>
          <div className="glass-card p-4 text-center glow-border">
            <p className="text-3xl font-bold gradient-text">1150+</p>
            <p className="text-gray-400 text-sm">Teams Competed Against</p>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
};

export default AchievementsSection;
