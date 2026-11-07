import type { APIRoute } from "astro";
import { profile } from "../data/profile";

// Generated at build time from the shared profile (src/data/profile.ts),
// so /llms.txt and the page's JSON-LD / bio never drift apart.
export const GET: APIRoute = () => {
  const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

  const body = `# ${profile.name}

> ${profile.jobTitle}

## About

${profile.bio}

## Expertise

${list(profile.knowsAbout)}

## Education

${list(profile.education)}

## Projects

${profile.projects.map((p) => `- ${p.name}: ${p.url} (${p.tagline})`).join("\n")}

## Teaching

${profile.teaching.map((p) => `- ${p.name}: ${p.url} (${p.tagline})`).join("\n")}

## Links

- LinkedIn: ${profile.links.linkedin}
- GitHub: ${profile.links.github}
- Email: ${profile.email}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
