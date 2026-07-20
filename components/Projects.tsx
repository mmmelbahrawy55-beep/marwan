"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "ELITE",
    subtitle: "Premium Fashion E-Commerce",
    desc: "End-to-end luxury fashion e-commerce platform featuring dynamic product collections, responsive lookbook, shopping cart system, and a bold brand identity designed for high-end retail.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-pink-500/5",
    accentColor: "#6366f1",
    icon: "fa-solid fa-shirt",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://shop-plum-theta-83.vercel.app/" },
  },
  {
    title: "The Gourmet Bar",
    subtitle: "Premium Restaurant",
    desc: "Premium restaurant website featuring elegant menu presentation, reservation system, gallery showcase, and responsive design crafted for a luxury dining experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/5",
    accentColor: "#f59e0b",
    icon: "fa-solid fa-utensils",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://resturant-gray-three.vercel.app/" },
  },
  {
    title: "ELBA 7RAWY",
    subtitle: "Advertising Platform",
    desc: "Full-stack digital presence for a leading advertising agency. Includes a dynamic materials catalog with 14+ product categories, real-time pricing, project workflow tracking, and integrated client contact system.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    accentColor: "#10b981",
    icon: "fa-solid fa-bullhorn",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://elba7rawy-91214.web.app/" },
  },
  {
    title: "Company Manager",
    subtitle: "Enterprise Management System",
    desc: "Comprehensive ERP system covering employee management, client relations, inventory control, sales tracking, accounting, and project oversight — built with secure authentication and real-time data sync.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/5",
    accentColor: "#06b6d4",
    icon: "fa-solid fa-building",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://company-management-system-six.vercel.app/" },
  },
  {
    title: "ROAST Café",
    subtitle: "Premium Coffee Experience",
    desc: "Elegant coffee shop website featuring an immersive hero experience, animated menu sections with chef's picks, photo gallery, customer reviews, and a seamless reservation & ordering flow — all crafted with smooth scroll animations and a warm luxury aesthetic.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/5",
    accentColor: "#f97316",
    icon: "fa-solid fa-mug-hot",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://cafe-ten-topaz.vercel.app/" },
  },
  {
    title: "Al-Shifa Hospital",
    subtitle: "Healthcare Platform",
    desc: "Full-featured Arabic-first hospital website with real-time appointment booking, 8+ medical department listings, doctor profiles with specializations, patient testimonials, and a live appointment notification feed — built for scalability and accessibility.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-teal-500/20 via-emerald-500/10 to-green-500/5",
    accentColor: "#14b8a6",
    icon: "fa-solid fa-hospital",
    links: { code: "https://github.com/mmmelbahrawy55-beep", live: "https://alshifa-hospital-hero2.vercel.app/" },
  },
];

function ProjectCard({ project, index, isInView }: { project: (typeof projects)[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 8, y: x * 8 });
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => handleMove(e.clientX, e.clientY), [handleMove]);
  const onTouchMove = useCallback((e: React.TouchEvent) => { handleMove(e.touches[0].clientX, e.touches[0].clientY); }, [handleMove]);
  const onMouseLeave = useCallback(() => { setRotate({ x: 0, y: 0 }); setIsHovered(false); }, []);
  const onTouchEnd = useCallback(() => { setRotate({ x: 0, y: 0 }); setIsHovered(false); }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
    >
      <div ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseEnter={() => setIsHovered(true)}
        onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onTouchStart={() => setIsHovered(true)}
        className="group perspective-[1200px] cursor-pointer">
        <motion.div
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="relative glass rounded-2xl overflow-hidden transition-colors duration-300"
          style={{ transformStyle: "preserve-3d", borderColor: isHovered ? `${project.accentColor}20` : undefined }}
        >
          {/* Top glow */}
          <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />

          {/* Image area with browser mockup */}
          <div className={`h-52 bg-gradient-to-br ${project.gradient} flex flex-col relative overflow-hidden`}>
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                <div className="w-2 h-2 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-white/10 rounded-md px-2 py-0.5 text-[9px] text-white/40 font-mono truncate">
                  {project.links.live.replace("https://", "")}
                </div>
              </div>
            </div>

            {/* Preview content */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
              <motion.div animate={isHovered ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }} className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ color: project.accentColor }}>
                <i className={project.icon} />
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-bold text-[#eeeeff] group-hover:text-[#6366f1] transition-colors duration-200">{project.title}</h3>
              <span className="text-[10px] font-mono text-[#7777aa]">{project.subtitle}</span>
            </div>
            <p className="text-[13px] text-[#7777aa] leading-relaxed line-clamp-2">{project.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                  style={{ color: project.accentColor, background: `${project.accentColor}10` }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <a href={project.links.code} target="_blank"
                className="text-[11px] text-[#7777aa] hover:text-[#6366f1] transition-colors flex items-center gap-1 font-medium">
                <i className="fa-brands fa-github" /> Code
              </a>
              <a href={project.links.live} target="_blank"
                className="text-[11px] text-[#7777aa] hover:text-[#6366f1] transition-colors flex items-center gap-1 font-medium">
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
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/10 to-transparent" />
      <div className="container">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6366f1]/30" />
            <span className="text-[11px] font-mono text-[#6366f1] tracking-[0.2em] uppercase px-3 py-1 bg-[#6366f1]/[0.06] rounded-full border border-[#6366f1]/10">03 — Projects</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6366f1]/30" />
          </motion.div>
          <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-[2.6rem] font-bold text-[#eeeeff]">
            Featured <span className="gradient-text">work</span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="mt-12 text-center">
          <a href="https://github.com/mmmelbahrawy55-beep" target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-[#aaaaCC] glass rounded-full hover:text-[#eeeeff] hover:border-[#6366f1]/20 transition-all duration-300 hover:-translate-y-1">
            <i className="fa-brands fa-github" /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
