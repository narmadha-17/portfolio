import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
	{
		role: "Associate Software Engineer",
		company: "Workhall",
		period: "Jun 2025 - Present",
		location: "Remote/On-site",
		description: "Contributing to scalable software solutions and enterprise automation.",
		icon: <Briefcase className="w-5 h-5" />,
		color: "blue"
	},
	{
		role: "Machine Learning Engineer Trainee",
		company: "Workhall",
		period: "Oct 2024 - May 2025",
		location: "Remote/On-site",
		description: "Worked on AI-driven workflows and deep learning frameworks.",
		icon: <Briefcase className="w-5 h-5" />,
		color: "purple"
	}
];

export default function Experience() {
	return (
		<section id="experience" className="max-w-6xl mx-auto py-24 px-6">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
					Professional Journey
				</h2>

				<div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12 pb-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="relative pl-12"
						>
							{/* Timeline Dot */}
							<div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-${exp.color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`} />

							<div className="bg-white/5 p-8 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
								<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
									<div>
										<h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
											{exp.role}
										</h3>
										<p className="text-lg text-gray-300 font-medium">{exp.company}</p>
									</div>
									<div className="flex flex-col gap-2 md:items-end">
										<span className="flex items-center gap-2 text-sm text-gray-400">
											<Calendar size={14} />
											{exp.period}
										</span>
										<span className="flex items-center gap-2 text-sm text-gray-400">
											<MapPin size={14} />
											{exp.location}
										</span>
									</div>
								</div>
								<p className="text-gray-400 leading-relaxed max-w-2xl">
									{exp.description}
								</p>

								<div className="mt-6 flex flex-wrap gap-2">
									<span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">Software Development</span>
									<span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">Enterprise Solutions</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}