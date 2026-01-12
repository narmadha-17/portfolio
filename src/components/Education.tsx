import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="max-w-6xl mx-auto py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Education
                </h2>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GraduationCap size={120} />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                                <GraduationCap size={24} />
                            </div>
                            <span className="text-blue-400 font-medium tracking-wider uppercase text-sm">Degree</span>
                        </div>

                        <h3 className="text-3xl font-bold mb-2 text-white">Bachelor of Engineering</h3>
                        <h4 className="text-xl text-gray-300 font-medium mb-6">Computer Science and Engineering</h4>

                        <div className="flex flex-wrap gap-6 text-gray-400">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-gray-500" />
                                <span>Bannari Amman Institute of Technology</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-gray-500" />
                                <span>2021 - 2025</span>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-2">
                            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Tech Enthusiast</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}