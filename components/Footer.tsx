"use client";

import { motion } from "framer-motion";

const socials = [
  { icon: "fa-brands fa-github", href: "https://github.com/mmmelbahrawy55-beep" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#e2e5f1]/50 py-12">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5558e6]/10 to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-[#1a1d2e] tracking-tight">
              <span className="gradient-text">M</span>arwan
            </span>
            <span className="text-sm text-[#5a6178]/40">&copy; {year}</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.icon}
                href={s.href}
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#e2e5f1] text-[#5a6178] hover:border-[#5558e6]/20 hover:text-[#5558e6] hover:bg-[#5558e6]/[0.04] transition-all duration-300"
              >
                <i className={s.icon} />
              </motion.a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] text-[#5a6178]/30 font-mono tracking-wider">
          Designed & Built with passion by Marwan Mohamed
        </p>
      </div>
    </footer>
  );
}
