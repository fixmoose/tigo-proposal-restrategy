"use client";

import { motion } from "framer-motion";

export default function TitleSlide() {
  return (
    <section id="section-0" className="section-snap flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-teal blur-3xl" />
      </div>

      <div className="text-center z-10 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm tracking-widest uppercase">
            Strategic Proposal · 2026
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Tigo
          <br />
          <span className="text-teal">Restrategizing</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Distribution · Platform · Growth — 2026
        </motion.p>

        <motion.div
          className="space-y-3 text-slate/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <p className="text-base">
            Presented to <span className="text-white font-medium">Zvi Alon</span>{" "}
            <span className="text-teal">CEO</span> ·{" "}
            <span className="text-white font-medium">Jing Tian</span>{" "}
            <span className="text-teal">CSO</span>
          </p>
          <p className="text-sm">
            Prepared by <span className="text-white">Dejan Obradovic</span>, Independent Consultant
          </p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="animate-bounce text-teal/50 text-sm">
            ↓ Scroll to begin
          </div>
        </motion.div>
      </div>
    </section>
  );
}
