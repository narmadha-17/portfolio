export default function Projects() {
return (
	<section id="projects" className="max-w-6xl mx-auto py-20 px-6">
		<h2 className="text-4xl font-bold mb-6">Projects</h2>
		<div className="grid md:grid-cols-2 gap-6">
			<div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10">
				<h3 className="text-2xl font-semibold">Multi-Agent AI Chatbot</h3>
				<p className="text-gray-300 mt-2">Built using LangGraph for intelligent workflow orchestration.</p>
			</div>
			<div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10">
				<h3 className="text-2xl font-semibold">AI Model Pricing Extractor</h3>
				<p className="text-gray-300 mt-2">Automated extraction for model pricing using LLM-based parsing.</p>
			</div>
			<div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10">
				<h3 className="text-2xl font-semibold">Course Registration System</h3>
				<p className="text-gray-300 mt-2">A MERN stack web application that streamline data management and efficient operations.</p>
			</div>
			<div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/10">
				<h3 className="text-2xl font-semibold">Person or Company Profile Scrap</h3>
				<p className="text-gray-300 mt-2">An AI-powered web application that fetches real-time professional and company insights.</p>
			</div>
		</div>
	</section>
);
}

