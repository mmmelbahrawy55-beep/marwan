"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[13px] text-[#71717a] font-mono mb-4">Full Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#fafafa] leading-[1.1] tracking-tight max-w-3xl">
            I build products<br />
            <span className="gradient-text">that matter.</span>
          </h1>
          <p className="mt-6 text-[15px] text-[#71717a] max-w-lg leading-relaxed">
            Marwan Mohamed — based in Cairo, Egypt. I craft scalable web applications
            with clean code and thoughtful design.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="px-5 py-2.5 text-[13px] font-medium text-white bg-[#3b82f6] rounded-lg hover:bg-[#2563eb] transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 text-[13px] font-medium text-[#a1a1aa] border border-[#27272a] rounded-lg hover:border-[#3f3f46] hover:text-[#d4d4d8] transition-colors">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
