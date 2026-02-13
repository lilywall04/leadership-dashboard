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
    slug: "Padre-Ginos",
    title: "Padre Gino's Pizza",
    description:
      "My first experience working with React, Vite, and Tailwind CSS.",
    stack: ["React", "Vite", "Tailwind"],
  },
  {
    slug: "Lilys-Game",
    title: "2D Game of Lily and her friends",
    description:
      "Java project that utilizes JavaFX to create a 2D game featuring Lily and her friends.",
    stack: ["Java", "JavaFX", "JFrame"],
  },
];
