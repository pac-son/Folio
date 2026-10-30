import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { TechTags } from "@/components/TechTags";
import { allProjects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? {
        title: `${project.title} — Peterson Amblessed`,
        description: project.description,
        openGraph: {
          title: `${project.title} — Peterson Amblessed`,
          description: project.description,
        },
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="page py-16 md:py-24">
          <Link
            href="/#projects"
            className="mono text-xs text-[#67675e] transition-colors hover:text-[#bd542c]"
          >
            ← All projects
          </Link>
          <div className="mt-12 grid gap-12 md:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>
              <h1 className="mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[.95] tracking-[-.08em]">
                {project.title}
                <span className="text-[#bd542c]">.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#67675e]">
                {project.description}
              </p>
            </div>
            <aside className="border-t border-[#deded5] pt-5">
              <p className="mono text-xs font-semibold text-[#67675e]">STATUS</p>
              <p className="mt-1 font-medium">{project.status}</p>
              <p className="mono mt-7 text-xs font-semibold text-[#67675e]">DOMAIN / CATEGORY</p>
              <p className="mt-1 font-medium">
                {project.platform ? `${project.category} · ${project.platform}` : project.category}
              </p>
              <p className="mono mt-7 text-xs font-semibold text-[#67675e]">YEAR</p>
              <p className="mt-1 font-medium">{project.year}</p>
            </aside>
          </div>
        </section>

        {/* OVERVIEW / PROBLEM */}
        <section className="section page">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 className="section-title">The challenge &amp; objective.</h2>
            </div>
            <div className="text text-lg leading-relaxed">
              <p>{project.problem || project.description}</p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section page">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Implementation</p>
              <h2 className="section-title">Key capabilities &amp; engineering.</h2>
            </div>
            <div>
              {project.features?.length ? (
                <ul className="border-t border-[#deded5]">
                  {project.features.map((feature, index) => (
                    <li
                      className="grid grid-cols-[36px_1fr] gap-3 border-b border-[#deded5] py-4 text leading-6"
                      key={feature}
                    >
                      <span className="mono text-xs font-semibold text-[#bd542c]">
                        0{index + 1}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text">Modular implementation designed for scalable production usage.</p>
              )}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section page">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Technology</p>
              <h2 className="section-title">The stack &amp; architecture.</h2>
            </div>
            <div>
              <TechTags technologies={project.technologies} />
              {project.technicalDetails && (
                <div className="mt-10 border-t border-[#deded5] pt-6">
                  <p className="mono text-xs font-semibold text-[#67675e] uppercase">
                    Architectural Highlights
                  </p>
                  <ul className="mt-4 space-y-3 text leading-6 text-[#53534c]">
                    {project.technicalDetails.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#bd542c]">▪</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LINKS & ACTIONS */}
        <section className="section page">
          <p className="eyebrow">Links &amp; Code</p>
          <div className="mt-7 flex flex-wrap items-center gap-6">
            {project.github && (
              <a
                className="link-arrow text-base font-medium"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.backendGithub ? "GitHub (Frontend) ↗" : "GitHub Repository ↗"}
              </a>
            )}
            {project.backendGithub && (
              <a
                className="link-arrow text-base font-medium"
                href={project.backendGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (Contracts &amp; Backend) ↗
              </a>
            )}
            {!project.github && !project.backendGithub && (
              <a
                className="link-arrow text-base font-medium"
                href="https://github.com/pac-son"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub (pac-son) ↗
              </a>
            )}
            {project.demo && (
              <a
                className="link-arrow text-base font-medium"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            )}
            <Link className="link-arrow text-base font-medium text-[#bd542c]" href="/#contact">
              Discuss this project →
            </Link>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="page flex justify-between border-t border-[#deded5] py-8 text-xs text-[#67675e]">
        <span>© {new Date().getFullYear()} Peterson Amblessed</span>
        <Link href="/#projects" className="mono hover:text-[#171714]">
          ← Back to all projects
        </Link>
      </footer>
    </>
  );
}
