import { motion } from "framer-motion";
import Particles from "./Particles";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, stats } from "@/data";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <Particles />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 z-10">
        <div className="max-w-4xl">
          {/* Pre-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-cyber-cyan font-mono text-sm md:text-base mb-6"
          >
            Hi, I'm
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.fullName}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mb-6"
          >
            Blockchain Developer | Smart Contract Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed"
          >
            {personalInfo.shortBio} Currently pursuing B.Tech in Electrical Engineering at IIT (ISM) Dhanbad.
          </motion.p>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="px-3 py-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full text-sm font-medium">
              🏆 National Rank #2 — WCHL25
            </span>
            <span className="px-3 py-1.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 rounded-full text-sm font-medium">
              ❤️ {stats.communityVotes} Votes — Mantle Hackathon
            </span>
            <span className="px-3 py-1.5 bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20 rounded-full text-sm font-medium">
              👥 {stats.studentsMentored} Students Mentored
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/25 transition-shadow"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-4"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-gray-400 hover:text-cyber-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-gray-400 hover:text-cyber-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyber-cyan transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
