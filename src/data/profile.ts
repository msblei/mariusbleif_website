// Single source of truth for machine-readable identity.
// Consumed by:
//   - src/pages/index.astro  -> JSON-LD Person + screen-reader bio + link lists
//   - src/pages/llms.txt.ts   -> generated /llms.txt
// Edit here; both stay in sync.

export const profile = {
  name: "Marius Bleif",
  jobTitle: "Consultant for AI, Cybersecurity & Strategy",
  bio: "Marius Bleif is a consultant specialising in artificial intelligence, cybersecurity, and strategy, bringing a unique blend of technical skills and business understanding. He helps organisations adopt AI securely and turn emerging technology into practical strategy, and regularly delivers hands-on workshops for professional and public-sector audiences. His education spans CISPA, Saarland University, and ETH Zürich.",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Information Security",
    "Technology Strategy",
    "Machine Learning",
    "AI Workshops & Training",
    "Business strategy",
    "Business development"
  ],
  knowsLanguage: ["German", "English", "French"],
  education: [
    "CISPA Helmholtz Center for Information Security",
    "Saarland University",
    "ETH Zürich",
  ],
  email: "hello@mariusbleif.com",
  links: {
    linkedin: "https://www.linkedin.com/in/msblei",
    github: "https://github.com/msblei",
  },
  // Shown under "building" at the bottom of the home page, in this order
  // from top to bottom.
  // `icon` is a file in public/ (square, ideally the project's own tile).
  projects: [
    {
      name: "kladdle",
      url: "https://kladdle.com",
      tagline: "Steady wins for a busy life. Tasks, habits, objectives.",
      icon: "/kladdle-icon.svg",
    },
    {
      name: "Food Autonomy Atlas",
      url: "https://food-autonomy-atlas.com",
      tagline: "How long would the food produced in a country last its people?",
      icon: "/food-autonomy-atlas-icon.svg",
    },
  ],
  // Shown under "teaching", below "building". One link to the separate teaching
  // site, which lists the individual workshops itself.
  teaching: [
    {
      name: "teaching.mariusbleif.com",
      url: "https://teaching.mariusbleif.com",
      tagline: "Workshop tools, including From LLM to Agent and the AI Coding Workshop.",
    },
  ],
};
