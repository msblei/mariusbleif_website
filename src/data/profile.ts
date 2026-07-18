// Single source of truth for machine-readable identity.
// Consumed by:
//   - src/pages/index.astro  -> JSON-LD Person + screen-reader bio
//   - src/pages/llms.txt.ts   -> generated /llms.txt
// Edit here; both stay in sync.

export const profile = {
  name: "Marius Bleif",
  jobTitle: "Consultant — AI, Cybersecurity & Strategy",
  bio: "Marius Bleif is a consultant specialising in artificial intelligence, cybersecurity, and strategy, bringing a unique blend of technical skills and business understanding. He helps organisations adopt AI securely and turn emerging technology into practical strategy, and regularly delivers hands-on workshops for professional and public-sector audiences. His education spans CISPA, Saarland University, and ETH Zürich.",
  knowsAbout: [
    "Artificial Intelligence",
    "Cybersecurity",
    "Information Security",
    "Technology Strategy",
    "Machine Learning",
    "AI Workshops & Training",
  ],
  knowsLanguage: ["German", "English", "French"],
  education: [
    "CISPA Helmholtz Center for Information Security",
    "Saarland University",
    "ETH Zürich",
  ],
  email: "marius.b.gm@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/msblei",
    github: "https://github.com/msblei",
  },
};
