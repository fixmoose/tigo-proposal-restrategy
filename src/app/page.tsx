"use client";

import dynamic from "next/dynamic";
import PasswordGate from "@/components/PasswordGate";
import TitleSlide from "@/components/TitleSlide";
import TheProblem from "@/components/TheProblem";
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
        {/* Section 3–8 — Pillar 1: EU Distribution */}
        <TheSolution />
        <MarginCalculator />
        <Qualification />
        <EuropeMap />
        <Objections />
        <ProofOfConcept />
        {/* Section 9 — Pillar 2: Platform */}
        <DistributorPlatform />
        {/* Section 10 — Pillar 3: EPC */}
        <EPC />
        {/* Section 11 — Why All Three */}
        <WhyAllThree />
        {/* Section 12 — Personal Note */}
        <PersonalNote />
      </main>
    </PasswordGate>
  );
}
