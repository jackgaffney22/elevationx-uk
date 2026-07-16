import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Generation for Local Businesses",
  description:
    "Qualified enquiries delivered directly to your phone. Exclusive leads from targeted campaigns — no shared contacts, no time-wasters. UK-wide.",
};

const howItWorks = [
  { n: "01", title: "Targeted Ad", body: "We place ads in front of customers in your area who are actively looking for your service right now — not browsing, not window shopping." },
  { n: "02", title: "Instant Form & Qualification", body: "Interested customers complete a short form. Job type, location, timeline. Tyre-kickers are filtered out automatically before anything reaches you." },
  { n: "03", title: "Automation & Nurturing", body: "Qualified leads enter an automated sequence that keeps them warm, builds trust, and moves them towards booking — without you lifting a finger." },
  { n: "04", title: "Booked Job", body: "You receive a qualified, exclusive enquiry ready to convert. No chasing, no competing with four other businesses. Just a warm lead on your phone." },
];

const differentiators = [
  { title: "Exclusive to you", body: "Every lead is yours alone. We never sell the same enquiry to multiple businesses." },
  { title: "Qualified before it reaches you", body: "Our process filters out low-intent contacts before they ever hit your inbox. You only hear from people who are serious." },
  { title: "Your area, your jobs", body: "We target the specific locations and job types you want — no leads from areas you can't service." },
  { title: "Done for you", body: "You stay focused on the work. We handle the ads, the qualification, the nurturing — and deliver the result straight to your phone." },
];

const faqs = [
  { q: "How quickly will I start seeing enquiries?", a: "Most clients receive their first qualified leads within the first week of campaigns going live. Volume grows as we optimise." },
  { q: "What types of jobs can you target?", a: "Whatever matters most to your business — installations, repairs, emergency callouts, commercial work, whatever you want more of." },
  { q: "How is this different from Checkatrade or MyBuilder?", a: "Those platforms sell the same enquiry to multiple businesses — you're competing on price before you've even spoken to the customer. Our leads are exclusive, pre-qualified, and come directly to you." },
  { q: "What areas do you cover?", a: "We work with local businesses across the UK. Wherever you are, we can build campaigns around your patch." },
  { q: "Do I need a website?", a: "No. Our system works independently. If you also want a website, we can build one — but it isn't a requirement to get started with lead generation." },
];

export default function LeadGenerationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">Lead Generation</p>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] text-white max-w-5xl leading-none mb-8">
            Qualified leads.<br />
            Your phone.<br />
            <span style={{ color: "var(--cyan-400)" }}>No mess.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed mb-10">
            We bring customers who are ready to spend money on your service directly to you — pre-qualified, exclusive, and ready to book.
          </p>
          <Link href="/contact" className="btn-light px-8 py-4">
            Book a Call
          </Link>
        </div>
      </section>

      {/* How the leads get to you — visual flow */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="eyebrow-dark mb-6">How it works</p>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] mb-16 leading-none" style={{ color: "var(--ink-950)" }}>
            From ad to booked job.<br />We handle every step.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {howItWorks.map((step, i) => (
              <div key={step.n} className="bg-white p-8 relative">
                {/* Arrow connector — desktop only */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
                <span className="display text-5xl mb-5 block" style={{ color: "var(--cyan-200)" }}>{step.n}</span>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--ink-950)" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {/* End result callout */}
          <div className="mt-px p-10 text-center" style={{ backgroundColor: "var(--ink-950)" }}>
            <p className="display text-3xl sm:text-4xl text-white mb-3">The result: your phone rings with people who want to spend money on your service.</p>
            <p className="text-white/40 text-sm">Qualified. Exclusive. Ready to book.</p>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-6">Why it works</p>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-white mb-16 max-w-xl leading-none">
            Not like the<br />comparison sites.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {differentiators.map((d) => (
              <div key={d.title} className="p-8" style={{ backgroundColor: "var(--ink-950)" }}>
                <h3 className="font-semibold text-white text-lg mb-3">{d.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="eyebrow-dark mb-6">Questions</p>
          <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mb-16 leading-none" style={{ color: "var(--ink-950)" }}>
            Common questions.
          </h2>
          <div className="space-y-px">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8 border-b border-gray-100 last:border-0">
                <h3 className="font-semibold mb-3" style={{ color: "var(--ink-950)" }}>{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-900)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-6">Work with us</p>
              <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none mb-6">
                Let&apos;s see if we&apos;re a good fit.
              </h2>
              <p className="text-white/50 leading-relaxed max-w-md">
                We don&apos;t work with everyone — and that&apos;s intentional. Book a call and we&apos;ll have an honest conversation about your business, what you&apos;re looking for, and whether we can genuinely help. No pitch, no pressure.
              </p>
            </div>
            <div className="lg:text-right">
              <Link href="/contact" className="btn-light px-10 py-4 inline-flex">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
