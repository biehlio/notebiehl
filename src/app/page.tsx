import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import RecentProjects from "@/components/RecentProjects";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <LogoTicker />
      <RecentProjects />
    </main>
  );
}
