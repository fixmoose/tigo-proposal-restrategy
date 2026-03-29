"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Hardware Supplier", desc: "Where Tigo is today", color: "#4B5563", active: true },
  { label: "EPC Partner", desc: "Projects through local partners", color: "#F5A623", active: false },
  { label: "Project Developer", desc: "Own and operate assets", color: "#F5A623", active: false },
];

export default function EPC() {
  return (
    <section id="section-10" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-widest uppercase">
            Pillar 3 · EPC
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Supplier to <span className="text-amber-400">Developer</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            An opportunity worth exploring
          </p>
        </motion.div>

        {/* Context */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 mb-10"
        >
          <p className="text-slate leading-relaxed text-sm">
            As Tigo&apos;s brand and product portfolio matures, participating in large-scale EPC
            projects — either directly in the US or through committed European partners — represents
            a natural next step toward becoming a vertically integrated solar energy company.{" "}
            <span className="text-amber-400 font-medium">No detailed proposal at this stage — this is an open conversation.</span>
          </p>
        </motion.div>

        {/* Progression arrow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-0">
            {stages.map((stage, i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`relative px-6 py-5 rounded-xl border text-center min-w-[160px] ${
                    stage.active
                      ? "bg-teal/10 border-teal/30"
                      : "bg-amber-500/5 border-amber-500/20 border-dashed"
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${stage.active ? "text-teal" : "text-amber-400"}`}>
                    {stage.label}
                  </p>
                  <p className="text-slate text-xs">{stage.desc}</p>
                  {stage.active && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-teal text-white text-[10px] font-bold rounded-full">
                      TODAY
                    </div>
                  )}
                </div>
                {i < stages.length - 1 && (
                  <div className="flex items-center px-2">
                    <div className="w-8 h-0.5 bg-amber-500/30" />
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-amber-500/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two opportunity areas */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-amber-400 mb-2">US Commercial / Utility</h3>
            <p className="text-slate text-xs leading-relaxed">
              Tigo has brand recognition, MLPE technology, and existing installer relationships.
              An in-house EPC division could compete for commercial and utility-scale contracts
              directly, using Tigo product throughout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-amber-400 mb-2">EU Large-Scale PV</h3>
            <p className="text-slate text-xs leading-relaxed">
              A European EPC partnership model — using committed local distributors as on-the-ground
              partners — captures commercial, agricultural, and community solar markets without Tigo
              building its own EU field teams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
