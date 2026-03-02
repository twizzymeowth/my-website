import { Nav } from "./components/nav";
import { SocialLinks } from "./components/social-links";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-16">
        {/* Left column - sticky header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[420px] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Your Name
            </h1>
            <h2 className="text-lg font-medium tracking-tight text-foreground/80">
              Frontend Engineer
            </h2>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
            <div className="mt-12">
              <Nav />
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <SocialLinks />
          </div>
        </header>

        {/* Right column - scrollable content */}
        <main className="flex flex-col gap-24 pt-24 lg:w-full lg:max-w-xl lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />

          <footer className="pb-16 text-sm text-muted-foreground">
            <p>
              Built with{" "}
              <a
                href="https://nextjs.org"
                className="font-medium text-foreground/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                className="font-medium text-foreground/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
              . Deployed on{" "}
              <a
                href="https://vercel.com"
                className="font-medium text-foreground/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
