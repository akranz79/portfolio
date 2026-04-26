"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "~/home" },
  { href: "/audit", label: "~/auditoria" },
  { href: "/cases", label: "~/cases" },
  { href: "/sandbox", label: "~/sandbox" },
  { href: "/about", label: "~/sobre" },
  { href: "/contact", label: "~/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2937] bg-[#0B0E14]/95 backdrop-blur-sm">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#4CC9F0] hover:text-[#4CC9F0]/80 transition-colors"
          >
            <Terminal size={16} strokeWidth={1.5} />
            <span className="font-mono text-sm tracking-wider">sistema:~$</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-mono text-xs px-3 py-1.5 rounded transition-all duration-200 ${
                    isActive
                      ? "text-[#4CC9F0] bg-[#4CC9F0]/10"
                      : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Status indicator */}
          <div className="hidden md:flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
            <span className="font-mono text-[10px] text-[#9CA3AF] tracking-widest uppercase">
              online
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#9CA3AF] hover:text-[#E5E7EB] p-1 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[#1F2937] py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-xs px-3 py-2 rounded transition-all ${
                    isActive
                      ? "text-[#4CC9F0] bg-[#4CC9F0]/10"
                      : "text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#1F2937]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
