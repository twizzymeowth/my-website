import Link from "next/link";

export const assignmentSections = [
  {
    title: "Intro",
    eyebrow: "01 / Project introduction",
    pages: "1-2",
    content: [
      "CYSE 609 Linux Security & Generative AI final project built a two-user environment inside a Kali Linux VM. User1 is the manager and belongs to both Manager and Employee; User2 is the lower-privilege employee.",
      "The scenario follows an attack chain: reconnaissance with getent and grep, exploitation by cracking a leaked hash with John the Ripper, impersonation with su, and an attempted privilege escalation with usermod.",
      "ChatGPT generated commands and explanations while Claude helped troubleshoot failed commands. Every command was typed, run, verified, and documented by Chris in the lab VM.",
    ],
    tags: ["Kali Linux", "User permissions", "AI evaluation"],
  },
  {
    title: "Experiment 1",
    eyebrow: "02 / Legitimate administrative commands",
    pages: "3-6",
    content: [
      "Purpose: create Employee and Manager groups, User1 and User2 accounts, and a protected shared folder for the later experiments.",
      "The test used groupadd, useradd, usermod -aG, mkdir, chgrp, chmod, id, and getent. A missing space in the usermod command produced a usage error, which was caught and corrected instead of being assumed successful.",
      "The shared folder used mode 2770. The setgid bit kept files owned by the shared group, while the man chmod page independently confirmed the permission math.",
    ],
    tags: ["Admin", "Groups", "Setgid", "Verification"],
  },
  {
    title: "Experiment 2",
    eyebrow: "03 / Potential harm or misuse",
    pages: "7-12",
    content: [
      "Purpose: simulate a password-hash leak into an Employee-readable folder and test the attacker path from group discovery through John the Ripper.",
      "The first sudo cat ... > file attempts failed because the shell handled redirection before sudo. Running sudo tee as the writing process fixed the problem and produced a root:Employee file with mode 640.",
      "The experiment demonstrated why /etc/shadow is protected and how a small permission mistake can turn account material into a usable attack path, even in a disposable VM.",
    ],
    tags: ["Hash exposure", "sudo tee", "John the Ripper", "Risk"],
  },
  {
    title: "Experiment 3",
    eyebrow: "04 / Ambiguous prompt evaluation",
    pages: "13-16",
    content: [
      "Purpose: evaluate whether an AI-generated procedure clearly handles identity switching and protected data movement.",
      "The test used su to become User1, checked access to ManagerFiles, and examined whether protected data could be copied into a location User2 could access. The result depended on the acting user's identity, directory permissions, and the exact command context.",
      "The experiment reinforced that a successful login does not automatically grant access to every folder and that each permission boundary must be tested directly.",
    ],
    tags: ["su", "Identity", "ManagerFiles", "Permissions"],
  },
  {
    title: "Experiment 4",
    eyebrow: "05 / Safety guardrail and behavior test",
    pages: "17-18",
    content: [
      "Purpose: evaluate a request involving system reconnaissance, persistence, scheduled execution, passwordless SSH, and exfiltration to a second VM.",
      "The persistence and exfiltration portion was not executed. The project treated the request as a safety boundary rather than building a script, cron entry, or SSH transfer workflow that could be reused outside the lab.",
      "This experiment measured judgment as much as command knowledge: a useful assistant should explain the risk, preserve the legitimate learning objective, and avoid enabling the dangerous chain.",
    ],
    tags: ["Guardrails", "Persistence", "Exfiltration", "Not executed"],
  },
  {
    title: "Results / Recommendations",
    eyebrow: "06 / Findings and safer practice",
    pages: "19",
    content: [
      "The lab showed that AI can explain Linux commands quickly, but it cannot see the VM's state. The most useful corrections came from reading errors, checking man pages, and testing each command in small pieces.",
      "Key findings included the difference between sudo cat and sudo tee, the importance of usermod -aG, and the need to check permissions from the acting user's perspective rather than assuming root access applies everywhere.",
      "Recommendations: validate account and group state before changes, never place password hashes in shared locations, explain why each command is necessary, run commands in small pieces, and decline requests that create persistence or exfiltration capability.",
    ],
    tags: ["Verify", "Least privilege", "Small steps", "Safety first"],
  },
  {
    title: "Rubric",
    eyebrow: "07 / Submission checklist",
    pages: "20-21",
    content: [
      "The report includes the project introduction, four experiment sections, concept-level AI prompts and responses, predictions, safety decisions, procedures, observed results, independent verification, and judgments of AI accuracy.",
      "It also includes the conclusion, recommendations, APA references, AI-use disclosure, and an experiment-by-experiment completion summary. Experiment 4 is intentionally marked not executed because it would enable persistence and data exfiltration.",
    ],
    tags: ["Complete", "Evidence", "References", "Disclosure"],
  },
];

export function LinuxAssignmentSection() {
  return (
    <section id="linux-assignment-9" className="scroll-mt-8">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Projects</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Linux Assignment 9</h2>
        </div>
        <a href="https://blobs.vusercontent.net/blob/LinuxAssignment_9-2-4YoWU2RbjAPaeccUWiz5Jc78dbDkbH.pdf" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent">View full PDF</a>
      </div>

      <div className="flex flex-col gap-3">
        {assignmentSections.map((section, index) => (
          <a key={section.title} href={`/projects/linux-assignment-9/${index + 1}`} className="group relative z-10 flex w-full cursor-pointer items-center gap-4 rounded-lg bg-surface px-5 py-4 text-left transition-colors hover:bg-muted" aria-label={`Open ${section.title}`}>
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <span className="flex-1"><span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{section.eyebrow}</span><span className="mt-1 block text-base font-semibold text-foreground">{section.title}</span></span>
            <span className="text-xl text-accent" aria-hidden="true">+</span>
          </a>
        ))}
      </div>
    </section>
  );
}
