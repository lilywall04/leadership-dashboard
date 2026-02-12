const roles = [
  {
    org: "ACM",
    title: "Outreach Coordinator",
    impact: "Planned outreach initiatives and promoted events.",
  },
  {
    org: "Upsilon Pi Epsilon",
    title: "Secretary",
    impact: "Supported operations and member communications.",
  },
  {
    org: "Student Government Association",
    title: "Congressperson (CHST)",
    impact: "Represented students and contributed to campus initiatives.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Leadership</h1>
        <p className="mt-2 text-slate-600">
          Your roles + measurable outcomes. Great for resume storytelling.
        </p>
      </div>

      <div className="space-y-4">
        {roles.map((r) => (
          <div
            key={`${r.org}-${r.title}`}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <p className="text-sm font-semibold text-slate-500">{r.org}</p>
            <h2 className="mt-1 text-lg font-bold">{r.title}</h2>
            <p className="mt-2 text-slate-700">{r.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
