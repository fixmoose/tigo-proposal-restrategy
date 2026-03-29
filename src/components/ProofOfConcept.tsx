"use client";

import { motion } from "framer-motion";

const examples = [
  {
    company: "Victron Energy",
    origin: "Netherlands \u00B7 Founded 1975",
    badge: "bg-teal/10 text-teal border-teal/20",
    model: "Territorial distributor network with zero direct competition on price. NO customer support hotline \u2014 all support flows through appointed distributors.",
    details: "162 employees, 6 continents, $100\u2013500M revenue, profitable for 50 years. Their VRM platform (Victron Remote Management) is exactly the Pillar 2 concept \u2014 a live data platform connecting all installations and distributors back to HQ in real time.",
    result: "Unrivalled reputation and one of the most loyal installer communities in the solar/energy industry",
    quote: "Victron openly credits its success to its strong global distribution network",
    source: "victronenergy.com \u00B7 intelligentcontrols.io",
    type: "success" as const,
  },
  {
    company: "Fronius",
    origin: "Austria \u00B7 Privately held",
    badge: "bg-teal/10 text-teal border-teal/20",
    model: "Strict territorial distributors across EU. Each country has one appointed Fronius partner. Partners required to maintain demo stock, trained staff, local support.",
    details: "Premium pricing maintained for 30+ years despite aggressive Chinese competition. Local distributors provide first-line support, reducing load on HQ.",
    result: "Dominant EU market share maintained for decades through distributor loyalty and premium brand perception",
    quote: null,
    source: "fronius.com/en/solar-energy/installers-partners",
    type: "success" as const,
  },
  {
    company: "KOSTAL Solar Electric",
    origin: "Germany",
    badge: "bg-teal/10 text-teal border-teal/20",
    model: "Exclusive territorial distributors per EU country. Distributors required to achieve annual certification and minimum training hours.",
    details: "Structured partner program creates a built-in quality filter. Only certified installers can access technical support and warranty services.",
    result: "Highly loyal installer base and premium brand perception maintained across competitive EU markets",
    quote: null,
    source: "kostal-solar-electric.com/partner-program",
    type: "success" as const,
  },
  {
    company: "SolarEdge (SEDG)",
    origin: "Cautionary Counter-Example",
    badge: "bg-red-500/10 text-red-400 border-red-500/20",
    model: "Attempted centralized EU support without strong territorial distribution. Distributor complaints, margin compression, stock dumping.",
    details: "SEDG stock fell from $380 (2022) to under $20 (2024) \u2014 partly driven by EU distribution problems. Even dominant players collapse when distribution structure breaks down.",
    result: "The lesson: centralized support without territorial structure leads to the same problems Tigo faces today",
    quote: null,
    source: "SEDG NASDAQ public data \u00B7 finance.yahoo.com",
    type: "warning" as const,
  },
];

export default function ProofOfConcept() {
  return (
    <section id="section-9" className="section-snap flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-sm font-semibold tracking-wider uppercase">
            Pillar 1 &middot; Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proof of <span className="text-teal">Concept</span>
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Companies that have solved this problem all arrived at the same model
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {examples.map((ex, i) => {
            const isWarning = ex.type === "warning";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border rounded-xl p-5 ${
                  isWarning
                    ? "bg-red-500/5 border-red-500/20"
                    : "bg-navy-light/50 border-white/5 hover:border-teal/20"
                } transition-colors`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`px-2 py-0.5 rounded text-sm font-bold border ${ex.badge}`}>
                    {ex.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{ex.company}</h3>
                    <p className="text-slate text-sm">{ex.origin}</p>
                  </div>
                </div>
                <p className={`text-sm mb-2 leading-relaxed ${isWarning ? "text-red-300/80" : "text-white/80"}`}>{ex.model}</p>
                <p className="text-slate text-base leading-relaxed mb-2">{ex.details}</p>
                <div className={`rounded-lg px-3 py-1.5 ${isWarning ? "bg-red-500/5 border border-red-500/10" : "bg-teal/5 border border-teal/10"}`}>
                  <p className={`text-sm font-medium mb-0.5 ${isWarning ? "text-red-400" : "text-teal"}`}>
                    {isWarning ? "Warning" : "Result"}
                  </p>
                  <p className="text-slate text-base leading-relaxed">{ex.result}</p>
                </div>
                {ex.quote && (
                  <p className="text-sm italic text-slate/70 mt-2">
                    &ldquo;{ex.quote}&rdquo;
                  </p>
                )}
                {ex.source && (
                  <p className="text-sm text-slate/40 mt-1">{ex.source}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Common thread */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-teal/5 border border-teal/20 rounded-xl p-5 text-center"
        >
          <p className="text-lg font-medium text-white mb-1">Common Thread</p>
          <p className="text-slate text-base leading-relaxed max-w-3xl mx-auto">
            Territorial exclusivity + brand standards + distributor investment = market dominance.{" "}
            <span className="text-teal font-medium">
              None of these companies compete with their own distributors on price.
            </span>
          </p>
        </motion.div>

        {/* Sources */}
        <div className="mt-4 text-center">
          <p className="text-slate/30 text-sm">
            Sources: victronenergy.com &middot; vrm.victronenergy.com &middot; fronius.com &middot; kostal-solar-electric.com &middot; SEDG NASDAQ &middot; investors.tigoenergy.com
          </p>
        </div>
      </div>
    </section>
  );
}
