export function TechTags({ technologies, limit }: { technologies: string[]; limit?: number }) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  return <div className="flex flex-wrap gap-1.5">{visible.map((tech) => <span className="tag" key={tech}>{tech}</span>)}{limit && technologies.length > limit && <span className="tag">+{technologies.length - limit}</span>}</div>;
}
