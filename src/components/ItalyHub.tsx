"use client";

import { motion } from "framer-motion";

const supportReality = [
  "Customer inquiries get forwarded to semi-local distributors with no formal obligation to respond",
  "Technical support is handled informally by whoever is willing \u2014 with zero commercial incentive",
  "Distributors who go above and beyond (hand-holding customers, resolving complaints, providing feedback to Tigo engineering) receive no compensation, no recognition, and no priority treatment",
  "The result: good distributors stop going above and beyond. Bad ones never did.",
];

export default function ItalyHub() {
  return (
    <section id="section-3" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-sm font-semibold tracking-wider uppercase">
            Pillar 1 \u00B7 Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Hub Cannot Serve <span className="text-teal">27 Markets</span>
          </h2>
          <p className="text-slate text-xl max-w-2xl mx-auto">
            Italy-centric support, EU-wide problem &mdash; adding employees in Germany or Poland didn&apos;t work either
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <svg viewBox="0 0 400 320" className="w-full max-w-md mx-auto">
              {/* Europe outline simplified */}
              <ellipse cx="200" cy="160" rx="170" ry="140" fill="none" stroke="#2A3575" strokeWidth="1" strokeDasharray="4 4" />

              {/* Italy hub - bright */}
              <circle cx="220" cy="200" r="22" fill="#2DD4BF" fillOpacity="0.3" stroke="#2DD4BF" strokeWidth="2" />
              <text x="220" y="196" textAnchor="middle" fill="#2DD4BF" fontSize="9" fontWeight="700">ITALY</text>
              <text x="220" y="207" textAnchor="middle" fill="#2DD4BF" fontSize="7">EU Hub</text>

              {/* Rotterdam */}
              <circle cx="195" cy="110" r="10" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="195" y="113" textAnchor="middle" fill="#3B82F6" fontSize="7" fontWeight="600">RTD</text>
              <line x1="195" y1="120" x2="215" y2="180" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
              <text x="195" y="100" textAnchor="middle" fill="#94A3B8" fontSize="7">Goods arrive</text>

              {/* Radiating arrows - getting thinner/more faded */}
              {[
                { x: 260, y: 130, label: "DE", opacity: 0.7, width: 1.5 },
                { x: 300, y: 170, label: "PL", opacity: 0.4, width: 1 },
                { x: 150, y: 170, label: "FR", opacity: 0.6, width: 1.2 },
                { x: 120, y: 220, label: "ES", opacity: 0.4, width: 1 },
                { x: 300, y: 220, label: "GR", opacity: 0.2, width: 0.5 },
                { x: 330, y: 140, label: "SE", opacity: 0.15, width: 0.5 },
                { x: 280, y: 250, label: "HR/SI", opacity: 0.15, width: 0.5 },
                { x: 100, y: 140, label: "UK", opacity: 0.3, width: 0.8 },
                { x: 340, y: 200, label: "RO", opacity: 0.1, width: 0.5 },
              ].map((market, i) => (
                <g key={i}>
                  <line
                    x1="220" y1="200"
                    x2={market.x} y2={market.y}
                    stroke="#2DD4BF"
                    strokeWidth={market.width}
                    opacity={market.opacity}
                    strokeDasharray={market.opacity < 0.3 ? "2 3" : "none"}
                  />
                  <circle cx={market.x} cy={market.y} r="14" fill="#1E2761" stroke="#2A3575" strokeWidth="1" />
                  <text x={market.x} y={market.y + 3} textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="500" opacity={market.opacity + 0.3}>
                    {market.label}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <text x="200" y="300" textAnchor="middle" fill="#94A3B8" fontSize="8" fontStyle="italic">
                The further from Italy, the weaker the support signal
              </text>
            </svg>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* Supply chain */}
            <div className="flex items-center gap-2 mb-6 text-sm">
              <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 text-sm font-medium">Rotterdam</span>
              <span className="text-slate">&rarr;</span>
              <span className="px-2.5 py-1 bg-teal/10 border border-teal/20 rounded text-teal text-sm font-medium">Italy HQ</span>
              <span className="text-slate">&rarr;</span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text-slate text-sm font-medium">EU Distributors</span>
            </div>

            {/* Support reality in smaller markets */}
            <h3 className="text-base font-semibold mb-4">In markets like Slovenia, Croatia, the Balkans, Nordics, CEE:</h3>
            <div className="space-y-3 mb-6">
              {supportReality.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`mt-0.5 text-sm ${i === supportReality.length - 1 ? "text-red-400" : "text-slate/40"}`}>
                    {i === supportReality.length - 1 ? "!" : "\u2022"}
                  </span>
                  <p className={`text-base leading-relaxed ${i === supportReality.length - 1 ? "text-red-400 font-medium" : "text-slate"}`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-4">
              <p className="text-slate text-base leading-relaxed">
                <span className="text-white font-medium">Extra boots on the ground didn&apos;t help.</span> Tigo
                hired employees in Germany and Poland &mdash; but employees collect a payroll, not a profit.
                They have no personal stake in expanding the market, no reason to sacrifice evenings and weekends
                building relationships with installers. A salaried rep clocks out at 5 pm; a business owner
                with territory rights never stops selling.
              </p>
            </div>

            <div className="bg-navy-light/50 border border-white/5 rounded-xl p-4">
              <p className="text-slate text-base leading-relaxed">
                <span className="text-white font-medium">The structural reality:</span> The Italian team
                is doing the best it can with a model that was never designed to scale across 27 markets.
                Companies that have solved this problem &mdash; Victron, Fronius, Bosch &mdash; all
                arrived at the same answer: dedicated local partners with formal territory rights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
