import { HeroGreeting } from "./components/hero-greeting";
import { SectionRow } from "./components/section-row";
import { Sidebar } from "./components/sidebar";
import { SkillsSection } from "./components/skills-section";
import {
  getSectionItemsByCategory,
  getSiteSettings,
} from "@/sanity/lib/queries";
import { draftMode } from "next/headers";

const fallbackEducation = [
  {
    _id: "fallback-edu-1",
    title: "B.S. / M.S. Cybersecurity",
    subtitle: "Old Dominion University — GPA: 3.14",
    description:
      "Graduated ODU with a BS in Cybersecurity currently pursuing a Masters Degree in cybersecurity still at ODU expecting to graduate in spring 2027.",
    tags: ["Cybersecurity", "ODU", "Spring 2027"],
    category: "academics" as const,
    order: 1,
  },
];

const fallbackExperience = [
  {
    _id: "fallback-exp-1",
    title: "Cybersecurity Consultant",
    subtitle: "COVA CCI Cyber Clinic / Valor Cybersecurity — Aug 2025 – Present",
    description:
      "Consulted the City of Suffolk on cybersecurity improvements and risk mitigation under Valor Cybersecurity's Greg Tomchick. Applied classroom knowledge in a practical consulting environment with exposure to cyber threat intelligence.",
    tags: ["Consulting", "Risk Mitigation", "Threat Intelligence"],
    category: "cyberClinic" as const,
    order: 1,
  },
  {
    _id: "fallback-exp-2",
    title: "IT Help Desk Technician",
    subtitle: "ODU IT Help Desk — July 2025 – Present",
    description:
      "Resolve technical issues for EVMC and ODU faculty, staff, and students via ServiceNow. Utilize knowledge bases, OS, network infrastructure, and Active Directory skills to efficiently assist and escalate tickets.",
    tags: ["ServiceNow", "Active Directory", "Troubleshooting"],
    category: "cyberClinic" as const,
    order: 2,
  },
  {
    _id: "fallback-exp-3",
    title: "Escalation Squad / Student Lead",
    subtitle: "ODU IT Help Desk — March 2026 – Present",
    description:
      "Promoted to lead role handling escalated incidents for EVMC and ODU faculty and staff. Audits and assists with tickets in ServiceNow, ensures accuracy and proper escalation, and mentors fellow student technicians.",
    tags: ["Leadership", "ServiceNow", "Mentoring"],
    category: "cyberClinic" as const,
    order: 3,
  },
];

const fallbackSkillGroups = [
  {
    title: "Programming & Scripting",
    artifacts: [
      {
        title: "Python",
        description:
          "Proficient in Python including classes, functions, and subprocess tasks. Applied in cryptographic calculators and automation scripts.",
        tags: ["Python", "Scripting", "Automation"],
      },
      {
        title: "C++",
        description:
          "Experience with C++ covering classes and functions for systems-level programming tasks.",
        tags: ["C++", "Systems Programming"],
      },
      {
        title: "Linux Scripting",
        description:
          "Knowledgeable Linux usage including shell scripting, running Metasploit, and scheduling recurring tasks with Crontab.",
        tags: ["Linux", "Bash", "Crontab", "Metasploit"],
      },
    ],
  },
  {
    title: "Vulnerability Assessment & Security Tools",
    artifacts: [
      {
        title: "Tenable",
        description:
          "Performed vulnerability scanning and server scans, then generated and analyzed reports with context-aware metrics and dynamic threat intelligence.",
        tags: ["Tenable", "Vulnerability Scanning", "Reporting"],
      },
      {
        title: "Kali Linux & Penetration Testing",
        description:
          "Utilized Kali Linux and industry-leading frameworks to identify and exploit vulnerabilities across various systems in ethical hacking labs.",
        tags: ["Kali Linux", "Penetration Testing", "Ethical Hacking"],
      },
      {
        title: "Network Infrastructure",
        description:
          "Solid understanding of network infrastructure including the Internet protocol stack, wireless communications, firewalls, IDS/IPS, and TLS.",
        tags: ["Networking", "Firewalls", "IDS/IPS", "TLS"],
      },
    ],
  },
  {
    title: "IT Operations & Administration",
    artifacts: [
      {
        title: "ServiceNow",
        description:
          "Daily use of ServiceNow for ticket creation, resolution, auditing, and reporting. Ensures accurate documentation and proper escalation procedures.",
        tags: ["ServiceNow", "ITSM", "Ticketing"],
      },
      {
        title: "Active Directory",
        description:
          "Hands-on experience managing and troubleshooting Active Directory as part of enterprise IT support for ODU and EVMC.",
        tags: ["Active Directory", "Identity Management", "Windows"],
      },
      {
        title: "OS Troubleshooting",
        description:
          "Proficient in diagnosing and resolving OS-level issues across Windows and Linux environments for faculty, staff, and students.",
        tags: ["Windows", "Linux", "Troubleshooting"],
      },
    ],
  },
];

export default async function Home() {
  const { isEnabled: isDraft } = await draftMode();

  const [academicsData, cyberClinicData, settings] =
    await Promise.all([
      getSectionItemsByCategory("academics", isDraft),
      getSectionItemsByCategory("cyberClinic", isDraft),
      getSiteSettings(isDraft),
    ]);

  const education = academicsData.length > 0 ? academicsData : fallbackEducation;
  const experience = cyberClinicData.length > 0 ? cyberClinicData : fallbackExperience;

  const footerText =
    settings?.footerText ??
    "Christopher Kundrat — Old Dominion University — Cybersecurity";

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
          <HeroGreeting />
          <div className="mt-10 flex flex-col gap-12">
            <SectionRow title="Education" items={education} />
            <SkillsSection skillGroups={fallbackSkillGroups} />
            <SectionRow title="Experience" items={experience} />
          </div>
          <footer className="mt-16 border-t border-border pb-8 pt-6 text-xs text-muted-foreground">
            <p>{footerText}</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
