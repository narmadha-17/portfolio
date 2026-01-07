import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeeProps {
    images: string[];
    direction?: "left" | "right" | "up" | "down";
}

const Marqueee: React.FC<MarqueeeProps> = ({ images, direction = "left" }) => {
    return (
        <div className="w-full overflow-hidden py-4 bg-gray-50/50 rounded-lg">
            <Marquee direction={direction} gradient={true} gradientWidth={50} speed={40}>
                {images.map((img, index) => (
                    <div key={index} className="mx-8 flex items-center justify-center p-2 rounded-full bg-white shadow-sm border border-gray-100">
                        <img
                            src={img}
                            alt={`skill-${index}`}
                            className="h-12 w-12 object-contain"
                            onError={(e) => {
                                e.currentTarget.src = "https://placehold.co/48x48?text=Skill";
                            }}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Marqueee;
