import { CTA } from "@/app/(home)/components/CTA";
import { Features } from "@/app/(home)/components/Features";
import { Hero } from "@/app/(home)/components/Hero";
import { HowItWorks } from "@/app/(home)/components/HowItWorks";
import { Pricing } from "@/lib/components/Pricing";

import { FinalCTA } from "./components/FinalCTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default Home;
