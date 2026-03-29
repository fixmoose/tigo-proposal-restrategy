"use client";

import { motion } from "framer-motion";

const examples = [
  {
    company: "Victron Energy",
    origin: "Netherlands",
    color: "#0D7377",
    model: "Territorial distributor network with zero direct competition on price",
    details: [
      "No direct customer support hotline — all support flows through appointed distributors",
      "Distributors required to provide technical training, pre-sales support, and warranty handling",
      "Victron never competes with its own distributors on price — ever",
    ],
    result: "Unrivalled reputation for quality and one of the most loyal installer communities in the solar/energy industry",
    quote: "Victron openly credits its success to its strong global distribution network",
    source: "victronenergy.com, intelligentcontrols.io",
  },
  {
    company: "Porsche",
    origin: "Germany",
    color: "#0D7377",
    model: "Single appointed national importer per country with exclusive showroom requirements",
    details: [
      "One national importer handles all local sales, service, regulatory compliance",
      "Porsche maintains brand control, MSRP pricing guidance, and product decisions",
      "Dealers cannot sell competing brands alongside Porsche in the same showroom",
    ],
    result: "Consistently one of the highest profit-per-vehicle margins in the automotive industry",
    quote: null,
    source: null,
  },
  {
    company: "Apple",
    origin: "Premium Reseller Program",
    color: "#0D7377",
    model: "Exclusive Premium Resellers with strict brand standards and no-discount MSRP",
    details: [
      "Appoints exclusive Premium Resellers in markets where Apple Stores don't exist",
      "Resellers must meet strict brand standards, store design requirements, staff training",
      "Cannot sell competing brands in the same space",
    ],
    result: "Consistent global brand experience, premium pricing maintained across all markets",
    quote: null,
    source: null,
  },
  {
    company: "Bosch Power Tools",
    origin: "EU",
    color: "#0D7377",
    model: "Regional distributors with strictly enforced territories and flat trade pricing",
    details: [
      "Regional distributors per country, strictly enforced territories",
      "Volume-based pricing tiers replaced with flat trade pricing in many EU markets",
      "Local distributors provide training, demo stock, technical support",
    ],
    result: "Dominant EU market share maintained for decades through distributor loyalty",
    quote: null,
    source: null,
  },
];

export default function ProofOfConcept() {
  return (
    <section id="section-8" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold tracking-widest uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proof of <span className="text-teal">Concept</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            This model isn&apos;t theoretical — the world&apos;s best brands already use it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-navy-light/50 border border-white/5 rounded-xl p-5 hover:border-teal/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal text-sm font-bold">
                  {ex.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-base">{ex.company}</h3>
                  <p className="text-slate text-xs">{ex.origin}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 mb-3">{ex.model}</p>
              <div className="bg-teal/5 border border-teal/10 rounded-lg px-3 py-2 mb-2">
                <p className="text-teal text-xs font-medium mb-0.5">Result</p>
                <p className="text-slate text-xs leading-relaxed">{ex.result}</p>
              </div>
              {ex.quote && (
                <p className="text-xs italic text-slate/70 mt-2">
                  &ldquo;{ex.quote}&rdquo;
                  {ex.source && <span className="text-slate/40 ml-1">— {ex.source}</span>}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Common thread callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-teal/5 border border-teal/20 rounded-xl p-6 text-center"
        >
          <p className="text-sm font-medium text-white mb-1">Common Thread</p>
          <p className="text-slate text-sm leading-relaxed max-w-3xl mx-auto">
            Territorial exclusivity + brand standards + distributor investment = market dominance.{" "}
            <span className="text-teal font-medium">
              None of these companies compete with their own distributors on price.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
