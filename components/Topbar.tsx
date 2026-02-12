function Topbar() {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">AI + Leadership Dashboard</h2>
          <p className="text-sm text-slate-500">
            Next.js App Router • Server Components by default
          </p>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
          Feb 12, 2026
        </div>
      </div>
    </header>
  );
}

export default Topbar;
