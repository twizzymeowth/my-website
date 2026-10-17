"use client";

import { useState } from "react";

const assignmentSections = [
  {
    title: "Intro",
    eyebrow: "01 / Project overview",
    content: [
      "CYSE 609 Linux Security & Generative AI final project built a two-user Kali Linux environment. User1 acts as the manager and belongs to both Manager and Employee; User2 is the lower-privilege employee.",
      "The report follows an attack chain from reconnaissance and exploitation through impersonation and attempted privilege escalation. It also documents where AI suggestions needed human verification, troubleshooting, and safer decisions.",
    ],
    tags: ["Kali Linux", "User permissions", "AI evaluation"],
  },
  {
    title: "Experiments",
    eyebrow: "02 / Four documented tests",
    content: [
      "Experiment 1 — Legitimate Administrative Commands: created groups, users, and protected shared folders, then verified setgid behavior and group membership with id and getent.",
      "Experiment 2 — Potential Harm or Misuse: simulated a password-hash leak into an Employee-readable folder and documented the sudo redirection failure before correcting it with sudo tee.",
      "Experiment 3 — Ambiguous Prompt Evaluation: tested identity switching with su and examined whether a manager could move protected data into User2's home directory.",
      "Experiment 4 — Safety Guardrail & Behavior Test: evaluated a request involving reconnaissance, persistence, scheduled execution, and exfiltration. The risky portion was deliberately not executed.",
    ],
    tags: ["Admin", "Misuse", "Ambiguity", "Guardrails"],
  },
  {
    title: "Results / Recommendations",
    eyebrow: "03 / Findings and safer practice",
    content: [
      "The lab showed that AI can explain Linux commands quickly, but it cannot see the VM's state. The most useful corrections came from reading errors, checking man pages, and testing each command in small pieces.",
      "Key findings included the difference between sudo cat and sudo tee for redirection, the importance of usermod -aG, and the need to check permissions from the acting user's perspective rather than assuming root access applies everywhere.",
      "Recommendations: validate account and group state before changes, avoid placing password hashes in shared locations, explain why each command is necessary, run commands in small pieces, and decline requests that would create persistence or exfiltration capability.",
    ],
    tags: ["Verify", "Least privilege", "Small steps", "Safety first"],
  },
  {
    title: "Rubric",
    eyebrow: "04 / Submission checklist",
    content: [
      "The report includes the project introduction, four experiment tables, exact concept-level AI prompts and responses, predictions before testing, safety decisions, procedures and observed results, independent verification, and a judgment of the AI's accuracy.",
      "It also includes a conclusion and recommendations, APA references, AI-use disclosure, and an experiment-by-experiment completion summary. Experiment 4 is intentionally marked not executed because the requested behavior would have enabled persistence and data exfiltration.",
    ],
    tags: ["Complete", "Evidence", "References", "Disclosure"],
  },
];

export function LinuxAssignmentSection() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <section id="linux-assignment-9" className="scroll-mt-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Linux Assignment 9</h2>
        </div>
        <a
          href="https://blobs.vusercontent.net/blob/LinuxAssignment_9-2-4YoWU2RbjAPaeccUWiz5Jc78dbDkbH.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
        >
          View full PDF
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {assignmentSections.map((section, index) => {
          const isOpen = openSection === section.title;
          return (
            <div key={section.title} className="group overflow-hidden rounded-lg bg-surface">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenSection(isOpen ? null : section.title)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted"
              >
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <span className="flex-1">
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{section.eyebrow}</span>
                  <span className="mt-1 block text-base font-semibold text-foreground">{section.title}</span>
                </span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                  <span className="text-xl leading-none">+</span>
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border px-5 pb-5 pt-4">
                  <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
                    {section.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.title === "Intro" && (
                    <figure className="mt-5 overflow-hidden rounded-md border border-border bg-background">
                      <iframe
                        title="Linux Assignment 9 report preview"
                        src="https://blobs.vusercontent.net/blob/LinuxAssignment_9-2-4YoWU2RbjAPaeccUWiz5Jc78dbDkbH.pdf#page=1&view=FitH"
                        className="h-80 w-full"
                      />
                      <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
                        Embedded report preview — use View full PDF for the complete document and figures.
                      </figcaption>
                    </figure>
                  )}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {section.tags.map((tag) => <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">{tag}</span>)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
