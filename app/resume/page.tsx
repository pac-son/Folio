import Link from "next/link";
import { Header } from "@/components/Header";
import { TechTags } from "@/components/TechTags";

export const metadata = {
  title: "Resume — Peterson Amblessed",
  description: "Curriculum Vitae and background of Peterson Amblessed, Full-Stack & Frontend Developer.",
};

const technicalSkills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Solidity", "Java", "SQL", "C++", "Rust (learning)"] },
  { category: "Frontend & Mobile", items: ["React", "Next.js", "React Native", "Tailwind CSS", "Electron", "Expo", "Sass"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs"] },
  { category: "Databases & ORMs", items: ["PostgreSQL", "Neon", "Supabase", "Prisma", "Drizzle", "SQLAlchemy", "MongoDB", "MySQL"] },
  { category: "Blockchain & Web3", items: ["Solidity", "Ethereum", "Web3.js", "BitcoinJS", "IPFS", "Smart Contracts"] },
  { category: "Infrastructure & Tools", items: ["Docker", "Docker Compose", "Celery", "Redis", "Render", "Git", "GitHub", "Postman", "Bun", "Biome"] },
  { category: "Auth & Payments", items: ["Clerk", "Stripe", "Paystack", "Authentication & Authorization"] },
];

const selectedProjects = [
  {
    title: "Bank Statement Extractor & Credit Scoring API",
    tech: "Python 3.11, FastAPI, PostgreSQL, SQLAlchemy, OCR (pdfplumber, pytesseract, OpenCV), Celery, Redis, Docker, Render",
    bullets: [
      "Built and deployed a production fintech API for extracting, normalizing, and analyzing bank statement data for Nigerian financial institutions.",
      "Engineered 10+ bank parsers covering GTBank, Access, UBA, OPay, Kuda, PalmPay, Moniepoint, and regional formats (Ghana and Kenya).",
      "Designed automated fraud detection, loan-stacking analysis, narrative transaction summaries, and multi-account consolidation.",
      "Implemented developer API access keys, webhook notifications, and automated billing workflows; containerized and deployed with Docker on Render.",
    ],
  },
  {
    title: "Property Marketplace — Full-Stack Real Estate Platform",
    tech: "Next.js, TypeScript, Prisma, Neon PostgreSQL, Tailwind CSS",
    bullets: [
      "Built and deployed a full-stack real estate marketplace for residential property sales and rentals.",
      "Implemented location-aware property discovery, faceted filtering, interactive listings, and landlord property management workflows.",
    ],
  },
  {
    title: "SaaS Savings Platform — Shopify Layaway Widget",
    tech: "Next.js, TypeScript, Clerk, Stripe, Drizzle ORM",
    bullets: [
      "Built a multi-tenant SaaS application enabling Shopify merchants to offer structured layaway and savings payment plans.",
      "Integrated Stripe payments, automated installment schedules, and secure merchant/customer authentication via Clerk.",
    ],
  },
  {
    title: "Forza — Blockchain Certificate Verification System",
    tech: "Solidity, Hardhat, Ethereum, Next.js, React, TypeScript, Web3.js, IPFS",
    bullets: [
      "Engineered a decentralized credential verification platform for issuing tamper-resistant academic records.",
      "Developed smart contracts in Solidity with Hardhat (forza-core) and built an interactive Next.js/Web3 frontend (forza-web) for instant third-party verification.",
    ],
  },
  {
    title: "Decentralized Escrow Platform",
    tech: "Solidity, Ethereum, Next.js, TypeScript, Web3.js, Tailwind CSS",
    bullets: [
      "Built a trustless smart contract escrow platform enabling milestone-based payments without centralized financial intermediaries.",
      "Integrated multi-party authorization, dispute safeguards, and live Web3 wallet transaction lifecycle tracking.",
    ],
  },
  {
    title: "ParcelGo — Mobile Delivery Platform",
    tech: "React Native, Expo, TypeScript, REST APIs",
    bullets: [
      "Designed and developed a cross-platform mobile delivery application connecting senders, dispatch drivers, and receivers.",
      "Engineered workflows for parcel creation, live route milestone tracking, secure payments, KYC verification, and driver communication.",
    ],
  },
  {
    title: "Crypto Wallet — Desktop Multi-Chain Application",
    tech: "Electron, React, TypeScript, BitcoinJS",
    bullets: [
      "Developed a cross-platform desktop cryptocurrency wallet featuring secure key generation and transaction workflows.",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="page py-16 md:py-24">
        {/* Top bar with back and download */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#deded5] pb-6">
          <Link href="/" className="mono text-xs text-[#67675e] hover:text-[#bd542c]">
            ← Back home
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Peterson_Amblessed_Resume.pdf"
              className="inline-flex items-center gap-2 border border-[#171714] bg-[#171714] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#bd542c] hover:border-[#bd542c]"
            >
              Download PDF <span>↓</span>
            </a>
          </div>
        </div>

        {/* Resume Sheet Container */}
        <div className="mt-10 max-w-4xl border border-[#deded5] bg-[#fff] p-8 shadow-sm md:p-14">
          {/* Header */}
          <header className="border-b border-[#deded5] pb-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#171714] md:text-4xl">
                  Peterson Amblessed
                </h1>
                <p className="mono mt-2 text-sm font-semibold tracking-wider text-[#bd542c] uppercase">
                  Full-Stack &amp; Frontend Developer
                </p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-[#67675e] md:text-right">
                <span>Anambra, Nigeria</span>
                <a href="tel:+2348067421594" className="hover:text-[#bd542c]">
                  +234 806 742 1594
                </a>
                <a href="mailto:petersonamblessed@gmail.com" className="hover:text-[#bd542c]">
                  petersonamblessed@gmail.com
                </a>
                <a
                  href="https://github.com/pac-son"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#bd542c]"
                >
                  github.com/pac-son ↗
                </a>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="border-b border-[#deded5] py-7">
            <h2 className="mono text-xs font-bold tracking-widest text-[#67675e] uppercase">
              Professional Summary
            </h2>
            <p className="text mt-3 text-sm leading-relaxed text-[#171714]">
              Full-Stack and Frontend Developer experienced in building and deploying web, mobile, SaaS, fintech,
              blockchain, and desktop applications. Strong experience with TypeScript, JavaScript, React, Next.js,
              React Native, Node.js, Python, FastAPI, relational &amp; NoSQL databases, payment systems, and Web3
              technologies.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="border-b border-[#deded5] py-7">
            <h2 className="mono text-xs font-bold tracking-widest text-[#67675e] uppercase">
              Technical Skills
            </h2>
            <div className="mt-4 space-y-3">
              {technicalSkills.map((skill) => (
                <div key={skill.category} className="grid gap-2 text-sm md:grid-cols-[180px_1fr]">
                  <span className="font-semibold text-[#171714]">{skill.category}:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span key={item} className="tag text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="border-b border-[#deded5] py-7">
            <h2 className="mono text-xs font-bold tracking-widest text-[#67675e] uppercase">
              Work Experience
            </h2>
            <div className="mt-5">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-base font-bold text-[#171714]">Frontend Developer Intern</h3>
                  <p className="text-sm text-[#67675e]">Brainbench Technology</p>
                </div>
                <span className="mono text-xs text-[#67675e]">APR 2025 — OCT 2025</span>
              </div>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-[#53534c]">
                <li>Developed responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS.</li>
                <li>Built mobile interfaces with React Native and implemented reusable UI component libraries.</li>
                <li>Integrated frontend client applications with backend RESTful APIs and external services.</li>
                <li>Debugged application issues and improved cross-browser and mobile responsive behavior.</li>
                <li>Participated in technical field operations involving network setup and examination system infrastructure.</li>
              </ul>
            </div>
          </section>

          {/* Selected Projects */}
          <section className="border-b border-[#deded5] py-7">
            <h2 className="mono text-xs font-bold tracking-widest text-[#67675e] uppercase">
              Selected Projects
            </h2>
            <div className="mt-5 space-y-6">
              {selectedProjects.map((p) => (
                <div key={p.title}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-base font-bold text-[#171714]">{p.title}</h3>
                    <span className="mono text-xs text-[#67675e]">2025</span>
                  </div>
                  <p className="mono mt-1 text-xs text-[#bd542c]">{p.tech}</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-[#53534c]">
                    {p.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="pt-7">
            <h2 className="mono text-xs font-bold tracking-widest text-[#67675e] uppercase">
              Education
            </h2>
            <div className="mt-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="text-base font-bold text-[#171714]">Federal University Otuoke</h3>
                <p className="text-sm text-[#53534c]">B.Sc. in Computer Science and Informatics</p>
                <p className="text-xs text-[#67675e]">Nigeria</p>
              </div>
              <span className="mono text-xs text-[#67675e]">2021 — 2025</span>
            </div>
          </section>
        </div>

        {/* Bottom actions */}
        <div className="mt-10 flex items-center justify-between">
          <Link className="link-arrow" href="/">
            Back home <span>←</span>
          </Link>
          <a
            href="/resume.pdf"
            download="Peterson_Amblessed_Resume.pdf"
            className="link-arrow"
          >
            Download PDF version <span>↓</span>
          </a>
        </div>
      </main>
    </>
  );
}
