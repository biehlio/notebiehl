import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <LogoTicker />
    </main>
  );
}
