import { motion } from 'framer-motion';
import { Award, Trophy, FileText, Users, Calendar } from 'lucide-react';

const achievements = [
	{
		title: "Winner - BITSHACK (2022)",
		icon: <Trophy className="w-6 h-6 text-yellow-500" />,
		description: "First place in the flagship hackathon BITSHACK.",
	},
	{
		title: "Jury Choice Award",
		icon: <Award className="w-6 h-6 text-blue-500" />,
		description: "Recognized for excellence in Paper Presentation.",
	},
	{
		title: "Filed Patent: ODOR ALERT",
		icon: <FileText className="w-6 h-6 text-purple-500" />,
		description: "Invented and filed a patent for ODOR ALERT system.",
	},
	{
		title: "Trained 50+ Students",
		icon: <Users className="w-6 h-6 text-green-500" />,
		description: "Mentored students in communication and technical skills.",
	},
	{
		title: "Organizer - National Conference",
		icon: <Calendar className="w-6 h-6 text-red-500" />,
		description: "Successfully organized Impellz'23 National Conference.",
	},
];

export default function Achievements() {
	return (
		<section id="achievements" className="max-w-6xl mx-auto py-24 px-6">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
					Achievements
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{achievements.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.05, translateY: -5 }}
							className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
						>
							<div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
								{item.icon}
							</div>
							<h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
								{item.title}
							</h3>
							<p className="text-gray-400 leading-relaxed text-sm">
								{item.description}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}