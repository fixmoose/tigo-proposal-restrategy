"use client";

import { motion } from "framer-motion";

const outboundFlows = [
  { label: "Pricing Updates", icon: "€" },
  { label: "Firmware Alerts", icon: "↻" },
  { label: "Training Materials", icon: "◈" },
  { label: "Marketing Assets", icon: "▣" },
];

const inboundFlows = [
  { label: "Orders & Inventory", icon: "⬡" },
  { label: "Customer Data", icon: "◉" },
  { label: "Product Feedback", icon: "✦" },
  { label: "Market Intelligence", icon: "◆" },
];

const features = [
  {
    title: "Distributor API",
    desc: "Orders, inventory levels, pricing updates — all automated. No manual purchase orders, no email chains, no disconnected spreadsheets.",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    title: "Real-Time Customer Data",
    desc: "Every sale a distributor makes feeds back to Tigo automatically. Full EU market visibility with zero additional headcount.",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    title: "Structured Feedback Loop",
    desc: "Product feedback, bug reports, software issues, installer complaints — all submitted through the platform. Tigo engineering receives structured field intelligence instantly.",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  {
    title: "Push to Distributors",
    desc: "Firmware alerts, product updates, training materials, marketing assets, price changes — all through one channel. One source of truth.",
    accent: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
];

export default function DistributorPlatform() {
  return (
    <section id="section-10" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold tracking-widest uppercase">
            Pillar 2 · Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Distributor <span className="text-blue-400">Platform & API</span>
          </h2>
          <p className="text-slate text-base max-w-2xl mx-auto">
            Think: Salesforce + Shopify + GitHub Issues — built specifically for Tigo&apos;s distribution network
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Hub and spoke diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
              {/* Outer ring */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="#2A3575" strokeWidth="1" strokeDasharray="4 4" />

              {/* Connecting lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = 200 + 140 * Math.cos(rad);
                const y2 = 200 + 140 * Math.sin(rad);
                const isOutbound = i < 4;
                return (
                  <g key={i}>
                    <line
                      x1="200" y1="200" x2={x2} y2={y2}
                      stroke={isOutbound ? "#3B82F6" : "#0D7377"}
                      strokeWidth="1.5"
                      strokeDasharray={isOutbound ? "none" : "4 2"}
                      opacity="0.4"
                    />
                    {/* Arrow dot at end */}
                    <circle cx={x2} cy={y2} r="4" fill={isOutbound ? "#3B82F6" : "#0D7377"} opacity="0.6" />
                  </g>
                );
              })}

              {/* Distributor nodes */}
              {[
                { angle: 0, label: "DE" },
                { angle: 45, label: "FR" },
                { angle: 90, label: "IT" },
                { angle: 135, label: "NL" },
                { angle: 180, label: "ES" },
                { angle: 225, label: "PL" },
                { angle: 270, label: "SI/HR" },
                { angle: 315, label: "SE" },
              ].map(({ angle, label }, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 200 + 140 * Math.cos(rad);
                const y = 200 + 140 * Math.sin(rad);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="22" fill="#1E2761" stroke="#2A3575" strokeWidth="2" />
                    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#94A3B8" fontSize="10" fontWeight="600">
                      {label}
                    </text>
                  </g>
                );
              })}

              {/* Center hub */}
              <circle cx="200" cy="200" r="45" fill="#0D7377" opacity="0.15" />
              <circle cx="200" cy="200" r="38" fill="#1E2761" stroke="#0D7377" strokeWidth="2" />
              <text x="200" y="195" textAnchor="middle" dominantBaseline="central" fill="#0D7377" fontSize="12" fontWeight="700">
                TIGO
              </text>
              <text x="200" y="210" textAnchor="middle" dominantBaseline="central" fill="#94A3B8" fontSize="8">
                Platform
              </text>

              {/* Flow labels */}
              <g>
                <rect x="10" y="20" width="100" height="48" rx="6" fill="#3B82F6" fillOpacity="0.08" stroke="#3B82F6" strokeOpacity="0.2" />
                <text x="60" y="38" textAnchor="middle" fill="#3B82F6" fontSize="8" fontWeight="600">OUTBOUND →</text>
                <text x="60" y="52" textAnchor="middle" fill="#94A3B8" fontSize="7">Pricing, Updates</text>
                <text x="60" y="62" textAnchor="middle" fill="#94A3B8" fontSize="7">Training, Firmware</text>
              </g>
              <g>
                <rect x="290" y="20" width="100" height="48" rx="6" fill="#0D7377" fillOpacity="0.08" stroke="#0D7377" strokeOpacity="0.2" />
                <text x="340" y="38" textAnchor="middle" fill="#0D7377" fontSize="8" fontWeight="600">← INBOUND</text>
                <text x="340" y="52" textAnchor="middle" fill="#94A3B8" fontSize="7">Orders, Data</text>
                <text x="340" y="62" textAnchor="middle" fill="#94A3B8" fontSize="7">Feedback, Intel</text>
              </g>
            </svg>
          </motion.div>

          {/* Feature cards */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-navy-light/50 border border-white/5 rounded-xl p-4 hover:border-blue-500/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`w-2 h-2 rounded-full ${f.dot}`} />
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                </div>
                <p className="text-slate text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
