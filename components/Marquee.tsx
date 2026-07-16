const items = [
  "Exclusive Leads",
  "Professional Websites",
  "UK-Wide",
  "Zero Risk",
  "Build First · Pay Later",
  "Local Business Specialists",
  "Done For You",
  "No Shared Leads",
  "Facebook & Instagram Ads",
  "Mobile-First Design",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y py-4" style={{ borderColor: "var(--ink-800)", backgroundColor: "var(--ink-950)" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--cyan-300)" }}>
            {item}
            <span style={{ color: "var(--ink-700)" }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
