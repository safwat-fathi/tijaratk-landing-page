import { Brain, MessageCircle, Tags, PieChart, Zap, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Tags className="h-8 w-8 text-primary" />,
      title: "Automated Tagging",
      description: "AI automatically tags comments and messages with relevant product references",
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Smart Classification",
      description: "Automatically categorize interactions as inquiries, pricing questions, or feedback",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Sentiment Analysis",
      description: "Understand customer sentiment in real-time through AI-powered analysis",
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: "Product Insights",
      description: "Get detailed analytics about product mentions and customer interest",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Processing",
      description: "Process and analyze interactions as they happen on your Facebook page",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Understanding",
      description: "Gain deeper insights into customer needs and preferences",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to understand your customers better</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};