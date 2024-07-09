import { ModeToggle } from "@/components/ModeToggle";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <p className="text-lg">This is a Next.js app with Tailwind CSS.</p>
      <ModeToggle />
    </main>
  );
}
