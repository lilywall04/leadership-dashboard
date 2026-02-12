export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="mt-2 text-slate-600">
          Welcome to your AI + Leadership Dashboard built with Next.js App Router.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Projects</p>
          <p className="mt-1 text-2xl font-bold">3</p>
          <p className="mt-2 text-sm text-slate-600">
            Side projects, internship work, and academic builds.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Leadership Roles</p>
          <p className="mt-1 text-2xl font-bold">3</p>
          <p className="mt-2 text-sm text-slate-600">
            SGA, ACM, UPE — impact and outcomes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-slate-500">Next Step</p>
          <p className="mt-1 text-2xl font-bold">Dynamic Routes</p>
          <p className="mt-2 text-sm text-slate-600">
            Add <span className="font-mono">/projects/[slug]</span> pages.
          </p>
        </div>
      </div>
    </div>
  );
}
