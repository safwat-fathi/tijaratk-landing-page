import { BarChart3, MessageSquare, Tag } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#5271ff] via-[#6A52FF] to-[#52AFFF] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up flex flex-col items-center">
            <div className="mb-10 w-1/2 md:w-full flex justify-center">
              <Image
                style={{ backgroundColor: "white", borderRadius: "50%" }}
                src="/logo-no-bg.png"
                alt="Tijaratk Logo"
                width={250}
                height={250}
                placeholder="empty"
                priority
              />
            </div>
            <h1 className="mb-4 text-4xl leading-tight sm:text-5xl md:text-5xl">
              Manage Your <span className="font-extrabold">Business</span>
            </h1>
            <h1 className="mb-6 text-4xl leading-tight sm:text-5xl md:text-5xl">
              Not Your Facebook Page
            </h1>
            <p className="mb-8 text-xl text-gray-200 sm:text-2xl w-4/5">
              Stay on top of every comment and message, track product engagement
              effortlessly, and turn interactions into sales—all while keeping
              your inventory in check.
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
              <BarChart3 className="h-6 w-6" />
              <span>Detailed Insights</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Tag className="h-6 w-6" />
              <span>Smart Tagging</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <MessageSquare className="h-6 w-6" />
              <span>Sentiment Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
