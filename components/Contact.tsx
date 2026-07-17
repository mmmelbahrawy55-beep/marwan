"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const mailto = `mailto:m.m.melbahrawy55@gmail.com?subject=${encodeURIComponent((data.get("subject") as string) || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`)}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-[#fafafa] mb-2">Contact</h2>
          <p className="text-sm text-[#71717a] mb-10">Have a question or want to work together?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.5 }}>
            <div className="space-y-4">
              <a href="mailto:m.m.melbahrawy55@gmail.com" className="flex items-center gap-3 text-[14px] text-[#a1a1aa] hover:text-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                m.m.melbahrawy55@gmail.com
              </a>
              <a href="https://github.com/mmmelbahrawy55-beep" target="_blank" className="flex items-center gap-3 text-[14px] text-[#a1a1aa] hover:text-[#3b82f6] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                github.com/mmmelbahrawy55-beep
              </a>
              <div className="flex items-center gap-3 text-[14px] text-[#a1a1aa]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Cairo, Egypt
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.5 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input name="name" type="text" required placeholder="Name" className="px-4 py-2.5 bg-[#111113] border border-[#27272a] rounded-lg text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none focus:border-[#3b82f6]/40 transition-colors" />
                <input name="email" type="email" required placeholder="Email" className="px-4 py-2.5 bg-[#111113] border border-[#27272a] rounded-lg text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none focus:border-[#3b82f6]/40 transition-colors" />
              </div>
              <input name="subject" type="text" placeholder="Subject" className="w-full px-4 py-2.5 bg-[#111113] border border-[#27272a] rounded-lg text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none focus:border-[#3b82f6]/40 transition-colors" />
              <textarea name="message" required rows={4} placeholder="Message" className="w-full px-4 py-2.5 bg-[#111113] border border-[#27272a] rounded-lg text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none focus:border-[#3b82f6]/40 transition-colors resize-none" />
              <button type="submit" className="w-full py-2.5 text-[13px] font-medium text-white bg-[#3b82f6] rounded-lg hover:bg-[#2563eb] transition-colors">
                {sent ? "Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
