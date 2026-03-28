"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionNames } from "@/data/europe";

export default function Navigation() {
  const [current, setCurrent] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const total = sectionNames.length;

  const scrollToSection = useCallback((index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = parseInt(id.replace("section-", ""));
            if (!isNaN(index)) setCurrent(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    for (let i = 0; i < total; i++) {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        const next = Math.min(current + 1, total - 1);
        scrollToSection(next);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(current - 1, 0);
        scrollToSection(prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, total, scrollToSection]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 no-print">
        <div className="h-1 bg-navy-dark">
          <motion.div
            className="h-full bg-teal"
            animate={{ width: `${((current + 1) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Side dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 no-print hidden md:flex flex-col gap-2">
        {sectionNames.map((name, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(i)}
            className="group flex items-center gap-2 justify-end"
            title={name}
          >
            <span className="text-xs text-slate opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {name}
            </span>
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-teal scale-125" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 no-print">
        <button
          onClick={() => setShowNav(!showNav)}
          className="bg-navy-light/80 backdrop-blur border border-white/10 rounded-full px-4 py-2 text-xs text-slate hover:text-white transition-colors"
        >
          {current + 1} / {total} · {sectionNames[current]}
        </button>
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-navy-light/90 backdrop-blur border border-white/10 rounded-xl p-2 min-w-[200px]"
            >
              {sectionNames.map((name, i) => (
                <button
                  key={i}
                  onClick={() => {
                    scrollToSection(i);
                    setShowNav(false);
                  }}
                  className={`block w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                    i === current ? "text-teal bg-teal/10" : "text-slate hover:text-white"
                  }`}
                >
                  {i + 1}. {name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Print button */}
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 z-50 no-print bg-navy-light/80 backdrop-blur border border-white/10 rounded-full p-2.5 text-slate hover:text-white transition-colors"
        title="Print / Export PDF"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
        </svg>
      </button>
    </>
  );
}
