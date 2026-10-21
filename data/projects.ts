export type ProjectCategory = "Full-Stack" | "SaaS" | "Fintech" | "Blockchain" | "Mobile" | "Client Work";
export type Project = {
  title: string; slug: string; description: string; problem: string; category: ProjectCategory;
  technologies: string[]; image?: string; github?: string; demo?: string; status: string; featured: boolean; year: string;
  features?: string[]; technicalDetails?: string[]; platform?: string; services?: string[];
};

// Add, edit, and publish projects here. Leave a link/image undefined until it is ready to share.
export const projects: Project[] = [
  { title:"Bank Statement Extractor & Credit Scoring API", slug:"bank-statement-credit-scoring-api", category:"Fintech", year:"2025", status:"In development", featured:true,
    description:"A fintech API for extracting, processing, and analysing bank statements for credit assessment and financial applications.",
    problem:"Bank statements arrive in varied formats, making financial review slow and difficult to standardise.",
    technologies:["Python 3.11","FastAPI","PostgreSQL","SQLAlchemy","pdfplumber","pytesseract","OpenCV","Pillow","Celery","Redis","Docker","Render"],
    features:["10+ bank parsers including GTBank, Access Bank, UBA, OPay, Kuda, PalmPay and Moniepoint","Ghana and Kenya bank formats","PDF extraction and OCR processing","Loan-stacking and fraud detection","Narrative summaries and multi-account consolidation","Developer API, webhooks, and billing system"],
    technicalDetails:["Parser coverage is designed around multiple bank statement formats.","Background processing uses Celery and Redis where work should not block an API request."] },
  { title:"Property Marketplace", slug:"property-marketplace", category:"Full-Stack", year:"2025", status:"Built & deployed", featured:true,
    description:"A real estate marketplace for buying and renting properties.", problem:"Property seekers need a practical way to browse relevant listings and get the details that matter.", technologies:["Next.js","TypeScript","Prisma","Neon PostgreSQL"], features:["Property listings","Search and filtering","Location-aware browsing","Property details","Property management"] },
  { title:"SaaS Savings Platform", slug:"saas-savings-platform", category:"SaaS", year:"2025", status:"Built", featured:true,
    description:"A Shopify-focused savings and layaway platform for merchants who want to offer payment-plan functionality.", problem:"Merchants need a way to support customers who prefer structured savings or payment plans.", technologies:["Next.js","TypeScript","Clerk","Stripe","Drizzle"], features:["Merchant-focused savings workflows","Layaway and payment-plan functionality","Authentication and payments"] },
  { title:"Forza", slug:"forza", category:"Blockchain", year:"2025", status:"Built", featured:true,
    description:"A certificate verification system for issuing tamper-resistant academic credentials and enabling third-party verification.", problem:"Academic certificates need an easier way to be checked without relying on fragile paper trails.", technologies:["React","Next.js","Solidity","Ethereum","Web3.js","IPFS"], features:["Certificate issuance","Tamper-resistant verification","Third-party verification workflow"] },
  { title:"Crypto Wallet", slug:"crypto-wallet", category:"Blockchain", year:"2025", status:"Built", featured:false, description:"A desktop cryptocurrency wallet exploring multi-chain functionality and transaction workflows.", problem:"Wallet interactions can be opaque; this project explores a desktop interface for practical transaction flows.", technologies:["Electron","React","TypeScript","BitcoinJS"], features:["Desktop application","Multi-chain wallet exploration","Transaction workflows"] },
  { title:"Parcel Delivery", slug:"parcel-delivery", category:"Mobile", year:"2025", status:"Built", featured:false, description:"A mobile delivery platform connecting senders, delivery agents, and receivers.", problem:"Sending a parcel involves coordination between people at different stages of a delivery.", technologies:["React Native","Expo","TypeScript"], features:["Parcel creation","Delivery tracking","Communication","Payments","KYC","Location-based delivery"] },
  { title:"Campus Lost & Found", slug:"campus-lost-and-found", category:"Full-Stack", year:"2025", status:"Built", featured:false, description:"A platform for students to report, discover, and recover lost items around campus.", problem:"Lost items are hard to reconnect with their owners when reports are scattered across informal channels.", technologies:["Next.js","TypeScript","Prisma"], features:["Lost-item reports","Item discovery","Recovery workflow"] },
  { title:"AI Content Generator", slug:"ai-content-generator", category:"SaaS", year:"2025", status:"Built", featured:false, description:"An AI-powered content generation platform focused on fitness, health, and lifestyle content.", problem:"Content teams need a focused starting point for recurring wellness content.", technologies:["Next.js","TypeScript","Prisma","PostgreSQL","Supabase"], features:["Fitness, health, and lifestyle focus","Content generation workflow"] },
  { title:"Task Manager", slug:"task-manager", category:"Full-Stack", year:"2025", status:"Built", featured:false, description:"A full-stack task management application with CRUD functionality and API endpoints.", problem:"A compact project for working through everyday task-management flows end to end.", technologies:["Next.js","TypeScript","Prisma","MongoDB"], features:["CRUD functionality","API endpoints"] },
  { title:"Weather App", slug:"weather-app", category:"Mobile", year:"2025", status:"Built", featured:false, description:"A mobile weather application integrating an external weather API.", problem:"A focused mobile project for presenting current weather data clearly.", technologies:["React Native","Expo","TypeScript","REST API"], features:["External weather API integration","Mobile weather experience"] },
];

export const clientProjects: Project[] = [
  // Add Wix, business, landing-page, and other client projects here. Clearly identify the platform used.
  { title:"Your next client website", slug:"client-site-placeholder", category:"Client Work", year:"—", status:"Placeholder", featured:false, platform:"Wix", description:"Add a client website here when it is ready to share publicly.", problem:"", technologies:["Wix"], services:["Website Design","Development","Responsive Design"] }
];

export const allProjects = [...projects, ...clientProjects];
export const getProject = (slug: string) => allProjects.find((project) => project.slug === slug);
