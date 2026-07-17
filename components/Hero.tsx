"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const titles = [
  "Full Stack Applications",
  "Scalable APIs",
  "Beautiful Interfaces",
  "Cloud-Native Solutions",
  "Production-Ready Code",
];

function useTypewriter(words: string[], speed = 55) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), speed / 2);
      } else {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, wordIdx, isDeleting, words, speed]);

  return text;
}

const techMarquee = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Docker",
  "PostgreSQL", "AWS", "GraphQL", "Redis", "Tailwind", "Git",
  "Microservices", "CI/CD", "REST APIs",
];

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  }, []);

  const typedText = useTypewriter(titles);

  return (
    <section
      id="home"
      onMouseMove={handleMouse}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-[#6366f1]/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#ec4899]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#06b6d4]/[0.02] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
          }}
        />
        <Scene3D mouse={mouse} />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container pt-32 pb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 text-xs font-medium text-[#6366f1] glass rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                </span>
                Available for opportunities
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm font-mono text-[#8888aa] mb-4 tracking-[0.2em] uppercase"
              >
                Hi, my name is
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.02] tracking-[-0.03em]"
              >
                <span className="text-[#eeeeff]">Marwan</span>
                <br />
                <span className="gradient-text">Mohamed</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-5 text-lg sm:text-xl md:text-2xl font-light text-[#bbbbdd] flex items-center flex-wrap min-h-[2em]"
              >
                <span className="mr-2">I build</span>
                <span className="text-[#eeeeff] font-semibold min-w-[12ch]">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2.5px] h-[0.85em] bg-[#6366f1] ml-0.5 align-middle rounded-full"
                  />
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-5 text-base md:text-lg text-[#8888aa] max-w-xl leading-relaxed"
              >
                Full Stack Developer with 4+ years of experience crafting robust,
                scalable web applications. I transform complex problems into
                elegant, production-ready solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-white bg-[#6366f1] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">View My Work</span>
                  <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3 text-sm font-medium text-[#bbbbdd] glass rounded-xl hover:text-[#eeeeff] hover:border-[#6366f1]/20 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Get In Touch
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex items-center gap-3"
              >
                {[
                  { icon: "github", href: "https://github.com/mmmelbahrawy55-beep" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    className="group w-10 h-10 flex items-center justify-center rounded-xl border border-[#1a1a35] text-[#8888aa] hover:border-[#6366f1]/30 hover:text-[#6366f1] hover:bg-[#6366f1]/[0.06] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <i className={`fab fa-${s.icon} text-base`} />
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10"
      >
        <div className="border-y border-[#1a1a35]/50 py-3.5 overflow-hidden">
          <div className="marquee-track">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="flex items-center gap-3 text-xs font-mono text-[#8888aa]/30 whitespace-nowrap uppercase tracking-[0.2em]">
                {t}
                <span className="w-1 h-1 rounded-full bg-[#6366f1]/20" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[9px] font-mono text-[#8888aa]/30 tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-7 border border-[#1a1a35]/60 rounded-full flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[3px] h-1.5 bg-[#6366f1] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
