export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I build polished, accessible digital experiences where thoughtful
          design meets solid engineering. My focus is on the intersection of
          aesthetics and functionality, creating interfaces that look great and
          perform even better.
        </p>
        <p>
          Currently, I spend my time developing modern web applications using{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span>, and{" "}
          <span className="text-foreground font-medium">Next.js</span>. I care
          deeply about performance, accessibility, and the details that elevate
          a good product into a great one.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new tools,
          contributing to open-source, or diving into creative side projects
          that push my skills forward.
        </p>
      </div>
    </section>
  );
}
