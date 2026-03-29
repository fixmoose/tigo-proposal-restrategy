"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { objections } from "@/data/europe";

export default function Objections() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="section-8" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold tracking-widest uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Objections <span className="text-teal">& Answers</span>
          </h2>
          <p className="text-slate text-lg">
            Click each objection to see the response
          </p>
        </motion.div>

        <div className="space-y-3">
          {objections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-navy-light/50 border border-white/5 rounded-xl px-6 py-4 hover:border-teal/20 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm md:text-base font-medium">{item.title}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    className="text-teal text-xl flex-shrink-0"
                  >
                    +
                  </motion.span>
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-teal/5 border-x border-b border-teal/10 rounded-b-xl">
                      <p className="text-slate text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
