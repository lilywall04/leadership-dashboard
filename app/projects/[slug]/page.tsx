import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-slate-600">{project.description}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
