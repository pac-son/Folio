import Link from "next/link";
import { Header } from "@/components/Header";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TechTags } from "@/components/TechTags";
import { projects, clientProjects } from "@/data/projects";

const skillGroups = {
  Languages: ["TypeScript", "JavaScript", "Solidity", "Python", "Java", "SQL", "C++", "Rust (learning)"],
  Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "Electron", "Sass", "Expo"],
  Backend: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs"],
  Blockchain: ["Solidity", "Ethereum", "Web3.js", "BitcoinJS", "IPFS", "Smart Contracts"],
  Databases: ["PostgreSQL", "Neon", "Supabase", "Prisma", "Drizzle", "SQLAlchemy", "MongoDB", "MySQL"],
  Infrastructure: ["Docker", "Docker Compose", "Celery", "Redis", "Render"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Bun", "Biome"],
  "Auth & Payments": ["Clerk", "Stripe", "Paystack", "Auth & Permissions"],
};

const activeClientProjects = clientProjects.filter((p) => p.status !== "Placeholder");

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        {/* HERO SECTION */}
        <section className="page flex min-h-[calc(100svh-64px)] flex-col justify-center py-20 md:py-24">
          <p className="eyebrow">Developer / Nigeria</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-semibold leading-[.85] tracking-[-.09em]">
            Peterson
            <br />
            Amblessed<span className="text-[#bd542c]">.</span>
          </h1>
          <div className="mt-12 grid max-w-2xl gap-7 md:grid-cols-[.7fr_1.3fr]">
            <p className="mono text-sm leading-6">
              Full-Stack Developer
              <br />
              <span className="text-[#67675e]">Web · mobile · Desktop · API </span>
            </p>
            <div>
              <p className="text-xl leading-8 tracking-[-.025em]">
                I build web, mobile, SaaS, fintech, and blockchain products.
              </p>
              <p className="mt-4 text leading-7">
                I’m a developer based in Nigeria who enjoys taking an idea from an empty repository to software people
                can actually use.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                <a
                  className="link-arrow"
                  href="https://github.com/pac-son"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
                <Link className="link-arrow" href="/resume">
                  Resume <span>↗</span>
                </Link>
                <a className="link-arrow" href="#projects">
                  Projects <span>↓</span>
                </a>
                <a className="link-arrow" href="#contact">
                  Contact <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: SELECTED WORK */}
        <section className="section page" id="projects">
          <p className="eyebrow">Selected work / 01</p>
          <h2 className="section-title">Projects with real engineering underneath.</h2>
          <ProjectGrid projects={projects} />
        </section>

        {/* CLIENT WORK (Rendered only if authentic client projects exist) */}
        {activeClientProjects.length > 0 && (
          <section className="section page">
            <p className="eyebrow">Websites & client work / 02</p>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="section-title">Built with the right tool for the job.</h2>
                <p className="text max-w-md">
                  Business sites, landing pages, and client websites built with modern platforms and CMS tools.
                </p>
              </div>
              <div className="border-t border-[#deded5]">
                {activeClientProjects.map((p) => (
                  <div className="py-7" key={p.slug}>
                    <p className="eyebrow">
                      {p.platform} / {p.status}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em]">{p.title}</h3>
                    <p className="mt-2 text text-sm">{p.description}</p>
                    <div className="mt-5">
                      <TechTags technologies={p.services || p.technologies} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 02: ABOUT & SKILLS */}
        <section className="section page" id="about">
          <div className="grid gap-12 md:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">About / 02</p>
              <h2 className="section-title">Building across the stack.</h2>
            </div>
            <div>
              <p className="text text-xl">
                I’m a developer from Nigeria working across web, mobile, SaaS, fintech, blockchain, and APIs. I like the
                practical work: understanding a problem, making careful technical choices, and shipping something that
                holds together under real-world usage.
              </p>
              <p className="text mt-5">
                I’m always learning through projects. Right now, Rust is part of that learning path — not a claim of
                mastery, but a language I’m actively getting to know to build reliable systems.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-8 md:grid-cols-2">
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div className="border-t border-[#deded5] pt-4" key={group}>
                <p className="mono mb-4 text-xs font-semibold uppercase tracking-wider text-[#67675e]">{group}</p>
                <TechTags technologies={skills} />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03: EXPERIENCE & EDUCATION */}
        <section className="section page" id="experience">
          <p className="eyebrow">Experience &amp; Education / 03</p>
          <div className="mt-8 space-y-12">
            {/* Brainbench Experience */}
            <div className="grid gap-6 border-t border-[#deded5] py-8 md:grid-cols-[.85fr_1.15fr]">
              <div>
                <span className="mono text-xs text-[#bd542c] uppercase">Work Experience</span>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em]">Frontend Developer Intern</h3>
                <p className="mt-1 font-medium text-[#171714]">Brainbench Technology</p>
                <p className="mono mt-3 text-xs text-[#67675e]">APR 2025 — OCT 2025</p>
              </div>
              <ul className="space-y-3 text leading-6">
                <li>Developed responsive web interfaces using React, Next.js, TypeScript, and Tailwind CSS.</li>
                <li>Built mobile interfaces with React Native and implemented reusable UI component libraries.</li>
                <li>Integrated client frontend applications with backend RESTful APIs and third-party services.</li>
                <li>Debugged application issues, optimized performance, and improved cross-device responsiveness.</li>
                <li>Participated in technical field visits involving computer networking and examination system setup.</li>
              </ul>
            </div>

            {/* University Education */}
            <div className="grid gap-6 border-t border-[#deded5] py-8 md:grid-cols-[.85fr_1.15fr]">
              <div>
                <span className="mono text-xs text-[#bd542c] uppercase">Education</span>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em]">B.Sc. Computer Science &amp; Informatics</h3>
                <p className="mt-1 font-medium text-[#171714]">Federal University Otuoke</p>
                <p className="mono mt-3 text-xs text-[#67675e]">2021 — 2025 · Bayelsa / Nigeria</p>
              </div>
              <div className="text leading-6">
                <p>
                  Foundational grounding in computer science principles, data structures, algorithms, database systems,
                  software engineering methodologies, and networking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: CONTACT */}
        <section className="section page" id="contact">
          <p className="eyebrow">Contact / 04</p>
          <div className="mt-5 grid gap-10 md:grid-cols-[1.25fr_.75fr]">
            <div>
              <h2 className="section-title">Ready to build together?</h2>
              <p className="text max-w-lg">
                I’m open to full-time developer roles, contract opportunities, and challenging engineering products.
                Feel free to reach out directly.
              </p>
            </div>
            <div className="flex flex-col items-start justify-end gap-4">
              <a
                className="link-arrow font-medium"
                href="mailto:petersonamblessed@gmail.com"
              >
                petersonamblessed@gmail.com ↗
              </a>
              <a
                className="link-arrow font-medium"
                href="tel:+2348067421594"
              >
                +234 806 742 1594 ↗
              </a>
              <a
                className="link-arrow font-medium"
                href="https://github.com/pac-son"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/pac-son ↗
              </a>
              <Link className="link-arrow font-medium text-[#bd542c]" href="/resume">
                View Full CV / Resume →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="page flex flex-wrap justify-between gap-4 border-t border-[#deded5] py-8 text-xs text-[#67675e]">
        <span>© {new Date().getFullYear()} Peterson Amblessed · All rights reserved</span>
        <div className="flex gap-4">
          <Link href="/resume" className="hover:text-[#171714]">
            Resume
          </Link>
          <a
            href="https://github.com/pac-son"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#171714]"
          >
            GitHub
          </a>
          <span className="mono">Built with Next.js &amp; Tailwind</span>
        </div>
      </footer>
    </>
  );
}
