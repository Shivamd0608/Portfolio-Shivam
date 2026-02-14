import { motion } from "framer-motion";
import { Code2, Blocks, Users, Shield, Zap, Globe } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./motion";
import { education, stats } from "@/data";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Blocks className="w-5 h-5" />,
      title: "DeFi Expertise",
      description: "Aave V3 integration, liquidation prevention, multi-chain protocols",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Smart Contract Security",
      description: "UUPS patterns, ReentrancyGuard, atomic execution, zero-residual invariants",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Multi-Chain",
      description: "Ethereum, Optimism, Arbitrum, Base, Mantle L2, Internet Computer",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Technical Mentor",
      description: "30+ students mentored in Solidity, DeFi protocols, and Web3 development",
    },
  ];

  return (
    <section id="about" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">01. Who I Am</p>
        <h2 className="section-title">About Me</h2>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          <FadeInUp delay={0.1}>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">blockchain developer</span> pursuing 
              B.Tech in Electrical Engineering at IIT (ISM) Dhanbad (Class of 2027). I architect 
              DeFi protocols, multi-chain infrastructure, and Web3 tooling.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-gray-400 leading-relaxed">
              My flagship project <span className="text-cyber-cyan">Rescue.ETH</span> is an autonomous 
              keeper system that prevents DeFi liquidations across 4 blockchain networks. I also built 
              <span className="text-cyber-cyan"> GreenAiDEX</span> (612 community votes at Mantle Global 
              Hackathon 2025) and led the team that created <span className="text-cyber-cyan">ICPad</span>, 
              securing National Rank #2 at WCHL25 among 1150+ teams.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p className="text-gray-400 leading-relaxed">
              Currently mentoring 30+ students on Ethereum development, DeFi protocols, and smart 
              contract security at Cyberlabs blockchain division. I focus on technical depth over 
              project quantity—building production-grade systems with real impact.
            </p>
          </FadeInUp>

          {/* Highlights grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-4 glow-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-cyber-cyan">{item.icon}</div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Education timeline */}
        <FadeInUp delay={0.4} className="lg:col-span-2">
          <div className="glass-card p-6 glow-border">
            <h3 className="text-lg font-semibold text-white mb-6">Education</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative pl-6 border-l-2 border-cyber-cyan/30"
              >
                <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[7px] top-1" />
                <span className="text-cyber-cyan font-mono text-xs">{education.duration}</span>
                <h4 className="font-semibold text-white mt-1">{education.degree} in {education.major}</h4>
                <p className="text-gray-400 text-sm">{education.shortName}</p>
                <p className="text-gray-500 text-xs mt-1">{education.location}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative pl-6 border-l-2 border-yellow-500/30"
              >
                <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-[7px] top-1" />
                <span className="text-yellow-400 font-mono text-xs">January 2025</span>
                <h4 className="font-semibold text-white mt-1">National Rank #2 — WCHL25</h4>
                <p className="text-gray-400 text-sm">Among {stats.teamsCompetedAgainst} teams nationally</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative pl-6 border-l-2 border-cyber-purple/30"
              >
                <div className="absolute w-3 h-3 bg-cyber-purple rounded-full -left-[7px] top-1" />
                <span className="text-cyber-purple font-mono text-xs">January 2026</span>
                <h4 className="font-semibold text-white mt-1">{stats.communityVotes} Community Votes</h4>
                <p className="text-gray-400 text-sm">Mantle Global Hackathon 2025</p>
              </motion.div>
            </div>

            {/* Quick stats */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold gradient-text">{stats.teamsCompetedAgainst}</p>
                  <p className="text-gray-400 text-xs">Teams Competed Against</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text">#{stats.nationalRank}</p>
                  <p className="text-gray-400 text-xs">National Ranking</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center mt-4">
                <div>
                  <p className="text-2xl font-bold gradient-text">{stats.communityVotes}</p>
                  <p className="text-gray-400 text-xs">Community Votes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text">{stats.studentsMentored}</p>
                  <p className="text-gray-400 text-xs">Students Mentored</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default AboutSection;
