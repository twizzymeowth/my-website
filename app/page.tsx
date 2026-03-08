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
    title: "B.S. Cybersecurity",
    subtitle: "Old Dominion University — GPA: 3.05 — Graduating Spring 2026",
    description:
      "Currently enrolled at ODU pursuing a Bachelor of Science in Cybersecurity. After graduating, pursuing a master's degree in Cybersecurity at ODU.",
    tags: ["Cybersecurity", "ODU", "Spring 2026"],
    category: "academics" as const,
    order: 1,
  },
];

const fallbackExperience = [
  {
    _id: "fallback-exp-1",
    title: "Cybersecurity Consultant",
    subtitle: "COVA CCI Cyber Clinic — Aug 2025 - Present",
    description:
      "Consulted the City of Suffolk under Valor Cybersecurity to improve security practices, mitigate risk, and innovate cybersecurity solutions.",
    tags: ["Consulting", "Risk Mitigation", "Threat Intelligence"],
    category: "cyberClinic" as const,
    order: 1,
  },
  {
    _id: "fallback-exp-2",
    title: "ODU IT Help Desk",
    subtitle: "July 2025 - Present",
    description:
      "Resolving technical issues for EVMC and ODU faculty, staff, and students via ServiceNow. Using troubleshooting resources, OS knowledge, network infrastructure, and Active Directory to assist and escalate tickets.",
    tags: ["ServiceNow", "Active Directory", "Troubleshooting"],
    category: "cyberClinic" as const,
    order: 2,
  },
];

const fallbackSkillGroups = [
  {
    title: "Vulnerability Assessment & Penetration Testing",
    artifacts: [
      {
        title: "CYSE 450 Lab 5 - SQL Injection Attack",
        description:
          "Used VirtualBox to execute web security breaches on an isolated database, including planting an XSS trap and bypassing login hurdles using SQL injection techniques.",
        tags: ["SQL Injection", "XSS", "VirtualBox"],
      },
      {
        title: "Tenable Vulnerability Scan Report",
        description:
          "Analyzed and ran scans on servers alongside generating reports of the data to prioritize context-aware metrics and dynamic threat intelligence.",
        tags: ["Tenable", "Vulnerability Scanning", "Threat Intelligence"],
      },
      {
        title: "Ethical Hacking Lab on Kali Linux",
        description:
          "Explored vulnerabilities in various systems and operated industry-leading tools and frameworks to perform penetration testing on different target systems.",
        tags: ["Kali Linux", "Penetration Testing", "Ethical Hacking"],
      },
    ],
  },
  {
    title: "Systems Administration & Scripting",
    artifacts: [
      {
        title: "Python Cryptographic Calculator",
        description:
          "Created a program using Python that handles basic mod calculations, Fermat's Little Theorem, and the Extended Euclidean Algorithm using classes, functions, and subprocesses.",
        tags: ["Python", "Cryptography", "Algorithms"],
      },
      {
        title: "Linux & Crontab Configuration",
        description:
          "Demonstrated knowledgeable-level Linux usage by running scripts such as Metasploit and scheduling recurring system tasks using Crontab.",
        tags: ["Linux", "Crontab", "Metasploit"],
      },
      {
        title: "ServiceNow / Active Directory Help Desk Ticket",
        description:
          "Resolved technical issues for EVMC and ODU faculty via ServiceNow, utilizing OS, network infrastructure, and Active Directory knowledge to assist and escalate tickets.",
        tags: ["ServiceNow", "Active Directory", "Help Desk"],
      },
    ],
  },
  {
    title: "Cybersecurity Research & Consulting",
    artifacts: [
      {
        title: "CYSE 280 Research Paper: AI in Cloud Security",
        description:
          "Authored a paper scoring 96/100 arguing why AI systems are successful when integrated to protect cloud-based services and optimize system performance.",
        tags: ["AI/ML", "Cloud Security", "Research"],
        link: "https://drive.google.com/file/d/118fb8ooXrzbzYiNPpjoBK0kmzlibZGmr/view?usp=drive_link",
      },
      {
        title: "Executive Reflection Presentation: City of Suffolk",
        description:
          "Consulted for the City of Suffolk through the COVA CCI Cyber Clinic, establishing secure communication via encrypted emails and successfully communicating remediation strategies.",
        tags: ["Consulting", "Remediation", "Client-Facing"],
      },
      {
        title: "Individual Final Reflection: Cyber Clinic",
        description:
          "Self-evaluated consulting skills and project management, demonstrating an understanding of the socio-technical approach to cyber risk management and client expectations.",
        tags: ["Reflection", "Risk Management", "Project Management"],
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
