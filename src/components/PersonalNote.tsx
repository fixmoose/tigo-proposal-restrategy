"use client";

import { motion } from "framer-motion";

export default function PersonalNote() {
  return (
    <section id="section-13" className="section-snap flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm tracking-widest uppercase">
            Personal Note
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Slovenia <span className="text-teal">&</span> Croatia
          </h2>
        </motion.div>

        {/* Initra intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-gradient-to-br from-teal/10 to-navy-light/50 border border-teal/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Initra Energija</h3>
          <p className="text-slate leading-relaxed mb-4">
            A company built from the ground up to be exactly what this proposal describes:
            a dedicated, Tigo-only distribution partner. Based in Slovenia with operations
            across Croatia, Serbia, and Bosnia &amp; Herzegovina.
          </p>
          <p className="text-slate leading-relaxed">
            Not a multi-brand wholesaler adding Tigo to the shelf.
            Not a generalist testing the waters. A purpose-built vehicle for Tigo distribution
            in the Adriatic and Western Balkans region.
          </p>
        </motion.div>

        {/* Three asks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Three Asks</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: "Territory Rights",
                desc: "Exclusive distribution rights for Slovenia, Croatia, Serbia, and Bosnia & Herzegovina.",
              },
              {
                num: "02",
                title: "Flat Pricing Access",
                desc: "Same pricing as every other Tigo distributor in Europe — no volume disadvantage, no special favors.",
              },
              {
                num: "03",
                title: "Partnership Framework",
                desc: "A formal distributor agreement under the new qualification model. Evaluated on the same criteria as everyone else.",
              },
            ].map((ask, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="bg-navy-light/50 border border-white/5 rounded-xl p-6"
              >
                <div className="text-teal text-3xl font-bold mb-3 opacity-40">{ask.num}</div>
                <h4 className="font-semibold mb-2">{ask.title}</h4>
                <p className="text-slate text-sm leading-relaxed">{ask.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Domain gift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gold/5 border border-gold/20 rounded-2xl p-6 mb-8 text-center"
        >
          <div className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
            A Gift of Good Faith
          </div>
          <p className="text-slate leading-relaxed">
            We have secured <span className="text-white font-semibold">17 Tigo-related domains</span> across
            European country TLDs. These are offered to Tigo Energy as a gift — no strings attached —
            as a demonstration of our long-term commitment to the brand.
          </p>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8 border-t border-white/5"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 max-w-2xl mx-auto leading-relaxed">
            &ldquo;We are not asking to become a distributor.
            <br />
            <span className="text-teal font-normal">We already are one.</span>&rdquo;
          </blockquote>
          <p className="text-slate text-sm mt-6">
            — Dejan Obradovic, Initra Energija
          </p>
        </motion.div>
      </div>
    </section>
  );
}
