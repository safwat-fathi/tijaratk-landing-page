import Button from "./Button";


export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Connect Your Page",
      description: "Link your Facebook business page to our platform securely",
    },
    {
      number: "2",
      title: "Add Your Products",
      description: "Import or create your product catalog for easy tagging",
    },
    {
      number: "3",
      title: "AI Analysis",
      description: "Our AI automatically processes all interactions in real-time",
    },
    {
      number: "4",
      title: "Get Insights",
      description: "Access detailed analytics and insights about your products and customers",
    },
  ];

  return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold mb-4">How Tagify.Social Works</h2>
					<p className="text-xl text-gray-600">
						Get started in just four simple steps
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<div key={index} className="text-center">
							<div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
								{step.number}
							</div>
							<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						target="_blank"
						href="https://forms.gle/D3yJZJ8kHRkAyvus7"
						className="transition-colors text-primary-foreground bg-primary hover:bg-primary/90 py-3 px-6 rounded"
					>
						Start Now
					</a>
				</div>
			</div>
		</section>
	);
};