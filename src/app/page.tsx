"use client";

import dynamic from "next/dynamic";
import PasswordGate from "@/components/PasswordGate";
import TitleSlide from "@/components/TitleSlide";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import Qualification from "@/components/Qualification";
import Objections from "@/components/Objections";
import PersonalNote from "@/components/PersonalNote";
import Navigation from "@/components/Navigation";

// Dynamic imports for components with Recharts (SSR issues)
const MarginCalculator = dynamic(() => import("@/components/MarginCalculator"), { ssr: false });
const WhyNow = dynamic(() => import("@/components/WhyNow"), { ssr: false });
const EuropeMap = dynamic(() => import("@/components/EuropeMap"), { ssr: false });

export default function Home() {
  return (
    <PasswordGate>
      <Navigation />
      <main>
        <TitleSlide />
        <TheProblem />
        <MarginCalculator />
        <TheSolution />
        <Qualification />
        <EuropeMap />
        <Objections />
        <WhyNow />
        <PersonalNote />
      </main>
    </PasswordGate>
  );
}
