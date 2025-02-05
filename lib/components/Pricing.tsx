import { BadgeCheck, Check } from "lucide-react";

const tiers = [
	{
		name: "Starter",
		price: 12,
		features: [
			"5 Products",
			"Basic Analytics",
			"24/7 Support",
			"3 Team Member",
		],
	},
	{
		name: "Professional",
		price: 20,
		features: [
			"Unlimited Products",
			"Advanced Analytics",
			"Priority Support",
			"5 Team Members",
		],
	},
];

export const Pricing = () => {
	return (
		<div className="py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-xl text-gray-500">
						Choose the perfect plan for your business needs
					</p>
				</div>

				<div className="mt-20 flex flex-wrap justify-center gap-8">
					{tiers.map((tier, index) => (
						<div
							key={tier.name}
							className="w-[300px] md:w-[400px] relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col animate-fade-up"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="absolute -top-3 left-1/2 -translate-x-1/2">
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
									<BadgeCheck className="w-4 h-4" />
									30 Days Free Trial
								</div>
							</div>
							<div className="flex-1">
								<h3 className="text-xl font-semibold text-gray-900">
									{tier.name}
								</h3>
								<p className="mt-4 flex items-baseline text-gray-900">
									<span className="text-5xl font-bold tracking-tight">
										${tier.price}
									</span>
									<span className="ml-1 text-xl font-semibold">/month</span>
								</p>
								<ul className="mt-6 space-y-6">
									{tier.features.map(feature => (
										<li key={feature} className="flex">
											<Check className="flex-shrink-0 w-6 h-6 text-primary" />
											<span className="ml-3 text-gray-500">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							<a
								target="_blank"
								href="https://forms.gle/8XcjdyiR2Dgxh5QQ8"
								className="transition-colors mt-8 w-full rounded text-white bg-primary hover:bg-primary/90 py-3 px-6"
							>
								Get Started
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
