export type Project = {
  id: string;
  title: string;
  sub: string;
  desc: string;
  chips: string[];
  link?: string | null;
  note?: string;
  noteLink?: string;
  press?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "yucp",
    title: "Yale Undergraduate Capital Partners",
    sub: "Founder & President",
    desc:
      "Yale's only undergraduate VC club. Built from scratch after realizing no space existed for undergrads to learn venture. 15 VC partnerships, $10B AUM network, 50+ students placed in semester-long roles.",
    chips: ["Venture Capital", "Education", "Community"],
    link: "https://www.yucp.org/",
  },
  {
    id: "matchatretta",
    title: "Matchatretta",
    sub: "Founder",
    desc:
      "Started at Yale out of a deep obsession with ceremonial-grade matcha and good conversation. Campus pop-ups for VCs and founders. 5g per serving, sourced from Uji, Japan.",
    note: "Tried by Luana Lopes (co-founder, Kalshi).",
    noteLink: "https://www.linkedin.com/in/luana-lopes-lara-3151068a/",
    chips: ["Consumer", "Community", "Yale"],
    link: "https://matchatretta.com",
  },
  {
    id: "yodoc",
    title: "Yodoc Mexico",
    sub: "Founder & President",
    desc: "Hosted Mexico's first Junior National Medical Congress.",
    press: "El Sol de Puebla",
    chips: ["Healthcare", "Social Impact", "Mexico"],
    link: null,
  },
  {
    id: "bicimix",
    title: "Bici-Mix",
    sub: "Designer & Builder",
    desc:
      "Built the first bicycle-powered concrete mixer @15. Watched a mason hand-mix concrete in a low-income community outside Puebla, Mexico and couldn't let it go.",
    chips: ["Hardware", "Construction", "Mexico"],
    link: null,
  },
];

export type Experience = {
  company: string;
  location: string;
  period: string;
  role: string;
  group?: string;
  bullets: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Centerview Partners",
    location: "Menlo Park, CA",
    period: "Jul 2025 – Present",
    role: "Investment Banking Analyst",
    group: "Technology Group",
    bullets: ["Figuring out how not to bankrupt a business."],
  },
  {
    company: "McKinsey & Company",
    location: "New York, NY",
    period: "2022 · 2023",
    role: "Summer Business Analyst",
    group:
      "Retail Banking & Payments — sophomore summer · Global Healthcare — freshman summer",
    bullets: [],
  },
  {
    company: "Romulus Capital",
    location: "Remote",
    period: "Feb–May 2022",
    role: "Venture Capital Fellow",
    group: "Early-stage, B2B, construction",
    bullets: [
      "1 of 8 fellows selected worldwide. Learned to source, diligence, and think like an early-stage investor.",
    ],
  },
  {
    company: "Yale University",
    location: "New Haven, CT",
    period: "2021–2025",
    role: "B.A. Economics & Statistics",
    group: "cum laude · Distinction in Major",
    bullets: [],
  },
];

export type ReadingItem = {
  title: string;
  author: string;
  tag: string;
  link: string;
};

export const READING: ReadingItem[] = [
  {
    title: "Merger Arbitrage: How to Profit from Event-Driven Arbitrage",
    author: "Thomas Kirchner",
    tag: "finance",
    link: "https://www.amazon.com/Merger-Arbitrage-Profit-Event-Driven-Finance/dp/1118736354",
  },
  {
    title: "Mujeres de Ojos Grandes",
    author: "Ángeles Mastretta",
    tag: "fiction",
    link: "https://www.amazon.com/-/es/Mujeres-grandes-Spanish-%C3%81ngeles-Mastretta/dp/8432217166",
  },
  {
    title: "Down and Out in Paris and London",
    author: "George Orwell",
    tag: "memoir",
    link: "https://www.amazon.com/Down-Paris-London-George-Orwell/dp/015626224X",
  },
];
