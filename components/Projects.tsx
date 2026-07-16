"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured e-commerce platform with real-time inventory management, Stripe payments, role-based admin dashboard, and 50K+ monthly active users.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/5",
    accentColor: "#6366f1",
    icon: "fa-solid fa-cart-shopping",
    links: { code: "#", live: "#" },
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time business analytics platform featuring interactive D3.js charts, custom report builder, data export, and sub-second query performance on 1M+ records.",
    tech: ["Next.js", "TypeScript", "D3.js", "MongoDB", "Docker"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    accentColor: "#10b981",
    icon: "fa-solid fa-chart-line",
    links: { code: "#", live: "#" },
  },
  {
    title: "Real-Time Chat App",
    desc: "Scalable messaging platform with WebSocket support, end-to-end encryption, file sharing, typing indicators, and 10K+ concurrent user capacity.",
    tech: ["React", "Socket.io", "Node.js", "Redis", "AWS"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/5",
    accentColor: "#06b6d4",
    icon: "fa-solid fa-comments",
    links: { code: "#", live: "#" },
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 10, y: x * 10 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 * index, duration: 0.6, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="group perspective-[1200px] cursor-pointer"
      >
        <motion.div
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="relative glass rounded-2xl overflow-hidden transition-colors duration-300"
          style={{
            transformStyle: "preserve-3d",
            borderColor: isHovered ? `${project.accentColor}20` : undefined,
          }}
        >
          {/* Top glow on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
          />

          {/* Image area */}
          <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
            <motion.div
              animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ color: project.accentColor }}
            >
              <i className={project.icon} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-text-white group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-text leading-relaxed">
              {project.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: project.accentColor,
                    background: `${project.accentColor}10`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4">
              <a href={project.links.code} className="text-xs text-text hover:text-accent transition-colors flex items-center gap-1.5 font-medium">
                <i className="fa-brands fa-github" /> Code
              </a>
              <a href={project.links.live} className="text-xs text-text hover:text-accent transition-colors flex items-center gap-1.5 font-medium">
                <i className="fa-solid fa-up-right-from-square" /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-36 relative">
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
              03 — Projects
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-[2.6rem] font-bold text-text-white"
          >
            Featured <span className="gradient-text">work</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/marwan"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-text-light glass rounded-full hover:text-text-white hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fa-brands fa-github" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
