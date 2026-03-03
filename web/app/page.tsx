import { HeroGreeting } from "./components/hero-greeting";
import { SectionRow } from "./components/section-row";
import { Sidebar } from "./components/sidebar";

const academics = [
  {
    title: "Ethical Hacking & Penetration Testing" /* PLACEHOLDER: Replace with your course name */,
    subtitle: "Grade: A" /* PLACEHOLDER: Replace with your grade or details */,
    description:
      "Introduction to ethical hacking terminologies and penetration testing tools on Kali Linux. Explored vulnerabilities in various systems and operated industry-leading tools and frameworks for penetration testing on different targets." /* PLACEHOLDER: Replace with your course description */,
    tags: ["Kali Linux", "Penetration Testing", "Vulnerability Assessment"] /* PLACEHOLDER: Replace with relevant skills/tools */,
  },
  {
    title: "AI in Defending Cloud-Based Services" /* PLACEHOLDER: Replace with your course/project name */,
    subtitle: "Research Paper -- 96/100" /* PLACEHOLDER: Replace with your grade or details */,
    description:
      "Research paper completed in CYSE 280 (Windows System Management and Security) arguing why AI systems have proven successful when integrated to protect cloud-based services." /* PLACEHOLDER: Replace with your project description */,
    tags: ["AI/ML", "Cloud Security", "Research"] /* PLACEHOLDER: Replace with relevant skills/tools */,
    link: "https://drive.google.com/file/d/118fb8ooXrzbzYiNPpjoBK0kmzlibZGmr/view?usp=drive_link" /* PLACEHOLDER: Replace with your project link or remove */,
  },
  {
    title: "B.S. Cybersecurity -- Old Dominion University" /* PLACEHOLDER: Replace with your degree & school */,
    subtitle: "GPA: 3.05 -- Graduating Spring 2026" /* PLACEHOLDER: Replace with your GPA & grad date */,
    description:
      "Currently enrolled at ODU pursuing a bachelor's degree in Cybersecurity. After graduating, pursuing a master's degree in Cybersecurity at ODU." /* PLACEHOLDER: Replace with your education details */,
    tags: ["Cybersecurity", "ODU", "Spring 2026"] /* PLACEHOLDER: Replace with relevant tags */,
  },
];

const cyberClinic = [
  {
    title: "Cybersecurity Consultant" /* PLACEHOLDER: Replace with your job title */,
    subtitle: "COVA CCI Cyber Clinic -- Aug 2025 - Present" /* PLACEHOLDER: Replace with company & dates */,
    description:
      "Under the professional guidance of Valor Cybersecurity and Mr. Greg Tomchick, consulted the City of Suffolk on improving security practices and mitigating risk." /* PLACEHOLDER: Replace with your job description */,
    tags: ["Consulting", "Risk Mitigation", "Threat Intelligence"] /* PLACEHOLDER: Replace with relevant skills */,
  },
  {
    title: "Practical Application" /* PLACEHOLDER: Replace with your role/project name */,
    subtitle: "Hands-on Experience" /* PLACEHOLDER: Replace with details or dates */,
    description:
      "Practical application of classroom knowledge including exposure to cyber threat intelligence, and researching and innovating cybersecurity solutions for real-world clients." /* PLACEHOLDER: Replace with your description */,
    tags: ["Cyber Threat Intel", "Innovation", "Client-Facing"] /* PLACEHOLDER: Replace with relevant skills */,
  },
  {
    title: "ODU IT Help Desk" /* PLACEHOLDER: Replace with your job title */,
    subtitle: "July 2025 - Present" /* PLACEHOLDER: Replace with dates */,
    description:
      "Resolving technical issues for EVMC and ODU faculty, staff, and students via ServiceNow. Using troubleshooting resources, OS knowledge, network infrastructure, and Active Directory to assist and escalate tickets." /* PLACEHOLDER: Replace with your job description */,
    tags: ["ServiceNow", "Active Directory", "Troubleshooting"] /* PLACEHOLDER: Replace with relevant skills */,
  },
];

const skills = [
  {
    title: "Python" /* PLACEHOLDER: Replace with your skill name */,
    subtitle: "Programming" /* PLACEHOLDER: Replace with skill category */,
    description:
      "Proficient knowledge of Python. Able to create programs involving classes/functions and run tasks using subprocess." /* PLACEHOLDER: Replace with your skill description */,
    tags: ["Classes", "Functions", "Subprocess"] /* PLACEHOLDER: Replace with specific sub-skills */,
  },
  {
    title: "Linux Administration" /* PLACEHOLDER: Replace with your skill name */,
    subtitle: "Systems" /* PLACEHOLDER: Replace with skill category */,
    description:
      "Knowledgeable-level Linux usage. Able to run scripts such as Metasploit or schedule tasks with Crontab." /* PLACEHOLDER: Replace with your skill description */,
    tags: ["Metasploit", "Crontab", "Shell Scripting"] /* PLACEHOLDER: Replace with specific sub-skills */,
  },
  {
    title: "Tenable" /* PLACEHOLDER: Replace with your skill name */,
    subtitle: "Security Tools" /* PLACEHOLDER: Replace with skill category */,
    description:
      "Proficient knowledge of Tenable -- analyzing and running scans on servers alongside generating reports of the data." /* PLACEHOLDER: Replace with your skill description */,
    tags: ["Vulnerability Scanning", "Reporting", "Server Analysis"] /* PLACEHOLDER: Replace with specific sub-skills */,
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
            <p>Christopher Kundrat -- Old Dominion University -- Cybersecurity</p>{/* PLACEHOLDER: Replace with your name, school, and field */}
          </footer>
        </div>
      </main>
    </div>
  );
}
