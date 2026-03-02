const experiences = [
  {
    period: "2024 -- Present",
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    companyUrl: "#",
    description:
      "Build and maintain critical UI components powering the core product. Collaborate cross-functionally with design and product teams to ship accessible, performant features.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2022 -- 2024",
    title: "Frontend Developer",
    company: "StartupXYZ",
    companyUrl: "#",
    description:
      "Led the frontend architecture for a SaaS dashboard, improving load times by 40%. Implemented design systems and component libraries used across multiple teams.",
    technologies: ["React", "GraphQL", "Storybook", "Jest"],
  },
  {
    period: "2020 -- 2022",
    title: "Web Developer",
    company: "Digital Agency",
    companyUrl: "#",
    description:
      "Developed responsive marketing websites and e-commerce platforms for a diverse portfolio of clients, from startups to enterprise.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "WordPress"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <a
            key={exp.title + exp.company}
            href={exp.companyUrl}
            className="group flex flex-col gap-1 rounded-lg p-4 -mx-4 transition-all duration-200 hover:bg-card lg:flex-row lg:gap-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="shrink-0 pt-1 text-xs font-mono uppercase tracking-wider text-muted-foreground lg:w-32">
              {exp.period}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium leading-snug text-foreground">
                {exp.title}{" "}
                <span className="text-accent">
                  {"· "}
                  {exp.company}
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
                    className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
