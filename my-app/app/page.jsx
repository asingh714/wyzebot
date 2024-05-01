import Hero from "@/components/Home/Hero";
import LivePreview from "@/components/Home/LivePreview";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="home-page-container">
      <Hero />
      <LivePreview />
      <Features />
      <Testimonials />
    </div>
  );
}
