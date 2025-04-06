import { BadgeCheck, Check, X } from "lucide-react";

const tiers = [
  // {
  // 	name: "🎯 Free Plan (Basic – Always Free!)",
  // 	price: 0,
  // 	features: [
  // 		"Add up to 10 products",
  // 		"Track 50 comments & messages per month",
  // 		"Basic dashboard for insights",
  // 		"New message notifications",
  // 		"No AI-powered classification",
  // 		"No dedicated support",
  // 	],
  // },
  {
    name: "🔥 Starter Plan (For Small Businesses)",
    price: 149,
    features: [
      "Add up to 50 products",
      "Track 500 comments & messages per month",
      "Advanced dashboard for better insights",
      "Email support",
      "No AI-powered smart classification",
    ],
  },
  {
    name: "🚀 Pro Plan (For Growing Businesses)",
    price: 349,
    features: [
      "Add up to 100 products",
      "Track 2,000 comments & messages per month",
      "AI-powered smart classification of customer interactions",
      "Advanced dashboard with detailed insights",
      "Instant message notifications",
      "Priority email & live chat support",
    ],
  },
  {
    name: "📈 Business Plan (For Large-Scale Operations)",
    price: 599,
    features: [
      "All Pro Plan features",
      "Unlimited comment & message tracking",
      "Advanced analytics & engagement reports",
      "VIP support via phone & live chat",
      "Multi-user access for team collaboration",
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

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className="w-[400px] relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col animate-fade-up md:last:col-span-2 md:last:justify-self-center lg:last:col-span-1 lg:last:justify-self-auto"
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
                    EGP {tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      {feature.includes("No") ? (
                        <X className="flex-shrink-0 w-6 h-6 text-primary" />
                      ) : (
                        <Check className="flex-shrink-0 w-6 h-6 text-primary" />
                      )}
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                target="_blank"
                href="https://forms.gle/8XcjdyiR2Dgxh5QQ8"
                className="transition-colors text-center mt-8 w-full rounded text-white bg-primary hover:bg-primary/90 py-3 px-6"
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
