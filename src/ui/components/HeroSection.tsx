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
			<div className="grid min-h-[650px] grid-cols-6 gap-1 transition-all duration-500 group-hover:bg-[linear-gradient(180deg,_#fca311_0%,_#ff006e_100%)] 2xl:h-[80vh]">
				{images.map((img, i) => (
					<div key={i} className="relative col-span-1 h-full w-full overflow-hidden">
						<div className="absolute left-0  top-0 z-[9999] h-full w-full bg-black bg-opacity-[22%] hover:bg-opacity-0" />

						{/* Title text centered */}
						<div className="absolute inset-0 z-[2] mt-64 flex items-center justify-center text-nowrap px-2 text-center  text-2xl font-light text-[#B92727] 2xl:text-3xl">
							{img.title}
						</div>

						<Image alt={`hero-${i}`} src={img.src} fill className="object-cover" />
					</div>
				))}
			</div>

		
		</div>
	);
}
