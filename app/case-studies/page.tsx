import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results for local businesses across the UK — web design and lead generation that makes a measurable difference.",
};

// PLACEHOLDER: replace with real case studies
const caseStudies = [
  {
    category: "Web Design + Lead Gen",
    title: "How a Birmingham Electrician Doubled His Enquiries in 60 Days",
    summary: "A sole trader with an outdated website and zero online presence. New site plus lead gen system led to a consistent pipeline within weeks.",
    results: [
      { label: "Monthly enquiries", before: "2–3", after: "15–20" },
      { label: "Google ranking", before: "Page 4", after: "Top 3" },
    ],
    tags: ["Web Design", "Lead Generation", "SEO"],
  },
  {
    category: "Web Design",
    title: "Professional Website for a Manchester Landscaping Company",
    summary: "A 3-person landscaping company needed a site that matched the quality of their work. Built and ranking in under 3 weeks.",
    results: [
      { label: "Time to launch", before: "—", after: "17 days" },
      { label: "Lighthouse score", before: "41", after: "96" },
    ],
    tags: ["Web Design", "Performance"],
  },
  {
    category: "Lead Generation",
    title: "Exclusive Leads for a Bristol Plumbing Business",
    summary: "Tired of competing with five other tradespeople for the same shared lead. Switched to our exclusive system — hasn't looked back.",
    results: [
      { label: "Lead exclusivity", before: "Shared", after: "Exclusive" },
      { label: "Monthly jobs won", before: "4–5", after: "12–15" },
    ],
    tags: ["Lead Generation", "Facebook Ads"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">Case Studies</p>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] text-white max-w-4xl leading-none mb-8">
            Real results.<br />
            <span style={{ color: "var(--cyan-400)" }}>Real local businesses.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            Proof of what&apos;s possible when your online presence is built specifically for your business.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* PLACEHOLDER notice — remove when real case studies are added */}
          <div className="mb-12 text-xs text-amber-700 bg-amber-50 border border-amber-200 px-4 py-3 inline-block">
            Placeholder case studies — replace with real client results
          </div>

          <div className="space-y-px">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="grid lg:grid-cols-[2fr_3fr] border border-gray-100 hover:border-gray-200 transition-colors">
                {/* Image placeholder */}
                {/* PLACEHOLDER: replace with real screenshot */}
                <div className="aspect-video lg:aspect-auto img-placeholder min-h-[200px]">
                  <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" /></svg>
                  <span>Screenshot placeholder</span>
                </div>

                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold uppercase tracking-widest px-3 py-1 border" style={{ borderColor: "var(--cyan-200)", color: "var(--cyan-600)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--ink-950)" }}>{cs.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{cs.summary}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="border-t border-gray-100 pt-4">
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{r.label}</p>
                        <div className="flex items-center gap-2 text-sm">
                          {r.before !== "—" && (
                            <>
                              <span className="text-gray-400 line-through text-xs">{r.before}</span>
                              <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                            </>
                          )}
                          <span className="font-bold" style={{ color: "var(--ink-900)" }}>{r.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-900)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 leading-none">
            Want results like these?
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
            Book a free call and let&apos;s talk about what&apos;s possible for your business.
          </p>
          <Link href="/contact" className="btn-light px-10 py-4">
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  );
}
