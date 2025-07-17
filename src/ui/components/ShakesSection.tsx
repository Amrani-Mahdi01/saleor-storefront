"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";

export default function ShakesSection() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // only animate once
		});
	}, []);

	return (
		<div className="mt-10">
			<div data-aos="flip-right" className="relative h-[150px] ">
				<Image src="/Shakes-Animals.png" fill alt="Shakes-Animals" className="object-cover" />
			</div>
			<div data-aos="flip-left" className="relative  h-[350px] w-full lg:min-h-[350px] ">
				<Image src="/protin-shakes.png" fill alt="protin-shakes" className="hidden object-contain md:block" />
				<Image
					src="/protin-shake-mobile.png"
					fill
					alt="protin-shakes"
					className=" block aspect-[4/3] md:hidden"
				/>
			</div>
		</div>
	);
}
