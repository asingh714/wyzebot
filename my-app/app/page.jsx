import Hero from "@/components/Home/Hero";
import LivePreview from "@/components/Home/LivePreview";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import Globe from "@/components/Home/Globe";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-page-container">
      <Hero />
      <LivePreview />
      <Features />
      <Testimonials />
      <Globe />
      <Footer />
    </div>
  );
}
