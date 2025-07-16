import React from "react";
import Image from "next/image";

export default function HeroSection() {
	const images = [
		{ src: "/WILDBEAST.jpg", title: "WILDBEAST" },
		{ src: "/CARETAKER.jpg", title: "CARETAKER" },
		{ src: "/WISEKING.jpg", title: "WISE KING" },
		{ src: "/MOONSTRUCK.jpg", title: "MOONSTRUCK" },
		{ src: "/ZOOMASS.jpg", title: "ZOOMASS" },
		{ src: "/ONERAW.jpg", title: "ONERAW" },
	];

	return (
		<div className="group">
			<div className="grid min-h-[650px] 2xl:h-[80vh] gap-1 grid-cols-6 transition-all duration-500 group-hover:bg-[linear-gradient(180deg,_#fca311_0%,_#ff006e_100%)]">
				{images.map((img, i) => (
					<div key={i} className="relative overflow-hidden col-span-1 h-full w-full">
					
						<div className="absolute hover:bg-opacity-0  left-0 top-0 bg-black bg-opacity-[22%] w-full h-full z-[9999]" />

						{/* Title text centered */}
						<div className="absolute text-nowrap z-[2] inset-0 flex items-center justify-center mt-64 text-[#B92727] 2xl:text-3xl  text-2xl font-light text-center px-2">
							{img.title}
						</div>

						<Image
							alt={`hero-${i}`}
							src={img.src}
							fill
							className="object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
