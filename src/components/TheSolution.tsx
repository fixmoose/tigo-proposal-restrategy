"use client";

import { motion } from "framer-motion";

export default function TheSolution() {
  return (
    <section id="section-4" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-sm font-semibold tracking-wider uppercase">
            Pillar 1 · Distribution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-teal">Solution</span>
          </h2>
          <p className="text-slate text-xl max-w-2xl mx-auto">
            Flat pricing with soft MSRP — end the race to the bottom
          </p>
        </motion.div>

        {/* Core concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Flat Pricing + Soft MSRP</h3>
          <p className="text-slate max-w-3xl mx-auto leading-relaxed">
            Every distributor pays the same price. A recommended price to certified installers with a{" "}
            <span className="text-teal font-semibold">soft ±10% deviation band</span>: up to{" "}
            <span className="text-white font-medium">MSRP +10% for small orders</span>, down to{" "}
            <span className="text-white font-medium">MSRP −10% for large orders</span> from distributors.
            Fully compliant with EU competition law — recommended pricing is permitted as long as it is
            non-binding and distributors retain final pricing discretion. Enforced indirectly through
            territory protection and qualification requirements, not price mandates. Sales limited to
            installers with minimum formal Tigo training — retail pricing from installer to end customer can vary.
          </p>
        </motion.div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
          >
            <div className="absolute -top-4 left-6 bg-navy px-3 py-1 text-red-400 text-sm font-semibold rounded-full border border-red-500/20">
              Before
            </div>
            <div className="mt-2 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <p className="text-slate text-base">Distributors undercut each other with secret volume discounts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <p className="text-slate text-base">Race to the bottom on pricing destroys margins</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <p className="text-slate text-base">Channel conflict — same customers approached by multiple distributors</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <p className="text-slate text-base">No territory protection — zero incentive to invest in market development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative bg-teal/5 border border-teal/20 rounded-2xl p-8"
          >
            <div className="absolute -top-4 left-6 bg-navy px-3 py-1 text-teal text-sm font-semibold rounded-full border border-teal/20">
              After
            </div>
            <div className="mt-2 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">✓</span>
                <p className="text-slate text-base">Flat pricing — everyone pays the same, trust is restored</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">✓</span>
                <p className="text-slate text-base">Protected territories — distributors invest knowing they won&apos;t be undercut</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">✓</span>
                <p className="text-slate text-base">Protected margins — soft MSRP keeps retail pricing stable</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">✓</span>
                <p className="text-slate text-base">Dedicated Tigo partners — full mindshare, not divided loyalty</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">✓</span>
                <p className="text-slate text-base">Eliminates purchasing coalitions — no discount tier to game, no incentive to pool orders, no artificial volume spikes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
