import { getHeroSection } from "@/sanity/lib/queries";
import { HeroGreetingClient } from "./hero-greeting-client";

export async function HeroGreeting() {
  const hero = await getHeroSection();

  return (
    <HeroGreetingClient
      fullName={hero?.fullName ?? "Christopher Kundrat"}
      bio={
        hero?.bio ??
        "Hello! My name is Christopher Kundrat, and I am currently pursuing my undergraduate degree in Cybersecurity at Old Dominion University. I plan to graduate in Spring 2026 and immediately transition into my master's degree here at ODU. Within my academic and professional journey, I have developed a strong passion for protecting systems, specifically focusing on ensuring that artificial intelligence is used ethically to defend cloud-based environments. Alongside my coursework, I actively apply my skills in the real world as a Cybersecurity Consultant for the COVA CCI Cyber Clinic—where I help innovate security solutions for local government—and as an IT technician at the ODU Help Desk. These experiences have challenged me to where I can confidently bridge the gap between complex technical problem-solving and human-centric client communication. I am always looking to continue challenging myself and learning more about the multifaceted world of cybersecurity."
      }
      email={hero?.email ?? "ckundrat@odu.edu"}
      phone={hero?.phone ?? "(757) 298-5953"}
    />
  );
}
