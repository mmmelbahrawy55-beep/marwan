"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tech", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120;
        if (window.scrollY >= top) current = section.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[#e2e5f1]/50 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="#home" className="flex items-center gap-1 group">
          <span className="text-xl font-extrabold gradient-text">&lt;M</span>
          <span className="text-xl font-extrabold text-[#1a1d2e]">MW</span>
          <span className="text-xl font-extrabold gradient-text">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? "text-[#1a1d2e]"
                    : "text-[#6b7094] hover:text-[#3d4460]"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-[#5558e6]/[0.06] border border-[#5558e6]/10 rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#5558e6] border border-[#5558e6]/20 rounded-xl hover:bg-[#5558e6]/[0.04] transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          CV
        </a>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white bg-[#5558e6] rounded-xl hover:bg-[#4345c9] transition-all duration-200 hover:shadow-[0_0_20px_rgba(85,88,230,0.2)]"
        >
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[#1a1d2e] rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-[#1a1d2e] rounded-full"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-[#1a1d2e] rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[#e2e5f1]/50 overflow-hidden"
          >
            <ul className="container py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2.5 px-4 text-sm font-medium rounded-lg transition-colors ${
                      active === link.href.slice(1)
                        ? "text-[#5558e6] bg-[#5558e6]/[0.04]"
                        : "text-[#6b7094] hover:text-[#1a1d2e]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 px-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#5558e6] rounded-xl w-full justify-center"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
