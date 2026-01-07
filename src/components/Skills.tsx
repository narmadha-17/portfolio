import React, { useEffect, useState } from "react";
import Marqueee from "./Marqueee";
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
	const [images, setImages] = useState<string[]>([]);
	// Using CDN URLs for reliable image loading without local assets

	useEffect(() => {
		// Full list of images to cycle through
		const allImages = [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			// Duplicated for length if needed, though Marquee handles simple loops well
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		];

		setImages(allImages);
	}, []);

	return (
		<div>
			<div>
				<div className="grid-container w-full max-w-7xl mx-auto">
					<div className="item1 w-full">
						<div className="marquee w-full">
							<div className="marquee-content z-10 w-full">
								<Marqueee images={images} direction="left" />
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Skills;