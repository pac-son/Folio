export type ProjectCategory = "Full-Stack" | "SaaS" | "Fintech" | "Blockchain" | "Mobile" | "Client Work";

export type Project = {
  title: string;
  slug: string;
  description: string;
  problem: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  github?: string;
  backendGithub?: string;
  demo?: string;
  status: string;
  featured: boolean;
  year: string;
  features?: string[];
  technicalDetails?: string[];
  platform?: string;
  services?: string[];
};

export const projects: Project[] = [
  {
    title: "Bank Statement Extractor & Credit Scoring API",
    slug: "bank-statement-credit-scoring-api",
    category: "Fintech",
    year: "2025",
    status: "In development",
    featured: true,
    github: "https://github.com/pac-son/bank_statement_api",
    description: "A fintech API for extracting, processing, and analysing bank statements for credit assessment and financial applications.",
    problem: "Bank statements arrive in varied formats, making financial review slow and difficult to standardise across Nigerian and African banking systems.",
    technologies: ["Python 3.11", "FastAPI", "PostgreSQL", "SQLAlchemy", "pdfplumber", "pytesseract", "OpenCV", "Pillow", "Celery", "Redis", "Docker", "Render"],
    features: [
      "10+ bank parsers including GTBank, Access Bank, UBA, OPay, Kuda, PalmPay, and Moniepoint",
      "Ghana and Kenya bank statement formats",
      "Automated PDF extraction and computer-vision OCR processing",
      "Loan-stacking detection and transaction fraud indicators",
      "Narrative summaries and multi-account consolidation",
      "Developer API keys, webhook notifications, and automated billing workflows",
    ],
    technicalDetails: [
      "Parser coverage is engineered around specific banking statement schemas and fallback heuristics.",
      "Asynchronous background processing handled with Celery and Redis to prevent blocking HTTP endpoints during heavy OCR compute.",
    ],
  },
  {
    title: "Forza — Credential Verification",
    slug: "forza",
    category: "Blockchain",
    year: "2025",
    status: "Built & deployed",
    featured: true,
    github: "https://github.com/pac-son/forza-web",
    backendGithub: "https://github.com/pac-son/forza-core",
    description: "A certificate verification system for issuing tamper-resistant academic credentials and enabling third-party verification.",
    problem: "Academic certificates need an instant, fraud-proof verification mechanism that eliminates fragile paper trails and delays.",
    technologies: ["Solidity", "Hardhat", "Ethereum", "Next.js", "React", "TypeScript", "Web3.js", "IPFS"],
    features: [
      "Cryptographic certificate issuance anchored to smart contracts",
      "Decentralized metadata storage via IPFS",
      "Tamper-resistant third-party instant verification workflow",
      "Institutional issuer signing and verification audit trail",
    ],
    technicalDetails: [
      "Smart contracts, tests, and deployment scripts engineered in Hardhat (`forza-core`).",
      "Interactive decentralized verification interface built with Next.js and Web3.js (`forza-web`).",
    ],
  },
  {
    title: "Decentralized Escrow Platform",
    slug: "decentralized-escrow",
    category: "Blockchain",
    year: "2025",
    status: "Built & deployed",
    featured: true,
    github: "https://github.com/pac-son/decentralized-escrow",
    demo: "https://pac-escrow.vercel.app",
    description: "A trustless smart contract escrow application facilitating secure peer-to-peer milestone payments.",
    problem: "Online agreements and peer-to-peer transactions often carry high counterparty risk and exorbitant fees from centralized intermediaries.",
    technologies: ["Solidity", "Ethereum", "Next.js", "TypeScript", "Web3.js", "Tailwind CSS"],
    features: [
      "Automated escrow smart contract locking funds until buyer-seller milestones are validated",
      "Multi-party release authorization and arbitration safeguards",
      "Real-time on-chain balance verification and transaction logs",
      "Web3 wallet integration with instant transaction status alerts",
    ],
  },
  {
    title: "Property Marketplace",
    slug: "property-marketplace",
    category: "Full-Stack",
    year: "2025",
    status: "Built & deployed",
    featured: true,
    github: "https://github.com/pac-son/property-marketplace",
    description: "A real estate marketplace for browsing, buying, and renting properties.",
    problem: "Property seekers need an intuitive, responsive platform to search verified listings with transparent pricing and direct landlord inquiries.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Neon PostgreSQL", "Tailwind CSS"],
    features: [
      "Property listings with dynamic media galleries",
      "Search and multi-parameter filtering (price, location, type)",
      "Location-aware browsing and neighborhood insights",
      "Comprehensive property details and landlord dashboards",
      "User inquiries and scheduled viewing requests",
    ],
  },
  {
    title: "SaaS Savings Platform",
    slug: "saas-savings-platform",
    category: "SaaS",
    year: "2025",
    status: "Built",
    featured: true,
    github: "https://github.com/pac-son/my-saas-platform",
    description: "A Shopify-focused savings and layaway platform for merchants who want to offer flexible payment-plan functionality.",
    problem: "Merchants need an automated way to support customers who prefer structured savings and installment-based purchases without credit checks.",
    technologies: ["Next.js", "TypeScript", "Clerk", "Stripe", "Drizzle ORM"],
    features: [
      "Merchant-focused savings and layaway workflows",
      "Automated recurring installment billing via Stripe",
      "Customer authentication and merchant dashboards with Clerk",
      "Real-time order progress tracking and webhook synchronization",
    ],
  },
  {
    title: "Campus Lost & Found",
    slug: "campus-lost-and-found",
    category: "Full-Stack",
    year: "2025",
    status: "Built & deployed",
    featured: false,
    github: "https://github.com/pac-son/campus-lost-and-found",
    description: "A centralized platform for university students to report, discover, and recover lost items around campus.",
    problem: "Lost items are rarely returned when reports are scattered across fragmented social media groups and message boards.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Categorized lost and found report submission with photo uploads",
      "Keyword and location-based discovery feed",
      "Claim verification and owner contact workflow",
    ],
  },
  {
    title: "Crypto Wallet",
    slug: "crypto-wallet",
    category: "Blockchain",
    year: "2025",
    status: "Built",
    featured: false,
    github: "https://github.com/pac-son",
    description: "A desktop cryptocurrency wallet exploring multi-chain functionality and secure transaction workflows.",
    problem: "Wallet interactions can be complex and intimidating; this project explores an intuitive desktop interface for practical transaction flows.",
    technologies: ["Electron", "React", "TypeScript", "BitcoinJS"],
    features: [
      "Cross-platform desktop application built with Electron",
      "Multi-chain wallet architecture and address generation",
      "Raw transaction assembly, signing, and broadcasting workflows",
    ],
  },
  {
    title: "Parcel Delivery Mobile App",
    slug: "parcel-delivery",
    category: "Mobile",
    year: "2025",
    status: "Built",
    featured: false,
    github: "https://github.com/pac-son/parcelgo",
    description: "A mobile delivery platform connecting senders, dispatch agents, and receivers.",
    problem: "Last-mile courier logistics suffer from poor real-time coordination between senders, drivers, and recipients.",
    technologies: ["React Native", "Expo", "TypeScript"],
    features: [
      "End-to-end parcel creation and dispatch request workflow",
      "Live order and status milestone tracking",
      "Direct driver-sender communication",
      "Integrated payments, KYC verification, and location-based matching",
    ],
  },
  {
    title: "AI Content Generator",
    slug: "ai-content-generator",
    category: "SaaS",
    year: "2025",
    status: "Built",
    featured: false,
    github: "https://github.com/pac-son/kinetic-performance",
    description: "An AI-powered content generation dashboard tailored for fitness, wellness, and lifestyle brands.",
    problem: "Content marketers and coaches need consistent, high-converting social and blog content tailored to specific fitness niches.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"],
    features: [
      "Specialized prompts for workout plans, nutritional tips, and captions",
      "Dynamic tone-of-voice and brand persona configuration",
      "Saved content library and export capabilities",
    ],
  },
  {
    title: "Task Management Application",
    slug: "task-manager",
    category: "Full-Stack",
    year: "2025",
    status: "Built",
    featured: false,
    github: "https://github.com/pac-son/task-manager",
    description: "A full-stack task management application with real-time status updates and RESTful API endpoints.",
    problem: "A focused full-stack project demonstrating end-to-end CRUD operations, data validation, and clean state synchronization.",
    technologies: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
    features: [
      "Full CRUD operations with optimistic UI updates",
      "REST API endpoints with structured request validation",
      "Categorized boards, priority flags, and completion statistics",
    ],
  },
  {
    title: "Weather Mobile App",
    slug: "weather-app",
    category: "Mobile",
    year: "2025",
    status: "Built",
    featured: false,
    github: "https://github.com/pac-son",
    description: "A clean mobile weather application delivering multi-day forecasts and location-based meteorological metrics.",
    problem: "A mobile project demonstrating external API consumption, data normalization, caching, and responsive UI rendering.",
    technologies: ["React Native", "Expo", "TypeScript", "REST API"],
    features: [
      "Live weather reporting and 7-day predictive forecast",
      "Geocoding and global city search",
      "Animated weather icons and ambient status indicators",
    ],
  },
];

export const clientProjects: Project[] = [
  {
    title: "The Curated Estate",
    slug: "the-curated-estate",
    category: "Client Work",
    year: "2026",
    status: "Built & deployed",
    featured: true,
    platform: "Next.js / TypeScript",
    github: "https://github.com/pac-son/The-Curated-Estate",
    demo: "https://the-curated-estate.vercel.app",
    description: "A modern letting agency and property showcasing web application.",
    problem: "A boutique letting agency needed a clean, elegant web presence to highlight premier listings and capture qualified client leads.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    services: ["Web Development", "UI/UX Design", "Lead Capture Integration"],
  },
];

export const allProjects = [...projects, ...clientProjects];
export const getProject = (slug: string) => allProjects.find((project) => project.slug === slug);
