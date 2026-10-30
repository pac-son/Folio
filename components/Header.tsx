"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Home", "/#home"],
  ["Projects", "/#projects"],
  ["About", "/#about"],
  ["Experience", "/#experience"],
  ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#deded5] bg-[#f7f7f2]/95 backdrop-blur-sm">
      <div className="page flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="mono text-sm font-bold tracking-tight">
          PA<span className="text-[#bd542c]">.</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link className="navlink" href={href} key={label}>
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/pac-son"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="navlink mono"
          >
            GitHub ↗
          </a>
          <Link
            href="/resume"
            className="border border-[#171714] px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-[#171714] hover:text-white"
          >
            Resume
          </Link>
        </nav>
        <button
          className="mono text-sm md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="page flex flex-col gap-4 border-t border-[#deded5] py-5 md:hidden" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link onClick={() => setOpen(false)} className="navlink" href={href} key={label}>
              {label}
            </Link>
          ))}
          <a
            href="https://github.com/pac-son"
            target="_blank"
            rel="noopener noreferrer"
            className="navlink mono"
          >
            GitHub ↗
          </a>
          <Link
            href="/resume"
            onClick={() => setOpen(false)}
            className="navlink font-medium text-[#bd542c]"
          >
            View Resume →
          </Link>
        </nav>
      )}
    </header>
  );
}
