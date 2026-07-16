import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call or get in touch. Web design and lead generation for local businesses across the UK.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] text-white max-w-4xl leading-none mb-8">
            Let&apos;s talk about<br />
            <span style={{ color: "var(--cyan-400)" }}>growing your business.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-lg leading-relaxed">
            No hard sell, no jargon — a straight conversation about what your business needs online.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Form */}
            <div>
              <p className="eyebrow-dark mb-6">Send a message</p>
              {/* PLACEHOLDER: verify this Formspree form ID still forwards to your new inbox, or create a fresh form for elevationxuk.com */}
              <form action="https://formspree.io/f/xeedrjqo" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                      Name <span style={{ color: "var(--cyan-600)" }}>*</span>
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your name"
                      className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-600 transition bg-white"
                      style={{ borderRadius: 0 }} />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                      Business Name
                    </label>
                    <input id="business" name="business" type="text" placeholder="Your company"
                      className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-cyan-600 transition bg-white"
                      style={{ borderRadius: 0 }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                    Email <span style={{ color: "var(--cyan-600)" }}>*</span>
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@yourbusiness.co.uk"
                    className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition bg-white"
                    style={{ borderRadius: 0 }} />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="07XXX XXXXXX"
                    className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition bg-white"
                    style={{ borderRadius: 0 }} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                    I&apos;m interested in <span style={{ color: "var(--cyan-600)" }}>*</span>
                  </label>
                  <select id="service" name="service" required
                    className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 focus:outline-none transition bg-white"
                    style={{ borderRadius: 0 }}>
                    <option value="">Select an option</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="web-design">Web Design (£99/month)</option>
                    <option value="both">Both Lead Gen & Web Design</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--ink-700)" }}>
                    Tell us about your business
                  </label>
                  <textarea id="message" name="message" rows={5}
                    placeholder="What services do you offer? What's your main challenge right now?"
                    className="w-full px-4 py-3.5 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition resize-none bg-white"
                    style={{ borderRadius: 0 }} />
                </div>

                <button type="submit" className="btn-solid w-full justify-center py-4">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">We respond within one working day.</p>
              </form>
            </div>

            {/* Right: direct contact + Calendly */}
            <div className="space-y-8">
              <div>
                <p className="eyebrow-dark mb-6">Or reach out directly</p>

                <a href="mailto:jack@elevationxuk.com"
                  className="group flex gap-5 items-center p-7 border border-gray-100 hover:border-gray-300 transition-colors mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "var(--ink-950)" }}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <p className="font-semibold text-sm group-hover:underline" style={{ color: "var(--ink-900)" }}>
                      jack@elevationxuk.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Calendly embed */}
              <div>
                <p className="eyebrow-dark mb-6">Book a free call</p>
                {/* PLACEHOLDER: set up a Calendly link under your ElevationX UK account and paste the data-url below */}
                <div className="calendly-inline-widget" data-url="https://calendly.com/jack-elevationxuk/30min" style={{minWidth:'320px',height:'600px'}} />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                Usually responds within a few hours · Mon–Fri
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
