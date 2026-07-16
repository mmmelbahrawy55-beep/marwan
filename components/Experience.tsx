"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    num: "01",
    period: "2023 — Present",
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    items: [
      "Architected microservices platform serving 100K+ MAU with 99.9% uptime",
      "Led 5 engineers, reducing deployment cycles from 2 weeks to 2 days via CI/CD",
      "Built a reusable component library adopted across 3 product teams",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    num: "02",
    period: "2021 — 2023",
    role: "Full Stack Developer",
    company: "StartupHub",
    items: [
      "Developed 5+ production apps from concept to deployment, owning the full SDLC",
      "Implemented real-time features using WebSockets, serving 10K+ concurrent users",
      "Reduced API response times by 40% via query optimization & Redis caching",
    ],
    tags: ["Vue.js", "Express", "MongoDB", "Redis"],
  },
  {
    num: "03",
    period: "2020 — 2021",
    role: "Junior Web Developer",
    company: "Digital Agency Co.",
    items: [
      "Delivered 15+ client projects across diverse industries on time and within budget",
      "Improved Lighthouse performance scores from 55 to 92 via code splitting & lazy loading",
      "Introduced modern tooling (Webpack, ESLint, Prettier) to the development workflow",
    ],
    tags: ["JavaScript", "React", "Python", "Django"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase px-3 py-1 bg-accent-light rounded-full border border-accent/10">
              04 — Experience
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-[2.6rem] font-bold text-text-white"
          >
            Where I&apos;ve <span className="gradient-text">made an impact</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-5"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.num}
              custom={i + 2}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              className="group glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/15 relative overflow-hidden"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-4xl font-bold text-border/50 group-hover:text-accent/20 transition-colors font-mono leading-none">
                  {exp.num}
                </span>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                    <span className="text-xs font-mono text-accent">{exp.period}</span>
                    <span className="text-xs text-text/50">•</span>
                    <span className="text-sm font-medium text-text-light">{exp.company}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-text-white mb-4">
                    {exp.role}
                  </h3>

                  <ul className="space-y-2.5 mb-5">
                    {exp.items.map((item) => (
                      <li key={item} className="text-sm text-text flex items-start gap-3 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-accent/80 bg-accent/8 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
