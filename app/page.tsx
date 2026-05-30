import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Features from "@/components/common/Features";

export default function Home() {
  return (
    <main className="h-full w-full">
        <Navbar/>
        <Hero/>
        <Features/>
    </main>
  );
}
