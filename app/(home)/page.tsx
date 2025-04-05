import { Features } from "@/app/(home)/components/Features";
import { Hero } from "@/app/(home)/components/Hero";
import { HowItWorks } from "@/app/(home)/components/HowItWorks";
import { CTA } from "@/lib/components/CTA";
import { Pricing } from "@/lib/components/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Pricing />
    </div>
  );
};

export default Home;
