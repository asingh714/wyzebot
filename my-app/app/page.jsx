import Hero from "@/components/Home/Hero";
import LivePreview from "@/components/Home/LivePreview";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItworks";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="home-page-container">
      <NavBar />
      <Hero />
      <LivePreview />
      <Features />
      <HowItWorks />
    </div>
  );
}
