import { Link } from "react-scroll";

export default function Navbar() {
return (
<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 p-4">
<div className="max-w-6xl mx-auto flex justify-between items-center">
<h1 className="text-xl font-bold">Narmadha</h1>
<div className="flex gap-6 text-gray-300">
<Link to="about" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">About</Link>
<Link to="skills" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">Skills</Link>
<Link to="projects" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">Projects</Link>
<Link to="experience" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">Experience</Link>
<Link to="education" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">Education</Link>
<Link to="achievements" smooth duration={600} offset={-80} className="cursor-pointer hover:text-white">Achievements</Link>
</div>
</div>
</nav>
);
}