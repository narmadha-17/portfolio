import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function About() {
  const typedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        "Dedicated Software Engineer with expertise in <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>Machine Learning</strong> techniques. Proficient in AI-driven workflows and MongoDB database management. Experienced in building scalable solutions and enhancing enterprise automation platforms. Skilled in LangSmith, prompt engineering, and deep learning frameworks, with a strong passion for exploring cutting-edge technologies."
      ],
      typeSpeed: 75,
      backSpeed: 15,
      showCursor: true,
      cursorChar: "|",
      loop: true,
      contentType: "html"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Bio</h2>

        <div
          ref={typedRef}
          className="text-lg leading-relaxed text-gray-300"
        />
      </div>
    </section>
  );
}
