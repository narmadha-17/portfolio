import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { useState, useEffect } from "react";

export default function Hero() {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        // Trigger glitch effect randomly
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 pt-32 relative overflow-hidden">
            {/* Dynamic Animated Background */}
            <AnimatedBackground />

            {/* Content with higher z-index */}
            <div className="relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`text-5xl md:text-7xl font-bold text-white ${glitchActive ? 'animate-glitch-text' : ''}`}
                >
                    Narmadha Ganesan
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-2 h-1 w-32 mx-auto bg-white rounded-full"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 text-xl md:text-2xl text-gray-400 font-light tracking-wide"
                >
                    Software Engineer | ML Enthusiast | AI Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto"
                >
                    Building intelligent systems that scale. Transforming ideas into production-ready AI solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-10 flex gap-4 flex-wrap justify-center"
                >
                    <motion.a
                        href="#projects"
                        className="group px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-xl shadow-lg shadow-white/20 transition-all transform hover:scale-105 relative overflow-hidden font-semibold"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>

                    <motion.a
                        href="src/components/image/resume.pdf"
                        download
                        className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-xl transition-all transform hover:scale-105 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1, duration: 0.5 },
                        y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                    className="mt-16"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            className="w-1.5 h-3 bg-white rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}