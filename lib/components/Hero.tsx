
import { MessageSquare, Tag, BarChart3 } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

export const Hero = () => {
  return (
		<div className="relative overflow-hidden bg-gradient-to-br from-[#5271ff] via-[#6A52FF] to-[#52AFFF] py-20 text-white">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center text-center">
					<div className="animate-fade-up flex flex-col items-center">
						{/* <h1 className="mb-6 text-6xl font-bold leading-tight sm:text-5xl md:text-6xl">
							Tagify<span className="text-accent">.</span>Social
						</h1> */}
						<div className="mb-10 w-1/2 md:w-full flex justify-center">
							<Image
								src="/logo_no_bg.png"
								alt="Tagify.Social Logo"
								width={350}
								height={100}
								placeholder="empty"
								priority
							/>
						</div>
						<h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
							AI-Powered Social Media Management
						</h1>
						<p className="mb-8 text-xl text-gray-200 sm:text-2xl">
							Automatically tag, analyze, and understand your Facebook page
							interactions using advanced AI
						</p>
						{/* <a
							target="_blank"
							href="https://forms.gle/D3yJZJ8kHRkAyvus7"
							className="bg-accent hover:bg-accent/90 text-lg py-3 px-6 rounded"
							// onClick={() => window.location.href = "#features"}
						>
							Get Started Free
						</a> */}
					</div>

					<div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-in">
						<div className="flex items-center space-x-2 text-lg">
							<Tag className="h-6 w-6" />
							<span>Smart Tagging</span>
						</div>
						<div className="flex items-center space-x-2 text-lg">
							<MessageSquare className="h-6 w-6" />
							<span>Sentiment Analysis</span>
						</div>
						<div className="flex items-center space-x-2 text-lg">
							<BarChart3 className="h-6 w-6" />
							<span>Detailed Insights</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};