import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "ElevationX UK is a web design and lead generation agency built for ambitious local businesses across the UK.",
};

const values = [
  {
    num: "01",
    title: "Local business focused",
    body: "We don't dilute our focus across every industry going. We work with local, service-based businesses — which means we understand your customers, your market, and what actually converts.",
  },
  {
    num: "02",
    title: "Honest by default",
    body: "We'll tell you what works, not what you want to hear. If something isn't going to deliver results, we'll say so before we take your money.",
  },
  {
    num: "03",
    title: "Fast & reliable",
    body: "Straight communication, realistic timelines, no disappearing acts. You'll always know where your project stands.",
  },
  {
    num: "04",
    title: "Built to convert",
    body: "Design decisions, copy, structure — everything is made with one goal in mind: more qualified enquiries for your business.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">About</p>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] text-white max-w-4xl leading-none mb-8">
            Built for growth.<br />
            <span style={{ color: "var(--cyan-400)" }}>Built for local business.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl leading-relaxed">
            ElevationX UK is a specialist agency focused on one thing: helping local businesses across the UK win more work online.
          </p>
        </div>
      </section>

      {/* Photo + mission */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="eyebrow-dark mb-6">Our mission</p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mb-8 leading-none" style={{ color: "var(--ink-950)" }}>
                Great local businesses deserve to be found.
              </h2>
              {/* PLACEHOLDER: replace with real company story */}
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  ElevationX UK was built around a simple observation: local businesses across the UK are losing revenue every week — not because they do poor work, but because their phone isn&apos;t ringing with the right enquiries.
                </p>
                <p>
                  The trades and local service industries are full of people who are exceptional at what they do but nearly invisible to the customers looking for them. No consistent pipeline, no system — just word of mouth and hoping for the best.
                </p>
                <p>
                  We fix that. By specialising in local, service-based businesses, we&apos;ve developed a sharp understanding of your market, your customers, and what it actually takes to turn online attention into booked jobs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="eyebrow mb-6">How we work</p>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)] text-white mb-16 max-w-xl leading-none">
            Straight talking.<br />Results focused.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map((v) => (
              <div key={v.num} className="p-8" style={{ backgroundColor: "var(--ink-950)" }}>
                <span className="display text-5xl mb-6 block" style={{ color: "var(--ink-800)" }}>{v.num}</span>
                <h3 className="font-semibold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Community */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow-dark mb-6">Community</p>
              <h2 className="display text-[clamp(2rem,4vw,3.5rem)] mb-8 leading-none" style={{ color: "var(--ink-950)" }}>
                More than a web agency.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Beyond web design and lead generation, ElevationX UK is building a community of local business owners across the UK — sharing referrals, knowledge, and supporting each other&apos;s growth.
              </p>
              <Link href="/contact" className="btn-solid px-8 py-4">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-900)" }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] text-white mb-8 leading-none">Ready to grow your business?</h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto mb-10">
            Book a free call — no commitment, no jargon. Let&apos;s talk about what you need.
          </p>
          <Link href="/contact" className="btn-light px-10 py-4">
            Book a Free Call
          </Link>
        </div>
      </section>
    </>
  );
}
