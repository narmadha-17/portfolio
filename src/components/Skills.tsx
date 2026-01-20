import { useEffect, useState } from "react";
import Marqueee from "./Marqueee";
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		const allImages = [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
			"https://www.bestaitools.com/wp-content/uploads/2024/05/langchain-square.png",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
			"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
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