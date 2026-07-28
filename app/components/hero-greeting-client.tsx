"use client";

import { useEffect, useState } from "react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

const ABOUT_BIO = [
  "My name is Christopher Kundrat; I currently have a BS in Cybersecurity at ODU and I am pursuing my Masters Degree in Cybersecurity at ODU while currently working at the ODU IT Help Desk.",
  "After I graduate this spring, I am hoping to start my career in IT so that I could pursue my dream job of a system administrator.",
];

interface HeroGreetingClientProps {
  fullName: string;
  bio: string;
  email: string;
  phone: string;
  linkedin?: string;
}

export function HeroGreetingClient({
  fullName,
  bio,
  email,
  phone,
  linkedin,
}: HeroGreetingClientProps) {
  const [greeting, setGreeting] = useState("Good evening");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <section className="rounded-xl bg-gradient-to-b from-accent/30 to-background px-8 pb-10 pt-12">
      <p className="text-sm font-medium text-muted-foreground">{greeting}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
        {fullName}
      </h1>
      {bio && (
        <p className="mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {bio}
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${email}`}
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
          {email}
        </a>
        <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
          {phone}
        </span>
        {linkedin && (
          <a
            href={linkedin.startsWith("http") ? linkedin : `https://${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-3 max-w-xl">
        {ABOUT_BIO.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
