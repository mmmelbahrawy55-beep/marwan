"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "AWS", "Git", "Python",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-[#fafafa] mb-2">About</h2>
          <p className="text-sm text-[#71717a] mb-10">A bit about who I am and what I do.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-4">
              Full Stack Developer and recent Computer Science graduate from Cairo University
              (GPA: 3.7/4.0). I&apos;ve spent the last few years building products — from
              e-commerce platforms to enterprise management systems.
            </p>
            <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-6">
              I care about clean architecture, performance, and shipping things that work.
              Currently looking for an internship/training opportunity to grow and contribute
              to real-world products.
            </p>
            <div className="flex items-center gap-2 text-[13px] text-[#22c55e]">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Available for opportunities
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
            <p className="text-[11px] font-mono text-[#52525b] uppercase tracking-wider mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-[13px] px-3 py-1.5 rounded-lg bg-[#111113] text-[#a1a1aa] border border-[#27272a] hover:border-[#3f3f46] hover:text-[#d4d4d8] transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
