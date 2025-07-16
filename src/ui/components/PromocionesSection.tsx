import React from "react";
import Image from "next/image";

export default function PromocionesSection() {
	const promociones = [
		"/CREATINE-FREE.jpg",
		"/WHEYZOO.jpg",
		"/ENERGY.jpg",
		"/ZMB.jpg",
		// Add more images if needed
	];

	return (
		<div className="min-h-[650px] py-20 px-3 mx-auto">
			<h1 className="text-center font-bold text-[#B92727] mb-5">
				PROMOCIONES
			</h1>

			<div className="grid gap-5 grid-cols-1 md:grid-cols-2">
				{promociones.map((img, index) => (
					<div
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
