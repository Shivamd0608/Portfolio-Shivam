// Personal information and experience data
export const personalInfo = {
  fullName: "Shivam A Dubey",
  alternateName: "Shivam Arvind Dubey",
  email: "dubeyshivam.2020@gmail.com",
  phone: "+91-8355941778",
  location: "Dhanbad, Jharkhand, India",
  linkedin: "https://www.linkedin.com/in/shivam-arvind-dubey/",
  github: "https://github.com/Shivamd0608",
  altGithub: "https://github.com/PAVANTEJ-05",
  tagline: "Blockchain Developer | Smart Contract Engineer | IIT (ISM) Dhanbad",
  shortBio: "Building the decentralized future, one smart contract at a time. Specializing in DeFi protocols, multi-chain infrastructure, and Web3 tooling."
};

export const education = {
  institution: "Indian Institute of Technology (Indian School of Mines) Dhanbad",
  shortName: "IIT (ISM) Dhanbad",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Electrical Engineering",
  duration: "May 2023 - May 2027",
  location: "Dhanbad, Jharkhand, India",
  expectedGraduation: "May 2027"
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: "work" | "mentorship" | "community";
  description: string[];
  skills: string[];
  outcome?: string;
};

export const experiences: Experience[] = [
  {
    id: "blockseblock",
    title: "Blockchain Developer Intern",
    organization: "BlockseBlock",
    location: "Remote",
    period: "July 2024 - August 2024",
    type: "work",
    description: [
      "Acquired proficiency in Rust programming language from scratch for ICP development",
      "Learned Internet Computer Protocol fundamentals: canisters, cycles-based gas model, Chain Key Cryptography",
      "Built 3 production canisters implementing stable memory patterns and async inter-canister communication",
      "Mastered Candid interface definitions and canister deployment workflows using dfx"
    ],
    skills: ["Rust", "Internet Computer", "IC CDK", "Candid", "dfx"],
    outcome: "Internship project evolved into ICPad, which secured National Rank #2 at WCHL25"
  },
  {
    id: "cyberlabs",
    title: "Technical Mentor - Blockchain Division",
    organization: "Cyberlabs, IIT (ISM) Dhanbad",
    period: "September 2024 - Present",
    type: "mentorship",
    description: [
      "Mentored 30+ students in Solidity smart contract development and DeFi protocols",
      "Taught Uniswap, Aave, Compound protocol architectures and integration patterns",
      "Reviewed 15+ smart contract projects for security vulnerabilities and gas optimization",
      "Led workshops on security auditing, oracle manipulation prevention, and Web3 frontend development"
    ],
    skills: ["Solidity", "DeFi", "Ethereum", "Security Auditing", "Ethers.js", "React"]
  },
  {
    id: "roboism",
    title: "CAD Design Mentor",
    organization: "RoboISM, IIT (ISM) Dhanbad",
    period: "September 2024 - Present",
    type: "community",
    description: [
      "Mentored students in CAD design for robotics applications",
      "Organized 5+ robotics competitions including RoboWars",
      "Guided mechanical design and system integration for competition robots"
    ],
    skills: ["CAD Design", "Robotics", "Event Organization", "Mentorship"]
  },
  {
    id: "micdrop",
    title: "Event Host",
    organization: "Mic.Drop Public Speaking Club",
    period: "September 2024 - Present",
    type: "community",
    description: [
      "Hosted 4+ public speaking events with 50+ participants per event",
      "Developed leadership and communication skills",
      "Coordinated event logistics and participant engagement"
    ],
    skills: ["Public Speaking", "Event Hosting", "Leadership", "Communication"]
  }
];

export type Achievement = {
  id: string;
  title: string;
  event: string;
  date: string;
  result: string;
  description: string;
  projectLink?: string;
  competitionLink?: string;
  icon: "trophy" | "vote" | "medal" | "code";
};

export const achievements: Achievement[] = [
  {
    id: "mantle-hackathon",
    title: "Mantle Global Hackathon 2025",
    event: "Mantle Global Hackathon 2025",
    date: "January 2026",
    result: "612 Community Votes",
    description: "Secured 612 community votes for GreenAiDEX, demonstrating strong product-market fit and technical innovation in decentralized green credits marketplace.",
    projectLink: "https://www.hackquest.io/projects/Mantle-Global-Hackathon-2025-GreenAiDEX",
    competitionLink: "https://www.hackquest.io/hackathons/Mantle-Global-Hackathon-2025",
    icon: "vote"
  },
  {
    id: "wchl25",
    title: "WCHL25 National Blockchain Hackathon",
    event: "WCHL25 National Blockchain Competition",
    date: "January 2025",
    result: "National Rank #2 / 1150+ teams",
    description: "Secured National Rank #2 out of 1150+ teams by delivering ICPad, a blockchain IDE with multi-canister architecture evaluated by industry professionals.",
    projectLink: "https://github.com/SKant03/ICPad",
    icon: "trophy"
  },
  {
    id: "accenture",
    title: "Accenture Strategy Connect S4",
    event: "Accenture Strategy Connect S4 Competition",
    date: "2024",
    result: "Finalist / 9000+ teams",
    description: "Qualified as finalist in Accenture Strategy Connect S4, competing among 9000+ teams nationwide.",
    icon: "medal"
  }
];

