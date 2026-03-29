"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countryData } from "@/data/europe";

const statusColor = {
  active: "#22C55E",
  transition: "#F59E0B",
  unassigned: "#4B5563",
};

const statusLabel = {
  active: "Proposed Active",
  transition: "Transition",
  unassigned: "Unassigned",
};

// Simplified SVG paths for European countries (approximate)
const countryPaths: Record<string, { d: string; cx: number; cy: number }> = {
  GB: { d: "M155,120 l-5,10 l-8,15 l2,12 l5,8 l-2,10 l8,5 l5,-3 l3,-10 l-2,-8 l5,-12 l-3,-10 l-5,-8 Z", cx: 155, cy: 145 },
  IE: { d: "M130,130 l-5,5 l-3,10 l2,12 l8,5 l5,-8 l-2,-12 l-3,-8 Z", cx: 133, cy: 145 },
  FR: { d: "M185,175 l-15,5 l-8,15 l2,20 l10,10 l18,2 l12,-8 l5,-15 l-5,-15 l-10,-10 Z", cx: 190, cy: 200 },
  ES: { d: "M155,225 l-10,5 l-5,15 l5,18 l20,5 l18,-3 l5,-12 l-3,-15 l-15,-10 Z", cx: 168, cy: 248 },
  PT: { d: "M140,235 l-5,5 l-2,15 l3,12 l6,0 l3,-15 l-2,-12 Z", cx: 140, cy: 252 },
  DE: { d: "M230,145 l-5,5 l-3,12 l-5,10 l2,15 l10,8 l12,0 l8,-10 l2,-15 l-5,-12 l-8,-8 Z", cx: 235, cy: 168 },
  NL: { d: "M215,130 l-3,3 l0,8 l5,5 l6,0 l2,-5 l-2,-8 l-5,-3 Z", cx: 218, cy: 137 },
  BE: { d: "M210,148 l-3,3 l2,6 l6,3 l5,-2 l0,-5 l-5,-4 Z", cx: 215, cy: 153 },
  CH: { d: "M220,195 l-3,2 l0,6 l5,4 l6,0 l3,-4 l-3,-5 l-5,-3 Z", cx: 225, cy: 200 },
  AT: { d: "M245,185 l-5,2 l-2,6 l3,6 l10,2 l8,-2 l2,-5 l-5,-5 l-8,-3 Z", cx: 252, cy: 192 },
  IT: { d: "M240,210 l-5,5 l-3,12 l2,18 l5,15 l8,10 l5,-2 l-2,-12 l3,-15 l-3,-15 l-5,-10 Z", cx: 245, cy: 240 },
  PL: { d: "M275,140 l-8,3 l-3,10 l2,12 l8,8 l12,2 l8,-5 l2,-10 l-5,-10 l-10,-8 Z", cx: 282, cy: 158 },
  CZ: { d: "M255,160 l-5,2 l-2,6 l3,5 l8,2 l6,-3 l2,-5 l-5,-5 Z", cx: 260, cy: 167 },
  SK: { d: "M280,168 l-5,2 l0,5 l5,3 l6,0 l3,-3 l-2,-5 l-4,-2 Z", cx: 283, cy: 173 },
  HU: { d: "M275,180 l-5,3 l-2,6 l3,5 l10,2 l6,-3 l2,-6 l-5,-5 Z", cx: 280, cy: 188 },
  RO: { d: "M300,185 l-5,3 l-3,8 l2,8 l8,5 l10,0 l5,-5 l-2,-10 l-5,-6 l-8,-3 Z", cx: 308, cy: 195 },
  BG: { d: "M310,205 l-5,3 l-2,6 l3,5 l8,2 l6,-3 l2,-5 l-5,-5 Z", cx: 315, cy: 213 },
  GR: { d: "M300,225 l-5,5 l-2,10 l3,8 l5,5 l5,-3 l2,-8 l-2,-10 l-3,-5 Z", cx: 303, cy: 240 },
  HR: { d: "M262,195 l-2,3 l3,8 l5,3 l4,-2 l0,-5 l-3,-5 l-4,-2 Z", cx: 267, cy: 200 },
  SI: { d: "M252,195 l-2,2 l1,4 l4,2 l4,-1 l1,-3 l-3,-3 Z", cx: 256, cy: 198 },
  BA: { d: "M268,205 l-2,3 l1,5 l4,3 l4,-1 l1,-4 l-3,-4 Z", cx: 272, cy: 210 },
  RS: { d: "M280,200 l-3,3 l0,8 l3,5 l5,2 l4,-3 l1,-6 l-3,-6 Z", cx: 284, cy: 210 },
  SE: { d: "M265,60 l-3,10 l-5,20 l0,15 l3,15 l5,10 l5,-5 l3,-15 l0,-20 l-3,-18 Z", cx: 266, cy: 100 },
  NO: { d: "M245,50 l-5,10 l-8,15 l-3,15 l0,18 l5,10 l5,-5 l5,-15 l3,-18 l2,-15 Z", cx: 245, cy: 90 },
  DK: { d: "M235,118 l-3,3 l0,8 l3,5 l5,0 l3,-5 l-2,-6 l-3,-5 Z", cx: 237, cy: 127 },
  FI: { d: "M300,50 l-3,10 l-2,15 l2,15 l5,10 l5,5 l3,-8 l0,-15 l-2,-15 l-3,-12 Z", cx: 303, cy: 82 },
  EE: { d: "M305,108 l-3,2 l0,4 l4,2 l4,0 l2,-3 l-3,-4 Z", cx: 308, cy: 112 },
  LV: { d: "M302,118 l-3,2 l0,5 l4,3 l5,0 l2,-3 l-2,-5 Z", cx: 306, cy: 123 },
  LT: { d: "M298,128 l-3,2 l0,5 l4,3 l5,0 l2,-4 l-2,-4 Z", cx: 302, cy: 133 },
};

