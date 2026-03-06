import { getHeroSection } from "@/sanity/lib/queries";
import { HeroGreetingClient } from "./hero-greeting-client";

export async function HeroGreeting() {
  const hero = await getHeroSection();

  return (
    <HeroGreetingClient
      fullName={hero?.fullName ?? "Christopher Kundrat"}
      bio={
        hero?.bio ??
        "Cybersecurity student at Old Dominion University with hands-on experience in ethical hacking, cloud security, and security consulting."
      }
      email={hero?.email ?? "ckundrat@odu.edu"}
      phone={hero?.phone ?? "(757) 298-5953"}
    />
  );
}
