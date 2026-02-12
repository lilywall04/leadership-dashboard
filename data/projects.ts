export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "elite-portfolio",
    title: "Elite Portfolio",
    description:
      "A modular React + TypeScript portfolio with interactive UI and animations.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    slug: "raspberry-pi-ai-pet",
    title: "Raspberry Pi AI Pet",
    description:
      "An interactive AI pet powered by sensors and Python logic.",
    stack: ["Python", "Raspberry Pi", "Hardware"],
  },
];
