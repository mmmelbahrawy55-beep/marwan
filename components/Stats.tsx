"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 4, label: "Years Experience", suffix: "+" },
  { value: 25, label: "Projects Built", suffix: "+" },
  { value: 15, label: "Happy Clients", suffix: "+" },
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

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/10 to-transparent" />
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center group hover:border-[#6366f1]/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
                <CountUp target={stat.value} inView={isInView} />
                <span className="text-[#6366f1] text-xl">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-[11px] text-[#7777aa] uppercase tracking-[0.15em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
