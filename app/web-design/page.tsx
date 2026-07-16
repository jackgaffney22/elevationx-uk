import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design for Local Businesses — Free Build, £99/month",
  description:
    "We build your website completely free, demo it within 48 hours, and have you live within a week. Then just £99/month — hosting, domain and updates included.",
};

const included = [
  "Mobile-first design built to convert",
  "Copy written for you — no blank pages",
  "SEO foundations from day one",
  "Google Business Profile optimisation",
  "Contact forms and click-to-call setup",
  "Google Analytics included",
  "Hosting, domain & ongoing updates",
  "Fast load speeds — optimised for Google",
];

const process = [
  {
    n: "01",
    title: "Tell us about your business",
    body: "We send you a short form — your services, your area, what makes you different. No call needed at this stage. Just the basics.",
  },
  {
    n: "02",
    title: "Send us your photos",
    body: "Photos of your work make or break a local business website. Send us what you have and we'll handle the rest.",
  },
  {
    n: "03",
    title: "We build it — completely free",
    body: "Within 48 hours, you'll have a demo of your finished website. No payment, no commitment at this point.",
  },
  {
    n: "04",
    title: "We review it together",
    body: "We jump on a call and walk through the site with you. You tell us what you'd like changed — we'll make it right.",
  },
  {
    n: "05",
    title: "You approve, we go live",
    body: "Once you're happy and can see it will work for your business, we go live. Most sites are live within a week of first contact.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">Web Design</p>
          <h1 className="display text-[clamp(3rem,9vw,8rem)] text-white max-w-5xl leading-none mb-8">
            We build it.<br />
            <span style={{ color: "var(--cyan-400)" }}>For free.</span><br />
            You decide.
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed mb-10">
            We build your complete website at no cost — demo it within 48 hours, live within a week. You only pay once you&apos;re convinced it&apos;ll work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-light px-8 py-4">
              Get Your Free Website
            </Link>
          </div>
        </div>
      </section>

      {/* The offer in plain English */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="eyebrow-dark mb-6">The offer</p>
              <h2 className="display text-[clamp(2.5rem,5vw,4rem)] mb-8 leading-none" style={{ color: "var(--ink-950)" }}>
                Other agencies charge<br />£3,000–£8,000 upfront.<br />
                <span style={{ color: "var(--cyan-600)" }}>We charge nothing.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                The standard web design model asks you to hand over thousands of pounds before you&apos;ve seen a single page. Then more for hosting. More for updates. More for anything that changes.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                We build your website first — completely free. You see it, you review it, you request changes. Once you&apos;re happy and confident it will bring in work, you go live at <strong className="text-gray-900">£99 per month</strong>. That includes hosting, your domain, and ongoing updates. Nothing else to pay.
              </p>

              <div className="border border-gray-100 p-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="display text-6xl" style={{ color: "var(--ink-950)" }}>£0</span>
                  <span className="text-gray-500 text-sm">to get started</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">Then £99/month once you approve and go live</p>
                <ul className="space-y-3">
                  {["No upfront payment", "Demo within 48 hours", "Live within a week", "Cancel anytime"].map((item) => (
                    <li key={item} className="check-item text-sm text-gray-600">
                      <span className="check-dot mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Competitor vs us */}
            <div className="space-y-px">
              <div className="bg-gray-50 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Typical web agency</p>
                <ul className="space-y-4">
                  {[
                    "£3,000–£8,000+ before you see anything",
                    "Pay upfront, hope for the best",
                    "Hosting & domain billed separately",
                    "Charged again for every small update",
                    "Generic templates, no strategy behind them",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500 text-sm">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8" style={{ backgroundColor: "var(--ink-950)" }}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6" style={{ color: "var(--cyan-400)" }}>ElevationX UK</p>
                <ul className="space-y-4">
                  {[
                    "Built for free — you see it before you pay",
                    "Demo in 48 hours, live in under a week",
                    "£99/month — everything included",
                    "Updates included, no extra charges",
                    "Written and designed to convert",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--cyan-400)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-6">How it works</p>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-white mb-4 leading-none">
            Demo in 48 hours.
          </h2>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] mb-16 leading-none" style={{ color: "var(--cyan-500)" }}>
            Live in under a week.
          </h2>

          <div className="space-y-px">
            {process.map((step) => (
              <div key={step.n} className="grid sm:grid-cols-[80px_1fr] gap-8 p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <span className="display text-4xl" style={{ color: "var(--ink-700)" }}>{step.n}</span>
                <div className="sm:flex sm:justify-between sm:items-start gap-8">
                  <h3 className="font-semibold text-white text-lg mb-2 sm:mb-0 sm:w-56 flex-shrink-0">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-lg">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="eyebrow-dark mb-6">What&apos;s included</p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mb-10 leading-none" style={{ color: "var(--ink-950)" }}>
                Everything you need.<br />Nothing you don&apos;t.
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="check-item text-gray-600 text-sm">
                    <span className="check-dot mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="border border-gray-100 p-10">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Monthly fee</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="display text-7xl" style={{ color: "var(--ink-950)" }}>£99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">Hosting, domain &amp; updates included · Cancel anytime</p>
                <Link href="/contact" className="btn-solid w-full justify-center py-4">
                  Get Your Free Website
                </Link>
              </div>
              <div className="border border-gray-100 p-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Remember</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You don&apos;t pay £99/month until your website is built, reviewed, and approved by you. The entire build process costs you nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-900)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white mb-6 leading-none">
            Nothing to lose.
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
            We build it free. You review it. You only pay if you love it and want to go live.
          </p>
          <Link href="/contact" className="btn-light px-10 py-4">
            Start Your Free Website
          </Link>
        </div>
      </section>
    </>
  );
}
