import { Mail, Copyright, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	// const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-100 py-8 mt-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div>
						<div className="flex items-center gap-2">
							<div className="h-12 w-12 relative overflow-hidden rounded-full">
								<Image
									src="/logo.png"
									alt="Tagify.Social Logo"
									className=""
									fill
								/>
							</div>
							<span className="ml-2 font-semibold text-gray-800">
								Tagify.Social
							</span>
						</div>
						<p className="mt-2 text-gray-500 text-sm md:w-96 md:text-base">
							Automatically tag, analyze, and understand your Facebook page
							interactions using advanced AI.
						</p>
					</div>

					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4 text-gray-600" />
						<a
							href="mailto:info@tagify.social?subject=Hi&body=I%20want%20to%20get%20in%20touch%20with%20you!"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							info@tagify.social
						</a>
					</div>

					<div className="flex gap-2 flex-col">
						<Link
							href="/privacy-policy"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-and-conditions"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							Terms and Conditions
						</Link>
					</div>
					{/* <div className="flex items-center gap-4">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Facebook className="h-5 w-5" />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Twitter className="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-primary transition-colors"
						>
							<Linkedin className="h-5 w-5" />
						</a> */}
					{/* </div> */}

					{/* <div className="flex items-center gap-2 text-gray-600">
            <Copyright className="h-4 w-4" />
            <span>{currentYear} Tagify.Social. All rights reserved.</span>
          </div> */}
				</div>
			</div>
		</footer>
	);
};