const items = [
  { date: "2026-02", text: "Started Next.js App Router dashboard project." },
  { date: "2025-09", text: "Became ACM Outreach Coordinator." },
  { date: "2025-08", text: "Began Software Dev + Data Science focus work." },
];

export default function TimelinePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Timeline</h1>
        <p className="mt-2 text-slate-600">
          A chronological view combining leadership + projects.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((i) => (
          <div
            key={`${i.date}-${i.text}`}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <p className="text-sm text-slate-500">{i.date}</p>
            <p className="mt-1">{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
