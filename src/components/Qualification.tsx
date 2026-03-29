"use client";

import { motion } from "framer-motion";

export default function Qualification() {
  return (
    <section id="section-6" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold tracking-widest uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Distributor <span className="text-teal">Qualification</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Tigo-only requirement — the Porsche model for solar distribution
          </p>
        </motion.div>

        {/* Porsche analogy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-teal/10 to-transparent border border-teal/20 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal text-xl">
              ◆
            </div>
            <h3 className="text-xl font-semibold">The Porsche Principle</h3>
          </div>
          <p className="text-slate leading-relaxed max-w-3xl">
            You don&apos;t walk into a Porsche dealership and find Toyotas on the floor. Premium brands
            demand dedicated representation. Tigo&apos;s technology deserves partners whose entire
            business is built around selling, supporting, and growing the Tigo brand.
          </p>
        </motion.div>

        {/* Two-column market split */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-light/50 border border-white/5 rounded-2xl p-8"
          >
            <div className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
              Small Markets
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Standalone Tigo-Only Distributor
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-4">
              Markets like Austria, Belgium, Nordics, CEE — appoint a dedicated company
              that sells exclusively Tigo products. Full alignment, zero competing interests.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AT", "BE", "CH", "CZ", "DK", "FI", "NO", "SE", "PL", "PT", "SI", "HR"].map((c) => (
                <span key={c} className="px-2.5 py-1 bg-teal/10 text-teal text-xs rounded-full border border-teal/20">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-navy-light/50 border border-white/5 rounded-2xl p-8"
          >
            <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Large Markets
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Dedicated Tigo Department or Subsidiary
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-4">
              Markets like Germany, France, Italy — partner with an existing company that creates
              a dedicated Tigo division, or establish a new subsidiary. Operationally separate,
              fully committed.
            </p>
            <div className="flex flex-wrap gap-2">
              {["DE", "FR", "IT", "ES", "GB", "NL"].map((c) => (
                <span key={c} className="px-2.5 py-1 bg-gold/10 text-gold text-xs rounded-full border border-gold/20">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <h3 className="text-lg font-semibold text-center mb-8">Transition Timeline</h3>
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-navy-light" />
            <div className="absolute top-4 left-0 w-1/2 h-0.5 bg-gradient-to-r from-teal to-teal/50" />

            {[
              { label: "Q1 2026", desc: "Announce new model", active: true },
              { label: "Q2–Q3 2026", desc: "Recruit & vet partners", active: true },
              { label: "Q4 2026", desc: "Pilot territories live", active: false },
              { label: "H1 2027", desc: "Full EU rollout", active: false },
              { label: "H2 2027", desc: "Legacy phase-out complete", active: false },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    step.active
                      ? "bg-teal border-teal text-white"
                      : "bg-navy border-navy-light text-slate"
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-xs text-teal font-medium mt-2">{step.label}</p>
                <p className="text-xs text-slate text-center mt-1 max-w-[100px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
