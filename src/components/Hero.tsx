import { motion } from "framer-motion";


export default function Hero() {
return (
<section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center text-center px-6 pt-32 relative overflow-hidden">
<div className="absolute w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full -top-20 -left-10 animate-pulse"></div>
<div className="absolute w-72 h-72 bg-blue-500/20 blur-2xl rounded-full bottom-0 right-0 animate-bounce"></div>


<motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold">
Narmadha G
</motion.h1>


<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-4 text-xl md:text-2xl text-gray-300">
Software Engineer | AI & ML Specialist
</motion.p>


<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-8 flex gap-4">
<a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg transition-all">View Projects</a>
<a href="/resume.pdf" download className="px-6 py-3 border border-white/40 backdrop-blur-xl bg-white/10 rounded-xl hover:bg-white/20 transition-all">Download Resume</a>
</motion.div>
</section>
);
}