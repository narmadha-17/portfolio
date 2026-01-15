import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Generate random particles with varied properties
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1,
    }));

    // Floating code snippets
    const codeSnippets = [
        "const AI = () => {}",
        "ML.train()",
        "async/await",
        "React.tsx",
        "Python 3.x",
        "{ API }",
    ];

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-20" />

            {/* Scan Line Effect - White */}
            <div className="scan-line-overlay" style={{ background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.15), transparent)" }} />

            {/* Large Animated Gradient Orbs - Black/Gray tones */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    filter: "blur(60px)",
                    top: "5%",
                    left: "5%"
                }}
                animate={{
                    x: ["-20%", "20%", "-20%"],
                    y: ["-20%", "30%", "-20%"],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
                    filter: "blur(70px)",
                    bottom: "5%",
                    right: "5%"
                }}
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["20%", "-15%", "20%"],
                    scale: [1, 1.4, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
                    filter: "blur(50px)",
                    top: "45%",
                    left: "45%"
                }}
                animate={{
                    x: ["-10%", "25%", "-10%"],
                    y: ["25%", "-10%", "25%"],
                    scale: [1.3, 1, 1.3],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Enhanced Floating Particles - White */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: `rgba(255, 255, 255, ${particle.opacity})`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity})`,
                    }}
                    animate={{
                        y: [0, -150, 0],
                        x: [0, Math.random() * 100 - 50, 0],
                        opacity: [0, particle.opacity, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Floating Code Snippets - Gray */}
            {codeSnippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    className="absolute text-xs font-mono text-gray-500/30 whitespace-nowrap"
                    style={{
                        left: `${(index * 15 + 10) % 90}%`,
                        top: `${(index * 20 + 15) % 80}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 20 + index * 3,
                        repeat: Infinity,
                        delay: index * 2,
                        ease: "easeInOut",
                    }}
                >
                    {snippet}
                </motion.div>
            ))}

            {/* Geometric Shapes with Subtle White Effect */}
            <motion.div
                className="absolute w-40 h-40 border-2 rounded-lg"
                style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
                    top: "15%",
                    left: "10%"
                }}
                animate={{
                    rotate: [0, 360],
                    x: [0, 120, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute w-32 h-32 border-2 rounded-full"
                style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
                    bottom: "25%",
                    right: "15%"
                }}
                animate={{
                    scale: [1, 1.6, 1],
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute w-24 h-24 border-2"
                style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
                    top: "55%",
                    left: "65%"
                }}
                animate={{
                    rotate: [0, -360],
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Interactive Mouse Follow Effect - Subtle White */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
                animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 40,
                }}
            />

            {/* Hexagon Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                            <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>
        </div>
    );
}

