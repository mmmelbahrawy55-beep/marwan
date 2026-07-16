"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const mailto = `mailto:m.m.melbahrawy55@gmail.com?subject=${encodeURIComponent(
      (data.get("subject") as string) || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    )}`;

    window.location.href = mailto;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5558e6]/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#5558e6]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#5558e6]/30" />
            <span className="text-[11px] font-mono text-[#5558e6] tracking-[0.2em] uppercase px-3 py-1 bg-[#5558e6]/[0.05] rounded-full border border-[#5558e6]/10">
              05 — Contact
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#5558e6]/30" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-[2.6rem] font-bold text-[#1a1d2e]"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-[#5a6178] max-w-md mx-auto">
            I&apos;m always open to new opportunities — freelance, full-time, or just a chat about tech.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8"
        >
          {/* Contact info */}
          <motion.div custom={3} variants={fadeUp} className="md:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 space-y-5">
              {[
                { icon: "fas fa-envelope", label: "Email", value: "m.m.melbahrawy55@gmail.com", href: "mailto:m.m.melbahrawy55@gmail.com" },
                { icon: "fab fa-github", label: "GitHub", value: "github.com/mmmelbahrawy55-beep", href: "https://github.com/mmmelbahrawy55-beep" },
                { icon: "fas fa-map-marker-alt", label: "Location", value: "Cairo, Egypt", href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#5558e6]/[0.06] flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-[#5558e6] text-sm`} />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#5a6178]/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" className="text-sm text-[#3d4460] hover:text-[#5558e6] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#3d4460]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div custom={4} variants={fadeUp} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-[#5a6178]/50 uppercase tracking-wider mb-2">Name</label>
                  <input name="name" type="text" required placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/50 border border-[#e2e5f1] rounded-xl text-sm text-[#1a1d2e] placeholder:text-[#5a6178]/25 outline-none focus:border-[#5558e6]/40 focus:ring-1 focus:ring-[#5558e6]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#5a6178]/50 uppercase tracking-wider mb-2">Email</label>
                  <input name="email" type="email" required placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/50 border border-[#e2e5f1] rounded-xl text-sm text-[#1a1d2e] placeholder:text-[#5a6178]/25 outline-none focus:border-[#5558e6]/40 focus:ring-1 focus:ring-[#5558e6]/10 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[#5a6178]/50 uppercase tracking-wider mb-2">Subject</label>
                <input name="subject" type="text" placeholder="Project Collaboration"
                  className="w-full px-4 py-3 bg-white/50 border border-[#e2e5f1] rounded-xl text-sm text-[#1a1d2e] placeholder:text-[#5a6178]/25 outline-none focus:border-[#5558e6]/40 focus:ring-1 focus:ring-[#5558e6]/10 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[#5a6178]/50 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" required rows={4} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/50 border border-[#e2e5f1] rounded-xl text-sm text-[#1a1d2e] placeholder:text-[#5a6178]/25 outline-none focus:border-[#5558e6]/40 focus:ring-1 focus:ring-[#5558e6]/10 transition-all resize-none" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 text-sm font-semibold text-white bg-[#5558e6] rounded-xl hover:bg-[#4345c9] transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(85,88,230,0.25)]"
              >
                {sent ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
