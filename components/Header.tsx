"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "About", href: "/about" },
  { label: "Lead Generation", href: "/lead-generation" },
  { label: "Web Design", href: "/web-design" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center group">
      <Image
        src="/logo.png"
        alt="ElevationX UK"
        width={220}
        height={66}
        className="h-9 sm:h-10 w-auto"
        priority
      />
    </Link>
  );
}

export { Logo };

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="border-b border-white/10 sticky top-0 z-50"
      style={{ backgroundColor: "var(--ink-950)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-24">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-solid py-2.5 px-5 text-xs">
              Start a Project
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden text-white/60 hover:text-white p-2"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "var(--ink-950)" }}>
          <div className="max-w-7xl mx-auto px-5 py-5 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-white/60 hover:text-white text-sm font-medium border-b border-white/5 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-solid w-full justify-center">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
