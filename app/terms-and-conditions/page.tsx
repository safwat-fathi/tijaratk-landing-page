import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
			<Head>
				<title>Terms & Conditions - Tagify Social</title>
				<meta
					name="description"
					content="Terms and Conditions of Tagify Social"
				/>
			</Head>
			<div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
				<h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
				<p className="text-gray-600 mb-4">Effective Date: 2025-01-01</p>

				<h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
				<p className="text-gray-700">
					Welcome to <strong>Tagify Social</strong> ("we," "our," "us"). By
					using our website and services, you agree to comply with and be bound
					by these Terms and Conditions.
				</p>

				<h2 className="text-xl font-semibold mt-6">2. User Responsibilities</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>You must be at least 13 years old to use our services.</li>
					<li>
						You are responsible for any activity that occurs under your account.
					</li>
					<li>You must not post harmful, offensive, or illegal content.</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">3. Account Termination</h2>
				<p className="text-gray-700">
					We reserve the right to terminate or suspend your account if you
					violate our terms or engage in harmful activities.
				</p>

				<h2 className="text-xl font-semibold mt-6">4. Intellectual Property</h2>
				<p className="text-gray-700">
					All content, trademarks, and services provided by Tagify Social are
					protected by intellectual property laws. You may not use our content
					without permission.
				</p>

				<h2 className="text-xl font-semibold mt-6">
					5. Limitation of Liability
				</h2>
				<p className="text-gray-700">
					We are not responsible for any losses or damages resulting from your
					use of our services.
				</p>

				<h2 className="text-xl font-semibold mt-6">6. Changes to Terms</h2>
				<p className="text-gray-700">
					We reserve the right to update these Terms and Conditions at any time.
					Continued use of our services constitutes acceptance of any changes.
				</p>

				<h2 className="text-xl font-semibold mt-6">7. Governing Law</h2>
				<p className="text-gray-700">
					These Terms are governed by the laws of Arab Republic of Egypt.
				</p>

				<h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
				<p className="text-gray-700">
					If you have any questions regarding these Terms, please contact us at:
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
