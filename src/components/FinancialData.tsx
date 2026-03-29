"use client";

import { motion } from "framer-motion";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceLine,
  Cell,
} from "recharts";
import { tigoQuarterlyData } from "@/data/europe";

// Determine margin line color per data point
const getMarginColor = (margin: number) => {
  if (margin < 20) return "#EF4444";
  if (margin >= 30) return "#22C55E";
  return "#F59E0B";
};

// Identify zone indices
const collapseStart = "Q4 2023";
const collapseEnd = "Q4 2024";
const recoveryStart = "FY 2025";
const recoveryEnd = "FY 2025";

export default function FinancialData() {
  return (
    <section id="section-1" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where Tigo Is <span className="text-teal">Today</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            TYGO public financial data tells the story — and points to the fix
          </p>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="h-80 md:h-96 mb-6"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={tigoQuarterlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A3575" />

              {/* Collapse zone shading */}
              <ReferenceArea
                x1={collapseStart}
                x2={collapseEnd}
                fill="#EF4444"
                fillOpacity={0.06}
                label={{ value: "Collapse Zone", position: "insideTop", fill: "#EF4444", fontSize: 11, fontWeight: 600 }}
              />

              {/* Recovery zone shading */}
              <ReferenceArea
                x1={recoveryStart}
                x2={recoveryEnd}
                fill="#22C55E"
                fillOpacity={0.06}
                label={{ value: "Recovery", position: "insideTop", fill: "#22C55E", fontSize: 11, fontWeight: 600 }}
              />

              <XAxis
                dataKey="period"
                tick={{ fill: "#94A3B8", fontSize: 11 }}
                axisLine={{ stroke: "#2A3575" }}
                angle={-30}
                textAnchor="end"
                height={50}
              />
              <YAxis
                yAxisId="revenue"
                tick={{ fill: "#94A3B8", fontSize: 11 }}
                axisLine={{ stroke: "#2A3575" }}
                tickFormatter={(v) => `$${v}M`}
                label={{ value: "Revenue ($M)", angle: -90, position: "insideLeft", fill: "#94A3B8", fontSize: 11, dx: -5 }}
              />
              <YAxis
                yAxisId="margin"
                orientation="right"
                tick={{ fill: "#94A3B8", fontSize: 11 }}
                axisLine={{ stroke: "#2A3575" }}
                tickFormatter={(v) => `${v}%`}
                domain={[-15, 50]}
                label={{ value: "Gross Margin %", angle: 90, position: "insideRight", fill: "#94A3B8", fontSize: 11, dx: 5 }}
              />

              <ReferenceLine yAxisId="margin" y={0} stroke="#4B5563" strokeDasharray="3 3" />

              <Tooltip
                contentStyle={{
                  background: "#1E2761",
                  border: "1px solid #2A3575",
                  borderRadius: "8px",
                  color: "#f1f5f9",
                  fontSize: 13,
                }}
                formatter={(value, name) => {
                  if (name === "revenue") return [`$${value}M`, "Revenue"];
                  return [`${value}%`, "Gross Margin"];
                }}
              />

              <Bar yAxisId="revenue" dataKey="revenue" radius={[4, 4, 0, 0]} barSize={36}>
                {tigoQuarterlyData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.period.includes("2024") || entry.period === "Q4 2023"
                        ? "#4B5563"
                        : entry.period === "FY 2025"
                          ? "#0D7377"
                          : "#10918A"
                    }
                    fillOpacity={0.8}
                  />
                ))}
              </Bar>

              {/* Margin line with segments colored by threshold */}
              <Line
                yAxisId="margin"
                type="monotone"
                dataKey="grossMargin"
                stroke="#F59E0B"
                strokeWidth={2.5}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  const color = getMarginColor(payload.grossMargin);
                  return (
                    <circle
                      key={`dot-${payload.period}`}
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill={color}
                      stroke="#1E2761"
                      strokeWidth={2}
                    />
                  );
                }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Source */}
        <p className="text-slate/40 text-xs text-center mb-8">
          Source: TYGO SEC filings, public earnings releases
        </p>

        {/* Callout annotations */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-green-500/5 border border-green-500/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-green-400 text-sm font-semibold">Q1 2023 — Peak</span>
            </div>
            <p className="text-slate text-sm leading-relaxed">
              Peak margin <span className="text-white font-medium">36.7%</span> when distribution was working.
              $50.1M revenue quarter. This is what a functioning channel looks like.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-red-500/5 border border-red-500/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-red-400 text-sm font-semibold">FY 2024 — Collapse</span>
            </div>
            <p className="text-slate text-sm leading-relaxed">
              <span className="text-white font-medium">$23.5M inventory write-off</span> from excess
              slow-moving residential storage product (GO batteries/inverters). Optimizer margin
              remained healthy — this was a distribution and inventory management problem, not a product problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-teal/5 border border-teal/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-teal" />
              <span className="text-teal text-sm font-semibold">FY 2025 — Recovery</span>
            </div>
            <p className="text-slate text-sm leading-relaxed">
              Revenue <span className="text-white font-medium">+92%</span>, gross profit
              <span className="text-white font-medium"> $44.4M</span> — recovery underway but fragile.
              <span className="text-white font-medium"> $11.7M cash</span> vs $12.4M annual burn rate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-amber-400 text-sm font-semibold">Q1 2025 — Warning Signal</span>
            </div>
            <p className="text-slate text-sm leading-relaxed">
              Q1 2025 earnings flagged a <span className="text-white font-medium">slow-paying EU distributor</span> —
              a direct consequence of the volume discount model this proposal addresses.
            </p>
          </motion.div>
        </div>

        {/* Context paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-navy-light/50 border border-white/5 rounded-2xl p-6"
        >
          <p className="text-slate text-sm leading-relaxed">
            The FY2024 margin collapse was driven by <span className="text-white font-medium">$23.5M in
            inventory write-offs</span> on the GO residential storage line — not the MLPE optimizer business,
            which has historically maintained <span className="text-white font-medium">35–40% gross margins</span>.
            A new GO residential unit is currently in launch phase. The optimizer distribution restructuring
            proposed here protects and grows the profitable core of Tigo&apos;s product portfolio while the
            residential line resets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
