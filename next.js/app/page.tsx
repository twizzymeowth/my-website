import { HeroGreeting } from "./components/hero-greeting";
import { SectionRow } from "./components/section-row";
import { Sidebar } from "./components/sidebar";

const academics = [
  {
    title: "Ethical Hacking & Penetration Testing",
    subtitle: "Grade: A",
    description:
      "Introduction to ethical hacking terminologies and penetration testing tools on Kali Linux. Explored vulnerabilities in various systems and operated industry-leading tools and frameworks for penetration testing on different targets.",
    tags: ["Kali Linux", "Penetration Testing", "Vulnerability Assessment"],
  },
  {
    title: "AI in Defending Cloud-Based Services",
    subtitle: "Research Paper -- 96/100",
    description:
      "Research paper completed in CYSE 280 (Windows System Management and Security) arguing why AI systems have proven successful when integrated to protect cloud-based services.",
    tags: ["AI/ML", "Cloud Security", "Research"],
    link: "https://drive.google.com/file/d/118fb8ooXrzbzYiNPpjoBK0kmzlibZGmr/view?usp=drive_link",
  },
  {
    title: "B.S. Cybersecurity -- Old Dominion University",
    subtitle: "GPA: 3.05 -- Graduating Spring 2026",
    description:
      "Currently enrolled at ODU pursuing a bachelor's degree in Cybersecurity. After graduating, pursuing a master's degree in Cybersecurity at ODU.",
    tags: ["Cybersecurity", "ODU", "Spring 2026"],
  },
];

const cyberClinic = [
  {
    title: "Cybersecurity Consultant",
    subtitle: "COVA CCI Cyber Clinic -- Aug 2025 - Present",
    description:
      "Under the professional guidance of Valor Cybersecurity and Mr. Greg Tomchick, consulted the City of Suffolk on improving security practices and mitigating risk.",
    tags: ["Consulting", "Risk Mitigation", "Threat Intelligence"],
  },
  {
    title: "Practical Application",
    subtitle: "Hands-on Experience",
    description:
      "Practical application of classroom knowledge including exposure to cyber threat intelligence, and researching and innovating cybersecurity solutions for real-world clients.",
    tags: ["Cyber Threat Intel", "Innovation", "Client-Facing"],
  },
  {
    title: "ODU IT Help Desk",
    subtitle: "July 2025 - Present",
    description:
      "Resolving technical issues for EVMC and ODU faculty, staff, and students via ServiceNow. Using troubleshooting resources, OS knowledge, network infrastructure, and Active Directory to assist and escalate tickets.",
    tags: ["ServiceNow", "Active Directory", "Troubleshooting"],
  },
];

const skills = [
  {
    title: "Python",
    subtitle: "Programming",
    description:
      "Proficient knowledge of Python. Able to create programs involving classes/functions and run tasks using subprocess.",
    tags: ["Classes", "Functions", "Subprocess"],
  },
  {
    title: "Linux Administration",
    subtitle: "Systems",
    description:
      "Knowledgeable-level Linux usage. Able to run scripts such as Metasploit or schedule tasks with Crontab.",
    tags: ["Metasploit", "Crontab", "Shell Scripting"],
  },
  {
    title: "Tenable",
    subtitle: "Security Tools",
    description:
      "Proficient knowledge of Tenable -- analyzing and running scans on servers alongside generating reports of the data.",
    tags: ["Vulnerability Scanning", "Reporting", "Server Analysis"],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
          <HeroGreeting />
          <div className="mt-10 flex flex-col gap-12">
            <SectionRow title="Academics" items={academics} />
            <SectionRow title="Cyber Clinic & Work" items={cyberClinic} />
            <SectionRow title="Skills & Tools" items={skills} />
          </div>
          <footer className="mt-16 border-t border-border pb-8 pt-6 text-xs text-muted-foreground">
            <p>Christopher Kundrat -- Old Dominion University -- Cybersecurity</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
