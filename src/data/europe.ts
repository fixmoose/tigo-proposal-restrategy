export interface CountryData {
  name: string;
  distributor: string;
  type: string;
  status: "active" | "transition" | "unassigned";
}

export const countryData: Record<string, CountryData> = {
  DE: { name: "Germany", distributor: "Transition partner TBD", type: "Large market — dedicated dept.", status: "transition" },
  FR: { name: "France", distributor: "Transition partner TBD", type: "Large market — dedicated dept.", status: "transition" },
  IT: { name: "Italy", distributor: "Transition partner TBD", type: "Large market — dedicated dept.", status: "transition" },
  ES: { name: "Spain", distributor: "Proposed — new partner", type: "Medium market — standalone", status: "active" },
  PT: { name: "Portugal", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  NL: { name: "Netherlands", distributor: "Proposed — new partner", type: "Medium market — standalone", status: "active" },
  BE: { name: "Belgium", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  AT: { name: "Austria", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  CH: { name: "Switzerland", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  PL: { name: "Poland", distributor: "Proposed — new partner", type: "Medium market — standalone", status: "active" },
  CZ: { name: "Czech Republic", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  SE: { name: "Sweden", distributor: "Proposed — new partner", type: "Medium market — standalone", status: "active" },
  NO: { name: "Norway", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  DK: { name: "Denmark", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  FI: { name: "Finland", distributor: "Proposed — new partner", type: "Small market — standalone", status: "active" },
  GR: { name: "Greece", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  RO: { name: "Romania", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  HU: { name: "Hungary", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  BG: { name: "Bulgaria", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  HR: { name: "Croatia", distributor: "Initra Energija", type: "Small market — standalone Tigo-only", status: "active" },
  SI: { name: "Slovenia", distributor: "Initra Energija", type: "Small market — standalone Tigo-only", status: "active" },
  SK: { name: "Slovakia", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  IE: { name: "Ireland", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  GB: { name: "United Kingdom", distributor: "Transition partner TBD", type: "Large market", status: "transition" },
  LT: { name: "Lithuania", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  LV: { name: "Latvia", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  EE: { name: "Estonia", distributor: "Unassigned", type: "Small market", status: "unassigned" },
  RS: { name: "Serbia", distributor: "Initra Energija (regional)", type: "Small market — standalone Tigo-only", status: "active" },
  BA: { name: "Bosnia & Herzegovina", distributor: "Initra Energija (regional)", type: "Small market", status: "active" },
};

export const energyPriceData = [
  { year: "2020", price: 60 },
  { year: "2021", price: 95 },
  { year: "2022", price: 230 },
  { year: "2023", price: 165 },
  { year: "2024", price: 140 },
  { year: "2025", price: 125 },
  { year: "2026", price: 115 },
];

export const objections = [
  {
    title: "\"We'll lose existing distributors if we impose restrictions.\"",
    answer: "Multi-brand distributors who deprioritize Tigo are already lost revenue. Replacing them with committed, Tigo-only partners creates stronger, more reliable channels. The transition timeline (12–24 months) allows for orderly handoffs."
  },
  {
    title: "\"Flat pricing eliminates our flexibility.\"",
    answer: "Flat pricing doesn't mean one price forever — it means one price for everyone at any given time. Tigo retains full control to adjust pricing quarterly or annually. What changes is the *perception*: distributors trust that their competitor isn't getting a secret deal."
  },
  {
    title: "\"Tigo-only is too restrictive — we'll shrink the pool.\"",
    answer: "The solar market is full of hungry, capable companies who would jump at an exclusive Tigo relationship — especially with protected margins. The Porsche model works: exclusivity attracts quality, not quantity."
  },
  {
    title: "\"This restructuring will slow down sales short-term.\"",
    answer: "Yes, there may be a 1–2 quarter dip during transition. But the current structure is already bleeding margin through discount abuse and channel conflict. The cost of inaction is higher than the cost of restructuring."
  },
  {
    title: "\"We can't enforce MSRP in the EU — it's illegal.\"",
    answer: "Correct: a hard MSRP mandate violates EU competition law. This proposal uses a *soft* MSRP — a recommended retail price with a 10% maximum deviation guideline. It's unenforceable by law but enforceable by contract through territory protection and qualification requirements."
  },
  {
    title: "\"Why should we trust a new distributor over established ones?\"",
    answer: "Track record matters, but so does alignment. Established multi-brand distributors have divided loyalty. A new, dedicated Tigo partner — properly vetted and contractually bound — will outperform a distracted incumbent every time."
  },
];

export const sectionNames = [
  "Title",
  "The Problem",
  "Margin Calculator",
  "The Solution",
  "Qualification",
  "Europe Map",
  "Objections",
  "Why Now",
  "Slovenia & Croatia",
];
