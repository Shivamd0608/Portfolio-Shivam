// Project data for portfolio
export type ProjectPriority = "highest" | "high" | "medium";
export type ProjectStatus = "production" | "live" | "completed";
export type ArchitectureComponent = {
  name: string;
  description: string;
  techDetails?: string[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  priority: ProjectPriority;
  timeline: string;
  status: ProjectStatus;
  team?: string;
  
  // Links
  github: string;
  altGithub?: string;
  liveDemo?: string;
  hackathonUrl?: string;
  
  // Summary
  quickSummary: string;
  problemSolved: string;
  
  // Technical Details
  techStack: {
    category: string;
    technologies: string[];
  }[];
  
  // Architecture
  coreComponents: ArchitectureComponent[];
  
  // Features & Impact
  keyFeatures: string[];
  impactMetrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  
  // Security (optional)
  securityFeatures?: string[];
  
  // Achievements
  achievement?: {
    title: string;
    result: string;
    description: string;
  };
  
  // For display
  highlights: string[];
  category: "DeFi" | "Web3" | "Infrastructure" | "Hackathon";
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "rescue-eth",
    title: "Rescue.ETH",
    tagline: "DeFi Liquidation Prevention Protocol",
    priority: "highest",
    timeline: "February 2026",
    status: "production",
    
    github: "https://github.com/PAVANTEJ-05/rescue-defi",
    
    quickSummary: "An autonomous off-chain keeper system that prevents liquidations on Aave V3 lending positions before they happen, operating across 4 major blockchain networks.",
    
    problemSolved: "DeFi borrowers on Aave V3 face 5-10% liquidation penalties when their health factor drops below 1.0. Manual monitoring is unreliable, and existing bots profit from liquidating users rather than protecting them. Rescue.ETH shifts from reactive liquidation to proactive prevention.",
    
    techStack: [
      {
        category: "Smart Contracts",
        technologies: ["Solidity", "OpenZeppelin (minimal)", "No proxy pattern"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "TypeScript"]
      },
      {
        category: "Blockchain Libraries",
        technologies: ["Ethers.js v6", "Viem v2"]
      },
      {
        category: "Integrations",
        technologies: ["Aave V3 SDK", "Li.Fi SDK", "ENS (via Viem)"]
      },
      {
        category: "Testing",
        technologies: ["Tenderly Virtual TestNets"]
      },
      {
        category: "Networks",
        technologies: ["Ethereum", "Optimism", "Arbitrum", "Base"]
      }
    ],
    
    coreComponents: [
      {
        name: "Off-Chain Keeper (Node.js/TypeScript)",
        description: "Polls Aave V3's getUserAccountData() every 30 seconds across 4 chains simultaneously",
        techDetails: [
          "Sub-30 second response time from health factor drop to rescue execution",
          "Structured error parsing and lifecycle logging",
          "Per-user isolation - never crashes on single-user failures"
        ]
      },
      {
        name: "RescueExecutor.sol Smart Contract",
        description: "Immutable pattern smart contract with atomic execution flow",
        techDetails: [
          "Pull tokens → approve Li.Fi router → forward calldata → cleanup approval → verify zero balance",
          "Per-user cooldown enforcement (on-chain)",
          "ReentrancyGuard protection",
          "Zero-residual-balance invariant",
          "Only 156 lines of Solidity",
          "Deployed on Sepolia, Optimism, Arbitrum, Base (same address via CREATE2)"
        ]
      },
      {
        name: "ENS Configuration Layer",
        description: "Stores rescue policies in ENS text records on Ethereum mainnet",
        techDetails: [
          "rescue.enabled (true/false - explicit opt-in)",
          "rescue.minHF (trigger threshold, default 1.2)",
          "rescue.targetHF (target after rescue, default 1.5)",
          "rescue.maxAmount (max USD per rescue)",
          "rescue.cooldown (seconds between rescues)",
          "rescue.allowedTokens (stablecoin whitelist)",
          "Real-time updates without contract redeployment"
        ]
      },
      {
        name: "Li.Fi Integration",
        description: "Uses contractCallsQuote API for atomic bridge-and-deposit operations",
        techDetails: [
          "Atomic bridge → Aave supply in single logical operation",
          "Quote target validation against trusted contracts allowlist",
          "Fallback mechanism: if destination call fails, tokens go to keeper wallet"
        ]
      }
    ],
    
    keyFeatures: [
      "Proactive (not reactive) - fires before liquidation",
      "User-funded (not protocol funds)",
      "Atomic execution (all-or-nothing, no partial states)",
      "Zero contract balance (funds never stuck)",
      "ENS-based config (no contract interaction needed)",
      "Cross-chain rescue (can pull from any chain to any chain)"
    ],
    
    impactMetrics: [
      { label: "Prevention Rate", value: "100%", description: "Stops liquidations before trigger at HF 1.2" },
      { label: "Penalty Savings", value: "5-10%", description: "Users avoid liquidation penalties" },
      { label: "Response Time", value: "<30s", description: "From HF drop to rescue transaction" },
      { label: "Safety Buffer", value: "20%", description: "Margin between 1.2 and 1.0 HF" },
      { label: "Multi-Chain", value: "4 networks", description: "Ethereum, Optimism, Arbitrum, Base" }
    ],
    
    securityFeatures: [
      "Zero-residual-balance invariant",
      "ReentrancyGuard on all state-changing functions",
      "Immutable keeper address (set at deployment)",
      "Per-user cooldown (prevents drain attacks)",
      "Approval reset pattern (0 → amount → 0)",
      "Quote target validation (allowlist of trusted contracts)",
      "Atomic revert (any failure = full transaction revert)"
    ],
    
    highlights: [
      "Prevents 5-10% liquidation losses",
      "Sub-30 second response time",
      "Multi-chain operation (4 networks)",
      "ENS-based configuration",
      "Atomic execution with Li.Fi"
    ],
    
    category: "DeFi",
    featured: true
  },
  
  {
    id: "greenaidex",
    title: "GreenAiDEX",
    tagline: "On-Chain Green Credits Marketplace",
    priority: "high",
    timeline: "January 2026",
    status: "live",
    team: "3-member collaborative team",
    
    github: "https://github.com/Shivamd0608/GreenXAi",
    altGithub: "https://github.com/PAVANTEJ-05/GreenXchange",
    liveDemo: "https://green-xchange-five.vercel.app/",
    hackathonUrl: "https://www.hackquest.io/projects/Mantle-Global-Hackathon-2025-GreenAiDEX",
    
    quickSummary: "A decentralized exchange for tokenized environmental assets (carbon credits, renewable energy credits) with an on-chain orderbook and custom stablecoin, enabling transparent trading of verified sustainability credits.",
    
    problemSolved: "Traditional green credit markets lack transparency, have high intermediary costs, and slow settlement times. GreenAiDEX brings environmental assets on-chain with full transparency and atomic settlement.",
    
    achievement: {
      title: "612 Community Votes",
      result: "612 Votes",
      description: "Mantle Global Hackathon 2025 - Strong product-market fit validation"
    },
    
    techStack: [
      {
        category: "Smart Contracts",
        technologies: ["Solidity 0.8.20", "OpenZeppelin", "UUPS Proxy", "AccessControl", "ReentrancyGuard", "Pausable"]
      },
      {
        category: "Frontend",
        technologies: ["Next.js 14", "React 18", "TailwindCSS", "Ethers.js 5.8.0"]
      },
      {
        category: "Blockchain",
        technologies: ["Mantle L2"]
      },
      {
        category: "Token Standards",
        technologies: ["ERC-1155 (credits)", "ERC-20 (MockUSDC)"]
      },
      {
        category: "Deployment",
        technologies: ["Vercel (frontend)", "Mantle blockchain (contracts)"]
      }
    ],
    
    coreComponents: [
      {
        name: "GreenCreditToken (ERC-1155)",
        description: "Multi-token standard for multiple credit types with complete lifecycle management",
        techDetails: [
          "Credit types: Green, Carbon, Water, Renewable Energy",
          "Lifecycle: Registration → Approval → Minting → Trading → Retirement",
          "State machine: PENDING → APPROVED → ACTIVE → FROZEN/REVOKED",
          "Tracks totalSupply and totalRetired per tokenId",
          "Metadata via baseURI (IPFS or metadata server)"
        ]
      },
      {
        name: "GreenXchangeOrderbook (UUPS Upgradeable)",
        description: "On-chain orderbook with RBAC and dual escrow mechanism",
        techDetails: [
          "UUPS Proxy Pattern (upgrade logic in implementation)",
          "Role-Based Access Control (ADMIN, MANAGER, UPGRADER)",
          "Dual escrow: Buy orders lock MockUSDC, Sell orders lock ERC-1155",
          "Partial fills supported with atomic settlement",
          "Basis-point precision fees (0.01% granularity)"
        ]
      },
      {
        name: "MockUSDC (Custom Stablecoin)",
        description: "Custom ERC-20 stablecoin deployed specifically for this project",
        techDetails: [
          "NOT PYUSD - deployed specifically on Mantle",
          "ERC-20 compliant with 6 decimals",
          "Public faucet available for test tokens"
        ]
      }
    ],
    
    keyFeatures: [
      "UUPS upgradeability (zero-downtime upgrades)",
      "On-chain orderbook (full transparency)",
      "Dual escrow (eliminates counterparty risk)",
      "Basis-point fee precision",
      "Carbon offset retirement tracking",
      "Multi-credit type support (4 categories)",
      "Atomic settlement"
    ],
    
    impactMetrics: [
      { label: "Community Votes", value: "612", description: "Mantle Global Hackathon 2025" },
      { label: "Status", value: "Live", description: "Deployed on Mantle blockchain" },
      { label: "Credit Types", value: "4", description: "Green, Carbon, Water, Renewable" },
      { label: "Settlement", value: "Atomic", description: "Single transaction settlement" }
    ],
    
    highlights: [
      "612 community votes at Mantle Hackathon",
      "Live on Mantle L2 blockchain",
      "UUPS upgradeable architecture",
      "ERC-1155 multi-token support",
      "On-chain orderbook with dual escrow"
    ],
    
    category: "Hackathon",
    featured: true
  },
  
  {
    id: "icpad",
    title: "ICPad",
    tagline: "Multi-Canister Development Platform",
    priority: "high",
    timeline: "December 2024",
    status: "completed",
    team: "4-member team (Team Lead)",
    
    github: "https://github.com/SKant03/ICPad",
    altGithub: "https://github.com/SKant03/ICP-docker-controller-and-docker-image",
    
    quickSummary: "A comprehensive web-based IDE for Internet Computer blockchain, featuring multi-canister architecture, real-time compilation, and template marketplace - essentially 'VS Code for ICP blockchain'.",
    
    problemSolved: "Developing on Internet Computer requires complex local setup, dfx CLI knowledge, and canister management. ICPad provides a browser-based development environment with one-click deployment.",
    
    achievement: {
      title: "National Rank #2",
      result: "#2 / 1150+ teams",
      description: "WCHL25 National Blockchain Hackathon out of 1150+ teams"
    },
    
    techStack: [
      {
        category: "Backend",
        technologies: ["Rust", "IC CDK 0.13.x", "ic-stable-memory", "stable-structures"]
      },
      {
        category: "Frontend",
        technologies: ["React 18", "Vite", "Monaco Editor", "Xterm.js", "React Router v6"]
      },
      {
        category: "ICP SDK",
        technologies: ["@dfinity/agent", "@dfinity/auth-client", "@dfinity/candid"]
      },
      {
        category: "External",
        technologies: ["Docker (code execution)", "dfx 0.15.x"]
      },
      {
        category: "Languages Supported",
        technologies: ["Motoko", "Rust"]
      }
    ],
    
    coreComponents: [
      {
        name: "ICPad_backend (Core Logic)",
        description: "Rust canister with Distributed File System implementation",
        techDetails: [
          "Code storage and retrieval with compression",
          "Compilation orchestration",
          "Stable memory (8GB capacity per canister)",
          "Orthogonal persistence (automatic across upgrades)"
        ]
      },
      {
        name: "ICPad_user (User Management)",
        description: "Rust canister handling Internet Identity integration",
        techDetails: [
          "Principal-based authentication",
          "Project ownership tracking",
          "WebAuthn-based (no passwords)"
        ]
      },
      {
        name: "ICPad_marketplace (Template Sharing)",
        description: "Store and deploy reusable Motoko/Rust templates",
        techDetails: [
          "Search and filter functionality",
          "Download tracking",
          "One-click deployment workflow"
        ]
      },
      {
        name: "ICPad_frontend (React UI)",
        description: "React-based IDE with Monaco Editor and Xterm.js",
        techDetails: [
          "File explorer with 2-level deep directory traversal",
          "Real-time integrated terminal",
          "Multi-language syntax highlighting"
        ]
      },
      {
        name: "Docker-Based Compilation",
        description: "External Docker controller for isolated compilation",
        techDetails: [
          "Isolated container per compilation session",
          "Motoko: 2-5 seconds compile time",
          "Rust: 10-30 seconds compile time",
          "Real-time output streaming via WebSocket"
        ]
      }
    ],
    
    keyFeatures: [
      "Web-based IDE with Monaco Editor",
      "5-canister microservices architecture",
      "Internet Identity integration",
      "Multi-network deployment (local, testnet, mainnet)",
      "Real-time Docker-based compilation",
      "Template marketplace",
      "8GB stable memory per canister"
    ],
    
    impactMetrics: [
      { label: "National Rank", value: "#2", description: "WCHL25 Hackathon" },
      { label: "Competition Scale", value: "1150+", description: "Teams competed against" },
      { label: "Canisters", value: "5", description: "Microservices architecture" },
      { label: "Storage", value: "8GB", description: "Per canister stable memory" },
      { label: "Motoko Compile", value: "2-5s", description: "Compilation time" }
    ],
    
    highlights: [
      "National Rank #2 out of 1150+ teams",
      "5-canister microservices architecture",
      "Internet Identity authentication",
      "Real-time compilation",
      "Template marketplace"
    ],
    
    category: "Infrastructure",
    featured: true
  }
];

// Legacy/Other projects (minimal reference)
export type LegacyProject = {
  id: string;
  title: string;
  description: string;
  github?: string;
  techStack: string[];
};

export const legacyProjects: LegacyProject[] = [
  {
    id: "staking-dapp",
    title: "Staking DApp",
    description: "Multi-pool Ethereum staking with configurable APY and lock-in durations",
    github: "https://github.com/Shivamd0608/StakingDapp",
    techStack: ["Solidity", "React", "Ethers.js", "ERC-20"]
  },
  {
    id: "greenxchange",
    title: "GreenXchange (Foundational)",
    description: "Orderbook prototype that evolved into GreenAiDEX - R&D phase validating UUPS proxy and ERC-1155 escrow",
    github: "https://github.com/PAVANTEJ-05/GreenXchange",
    techStack: ["Solidity", "React", "OpenZeppelin"]
  }
];
