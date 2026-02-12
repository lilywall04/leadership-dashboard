import Link from "next/link";

const linkBase =   "block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-slate-100";

function Sidebar() {
return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Dashboard
        </p>
        <h1 className="mt-1 text-lg font-bold">Lily Wallace</h1>
        <p className="mt-1 text-sm text-slate-600">AI + Leadership</p>
      </div>

      <nav className="space-y-1">
        <Link className={linkBase} href="/">
          Overview
        </Link>
        <Link className={linkBase} href="/projects">
          Projects
        </Link>
        <Link className={linkBase} href="/leadership">
          Leadership
        </Link>
        <Link className={linkBase} href="/timeline">
          Timeline
        </Link>
      </nav>

      <div className="mt-8 rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
        <p className="font-medium text-slate-700">Resume-ready idea:</p>
        <p className="mt-1">
          Add dynamic routes next: <span className="font-mono">/projects/[slug]</span>
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;