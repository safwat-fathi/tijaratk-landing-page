import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Privacy Policy - Tagify Social</title>
				<meta name="description" content="Privacy Policy of Tagify Social" />
			</Head>
			<div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="text-gray-600 mb-4">Effective Date: 2025-01-01</p>

				<h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
				<p className="text-gray-700">
					Welcome to <strong>Tagify Social</strong> ("we," "our," "us"). Your
					privacy is important to us. This Privacy Policy explains how we
					collect, use, disclose, and protect your personal information when you
					use our website and services.
				</p>

				<h2 className="text-xl font-semibold mt-6">
					2. Information We Collect
				</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>
						<strong>Personal Information:</strong> Name, email address, and
						other details you provide during registration.
					</li>
					<li>
						<strong>Content Information:</strong> Posts, comments, and any other
						information you submit.
					</li>
					<li>
						<strong>Usage Data:</strong> IP address, browser type, device
						information, and how you interact with our platform.
					</li>
					<li>
						<strong>Cookies & Tracking Technologies:</strong> We use cookies and
						similar tracking technologies to enhance user experience and analyze
						website traffic.
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">
					3. How We Use Your Information
				</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>To provide and improve our services.</li>
					<li>To personalize user experience.</li>
					<li>
						To communicate with you regarding updates, promotions, or important
						service notices.
					</li>
					<li>To prevent fraud, enhance security, and enforce our terms.</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">
					4. Sharing of Information
				</h2>
				<p className="text-gray-700">
					We do not sell or rent your personal information. However, we may
					share information:
				</p>
				<ul className="list-disc list-inside text-gray-700">
					<li>
						With <strong>service providers</strong> who assist in website
						operation.
					</li>
					<li>
						If <strong>required by law</strong> to comply with legal
						obligations.
					</li>
					<li>
						In case of <strong>business transfers</strong>, such as a merger or
						acquisition.
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">5. Data Retention</h2>
				<p className="text-gray-700">
					We retain your data for as long as necessary to provide our services
					or comply with legal obligations.
				</p>

				<h2 className="text-xl font-semibold mt-6">6. Your Rights & Choices</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>Access, update, or delete your personal data.</li>
					<li>Opt out of marketing communications.</li>
					<li>Disable cookies via your browser settings.</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">7. Security Measures</h2>
				<p className="text-gray-700">
					We take reasonable steps to protect your personal data, but no system
					is completely secure. Please use strong passwords and keep your login
					credentials confidential.
				</p>

				<h2 className="text-xl font-semibold mt-6">8. Third-Party Links</h2>
				<p className="text-gray-700">
					Our platform may contain links to third-party websites. We are not
					responsible for their privacy practices.
				</p>

				<h2 className="text-xl font-semibold mt-6">
					9. Updates to This Policy
				</h2>
				<p className="text-gray-700">
					We may update this Privacy Policy from time to time. Changes will be
					posted on this page with an updated effective date.
				</p>

				<h2 className="text-xl font-semibold mt-6">10. Contact Us</h2>
				<p className="text-gray-700">
					If you have any questions regarding this Privacy Policy, please
					contact us at:
				</p>
				<p className="text-gray-700">
					<strong>Email:</strong>{" "}
					<a href="mailto:info@tagify.social">info@tagify.social</a>
				</p>
				<p className="text-gray-700">
					<strong>Website:</strong>{" "}
					<Link href="https://tagify.social">tagify.social</Link>
				</p>
			</div>
		</div>
	);
}
