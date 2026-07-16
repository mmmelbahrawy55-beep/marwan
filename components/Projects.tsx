"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "ELITE — Premium Fashion",
    desc: "End-to-end luxury fashion e-commerce platform featuring dynamic product collections, responsive lookbook, shopping cart system, and a bold brand identity designed for high-end retail.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-indigo-500/10 via-purple-500/5 to-pink-500/[0.02]",
    accentColor: "#5558e6",
    icon: "fa-solid fa-shirt",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://shop-plum-theta-83.vercel.app/" },
  },
  {
    title: "ELBA 7RAWY — Advertising",
    desc: "Full-stack digital presence for a leading advertising agency. Includes a dynamic materials catalog with 14+ product categories, real-time pricing, project workflow tracking, and integrated client contact system.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/[0.02]",
    accentColor: "#16a34a",
    icon: "fa-solid fa-bullhorn",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://elba7rawy-91214.web.app/" },
  },
  {
    title: "Company Management System",
    desc: "Comprehensive enterprise resource planning (ERP) system covering employee management, client relations, inventory control, sales tracking, accounting, and project oversight — built with secure authentication and real-time data synchronization.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    gradient: "from-cyan-500/10 via-blue-500/5 to-indigo-500/[0.02]",
    accentColor: "#0891b2",
    icon: "fa-solid fa-building",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://company-management-system-six.vercel.app/" },
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
      transition={{ delay: 0.15 * index, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
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
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
          />

          <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(85,88,230,0.03),transparent_70%)]" />
            <motion.div
              animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="text-5xl opacity-15 group-hover:opacity-30 transition-opacity duration-300"
              style={{ color: project.accentColor }}
            >
              <i className={project.icon} />
            </motion.div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#1a1d2e] group-hover:text-[#5558e6] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-[#5a6178] leading-relaxed">
              {project.desc}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: project.accentColor,
                    background: `${project.accentColor}08`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4">
              <a href={project.links.code} className="text-xs text-[#5a6178] hover:text-[#5558e6] transition-colors flex items-center gap-1.5 font-medium">
                <i className="fa-brands fa-github" /> Code
              </a>
              <a href={project.links.live} className="text-xs text-[#5a6178] hover:text-[#5558e6] transition-colors flex items-center gap-1.5 font-medium">
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
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5558e6]/10 to-transparent" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#5558e6]/30" />
            <span className="text-[11px] font-mono text-[#5558e6] tracking-[0.2em] uppercase px-3 py-1 bg-[#5558e6]/[0.05] rounded-full border border-[#5558e6]/10">
              03 — Projects
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#5558e6]/30" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-[2.6rem] font-bold text-[#1a1d2e]"
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
            href="https://github.com/mmmelbahrawy55-beep"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-[#3d4460] glass rounded-full hover:text-[#1a1d2e] hover:border-[#5558e6]/20 transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fa-brands fa-github" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
