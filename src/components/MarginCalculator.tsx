"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

// TS4-A-O pricing (USD → EUR at ~0.92)
const CURRENT_LOW_USD = 26;
const CURRENT_HIGH_USD = 30.5;
const PROPOSED_DIST_USD = 33;
const PROPOSED_MSRP_USD = 39;
const EUR_RATE = 0.92;

const CURRENT_LOW_EUR = Math.round(CURRENT_LOW_USD * EUR_RATE);   // €24
const CURRENT_HIGH_EUR = Math.round(CURRENT_HIGH_USD * EUR_RATE); // €28
const PROPOSED_DIST_EUR = Math.round(PROPOSED_DIST_USD * EUR_RATE); // €30
const PROPOSED_MSRP_EUR = Math.round(PROPOSED_MSRP_USD * EUR_RATE); // €36

export default function MarginCalculator() {
  const [annualUnits, setAnnualUnits] = useState(150000);

  const currentAvgEUR = Math.round((CURRENT_LOW_EUR + CURRENT_HIGH_EUR) / 2); // €26
  const priceIncrease = PROPOSED_DIST_EUR - currentAvgEUR; // €4
  const distributorMargin = PROPOSED_MSRP_EUR - PROPOSED_DIST_EUR; // €6
  const annualUplift = priceIncrease * annualUnits;
  const annualDistTotal = distributorMargin * annualUnits;

  const chartData = useMemo(() => [
    { name: "Current Avg", current: currentAvgEUR, proposed: 0 },
    { name: "Proposed Flat", current: 0, proposed: PROPOSED_DIST_EUR },
    { name: "MSRP", current: 0, proposed: PROPOSED_MSRP_EUR },
  ], [currentAvgEUR]);

  const marginData = useMemo(() => [
    { name: "Current Range", low: CURRENT_LOW_EUR, high: CURRENT_HIGH_EUR, color: "#4B5563" },
    { name: "Proposed Dist. Price", low: PROPOSED_DIST_EUR, high: PROPOSED_DIST_EUR, color: "#2DD4BF" },
    { name: "Distributor Margin", low: distributorMargin, high: distributorMargin, color: "#14B8A6" },
    { name: "Installer Price (MSRP)", low: PROPOSED_MSRP_EUR, high: PROPOSED_MSRP_EUR, color: "#3B82F6" },
  ], [distributorMargin]);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("en-EU", { maximumFractionDigits: 0 }).format(n);

  return (
    <section id="section-5" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-sm font-semibold tracking-wider uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Margin <span className="text-teal">Calculator</span>
          </h2>
          <p className="text-slate text-xl">
            TS4-A-O pricing: current vs proposed flat pricing with soft MSRP
          </p>
        </motion.div>

        {/* Pricing reference cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          <div className="bg-navy-light/50 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-slate text-sm mb-1">Current Range</p>
            <p className="text-red-400 text-xl font-bold">${CURRENT_LOW_USD}–${CURRENT_HIGH_USD}</p>
            <p className="text-slate/50 text-sm mt-0.5">€{CURRENT_LOW_EUR}–€{CURRENT_HIGH_EUR}</p>
          </div>
          <div className="bg-teal/5 border border-teal/20 rounded-xl p-4 text-center">
            <p className="text-slate text-sm mb-1">Proposed Flat Price</p>
            <p className="text-teal text-xl font-bold">${PROPOSED_DIST_USD}</p>
            <p className="text-slate/50 text-sm mt-0.5">€{PROPOSED_DIST_EUR}</p>
          </div>
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 text-center">
            <p className="text-slate text-sm mb-1">Soft MSRP (to Installer)</p>
            <p className="text-blue-400 text-xl font-bold">${PROPOSED_MSRP_USD}</p>
            <p className="text-slate/50 text-sm mt-0.5">€{PROPOSED_MSRP_EUR} ±10%</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 text-center">
            <p className="text-slate text-sm mb-1">Distributor Margin</p>
            <p className="text-emerald-400 text-xl font-bold">€{distributorMargin}/unit</p>
            <p className="text-slate/50 text-sm mt-0.5">{Math.round((distributorMargin / PROPOSED_MSRP_EUR) * 100)}% on sale to installer</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: slider + insights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="flex justify-between text-sm mb-3">
                <span className="text-slate">Annual EU units sold (TS4-A-O)</span>
                <span className="text-teal font-semibold text-lg">{formatNumber(annualUnits)}</span>
              </label>
              <input
                type="range"
                min={10000}
                max={500000}
                step={10000}
                value={annualUnits}
                onChange={(e) => setAnnualUnits(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-slate/50 mt-1">
                <span>10,000</span>
                <span>500,000</span>
              </div>
            </div>

            {/* Revenue impact */}
            <motion.div
              key={annualUnits}
              initial={{ scale: 0.98, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-teal/10 border border-teal/20 rounded-xl p-5"
            >
              <p className="text-sm text-teal mb-2 font-medium">Annual Impact at {formatNumber(annualUnits)} units</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate text-sm">Tigo revenue uplift</span>
                  <span className="text-teal font-bold text-lg">+€{formatNumber(annualUplift)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate text-sm">Total distributor margin pool</span>
                  <span className="text-emerald-400 font-bold text-lg">€{formatNumber(annualDistTotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate text-sm">Total Tigo EU revenue</span>
                  <span className="text-white font-bold text-lg">€{formatNumber(PROPOSED_DIST_EUR * annualUnits)}</span>
                </div>
              </div>
            </motion.div>

            {/* Key point */}
            <div className="bg-navy-light/50 border border-white/10 rounded-xl p-5">
              <p className="text-base text-slate leading-relaxed">
                <span className="text-white font-medium">Why €{PROPOSED_DIST_EUR} flat?</span> At €{PROPOSED_DIST_EUR} (${PROPOSED_DIST_USD}),
                every distributor pays the same. No volume tiers to game, no pooled orders, no secret deals.
                The €{distributorMargin} margin to MSRP gives distributors a{" "}
                <span className="text-teal font-medium">{Math.round((distributorMargin / PROPOSED_MSRP_EUR) * 100)}% protected margin</span> on
                sales to certified installers — enough to invest in local market development. Retail pricing
                from installer to end customer can vary, but sales are limited to installers with minimum formal Tigo training.
              </p>
            </div>
          </motion.div>

          {/* Right: chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marginData} barSize={50}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3575" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#94A3B8", fontSize: 10 }}
                  axisLine={{ stroke: "#2A3575" }}
                  interval={0}
                />
                <YAxis
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  axisLine={{ stroke: "#2A3575" }}
                  tickFormatter={(v) => `€${v}`}
                  domain={[0, 40]}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1E2761",
                    border: "1px solid #2A3575",
                    borderRadius: "8px",
                    color: "#f1f5f9",
                  }}
                  formatter={(value) => [`€${Number(value)}`, "Per unit"]}
                />
                <ReferenceLine y={PROPOSED_DIST_EUR} stroke="#2DD4BF" strokeDasharray="4 4" strokeOpacity={0.5} />
                <ReferenceLine y={PROPOSED_MSRP_EUR} stroke="#3B82F6" strokeDasharray="4 4" strokeOpacity={0.5} />
                <Bar dataKey="high" radius={[6, 6, 0, 0]}>
                  {marginData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
