import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Container } from "@/components/ui/container";
import { ProjectMockup } from "@/components/shared/project-mockups";

function ProjectLink() {
  return <a className="project-case-link" href="#kontak"><span><ArrowUpRight aria-hidden="true" size={20} /></span>Lihat Studi Kasus</a>;
}

function ProjectMeta({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  return <div className={`project-meta ${compact ? "project-meta-compact" : ""}`}><div className="project-identity"><strong>{project.number}</strong><i /><div><h3>{project.title}</h3><p>{project.category}</p></div></div><p className="project-description">{project.description}</p><ProjectLink /></div>;
}

export function Projects() {
  const [featured, ...secondary] = projects;

  return <section id="portofolio" className="projects-section projects-reference"><div aria-hidden="true" className="projects-orbit" /><Container><header className="projects-heading"><div><p className="eyebrow"><span>•</span> Project pilihan</p><h2>Pilihan karya yang dibuat untuk <em>menciptakan dampak.</em></h2></div><div><p>Dari platform digital dan e-commerce hingga sistem internal dan produk berbasis AI, kami merancang solusi berdasarkan kebutuhan bisnis nyata.</p><a href="#portofolio">Lihat Semua Project <ArrowUpRight aria-hidden="true" size={16} /></a></div></header><article className="featured-project"><ProjectMockup variant={featured.variant} /><ProjectMeta project={featured} /></article><div className="secondary-projects">{secondary.map((project) => <article key={project.number}><ProjectMockup variant={project.variant} /><ProjectMeta compact project={project} /></article>)}</div></Container></section>;
}
