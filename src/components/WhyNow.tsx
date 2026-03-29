"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { energyPriceData } from "@/data/europe";

export default function WhyNow() {
  return (
    <section id="section-99" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-teal">Now</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Three converging forces make this the right moment to restructure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Energy price chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">EU Wholesale Energy Prices (€/MWh)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={energyPriceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A3575" />
                  <XAxis dataKey="year" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={{ stroke: "#2A3575" }} />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={{ stroke: "#2A3575" }} tickFormatter={(v) => `€${v}`} />
                  <Tooltip
                    contentStyle={{
                      background: "#1E2761",
                      border: "1px solid #2A3575",
                      borderRadius: "8px",
                      color: "#f1f5f9",
                    }}
                    formatter={(value) => [`€${value}/MWh`, "Price"]}
                  />
                  <defs>
                    <linearGradient id="energyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D7377" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0D7377" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#0D7377"
                    strokeWidth={2}
                    fill="url(#energyGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-slate text-xs mt-2">
              Energy prices remain elevated — solar demand is structural, not cyclical
            </p>
          </motion.div>

          {/* Threat callouts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Chinese competitors */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-400">Chinese Competitor Threat</h3>
              </div>
              <p className="text-slate text-sm leading-relaxed">
                Aggressive Chinese MLPE manufacturers are entering the EU market with lower prices
                and establishing their own distribution networks. Every quarter without a structured
                channel strategy is market share handed to competitors.
              </p>
            </div>

            {/* Channel conflict */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-amber-400">Channel Conflict Cost</h3>
              </div>
              <p className="text-slate text-sm leading-relaxed">
                Overlapping territories and inconsistent pricing are already costing Tigo deals.
                Installers report confusion over pricing and hesitate to commit when they see
                competing offers from different Tigo distributors in the same region.
              </p>
            </div>

            {/* Opportunity */}
            <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-teal">Market Timing</h3>
              </div>
              <p className="text-slate text-sm leading-relaxed">
                EU solar installations are projected to grow 20%+ annually through 2030.
                Restructuring now means the new channel is in place before the biggest growth wave hits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
