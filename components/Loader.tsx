"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050510] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight mb-4"
            >
              <span className="gradient-text">&lt;</span>
              <span className="text-[#eeeeff]">Marwan</span>
              <span className="gradient-text">/&gt;</span>
            </motion.div>

            <div className="flex items-center justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"
                />
              ))}
            </div>
          </div>

          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#6366f1]/[0.05] rounded-full blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
