import { getHeroSection } from "@/sanity/lib/queries";
import { HeroGreetingClient } from "./hero-greeting-client";

export async function HeroGreeting() {
  const hero = await getHeroSection();

  return (
    <HeroGreetingClient
      fullName={hero?.fullName ?? "Christopher Kundrat"}
      bio={
        hero?.bio ??
        "My name is Christopher Kundrat; I am a current cybersecurity senior in my last semester at Old Dominion University. After I graduate this spring, I will be continuing my education at Old Dominion University, getting my masters in cybersecurity. Currently I spend my time working at the IT help desk, troubleshooting issues faculty and students from ODU and EVMC face alongside studying for my sec+ certification. Alongside that I enjoy listening to music alongside hanging out outside with friends. Once I graduate from my master’s degree, I would like to enter the cybersecurity field as a SOC analyst or IT analyst as I plan on focusing my career more on solving tickets/incidents instead of the policy side."
      }
      email={hero?.email ?? "ckundrat@odu.edu"}
      phone={hero?.phone ?? "(757) 298-5953"}
    />
  );
}
