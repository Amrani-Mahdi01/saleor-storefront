"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";

export default function ConoceSection() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // only animate once
		});
	}, []);
	const productos = [
		{ image: "/Conoce.png", title: "PRE ENTRENO" },
		{ image: "/Conoce.png", title: "PUROS" },
		{ image: "/Conoce.png", title: "BOOSTER" },
		{ image: "/Conoce.png", title: "BCAA's" },
		{ image: "/Conoce.png", title: "ANTIOX COMPLEX" },
	];

	const productos2 = [
		{ image: "/wheyzoo-product.png", title: "PROTEINAS" },
		{ image: "/wheyzoo-product.png", title: "AVENA" },
		{ image: "/wheyzoo-product.png", title: "GAINER" },
		{ image: "/wheyzoo-product.png", title: "CÁPSULAS" },
		{ image: "/wheyzoo-product.png", title: "MERCH" },
	];

	return (
		<div className="min-h-[650px]">
			<h1 className="mb-5 text-center font-bold uppercase text-[#B92727]">conoce nuestros productos</h1>

			<div className="mx-auto px-2 2xl:container">
				<div className="flex flex-col items-center gap-5 lg:flex-row">
					{productos.map((producto, index) => (
						<div data-aos="fade-left" data-aos-delay={index + "00"} key={index} className="relative w-full sm:w-[calc(50%-10px)] xl:w-[calc(20%-10px)]">
							<div className="group relative cursor-pointer">
								<div className="absolute right-2 top-2 z-[9999]">
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.401 0.944933H23.885V10.4289L20.8837 6.70736L16.5019 11.2693L13.5006 8.26801L18.0625 3.88617L14.401 0.944933ZM7.4981 14.2705L10.4994 17.2718L5.93744 21.6536L9.59898 24.6549H0.11499V15.1709L3.11625 18.8325L7.4981 14.2705Z"
											className="fill-[#B4B4B4] transition-colors duration-300 group-hover:fill-[#707074]"
										/>
									</svg>
								</div>
							</div>

							<div
								style={{ backgroundColor: "rgba(49, 51, 61, 0.76)" }}
								className="absolute bottom-14 left-1/2 z-[9999] flex w-max -translate-x-1/2 items-center justify-center gap-1 rounded-3xl p-2 px-3"
							>
								<Image src="/drag-icon.png" height={25} width={25} alt="drag-icon" className="object-cover" />
								<h2 className="block text-xs text-white">Drag to spin</h2>
							</div>

							<div className="relative aspect-[4/3] w-full overflow-auto">
								<Image src={producto.image} alt={producto.title} fill className="object-contain" />
							</div>

							<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border-[1px] border-black py-2 text-[#9B1D1D] hover:bg-[#9B1D1D] hover:text-white">
								<span className="text-sm ">{producto.title}</span>

								{/* Show SVG only if title is NOT "BOOSTER" */}
								{producto.title !== "BOOSTER" && (
									<svg
										width="12"
										height="8"
										viewBox="0 0 14 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mb-[2px]"
									>
										<path
											d="M6.26953 9.07788L0.425781 3.23413C-0.00390625 2.80444 -0.00390625 2.15991 0.425781 1.77319L1.37109 0.784912C1.80078 0.398193 2.44531 0.398193 2.83203 0.784912L6.95703 4.95288L11.125 0.784912C11.5117 0.398193 12.1562 0.398193 12.5859 0.784912L13.5312 1.77319C13.9609 2.15991 13.9609 2.80444 13.5312 3.23413L7.6875 9.07788C7.30078 9.4646 6.65625 9.4646 6.26953 9.07788Z"
											fill="#C94B4B"
										/>
									</svg>
								)}
							</button>
						</div>
					))}
				</div>

				<div className="mt-20 flex flex-col items-center gap-5 lg:flex-row">
					{productos2.map((producto, index) => (
						<div data-aos="fade-right" data-aos-delay={index + "00"} key={index} className="relative w-full sm:w-[calc(50%-10px)] xl:w-[calc(20%-10px)]">
							<div className="group relative cursor-pointer">
								<div className="absolute right-2 top-2 z-[9999]">
									<svg
										width="24"
										height="25"
										viewBox="0 0 24 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.401 0.944933H23.885V10.4289L20.8837 6.70736L16.5019 11.2693L13.5006 8.26801L18.0625 3.88617L14.401 0.944933ZM7.4981 14.2705L10.4994 17.2718L5.93744 21.6536L9.59898 24.6549H0.11499V15.1709L3.11625 18.8325L7.4981 14.2705Z"
											className="fill-[#B4B4B4] transition-colors duration-300 group-hover:fill-[#707074]"
										/>
									</svg>
								</div>
							</div>

							<div
								style={{ backgroundColor: "rgba(49, 51, 61, 0.76)" }}
								className="absolute bottom-14 left-1/2 z-[9999] flex w-max -translate-x-1/2 items-center justify-center gap-1 rounded-3xl p-2 px-3"
							>
								<Image src="/drag-icon.png" height={25} width={25} alt="drag-icon" className="object-cover" />
								<h2 className="block text-xs text-white">Drag to spin</h2>
							</div>

							<div className="relative aspect-[4/3] w-full overflow-auto">
								<Image src={producto.image} alt={producto.title} fill className="object-contain" />
							</div>

							<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border-[1px] border-black py-2 text-[#9B1D1D] hover:bg-[#9B1D1D] hover:text-white">
								<span className="text-sm ">{producto.title}</span>

								{/* Show SVG only if title is NOT "BOOSTER" */}
								{producto.title !== "BOOSTER" && (
									<svg
										width="12"
										height="8"
										viewBox="0 0 14 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mb-[2px]"
									>
										<path
											d="M6.26953 9.07788L0.425781 3.23413C-0.00390625 2.80444 -0.00390625 2.15991 0.425781 1.77319L1.37109 0.784912C1.80078 0.398193 2.44531 0.398193 2.83203 0.784912L6.95703 4.95288L11.125 0.784912C11.5117 0.398193 12.1562 0.398193 12.5859 0.784912L13.5312 1.77319C13.9609 2.15991 13.9609 2.80444 13.5312 3.23413L7.6875 9.07788C7.30078 9.4646 6.65625 9.4646 6.26953 9.07788Z"
											fill="#C94B4B"
										/>
									</svg>
								)}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
