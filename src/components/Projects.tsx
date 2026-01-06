import React from "react";
// ...existing code...

// Example project data
const projects = [
  {
    title: (
      <span>
        Project 1: Smart Information Extractor <br /> That Extracts information about the company or an individual.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/Smart_Info_Extractor",
    image: "/project1.webp",
  },
  {
    title: (
      <span>
        Project 2: LLM  Tool Cost Calculator <br /> A agent that calculates the cost of using LLM tools.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/LLM-Tool-Cost-Tracker",
    image: "/project2.webp",
  },
  {
    title: (
      <span>
        Project 3: Student Course Registration System <br /> A MERN Stack registrations application.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/student_course_registration_system",
    image: "/project3.webp",
  }
  // Add more projects as needed
];

// Peerlist logo or your own badge
const Badge = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* ...svg paths as in your code... */}
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div key={idx} className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] rounded-xl shadow p-6 flex flex-col md:flex-row items-center">
              <img src={project.image} alt="Project" className="w-32 h-32 object-cover rounded-lg mr-6" />
              <div className="flex-1">
                <div className="text-xl font-semibold mb-2">{project.title}</div>
                <a href={project.badgeLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-500 underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}