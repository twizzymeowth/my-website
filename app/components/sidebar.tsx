import { getSiteSettings } from "@/sanity/lib/queries";

const navItems = [
  {
    label: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    href: "#",
    active: true,
  },
  {
    label: "Education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      </svg>
    ),
    href: "#education",
  },
  {
    label: "Skills",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    href: "#skills",
  },
  {
    label: "Experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12h.01" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    ),
    href: "#experience",
  },
];

const quickLinks = [
  { label: "Final Reflection Essay", href: "#" },
  { label: "CYSE 450 Lab 5 - SQL Injection Attack", href: "#" },
  { label: "Tenable Vulnerability Scan Report", href: "#" },
  { label: "Ethical Hacking Lab on Kali Linux", href: "#" },
  { label: "Python Cryptographic Calculator", href: "#" },
  { label: "Linux & Crontab Configuration", href: "#" },
  { label: "ServiceNow / Active Directory Help Desk Ticket", href: "#" },
  { label: "CYSE 280 Research Paper: AI in Cloud Security", href: "#" },
  { label: "Executive Reflection Presentation: City of Suffolk", href: "#" },
  { label: "Individual Final Reflection: Cyber Clinic", href: "#" },
];

export async function Sidebar() {
  const settings = await getSiteSettings();

  const initials = settings?.initials ?? "CK";
  const displayName = settings?.displayName ?? "Chris Kundrat";
  const field = settings?.field ?? "Cybersecurity";
  const githubUrl = settings?.githubUrl ?? "#";
  const linkedinUrl = settings?.linkedinUrl ?? "#";
  const researchPaperUrl =
    settings?.researchPaperUrl ??
    "https://drive.google.com/file/d/118fb8ooXrzbzYiNPpjoBK0kmzlibZGmr/view?usp=drive_link";
  const resumeUrl = settings?.resumeUrl ?? null;

  return (
    <aside className="sticky top-0 hidden h-screen w-[240px] shrink-0 flex-col gap-2 p-2 lg:flex">
      {/* Navigation card */}
      <div className="rounded-lg bg-surface p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{displayName}</p>
            <p className="text-xs text-muted-foreground">{field}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map(({ label, icon, href, active }) => (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={active ? "text-foreground" : "text-muted-foreground"}>{icon}</span>
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Quick links card */}
      <div className="flex flex-1 flex-col justify-between rounded-lg bg-surface p-4">
        <div className="overflow-y-auto">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h3>
          <div className="flex flex-col gap-1">
            {quickLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                </svg>
                <span className="leading-tight">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social links at bottom */}
        <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
