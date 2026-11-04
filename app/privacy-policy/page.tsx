import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ElevationX UK collects, uses, and protects your personal information.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: (
      <>
        <p>ElevationX UK is a marketing and web design agency operated by Jack Gaffney as a sole trader based in the United Kingdom.</p>
        <p className="mt-4"><strong>Contact details:</strong><br />
          Email: <a href="mailto:jack@elevationxuk.com" className="underline hover:opacity-70">jack@elevationxuk.com</a><br />
          Website: <a href="https://elevationxuk.com" className="underline hover:opacity-70">elevationxuk.com</a>
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "2. What Information We Collect",
    content: (
      <>
        <p>We may collect and process the following personal information:</p>
        <p className="mt-4 font-semibold">From prospective and current clients:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Full name and business name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business address</li>
          <li>Information about your business and marketing needs shared during calls or meetings</li>
        </ul>
        <p className="mt-4 font-semibold">From website visitors:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Name, email, and phone number submitted via contact forms</li>
          <li>Basic usage data such as pages visited and time spent on the site (if analytics are used)</li>
        </ul>
        <p className="mt-4 font-semibold">From leads generated through advertising campaigns we manage on behalf of clients:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Name, email, phone number, and service requirements submitted via Meta Instant Forms</li>
          <li>This data is collected on behalf of our clients and passed directly to them</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the personal information we collect for the following purposes:</p>
        <ul className="mt-4 space-y-2">
          <li>3.1 To contact you about our services and respond to your enquiries.</li>
          <li>3.2 To deliver the services you have engaged us to provide, including building and managing websites and advertising campaigns.</li>
          <li>3.3 To process payments and manage our business relationship with you.</li>
          <li>3.4 To send relevant updates about your account, campaign performance, or our services.</li>
          <li>3.5 To comply with our legal obligations.</li>
        </ul>
        <p className="mt-4">We will never sell your personal information to third parties or use it for purposes other than those listed above.</p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p>We process your personal data under the following legal bases as set out in UK GDPR:</p>
        <ul className="mt-4 space-y-3">
          <li><strong>Contract</strong> — where processing is necessary to deliver services you have engaged us to provide.</li>
          <li><strong>Legitimate Interests</strong> — where we have a legitimate business interest in contacting prospective clients or managing our operations, and this does not override your rights.</li>
          <li><strong>Consent</strong> — where you have given us clear consent to contact you or process your data for a specific purpose.</li>
          <li><strong>Legal Obligation</strong> — where we are required to process data to comply with the law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "5. How We Store and Protect Your Data",
    content: (
      <>
        <ul className="space-y-2">
          <li>5.1 Your data is stored securely using reputable third-party services including Google Workspace and Stripe.</li>
          <li>5.2 We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure.</li>
          <li>5.3 We retain client data for as long as necessary to provide our services and for a period of up to 6 years after the end of our business relationship to comply with tax and legal obligations.</li>
          <li>5.4 We retain prospective client contact details for up to 12 months from the point of last contact.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Sharing Your Information",
    content: (
      <>
        <p>We do not sell or share your personal data with third parties for marketing purposes. We may share your data with:</p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Stripe</strong> — to process payments securely.</li>
          <li><strong>Google Workspace</strong> — for email communication and document storage.</li>
          <li><strong>GoHighLevel</strong> — to manage lead delivery for clients.</li>
          <li><strong>Meta (Facebook/Instagram)</strong> — where advertising campaigns are managed on your behalf.</li>
          <li><strong>Professional advisers</strong> — such as accountants or legal advisers, where necessary.</li>
          <li><strong>HMRC or other regulatory bodies</strong> — where required by law.</li>
        </ul>
        <p className="mt-4">All third-party services we use are required to handle your data in compliance with applicable data protection law.</p>
      </>
    ),
  },
  {
    id: "lead-data",
    title: "7. Lead Data Collected on Behalf of Clients",
    content: (
      <>
        <p>Where we run advertising campaigns on behalf of clients, personal data submitted by homeowners or consumers through those campaigns (such as name, phone, and email) is collected as a data processor acting on behalf of our client (the data controller). This data is:</p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li>Collected solely for the purpose of generating leads for the client&apos;s business.</li>
          <li>Passed directly to the client in real time via GoHighLevel.</li>
          <li>Not used by ElevationX UK for any other purpose.</li>
          <li>Subject to the client&apos;s own privacy policy once received by them.</li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: (
      <>
        <p>Under UK GDPR you have the following rights regarding your personal data:</p>
        <ul className="mt-4 space-y-2">
          <li><strong>Right to access</strong> — you can request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> — you can ask us to correct any inaccurate data.</li>
          <li><strong>Right to erasure</strong> — you can ask us to delete your data in certain circumstances.</li>
          <li><strong>Right to restrict processing</strong> — you can ask us to limit how we use your data.</li>
          <li><strong>Right to object</strong> — you can object to us processing your data based on legitimate interests.</li>
          <li><strong>Right to data portability</strong> — you can request your data in a portable format.</li>
        </ul>
        <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:jack@elevationxuk.com" className="underline hover:opacity-70">jack@elevationxuk.com</a>. We will respond within 30 days.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: (
      <>
        <p>Our website may use cookies to improve your browsing experience. Cookies are small text files stored on your device. We use:</p>
        <ul className="list-disc list-inside mt-4 space-y-1">
          <li><strong>Essential cookies</strong> — required for the website to function correctly.</li>
          <li><strong>Analytics cookies</strong> — to understand how visitors use the site (only where consent has been obtained).</li>
        </ul>
        <p className="mt-4">You can control or disable cookies through your browser settings at any time. Disabling cookies may affect the functionality of the website.</p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "10. Third Party Links",
    content: (
      <p>Our website may contain links to third party websites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies before providing any personal data.</p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: (
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated date at the top of this document. We encourage you to review this policy periodically.</p>
    ),
  },
  {
    id: "complaints",
    title: "12. Complaints",
    content: (
      <>
        <p>If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):</p>
        <p className="mt-4">
          Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">ico.org.uk</a><br />
          Phone: 0303 123 1113
        </p>
        <p className="mt-4">We would always appreciate the opportunity to resolve any concerns directly before you contact the ICO — please reach out to us first at <a href="mailto:jack@elevationxuk.com" className="underline hover:opacity-70">jack@elevationxuk.com</a>.</p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32 px-5 sm:px-8" style={{ backgroundColor: "var(--ink-950)" }}>
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow mb-6">Legal</p>
          <h1 className="display text-[clamp(3rem,8vw,7rem)] text-white max-w-4xl leading-none mb-8">
            Privacy <span style={{ color: "var(--cyan-400)" }}>Policy.</span>
          </h1>
          <p className="text-white/50 text-xl max-w-lg leading-relaxed">
            Last updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-gray-600 leading-relaxed mb-12">
              This Privacy Policy explains how ElevationX UK (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), operated by Jack Gaffney, collects, uses, and protects your personal information. We are committed to protecting your privacy and handling your data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-gray-600 leading-relaxed mb-16">
              If you have any questions about this policy, please contact us at{" "}
              <a href="mailto:jack@elevationxuk.com" className="underline hover:opacity-70" style={{ color: "var(--ink-900)" }}>
                jack@elevationxuk.com
              </a>.
            </p>

            <div className="space-y-14">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-xl font-bold mb-4" style={{ color: "var(--ink-900)" }}>
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-2">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
