"use client";

import dynamic from "next/dynamic";
import PasswordGate from "@/components/PasswordGate";
import TitleSlide from "@/components/TitleSlide";
import TheProblem from "@/components/TheProblem";
import ItalyHub from "@/components/ItalyHub";
import TheSolution from "@/components/TheSolution";
import Qualification from "@/components/Qualification";
import Objections from "@/components/Objections";
import ProofOfConcept from "@/components/ProofOfConcept";
import DistributorPlatform from "@/components/DistributorPlatform";
import EPC from "@/components/EPC";
import WhyAllThree from "@/components/WhyAllThree";
import PersonalNote from "@/components/PersonalNote";
import Navigation from "@/components/Navigation";

// Dynamic imports for components with Recharts (SSR issues)
const FinancialData = dynamic(() => import("@/components/FinancialData"), { ssr: false });
const MarginCalculator = dynamic(() => import("@/components/MarginCalculator"), { ssr: false });
const EuropeMap = dynamic(() => import("@/components/EuropeMap"), { ssr: false });

function PillarDivider({ num, title, color, subtitle }: { num: string; title: string; color: string; subtitle: string }) {
  return (
    <div className="section-snap flex items-center justify-center px-8">
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {num}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color }}>
          {title}
        </h2>
        <p className="text-slate text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PasswordGate>
      <Navigation />
      <main>
        {/* Section 0 */}
        <TitleSlide />
        {/* Section 1 — Where Tigo Is Today */}
        <FinancialData />
        {/* Section 2 — The Problem */}
        <TheProblem />
        {/* Section 3 — Italy Hub Problem */}
        <ItalyHub />
        {/* Section 4–9 — Pillar 1: EU Distribution */}
        <TheSolution />
        <MarginCalculator />
        <Qualification />
        <EuropeMap />
        <Objections />
        <ProofOfConcept />
        {/* Pillar 2 transition */}
        <PillarDivider num="2" title="Distributor Platform" color="#3B82F6" subtitle="From spreadsheets to a live intelligence network" />
        {/* Section 10 — Pillar 2: Platform */}
        <DistributorPlatform />
        {/* Pillar 3 transition */}
        <PillarDivider num="3" title="EPC Expansion" color="#F5A623" subtitle="From hardware supplier to project developer" />
        {/* Section 11 — Pillar 3: EPC */}
        <EPC />
        {/* Section 12 — Why All Three */}
        <WhyAllThree />
        {/* Section 13 — Personal Note */}
        <PersonalNote />
      </main>
    </PasswordGate>
  );
}
