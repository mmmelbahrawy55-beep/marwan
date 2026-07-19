"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/10 to-transparent" />
      <div className="container">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6366f1]/30" />
              <span className="text-[11px] font-mono text-[#6366f1] tracking-[0.2em] uppercase px-3 py-1 bg-[#6366f1]/[0.06] rounded-full border border-[#6366f1]/10">01 — About</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6366f1]/30" />
            </motion.div>
            <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-[2.6rem] font-bold text-[#eeeeff] leading-[1.15] tracking-tight">
              I care about product <span className="gradient-text">as much as code</span>
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="mt-6 text-[#aaaacc] leading-[1.85]">
              Full Stack Developer based in Cairo, Egypt. Over the past 4+ years,
              I&apos;ve worked with startups and agencies to build products that users love.
              My sweet spot is the intersection of thoughtful frontend experiences and
              rock-solid backend architecture.
            </motion.p>
            <motion.p custom={3} variants={fadeUp} className="mt-4 text-[#aaaacc] leading-[1.85]">
              I believe great engineers are product-minded. I don&apos;t just implement
              specs — I ask questions, challenge assumptions, and advocate for the user.
              Every line of code should earn its place.
            </motion.p>
            <motion.div custom={4} variants={fadeUp} className="mt-8 inline-flex items-center gap-3 text-sm font-mono glass rounded-full px-5 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
              </span>
              <span className="text-[#bbbbdd]">Open to opportunities</span>
            </motion.div>
          </div>
          <motion.div custom={2} variants={fadeUp} className="flex flex-col gap-4">
            <div className="glass rounded-2xl p-8 text-center overflow-hidden glow-border group hover:border-[#6366f1]/15 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/[0.03] to-transparent" />
              <div className="relative">
                <span className="text-4xl md:text-5xl font-bold gradient-text">B.Sc.</span>
                <p className="mt-3 text-sm text-[#aaaacc] uppercase tracking-[0.1em] font-medium">Computer Science — El Ebtekar University</p>
                <p className="mt-1 text-xs text-[#7777aa] font-mono">GPA: 3.7 / 4.0 — Graduated with Honors</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 group hover:border-[#6366f1]/15 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
                  <i className="fa-solid fa-code text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#eeeeff]">4+ Years Experience</h3>
                  <p className="text-xs text-[#7777aa]">Building production-ready applications</p>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 group hover:border-[#6366f1]/15 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ec4899]/10 flex items-center justify-center">
                  <i className="fa-solid fa-rocket text-[#ec4899]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#eeeeff]">Full Stack Specialist</h3>
                  <p className="text-xs text-[#7777aa]">Frontend to Backend & Cloud Deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
