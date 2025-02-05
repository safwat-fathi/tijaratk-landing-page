import { CTA } from "@/lib/components/CTA";
import { Features } from "@/lib/components/Features";

import { Hero } from "@/lib/components/Hero";
import { HowItWorks } from "@/lib/components/HowItWorks";
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
