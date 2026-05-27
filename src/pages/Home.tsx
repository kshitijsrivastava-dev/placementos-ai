import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Features } from "@/components/landing/Features";
import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { GlowBackground } from "@/components/GlowBackground";

function Index() {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <DashboardShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Index;
