

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";


function App() {
return (
<div className="bg-slate-900 text-white overflow-x-hidden">
<Navbar />
<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Education />
<Achievements />
<Footer />
</div>
);
}


export default App;