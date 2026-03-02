export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-foreground lg:sr-only">
        Contact
      </h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
        <p>
          If you&apos;d like to discuss a project or just say hi, I&apos;m
          always down to chat. The best way to reach me is via email or through
          my social links.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 text-foreground font-medium transition-colors hover:text-accent"
        >
          hello@example.com
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
            className="transition-transform group-hover:translate-x-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
