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

function useTypewriter(words: string[], speed = 60) {
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
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-[glow-pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink/5 rounded-full blur-[100px] animate-[glow-pulse_4s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan/3 rounded-full blur-[80px] animate-[glow-pulse_4s_ease-in-out_infinite_4s]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />
        <Scene3D mouse={mouse} />
      </div>

      <div className="relative z-10 container pt-32 pb-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 text-xs font-medium text-accent glass rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-sm md:text-base font-mono text-text mb-6 tracking-widest uppercase"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.02] tracking-[-0.03em]"
          >
            <span className="text-text-white">Marwan</span>
            <br />
            <span className="gradient-text">Mohamed</span>
          </motion.h1>

          {/* Typed title */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-text-light flex items-center flex-wrap"
          >
            <span className="mr-2">I build</span>
            <span className="text-text-white font-semibold min-w-[12ch]">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[0.9em] bg-accent ml-0.5 align-middle rounded-full"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-text max-w-2xl leading-relaxed"
          >
            Full Stack Developer with 4+ years of experience crafting robust,
            scalable web applications. I transform complex problems into
            elegant, production-ready solutions that users love.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-accent rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-dark to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">View My Work</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-medium text-text-light glass rounded-full hover:text-text-white hover:border-accent/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            custom={6}
            variants={fadeUp}
            className="mt-12 flex items-center gap-4"
          >
            {[
              { icon: "github", href: "https://github.com/marwan", label: "GitHub" },
              { icon: "linkedin", href: "https://linkedin.com/in/marwan", label: "LinkedIn" },
              { icon: "x-twitter", href: "https://twitter.com/marwan", label: "Twitter" },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-border text-text hover:border-accent/30 hover:text-accent hover:bg-accent-light transition-all duration-300 hover:-translate-y-1"
                aria-label={s.label}
              >
                <i className={`fab fa-${s.icon} text-lg`} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mt-auto"
      >
        <div className="border-y border-border/50 py-4 overflow-hidden">
          <div className="marquee-track">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-mono text-text/40 whitespace-nowrap uppercase tracking-widest">
                {t}
                <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-mono text-text/40 tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border border-border/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
