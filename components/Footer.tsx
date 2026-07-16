import Link from "next/link";
import Image from "next/image";

const links = {
  Services: [
    { label: "Lead Generation", href: "/lead-generation" },
    { label: "Web Design", href: "/web-design" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Start a Project", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--ink-950)" }} className="text-gray-500">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="ElevationX UK"
                width={200}
                height={60}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-gray-600">
              Web design and lead generation built for ambitious local businesses across the UK.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">{group}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-150">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-700" style={{ borderColor: "var(--ink-800)" }}>
          <p>© {new Date().getFullYear()} ElevationX UK. All rights reserved.</p>
          <a href="mailto:jack@elevationxuk.com" className="hover:text-gray-400 transition-colors">
            jack@elevationxuk.com
          </a>
        </div>
      </div>
    </footer>
  );
}