export default function EuropeMap() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="section-7" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold tracking-widest uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Europe <span className="text-teal">Territory Map</span>
          </h2>
          <p className="text-slate text-lg">
            Click any country to see distribution details
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <svg
              viewBox="100 30 260 260"
              className="w-full max-w-lg mx-auto"
              style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))" }}
            >
              {Object.entries(countryPaths).map(([code, { d }]) => {
                const data = countryData[code];
                const fill = data ? statusColor[data.status] : "#4B5563";
                const isSelected = selected === code;
                return (
                  <path
                    key={code}
                    d={d}
                    fill={fill}
                    fillOpacity={isSelected ? 1 : 0.6}
                    stroke={isSelected ? "#fff" : "#1E2761"}
                    strokeWidth={isSelected ? 2 : 1}
                    className="cursor-pointer transition-all duration-200 hover:fill-opacity-90"
                    onClick={() => setSelected(selected === code ? null : code)}
                  />
                );
              })}
              {/* Country labels */}
              {Object.entries(countryPaths).map(([code, { cx, cy }]) => (
                <text
                  key={`label-${code}`}
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#fff"
                  fontSize="6"
                  fontWeight="bold"
                  className="pointer-events-none select-none"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
                >
                  {code}
                </text>
              ))}
            </svg>
          </motion.div>

          {/* Info panel */}
          <div className="w-full lg:w-80 min-h-[200px]">
            <AnimatePresence mode="wait">
              {selected && countryData[selected] ? (
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-navy-light/50 border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: statusColor[countryData[selected].status] }}
                    />
                    <h3 className="text-xl font-semibold">{countryData[selected].name}</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-slate">Distributor:</span>
                      <p className="text-white font-medium">{countryData[selected].distributor}</p>
                    </div>
                    <div>
                      <span className="text-slate">Territory Type:</span>
                      <p className="text-white font-medium">{countryData[selected].type}</p>
                    </div>
                    <div>
                      <span className="text-slate">Status:</span>
                      <p
                        className="font-medium"
                        style={{ color: statusColor[countryData[selected].status] }}
                      >
                        {statusLabel[countryData[selected].status]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-navy-light/30 border border-white/5 rounded-2xl p-6 text-center"
                >
                  <p className="text-slate text-sm">Click a country on the map to view details</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              {Object.entries(statusColor).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs text-slate capitalize">{statusLabel[key as keyof typeof statusLabel]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
