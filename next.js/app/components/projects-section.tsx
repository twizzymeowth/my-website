const projects = [
  {
    title: "Design System",
    description:
      "A comprehensive component library and design system built for scalability. Features accessible components, theming support, and thorough documentation.",
    technologies: ["React", "TypeScript", "Storybook", "Radix UI"],
    url: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts and data visualization. Built with performance in mind, handling thousands of data points seamlessly.",
    technologies: ["Next.js", "D3.js", "PostgreSQL", "Tailwind CSS"],
    url: "#",
  },
  {
    title: "CLI Tool",
    description:
      "A developer productivity CLI that automates repetitive tasks. Includes scaffolding, code generation, and integration with popular development workflows.",
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    url: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            className="group flex flex-col gap-2 rounded-lg p-4 -mx-4 transition-all duration-200 hover:bg-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-base font-medium leading-snug text-foreground">
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1.5 inline-block text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
