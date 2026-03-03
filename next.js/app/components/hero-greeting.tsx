"use client";

import { useEffect, useState } from "react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function HeroGreeting() {
  const [greeting, setGreeting] = useState("Good evening");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <section className="rounded-xl bg-gradient-to-b from-accent/30 to-background px-8 pb-10 pt-12">
      <p className="text-sm font-medium text-muted-foreground">{greeting}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
        Christopher Kundrat
      </h1>
      <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground">
        Cybersecurity student at Old Dominion University with hands-on
        experience in ethical hacking, cloud security, and security consulting.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="mailto:ckundrat@odu.edu"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
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
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          ckundrat@odu.edu
        </a>
        <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
          (757) 298-5953
        </span>
      </div>
    </section>
  );
}
