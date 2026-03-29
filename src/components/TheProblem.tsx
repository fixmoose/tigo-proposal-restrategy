"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: "No End-Customer Acquisition Strategy",
    description: "Tigo has no direct path to homeowners or installers. The company relies entirely on distributors to create demand — but distributors aren't doing it.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "Italy-Centric Support, EU-Wide Problem",
    description: "Support is concentrated at the Italian hub. Outside Italy, markets stall. Distributors get no structured co-marketing, no local training, no systematic lead flow.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    title: "Multi-Brand Distributors",
    description: "Current distributors carry competing brands. Tigo is one of many on their shelf — not the priority.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Personal Network Ceiling",
    description: "Growth depends on who knows who, not systematic market coverage.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Volume Discount Abuse",
    description: "Large distributors undercut smaller partners using volume discounts. Race to the bottom.",
    highlight: false,
  },
];

export default function TheProblem() {
  return (
    <section id="section-2" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-teal">Problem</span>
          </h2>
          <p className="text-slate text-xl max-w-3xl mx-auto">
            Sales are stalling not because the product is wrong, but because there
            is no engine driving new customer acquisition
          </p>
        </motion.div>

        {/* Top two highlighted cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {problems.filter((p) => p.highlight).map((problem, i) => (
            <motion.div
              key={`highlight-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/30 transition-colors"
            >
              <div className="text-red-400 mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-red-400">{problem.title}</h3>
              <p className="text-slate text-base leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Three structural cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {problems.filter((p) => !p.highlight).map((problem, i) => (
            <motion.div
              key={`struct-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="bg-navy-light/50 border border-white/5 rounded-2xl p-6 hover:border-teal/20 transition-colors"
            >
              <div className="text-teal mb-3">{problem.icon}</div>
              <h3 className="text-base font-semibold mb-2">{problem.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Buying Cartel callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-red-400 mb-3">Distributors Are Gaming the System</h3>
              <p className="text-slate text-base leading-relaxed mb-4">
                Tigo&apos;s volume-based discount tiers were designed to reward large, committed buyers.
                In practice, smaller distributors pool volume to hit higher discount tiers together.
              </p>
              <div className="space-y-2 text-base text-slate">
                <p>&bull; Tigo gives away margin intended for its largest partners</p>
                <p>&bull; Small distributors get top-tier pricing without commitment</p>
                <p>&bull; The discount structure builds purchasing coalitions with zero loyalty</p>
                <p>&bull; These distributors compete against each other using Tigo&apos;s own margin</p>
              </div>
              <p className="text-red-400 text-base font-semibold mt-4">
                This is happening now. Flat pricing eliminates it entirely.
              </p>
            </div>
            {/* Cartel diagram */}
            <div className="lg:w-72 flex-shrink-0">
              <svg viewBox="0 0 240 180" className="w-full">
                {[
                  { x: 20, y: 10, label: "DE" },
                  { x: 140, y: 10, label: "PL" },
                  { x: 20, y: 60, label: "CZ" },
                  { x: 140, y: 60, label: "RO" },
                ].map((d, i) => (
                  <g key={i}>
                    <rect x={d.x} y={d.y} width={80} height={32} rx={6} fill="#1E2761" stroke="#EF4444" strokeOpacity={0.3} />
                    <text x={d.x + 40} y={d.y + 20} textAnchor="middle" fill="#94A3B8" fontSize="12" fontWeight="600">{d.label}</text>
                    <line x1={d.x + 40} y1={d.y + 32} x2={120} y2={115} stroke="#EF4444" strokeOpacity={0.3} strokeWidth={1.5} />
                  </g>
                ))}
                <rect x={50} y={102} width={140} height={34} rx={6} fill="#EF4444" fillOpacity={0.1} stroke="#EF4444" strokeOpacity={0.4} />
                <text x={120} y={123} textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="600">Pooled Order</text>
                <line x1={120} y1={136} x2={120} y2={154} stroke="#EF4444" strokeOpacity={0.4} strokeWidth={1.5} />
                <text x={120} y={168} textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="600">Tier 3 Discount</text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Distributor incentive reality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-navy-light/50 border border-white/10 rounded-xl p-6"
        >
          <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">What does a distributor currently receive for:</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
            {[
              "Answering support calls",
              "Resolving complaints",
              "Submitting product feedback",
              "Training local installers",
              "Generating leads",
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-slate text-sm mb-1.5">{item}</p>
                <p className="text-red-400 text-lg font-bold">{i === 4 ? "Lowest tier" : "Nothing"}</p>
              </div>
            ))}
          </div>
          <p className="text-slate/70 text-sm text-center italic">
            This is not a distribution network. It is a list of companies that happen to sell Tigo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
