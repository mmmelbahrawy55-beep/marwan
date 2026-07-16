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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="text-[11px] font-mono text-accent tracking-[0.2em] uppercase px-3 py-1 bg-accent-light rounded-full border border-accent/10">
              05 — Contact
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl md:text-[2.6rem] font-bold text-text-white"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">amazing</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="mt-4 text-text max-w-md mx-auto">
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
                  <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-accent text-sm`} />
                  </div>
                  <div>
                    <p className="text-[11px] text-text/50 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" className="text-sm text-text-light hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-light">{item.value}</p>
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
                  <label className="block text-[11px] font-medium text-text/50 uppercase tracking-wider mb-2">Name</label>
                  <input name="name" type="text" required placeholder="John Doe"
                    className="w-full px-4 py-3 bg-bg/50 border border-border rounded-xl text-sm text-text-white placeholder:text-text/20 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-text/50 uppercase tracking-wider mb-2">Email</label>
                  <input name="email" type="email" required placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-bg/50 border border-border rounded-xl text-sm text-text-white placeholder:text-text/20 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-text/50 uppercase tracking-wider mb-2">Subject</label>
                <input name="subject" type="text" placeholder="Project Collaboration"
                  className="w-full px-4 py-3 bg-bg/50 border border-border rounded-xl text-sm text-text-white placeholder:text-text/20 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-text/50 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" required rows={4} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-bg/50 border border-border rounded-xl text-sm text-text-white placeholder:text-text/20 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/10 transition-all resize-none" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 text-sm font-semibold text-white bg-accent rounded-xl hover:bg-accent-dark transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
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
