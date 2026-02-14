import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FadeInUp } from "./motion";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { personalInfo } from "@/data";

type FormState = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setFormState("loading");

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // e.g., "service_xxxxxx"
        "YOUR_TEMPLATE_ID", // e.g., "template_xxxxxx"
        formRef.current!,
        "YOUR_PUBLIC_KEY" // e.g., "xxxxxxxxxxxxx"
      );

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
      
      setTimeout(() => setFormState("idle"), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormState("error");
      toast.error("Failed to send message. Please try again.");
      
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/-/g, "")}`,
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "Shivamd0608",
      href: personalInfo.github,
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "shivam-arvind-dubey",
      href: personalInfo.linkedin,
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Dhanbad, Jharkhand, India",
      href: "https://maps.google.com/?q=IIT+ISM+Dhanbad",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <FadeInUp>
        <p className="text-cyber-cyan font-mono text-sm mb-2">06. Get In Touch</p>
        <h2 className="section-title">Let's Build Something Decentralized</h2>
        <p className="section-subtitle">
          Have a blockchain project in mind? I'm always open to discussing 
          Web3 opportunities and innovative ideas.
        </p>
      </FadeInUp>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Contact Info */}
        <FadeInUp delay={0.1}>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're looking for a blockchain developer to build your next dApp, 
              need smart contract consultation, or want to discuss Web3 architecture—
              I'd love to connect. Currently open to internships, freelance projects, 
              and collaboration opportunities.
            </p>

            <div className="space-y-4 pt-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass-card glow-border group"
                >
                  <div className="p-3 rounded-lg bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan/20 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <p className="text-white group-hover:text-cyber-cyan transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Contact Form */}
        <FadeInUp delay={0.2}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 glow-border"
          >
            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-colors"
                  placeholder="John Doe"
                  disabled={formState === "loading"}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-colors"
                  placeholder="john@example.com"
                  disabled={formState === "loading"}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  disabled={formState === "loading"}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formState === "loading" || formState === "success"}
                whileHover={{ scale: formState === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: formState === "idle" ? 0.98 : 1 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  formState === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : formState === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/30"
                    : "bg-gradient-to-r from-cyber-cyan to-cyber-blue text-dark-950 hover:shadow-lg hover:shadow-cyber-cyan/25"
                }`}
              >
                {formState === "loading" && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {formState === "success" && (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                )}
                {formState === "error" && (
                  <>
                    <AlertCircle size={18} />
                    Failed to Send
                  </>
                )}
                {formState === "idle" && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </FadeInUp>
      </div>
    </section>
  );
};

export default ContactSection;
