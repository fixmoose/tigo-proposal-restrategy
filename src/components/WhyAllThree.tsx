"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "1",
    title: "Distribution\nRestructuring",
    color: "#0D7377",
    borderColor: "border-teal/30",
    bgColor: "bg-teal/10",
    textColor: "text-teal",
    desc: "Consistent, predictable revenue and margin through flat pricing, protected territories, and dedicated partners",
  },
  {
    num: "2",
    title: "Distributor\nPlatform",
    color: "#3B82F6",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    desc: "Turns distributors into a live intelligence network — Tigo sees everything, needs no extra headcount",
  },
  {
    num: "3",
    title: "EPC\nExpansion",
    color: "#F5A623",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-400",
    desc: "Captures the high-margin project business that the current model leaves on the table entirely",
  },
];

export default function WhyAllThree() {
  return (
    <section id="section-12" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why All <span className="text-teal">Three</span> Together
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Each pillar reinforces the others — together they transform Tigo
          </p>
        </motion.div>

        {/* Three pillar diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mb-10"
        >
          {/* Top label — what they support */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/5 border border-white/10 rounded-xl px-8 py-4">
              <p className="text-xs text-slate uppercase tracking-widest mb-1">The Vision</p>
              <p className="text-xl font-bold">
                Tigo as a Complete <span className="text-teal">Solar Energy Platform</span>
              </p>
            </div>
          </div>

          {/* Connecting line */}
          <div className="hidden md:block absolute top-[88px] left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-gradient-to-r from-teal via-blue-400 to-amber-400 opacity-30" />

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                className={`relative ${p.bgColor} border ${p.borderColor} rounded-2xl p-6 text-center`}
              >
                {/* Pillar number */}
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: p.color }}
                >
                  {p.num}
                </div>
                <h3 className={`text-lg font-semibold ${p.textColor} mb-3 whitespace-pre-line leading-tight`}>
                  {p.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combined outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-teal/5 via-blue-500/5 to-amber-500/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-teal mb-1">Revenue</p>
              <p className="text-slate text-sm">Protected margins, predictable growth through structured channels</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-1">Intelligence</p>
              <p className="text-slate text-sm">Real-time market data from every territory, zero new headcount</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 mb-1">Growth</p>
              <p className="text-slate text-sm">High-margin project business the current model can&apos;t capture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
