import type { Metadata } from "next";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Lead Generation & Web Design for Local Businesses",
  description:
    "We bring qualified enquiries directly to your phone — and build your website for free. ElevationX UK. UK-wide.",
};

const reasons = [
  { num: "01", title: "Local business focused", body: "We work exclusively with local, service-based businesses — which means we understand your customers, your market, and what converts." },
  { num: "02", title: "Done for you", body: "You stay focused on the work. We handle the campaigns, the website, the strategy — and deliver the results to your phone." },
  { num: "03", title: "Qualified, not just leads", body: "Anyone can send you a list of names. We send you people who are ready to spend money on your service — pre-qualified before they reach you." },
  { num: "04", title: "Straight talking", body: "No jargon, no overpromising. We'll tell you what's possible, what it takes, and whether we're the right fit — before we do anything." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex flex-col justify-center min-h-[100svh] px-5 sm:px-8 py-24" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="hero-fade mb-8" style={{ animationDelay: "100ms" }}>
            <span className="eyebrow">UK Local Business Specialists</span>
          </div>

          <h1 className="display text-[clamp(3.5rem,10vw,9rem)] text-white mb-8 max-w-5xl">
            <span className="hero-clip">
              <span className="hero-line" style={{ animationDelay: "150ms" }}>More Leads.</span>
            </span>
            <span className="hero-clip">
              <span className="hero-line" style={{ animationDelay: "280ms" }}>More Jobs.</span>
            </span>
            <span className="hero-clip">
              <span className="hero-line" style={{ animationDelay: "410ms", color: "var(--cyan-400)" }}>More Growth.</span>
            </span>
          </h1>

          <div className="hero-fade max-w-xl mb-10" style={{ animationDelay: "700ms" }}>
            <p className="text-lg text-white/60 leading-relaxed">
              We bring <span className="text-white font-semibold">qualified enquiries</span> directly to your phone — and build your website completely free. You focus on the work. We fill your pipeline.
            </p>
          </div>

          <div className="hero-fade flex flex-col sm:flex-row gap-4" style={{ animationDelay: "850ms" }}>
            <Link href="/contact" className="btn-light px-8 py-4 text-sm">
              Book a Call
            </Link>
            <Link href="/lead-generation" className="btn-dark px-8 py-4 text-sm">
              How It Works
            </Link>
          </div>
        </div>

        <div className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animationDelay: "1100ms" }}>
          <div className="flex flex-col items-center gap-2 text-white/20">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Lead gen — primary offer ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateIn>
            <p className="eyebrow mb-5">Primary service</p>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white mb-6 max-w-2xl leading-none">
              Qualified leads. Direct to your phone.
            </h2>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12">
              We run targeted Facebook and Instagram campaigns that bring customers who are ready to spend money on your service straight to you — pre-qualified, exclusive, real time.
            </p>
          </AnimateIn>

          {/* Lead flow */}
          <AnimateIn delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-10">
              {[
                { n: "01", title: "Targeted Ad", body: "We put your business in front of customers in your area who are actively looking." },
                { n: "02", title: "Qualification", body: "They complete a short form. Time-wasters are filtered out automatically." },
                { n: "03", title: "Nurturing", body: "Qualified leads are warmed up and moved towards booking without you lifting a finger." },
                { n: "04", title: "Booked Job", body: "A qualified, exclusive enquiry lands on your phone. Ready to convert." },
              ].map((step, i, arr) => (
                <div key={step.n} className="p-8 relative" style={{ backgroundColor: "var(--ink-900)" }}>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <svg className="w-5 h-5" style={{ color: "var(--ink-700)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                  <span className="display text-4xl mb-4 block" style={{ color: "var(--ink-700)" }}>{step.n}</span>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <Link href="/lead-generation" className="btn-light px-8 py-4 inline-flex">
              Learn More About Lead Generation
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── Web design — secondary offer ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateIn>
              <p className="eyebrow-dark mb-5">Also included</p>
              <h2 className="display text-[clamp(2.5rem,5vw,4rem)] mb-6 leading-none" style={{ color: "var(--ink-950)" }}>
                Need a website?<br />
                <span style={{ color: "var(--cyan-600)" }}>We build it free.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                While other agencies charge <strong className="text-gray-900">£3,000–£8,000 upfront</strong>, we build your complete website at no cost. You review it, approve it, and only pay once you&apos;re convinced it will work.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Then it&apos;s <strong className="text-gray-900">£99/month</strong> — hosting, domain, and updates all included. Demo in 48 hours, live in under a week.
              </p>
              <Link href="/web-design" className="btn-outline-dark px-8 py-4 inline-flex">
                Find Out More
              </Link>
            </AnimateIn>

            <AnimateIn delay={100}>
              <div className="space-y-3">
                {[
                  { label: "Upfront cost", theirs: "£3,000–£8,000+", ours: "£0 — free build" },
                  { label: "See it before paying", theirs: "No", ours: "Yes — always" },
                  { label: "Monthly cost", theirs: "Hosting extra", ours: "£99 all-in" },
                  { label: "Time to live", theirs: "Weeks to months", ours: "Under a week" },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0 items-center">
                    <span className="text-xs uppercase tracking-widest text-gray-400">{row.label}</span>
                    <span className="text-sm text-gray-400 line-through text-center">{row.theirs}</span>
                    <span className="text-sm font-semibold text-right" style={{ color: "var(--cyan-600)" }}>{row.ours}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "var(--ink-900)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateIn className="mb-16">
            <p className="eyebrow mb-5">Why local businesses choose us</p>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white leading-none max-w-xl">
              Not your average agency.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {reasons.map((r, i) => (
              <AnimateIn key={r.num} delay={i * 80}>
                <div className="p-8 h-full" style={{ backgroundColor: "var(--ink-900)" }}>
                  <span className="display text-5xl mb-6 block" style={{ color: "var(--ink-700)" }}>{r.num}</span>
                  <h3 className="font-semibold text-white text-lg mb-3">{r.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{r.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateIn>
            <div className="border border-gray-100 p-12 sm:p-20 text-center">
              <p className="eyebrow-dark mb-6">Ready to grow?</p>
              <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)] mb-8 leading-none max-w-3xl mx-auto" style={{ color: "var(--ink-950)" }}>
                Let&apos;s see if we&apos;re a good fit.
              </h2>
              <p className="text-gray-500 text-lg max-w-lg mx-auto mb-10">
                Book a call and we&apos;ll have an honest conversation about your business and whether we can help. No pitch, no pressure.
              </p>
              <Link href="/contact" className="btn-solid px-10 py-4 text-sm">
                Book a Free Call
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
