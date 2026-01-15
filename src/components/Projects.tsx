"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

// Example project data
const projects = [
  {
    title: (
      <span>
        Project 1: Smart Information Extractor <br /> That Extracts information about the company or an individual.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/Smart_Info_Extractor",
    image: "src/components/image/project1_cover_img.png",
  },
  {
    title: (
      <span>
        Project 2: LLM  Tool Cost Calculator <br /> A agent that calculates the cost of using LLM tools.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/LLM-Tool-Cost-Tracker",
    image: "src/components/image/project2_cover_img.png",
  },
  {
    title: (
      <span>
        Project 3: Student Course Registration System <br /> A MERN Stack registrations application.
      </span>
    ),
    badgeLink: "https://github.com/narmadha-17/student_course_registration_system",
    image: "src/components/image/project3_cover_img.png",
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
        <h2 className="text-3xl font-bold mb-8 text-center">Works...</h2>
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col overflow-hidden">
              <ContainerScroll
                titleComponent={
                  <>
                    <div className="text-2xl md:text-4xl font-semibold text-black dark:text-white mb-4">
                      {project.title}
                    </div>
                    <a
                      href={project.badgeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline text-lg"
                    >
                      View on GitHub →
                    </a>
                  </>
                }
              >
                <img
                  src={project.image}
                  alt={`Project ${idx + 1}`}
                  height={720}
                  width={1400}
                  className="mx-auto rounded-2xl object-cover h-full object-left-top"
                  draggable={false}
                />
              </ContainerScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}