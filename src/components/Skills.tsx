

const skills = [
"Python", "FastAPI", "Machine Learning", "Deep Learning", "MongoDB", "LLM Workflows", "LangChain", "LangGraph", "LangSmith", "Prompt Engineering"
];


export default function Skills() {
return (
	<section id="skills" className="max-w-6xl mx-auto py-20 px-6">
		<h2 className="text-4xl font-bold mb-6">Skills</h2>
		<div className="flex flex-wrap gap-3">
			{skills.map((skill) => (
				<span key={skill} className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-xl">
					{skill}
				</span>
			))}
		</div>
	</section>
);
}