import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const allArticles = [
	{
		title: "Secure CakePHP OTP Verification Using WhatsApp",
		publication: "Twilio Blog",
		excerpt: "Learn how to implement secure OTP verification in CakePHP applications using Twilio's WhatsApp API.",
		category: "Security",
		link: "https://www.twilio.com/en-us/blog/developers/community/secure-cakephp-otp-verification-using-whatsapp",
	},
	{
		title: "Build Secure Password Reset System with Twilio Verify",
		publication: "Twilio Blog",
		excerpt: "A comprehensive guide to building a secure password reset system in CakePHP using Twilio Verify.",
		category: "Security",
		link: "https://www.twilio.com/en-us/blog/build-secure-password-reset-system-twilio-verify-cakephp",
	},
	{
		title: "Build Interactive Voice Response System in Go",
		publication: "Twilio Blog",
		excerpt: "Step-by-step guide to creating an Interactive Voice Response (IVR) system using Go and Twilio.",
		category: "Development",
		link: "https://www.twilio.com/en-us/blog/archive/2024/build-interactive-voice-response-system-go-twilio",
	},
	{
		title: "Step by Step: URL Validation in JavaScript",
		publication: "OpenReplay Blog",
		excerpt: "A comprehensive guide to implementing robust URL validation in JavaScript applications.",
		category: "JavaScript",
		link: "https://blog.openreplay.com/step-by-step--url-validation-in-javascript/",
	},
	{
		title: "A Guide to Creating Smooth and Lightweight UI Animation",
		publication: "Design Bootcamp",
		excerpt: "Master the art of creating performant UI animations that enhance user experience without sacrificing performance.",
		category: "UI Design",
		link: "https://medium.com/design-bootcamp/a-guide-to-creating-smooth-and-lightweight-ui-animation-27e680696a61",
	},
	{
		title: "Essential Tools to Become a Better UI/UX Designer",
		publication: "Design Bootcamp",
		excerpt: "Discover the must-have tools and resources that will elevate your UI/UX design workflow and skills.",
		category: "UX Design",
		link: "https://medium.com/design-bootcamp/essential-tools-to-become-a-better-ui-ux-designer-723dcf72285e",
	},
	{
		title: "Building a Role-Based AI Assistant with Node.js, Gemini 2.5 Pro, and Permit.io",
		publication: "Medium",
		excerpt: "Learn how to build an intelligent AI assistant with role-based access control using modern tools and frameworks.",
		category: "AI Development",
		link: "https://medium.com/@isijolajerry/building-a-role-based-ai-assistant-with-node-js-gemini-2-5-pro-and-permit-io-2e22b733e366",
	},
	{
		title: "Boosting Next.js Development with Cursor Project Rules",
		publication: "Galaxy Cloud Blog",
		excerpt: "Enhance your Next.js development workflow using Cursor AI and project-specific rules for better productivity.",
		category: "Next.js",
		link: "https://blog.galaxycloud.app/boosting-next-js-development-with-cursor-project-rules/",
	},
	{
		title: "Why Kubernetes Has Become the Modern Standard for Cloud-Native Application Delivery",
		publication: "Hashnode",
		excerpt: "Understanding Kubernetes' role in modern cloud infrastructure and why it's become the de facto standard for container orchestration.",
		category: "Cloud Native",
		link: "https://jerrydocs.hashnode.dev/why-kubernetes-has-become-the-modern-standard-for-cloud-native-application-delivery",
	},
];

export default function ArticlesPage() {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Header */}
			<header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						to="/"
						className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
					>
						<ArrowLeft size={20} />
						Back to Home
					</Link>
				</div>
			</header>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
						All Articles
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						A collection of my thoughts on design, development, and user
						experience.
					</p>
				</div>

				{/* Articles Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{allArticles.map((article, index) => (
						<div
							key={index}
							className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-purple-100/50 hover:shadow-2xl hover:border-purple-300 transition-all hover:-translate-y-2 group"
						>
							<div className="mb-3">
								<span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
									{article.category}
								</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
								{article.title}
							</h3>
							<p className="text-sm text-gray-500 mb-3">
								{article.publication}
							</p>
							<p className="text-gray-600 mb-4 text-sm leading-relaxed">
								{article.excerpt}
							</p>
							{article.link ? (
								<a
									href={article.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-purple-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
								>
									Read Article <ExternalLink size={16} />
								</a>
							) : (
								<span className="text-gray-400 font-medium text-sm inline-flex items-center gap-2">
									Coming Soon
								</span>
							)}
						</div>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8 mt-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-gray-400 text-sm">
						© 2025 Jeremiah. Crafted with{" "}
						<span className="text-pink-400">❤</span> and creativity.
					</p>
				</div>
			</footer>
		</div>
	);
}
