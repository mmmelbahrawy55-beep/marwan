"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "ELITE",
    subtitle: "Premium Fashion E-Commerce",
    desc: "End-to-end luxury fashion e-commerce platform featuring dynamic product collections, responsive lookbook, shopping cart system, and bold brand identity.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    color: "#8b5cf6",
    live: "https://shop-plum-theta-83.vercel.app/",
    code: "https://github.com/mmmelbahrawy55-beep",
  },
  {
    title: "ELBA 7RAWY",
    subtitle: "Advertising Platform",
    desc: "Full-stack digital presence for a leading advertising agency with dynamic materials catalog (14+ products), real-time pricing, and client contact system.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    color: "#10b981",
    live: "https://elba7rawy-91214.web.app/",
    code: "https://github.com/mmmelbahrawy55-beep",
  },
  {
    title: "Company Manager",
    subtitle: "Enterprise Management System",
    desc: "Comprehensive ERP system covering employee management, client relations, inventory control, sales tracking, accounting, and project oversight with real-time data sync.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "#06b6d4",
    live: "https://company-management-system-six.vercel.app/",
    code: "https://github.com/mmmelbahrawy55-beep",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-[#fafafa] mb-2">Projects</h2>
          <p className="text-sm text-[#71717a] mb-12">Selected work I&apos;ve built and shipped.</p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Screenshot placeholder */}
              <div className={`relative rounded-xl overflow-hidden border border-[#27272a] bg-[#111113] aspect-[16/10] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${project.color}15` }}>
                      <span className="text-lg font-bold" style={{ color: project.color }}>{project.title[0]}</span>
                    </div>
                    <p className="text-xs text-[#52525b]">{project.subtitle}</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0a0a0b]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href={project.live} target="_blank" className="px-4 py-2 text-xs font-medium text-white bg-[#3b82f6] rounded-lg hover:bg-[#2563eb] transition-colors">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" className="px-4 py-2 text-xs font-medium text-[#d4d4d8] border border-[#3f3f46] rounded-lg hover:border-[#52525b] transition-colors">
                    Source Code
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-[11px] font-mono uppercase tracking-wider mb-2" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-[#fafafa] mb-3">{project.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#18181b] text-[#71717a] border border-[#27272a]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
