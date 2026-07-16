"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4, label: "Years Exp.", suffix: "+" },
  { value: 20, label: "Projects", suffix: "+" },
  { value: 15, label: "Clients", suffix: "+" },
  { value: 10, label: "Open Source", suffix: "+" },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <>{count}</>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5558e6]/10 to-transparent" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text side */}
          <div>
            <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-mono text-[#5558e6] tracking-[0.2em] uppercase px-3 py-1 bg-[#5558e6]/[0.05] rounded-full border border-[#5558e6]/10">
                01 — About
              </span>
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-[2.6rem] font-bold text-[#1a1d2e] leading-[1.15] tracking-tight"
            >
              I care about product{" "}
              <span className="gradient-text">as much as code</span>
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} className="mt-6 text-[#5a6178] leading-[1.85]">
              I&apos;m a Full Stack Developer based in Cairo, Egypt. Over the past 4+ years,
              I&apos;ve worked with startups and agencies to build products that users love.
              My sweet spot is the intersection of thoughtful frontend experiences and
              rock-solid backend architecture.
            </motion.p>

            <motion.p custom={3} variants={fadeUp} className="mt-4 text-[#5a6178] leading-[1.85]">
              I believe great engineers are product-minded. I don&apos;t just implement
              specs — I ask questions, challenge assumptions, and advocate for the user.
              Every line of code should earn its place.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 text-sm font-mono glass rounded-full px-5 py-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#16a34a] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16a34a]" />
              </span>
              <span className="text-[#3d4460]">Open to opportunities</span>
            </motion.div>
          </div>

          {/* Stats side */}
          <motion.div custom={2} variants={fadeUp} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 3}
                variants={fadeUp}
                whileHover={{ y: -4, borderColor: "rgba(85,88,230,0.25)" }}
                className="relative glass rounded-2xl p-6 text-center group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5558e6]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                    <CountUp target={stat.value} inView={isInView} />
                  </span>
                  <span className="text-lg text-[#5558e6] font-bold">{stat.suffix}</span>
                  <p className="mt-2 text-[11px] text-[#5a6178] uppercase tracking-[0.15em]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              custom={7}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-2 relative glass rounded-2xl p-6 text-center overflow-hidden glow-border"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5558e6]/[0.03] via-[#db2777]/[0.02] to-[#0891b2]/[0.02]" />
              <div className="relative">
                <span className="text-3xl font-bold gradient-text">B.Sc.</span>
                <p className="mt-2 text-[11px] text-[#5a6178] uppercase tracking-[0.15em]">
                  Computer Science — Cairo University
                </p>
                <p className="mt-1 text-[10px] text-[#5a6178]/50">GPA: 3.7 / 4.0 — Graduated with Honors</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
