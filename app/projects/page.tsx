import Link from "next/link";

const projects = [
  {
    slug: "elite-portfolio",
    title: "Elite Portfolio",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    slug: "raspberry-pi-ai-pet",
    title: "Raspberry Pi AI Pet",
    stack: ["Python", "Raspberry Pi", "Sensors"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-slate-600">
          A server-rendered list (default behavior in App Router).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-600">
              Stack: {p.stack.join(" • ")}
            </p>

            <Link
              className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
              href={`/projects/${p.slug}`}
            >
              View details →
            </Link>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500">
        Next: we’ll create <span className="font-mono">app/projects/[slug]/page.tsx</span>.
      </p>
    </div>
  );
}
