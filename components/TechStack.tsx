"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  { label: "Frontend", icon: "fas fa-code", color: "#6366f1", items: [{ name: "React / Next.js", level: 95 }, { name: "TypeScript", level: 92 }, { name: "Vue.js", level: 80 }, { name: "Tailwind CSS", level: 90 }] },
  { label: "Backend", icon: "fas fa-server", color: "#ec4899", items: [{ name: "Node.js / Express", level: 92 }, { name: "Python / Django", level: 85 }, { name: "GraphQL / REST", level: 90 }, { name: "WebSockets", level: 82 }] },
  { label: "DevOps & Cloud", icon: "fas fa-cloud", color: "#06b6d4", items: [{ name: "Docker / K8s", level: 85 }, { name: "AWS / Azure", level: 82 }, { name: "CI/CD Pipelines", level: 88 }, { name: "PostgreSQL / Redis", level: 90 }] },
];

function SkillBar({ name, level, index, color }: { name: string; level: number; index: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-text-light font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-border/50 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={isInView ? { width: `${level}%` } : {}} transition={{ duration: 1.2, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }} className="h-full rounded-full relative" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)`, boxShadow: isInView ? `0 0 20px ${color}40` : "none" }}>
          <div className="absolute inset-0 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${color}30)` }} />
        </motion.div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="tech" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="container">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase px-3 py-1 bg-accent-light rounded-full border border-accent/10">02 — Tech Stack</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-[2.6rem] font-bold text-text-white">Tools I use daily to <span className="gradient-text">build amazing products</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.label} custom={i + 2} variants={fadeUp} whileHover={{ y: -6 }} className="relative glass rounded-2xl p-6 overflow-hidden group transition-all duration-300" style={{ borderColor: `${cat.color}10` }}>
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: cat.color }} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${cat.color}15` }}>
                    <i className={cat.icon} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-text-white">{cat.label}</h3>
                </div>
                <div className="space-y-5">
                  {cat.items.map((skill, j) => (<SkillBar key={skill.name} name={skill.name} level={skill.level} index={j} color={cat.color} />))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
