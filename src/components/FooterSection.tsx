import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <Github size={20} />,
      href: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6">
        {/* Back to Top */}
        <div className="flex justify-center mb-12">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 glass-card glow-border text-gray-400 hover:text-cyber-cyan transition-colors group"
          >
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card glow-border text-gray-400 hover:text-cyber-cyan transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Built With */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-4"
        >
          Built with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block"
          >
            <Heart size={14} className="inline text-red-500 fill-red-500" />
          </motion.span>{" "}
          using{" "}
          <span className="text-gray-400">React</span>,{" "}
          <span className="text-gray-400">TypeScript</span> &{" "}
          <span className="text-gray-400">Framer Motion</span>
        </motion.p>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 text-xs"
        >
          © {currentYear} {personalInfo.alternateName}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
