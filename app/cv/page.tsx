"use client";

export default function CVPage() {
  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#f0f0f5] py-10 px-4">
      {/* Download button */}
      <div className="max-w-[800px] mx-auto mb-6 flex justify-end">
        <button
          onClick={downloadPDF}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#5558e6] rounded-xl hover:bg-[#4345c9] transition-all duration-200 hover:shadow-[0_0_20px_rgba(85,88,230,0.25)]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* CV Content */}
      <div className="max-w-[800px] mx-auto bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)] rounded-lg overflow-hidden" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#5558e6] to-[#7c3aed] px-10 py-8 text-white">
          <h1 className="text-3xl font-bold tracking-tight">Marwan Mohamed</h1>
          <p className="text-base mt-1 text-white/80 font-light">Full Stack Developer</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              m.m.melbahrawy55@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Cairo, Egypt
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              github.com/mmmelbahrawy55-beep
            </span>
          </div>
        </div>

        <div className="px-10 py-8 space-y-7">
          {/* Summary */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#5558e6] border-b-2 border-[#5558e6]/20 pb-2 mb-4">Professional Summary</h2>
            <p className="text-[13px] leading-relaxed text-[#444]">
              Full Stack Developer with 4+ years of experience building robust, scalable web applications.
              Skilled in React, Next.js, Node.js, and cloud infrastructure. Passionate about clean architecture,
              performance optimization, and delivering production-ready solutions that drive business growth.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#5558e6] border-b-2 border-[#5558e6]/20 pb-2 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[13px] text-[#444]">
              <div><span className="font-semibold text-[#222]">Frontend:</span> React, Next.js, TypeScript, Vue.js, Tailwind CSS</div>
              <div><span className="font-semibold text-[#222]">Backend:</span> Node.js, Express, Python, Django, GraphQL, REST</div>
              <div><span className="font-semibold text-[#222]">Database:</span> PostgreSQL, MongoDB, Redis</div>
              <div><span className="font-semibold text-[#222]">DevOps:</span> Docker, AWS, CI/CD, Git, Linux</div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#5558e6] border-b-2 border-[#5558e6]/20 pb-2 mb-4">Experience</h2>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] font-bold text-[#222]">Senior Full Stack Developer</h3>
                  <span className="text-[11px] text-[#888] font-mono">2023 — Present</span>
                </div>
                <p className="text-[12px] text-[#5558e6] font-medium mb-2">TechCorp Inc.</p>
                <ul className="text-[12.5px] text-[#555] space-y-1.5 list-none">
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Architected microservices platform serving 100K+ MAU with 99.9% uptime</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Led 5 engineers, reducing deployment cycles from 2 weeks to 2 days via CI/CD</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Built a reusable component library adopted across 3 product teams</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] font-bold text-[#222]">Full Stack Developer</h3>
                  <span className="text-[11px] text-[#888] font-mono">2021 — 2023</span>
                </div>
                <p className="text-[12px] text-[#5558e6] font-medium mb-2">StartupHub</p>
                <ul className="text-[12.5px] text-[#555] space-y-1.5 list-none">
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Developed 5+ production apps from concept to deployment, owning the full SDLC</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Implemented real-time features using WebSockets, serving 10K+ concurrent users</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Reduced API response times by 40% via query optimization &amp; Redis caching</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[14px] font-bold text-[#222]">Junior Web Developer</h3>
                  <span className="text-[11px] text-[#888] font-mono">2020 — 2021</span>
                </div>
                <p className="text-[12px] text-[#5558e6] font-medium mb-2">Digital Agency Co.</p>
                <ul className="text-[12.5px] text-[#555] space-y-1.5 list-none">
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Delivered 15+ client projects across diverse industries on time and within budget</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Improved Lighthouse performance scores from 55 to 92 via code splitting &amp; lazy loading</li>
                  <li className="flex gap-2"><span className="text-[#5558e6] mt-[3px]">▸</span>Introduced modern tooling (Webpack, ESLint, Prettier) to the development workflow</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#5558e6] border-b-2 border-[#5558e6]/20 pb-2 mb-4">Featured Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-[14px] font-bold text-[#222]">ELITE — Premium Fashion E-Commerce</h3>
                <p className="text-[12.5px] text-[#555] mt-1">End-to-end luxury fashion e-commerce platform featuring dynamic product collections, responsive lookbook, shopping cart system, and bold brand identity.</p>
                <p className="text-[11px] text-[#888] mt-1 font-mono">React · Next.js · Tailwind CSS · Vercel</p>
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#222]">ELBA 7RAWY — Advertising Platform</h3>
                <p className="text-[12.5px] text-[#555] mt-1">Full-stack digital presence for a leading advertising agency with dynamic materials catalog (14+ products), real-time pricing, and client contact system.</p>
                <p className="text-[11px] text-[#888] mt-1 font-mono">HTML · CSS · JavaScript · Firebase</p>
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-[#222]">Company Management System</h3>
                <p className="text-[12.5px] text-[#555] mt-1">Comprehensive ERP system covering employee management, client relations, inventory control, sales tracking, accounting, and project oversight with real-time data sync.</p>
                <p className="text-[11px] text-[#888] mt-1 font-mono">React · Node.js · PostgreSQL · REST API</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#5558e6] border-b-2 border-[#5558e6]/20 pb-2 mb-4">Education</h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-[14px] font-bold text-[#222]">B.Sc. Computer Science</h3>
                <p className="text-[12px] text-[#666]">Innovation University</p>
              </div>
              <span className="text-[11px] text-[#888] font-mono">2016 — 2020</span>
            </div>
            <p className="text-[12px] text-[#888] mt-1">GPA: 3.7 / 4.0 — Graduated with Honors</p>
          </section>
        </div>
      </div>
    </div>
  );
}
