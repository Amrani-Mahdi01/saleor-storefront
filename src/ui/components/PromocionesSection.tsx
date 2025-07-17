"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Image from "next/image";
export default function PromocionesSection() {
	const promociones = [
		"/CREATINE-FREE.jpg",
		"/WHEYZOO.jpg",
		"/ENERGY.jpg",
		"/ZMB.jpg",
		// Add more images if needed
	];

	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // only animate once
		});
	}, []);

	return (
		<div className="min-h-[650px] py-20 px-3 mx-auto">
			<h1 data-aos="fade-up" className="text-center font-bold text-[#B92727] mb-5">
				PROMOCIONES
			</h1>

			<div className="grid gap-5 grid-cols-1 md:grid-cols-2">
				{promociones.map((img, index) => (
					<div data-aos="fade-down"
						key={index}
						className="relative h-[130px] md:h-[150px] lg:h-[180px] xl:h-[220px] 2xl:h-[280px] w-full"
					>
						<Image
							src={img}
							alt={`promocion-${index}`}
							fill
							className="object-cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