// Skills organized by categories with proficiency levels
export type SkillLevel = "expert" | "advanced" | "intermediate" | "learning";

export type Skill = {
  name: string;
  level: SkillLevel;
  usedIn?: string[]; // Project IDs where this skill was used
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "blockchain",
    title: "Blockchain & Smart Contracts",
    icon: "⛓️",
    description: "Core blockchain development expertise",
    skills: [
      { name: "Solidity", level: "expert", usedIn: ["rescue-eth", "greenaidex"] },
      { name: "Ethereum", level: "expert", usedIn: ["rescue-eth", "greenaidex"] },
      { name: "DeFi Protocols", level: "expert", usedIn: ["rescue-eth"] },
      { name: "ERC-20/721/1155", level: "expert", usedIn: ["greenaidex"] },
      { name: "Aave V3 Integration", level: "advanced", usedIn: ["rescue-eth"] },
      { name: "UUPS Proxy Pattern", level: "advanced", usedIn: ["greenaidex"] },
      { name: "Multi-Chain Development", level: "advanced", usedIn: ["rescue-eth"] }
    ]
  },
  {
    id: "web3",
    title: "Web3 Technologies",
    icon: "🔗",
    description: "Libraries and tools for dApp development",
    skills: [
      { name: "Ethers.js v6", level: "expert", usedIn: ["rescue-eth", "greenaidex"] },
      { name: "Viem", level: "advanced", usedIn: ["rescue-eth"] },
      { name: "Wagmi", level: "advanced" },
      { name: "OpenZeppelin", level: "expert", usedIn: ["greenaidex"] },
      { name: "Li.Fi SDK", level: "advanced", usedIn: ["rescue-eth"] },
      { name: "ENS Integration", level: "advanced", usedIn: ["rescue-eth"] },
      { name: "Foundry", level: "advanced" },
      { name: "Hardhat", level: "advanced" }
    ]
  },
  {
    id: "icp",
    title: "Internet Computer",
    icon: "🌐",
    description: "ICP blockchain development",
    skills: [
      { name: "Rust (IC CDK)", level: "advanced", usedIn: ["icpad"] },
      { name: "Motoko", level: "intermediate", usedIn: ["icpad"] },
      { name: "Candid (IDL)", level: "advanced", usedIn: ["icpad"] },
      { name: "Internet Identity", level: "advanced", usedIn: ["icpad"] },
      { name: "Stable Memory", level: "advanced", usedIn: ["icpad"] },
      { name: "dfx CLI", level: "advanced", usedIn: ["icpad"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "🎨",
    description: "Modern web application development",
    skills: [
      { name: "React 18", level: "expert", usedIn: ["greenaidex", "icpad"] },
      { name: "Next.js 14", level: "expert", usedIn: ["greenaidex"] },
      { name: "TypeScript", level: "expert", usedIn: ["rescue-eth", "greenaidex", "icpad"] },
      { name: "TailwindCSS", level: "expert", usedIn: ["greenaidex"] },
      { name: "Vite", level: "advanced", usedIn: ["icpad"] },
      { name: "Framer Motion", level: "advanced" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Infrastructure",
    icon: "⚙️",
    description: "Server-side development and tooling",
    skills: [
      { name: "Node.js", level: "expert", usedIn: ["rescue-eth"] },
      { name: "Docker", level: "advanced", usedIn: ["icpad"] },
      { name: "REST APIs", level: "advanced" },
      { name: "WebSocket", level: "advanced", usedIn: ["icpad"] },
      { name: "MongoDB", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" }
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "💻",
    description: "Core programming languages",
    skills: [
      { name: "JavaScript", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Solidity", level: "expert" },
      { name: "Rust", level: "advanced" },
      { name: "C/C++", level: "intermediate" },
      { name: "Python", level: "intermediate" }
    ]
  }
];

// Stats for display
export const stats = {
  teamsCompetedAgainst: "1150+",
  nationalRank: "2nd",
  communityVotes: "612",
  studentsMentored: "30+",
  projectsReviewed: "15+",
  networksSupported: "4"
};
