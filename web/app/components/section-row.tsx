"use client";

interface SectionItem {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
}

interface SectionRowProps {
  title: string;
  items: SectionItem[];
}

export function SectionRow({ title, items }: SectionRowProps) {
  const sectionId = title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");

  return (
    <section id={sectionId} className="scroll-mt-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const CardWrapper = item.link ? "a" : "div";
          const linkProps = item.link
            ? { href: item.link, target: "_blank" as const, rel: "noopener noreferrer" }
            : {};

          return (
            <CardWrapper
              key={item.title}
              {...linkProps}
              className="group relative flex flex-col gap-3 rounded-lg bg-surface p-5 transition-all duration-300 hover:bg-muted"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 h-1 w-full rounded-t-lg bg-gradient-to-r from-accent/60 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-accent">
                    {item.subtitle}
                  </p>
                </div>
                {item.link && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                )}
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Play-style hover button like Spotify */}
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 shadow-lg transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}
