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
} from "recharts";

const BASE_TIGO_MARGIN = 12; // €12 per unit baseline
const BASE_DISTRIBUTOR_MARGIN = 8; // €8 per unit baseline

export default function MarginCalculator() {
  const [priceIncrease, setPriceIncrease] = useState(3);
  const [annualUnits, setAnnualUnits] = useState(150000);

  const data = useMemo(() => {
    const tigoShare = priceIncrease * 0.6;
    const distShare = priceIncrease * 0.4;
    return [
      { name: "Current Tigo Margin", value: BASE_TIGO_MARGIN, color: "#4B5563" },
      { name: "New Tigo Margin", value: BASE_TIGO_MARGIN + tigoShare, color: "#0D7377" },
      { name: "New Distributor Margin", value: BASE_DISTRIBUTOR_MARGIN + distShare, color: "#10918A" },
    ];
  }, [priceIncrease]);

  const annualGain = useMemo(() => {
    return priceIncrease * 0.6 * annualUnits;
  }, [priceIncrease, annualUnits]);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("en-EU", { maximumFractionDigits: 0 }).format(n);

  return (
    <section id="section-2" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Margin <span className="text-teal">Calculator</span>
          </h2>
          <p className="text-slate text-lg">
            See the impact of flat pricing on margins — adjust the sliders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <label className="flex justify-between text-sm mb-3">
                <span className="text-slate">Price increase per unit</span>
                <span className="text-teal font-semibold text-lg">€{priceIncrease.toFixed(1)}</span>
              </label>
              <input
                type="range"
                min={0}
                max={10}
                step={0.5}
                value={priceIncrease}
                onChange={(e) => setPriceIncrease(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate/50 mt-1">
                <span>€0</span>
                <span>€10</span>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-sm mb-3">
                <span className="text-slate">Annual EU units sold</span>
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
              <div className="flex justify-between text-xs text-slate/50 mt-1">
                <span>10,000</span>
                <span>500,000</span>
              </div>
            </div>

            {/* Key insight */}
            <motion.div
              key={`${priceIncrease}-${annualUnits}`}
              initial={{ scale: 0.98, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-teal/10 border border-teal/20 rounded-xl p-6"
            >
              <p className="text-sm text-teal mb-1">Key Insight</p>
              <p className="text-lg font-medium">
                At <span className="text-teal font-bold">€{priceIncrease.toFixed(1)}</span> increase
                per unit, Tigo earns{" "}
                <span className="text-teal font-bold">€{formatNumber(annualGain)}</span> more
                annually across EU
              </p>
            </motion.div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barSize={60}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A3575" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  axisLine={{ stroke: "#2A3575" }}
                />
                <YAxis
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  axisLine={{ stroke: "#2A3575" }}
                  tickFormatter={(v) => `€${v}`}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1E2761",
                    border: "1px solid #2A3575",
                    borderRadius: "8px",
                    color: "#f1f5f9",
                  }}
                  formatter={(value) => [`€${Number(value).toFixed(2)}`, "Margin per unit"]}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {data.map((entry, index) => (
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
