import Hero from "@/components/Home/Hero";
import LivePreview from "@/components/Home/LivePreview";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItworks";

export default function Home() {
  return (
    <div className="home-page-container">
      <Hero />
      <LivePreview />
      <Features />
      <HowItWorks />
    </div>
  );
}
