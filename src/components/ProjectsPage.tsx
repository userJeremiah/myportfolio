import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import greenWalletImage from "../assets/green-wallet-splash.png";
import rydaLogo from "../assets/ryda-logo.png";
import apiblokLogo from "../assets/apiblok-logo.png";

const allProjects = [
	{
		title: "API Blok",
		description:
			"API blocking and rate limiting solution for secure API management.",
		roles: ["API", "Security"],
		link: "https://github.com/userJeremiah/api_blok",
		image: apiblokLogo,
		category: "Backend",
	},
	{
		title: "Green Wallet - Mobile Banking App",
		description:
			"Modern mobile banking UI/UX design with seamless user experience and clean interface.",
		roles: ["UI/UX Design", "Figma"],
		link: "https://www.figma.com/design/371taBgyjd8sgTblMGDMGA/Green-Wallet?node-id=0-1&t=OAoKEu9RAw4vKfMb-1",
		image: greenWalletImage,
		category: "Design",
		isFigma: true,
	},
	{
		title: "Ryda - SDG Hackathon App",
		description:
			"Branding and UI/UX design for Ryda, a ride-sharing app concept built for the SDG Hackathon.",
		roles: ["UI/UX Design", "Branding", "Figma"],
		link: "https://www.figma.com/design/e94JER8FRYRCTqA9x9m0VR/Build-for-SDG?node-id=1-2&t=BiMn08RdZW7Ta52H-1",
		image: rydaLogo,
		category: "Design",
		isFigma: true,
	},
	{
		title: "JWT Authentication with Django",
		description:
			"Secure JWT-based authentication system built with Django REST Framework.",
		roles: ["Backend", "Security"],
		link: "https://github.com/userJeremiah/JWT_auth_django",
		image:
			"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
		category: "Backend",
	},
	{
		title: "Permit.io Q&A Authentication",
		description:
			"Role-based access control system using Permit.io for secure Q&A application.",
		roles: ["Authentication", "RBAC"],
		link: "https://github.com/userJeremiah/permitqna_auth",
		image:
			"https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
		category: "Security",
	},
	{
		title: "Document Semantic Search",
		description:
			"AI-powered semantic search engine for intelligent document retrieval and analysis.",
		roles: ["AI/ML", "Search"],
		link: "https://github.com/userJeremiah/doc_semantic_search",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
		category: "AI/ML",
	},
	{
		title: "Secure Password Reset with Twilio",
		description:
			"Secure password reset system implementation using Twilio Verify.",
		roles: ["Security", "Twilio"],
		link: "https://github.com/userJeremiah/secure_passwordtwil",
		image:
			"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&q=80",
		category: "Security",
	},
	{
		title: "WhatsApp OTP with Twilio",
		description:
			"WhatsApp-based OTP verification system built with Twilio API.",
		roles: ["Security", "Twilio"],
		link: "https://github.com/userJeremiah/Whatsapp_twil",
		image:
			"https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
		category: "Security",
	},
	{
		title: "Go Twilio IVR System",
		description:
			"Interactive Voice Response system built with Go and Twilio.",
		roles: ["Go", "Twilio"],
		link: "https://github.com/userJeremiah/GO-Twilio-ivr-system",
		image:
			"https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
		category: "Backend",
	},
];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
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
			<main
				className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${
					false // always use light theme
						? "bg-gray-900 text-white"
						: "bg-white text-gray-900"
				}`}
			>
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
						All Projects
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Explore my portfolio of design work across web, mobile, and design
						systems.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{allProjects.map((project, index) => (
						<div
							key={index}
							className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group"
						>
							<div className="aspect-video overflow-hidden bg-gray-100">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center justify-between mb-3">
									<span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
										{project.category}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4 text-sm">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.roles.map((role, idx) => (
										<span
											key={idx}
											className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
										>
											{role}
										</span>
									))}
								</div>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
								>
									{project.isFigma
										? "View on Figma"
										: "View on GitHub"}{" "}
									<ExternalLink size={16} />
								</a>
							</div>
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
