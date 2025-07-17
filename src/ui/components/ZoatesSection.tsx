"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Image from "next/image";

export default function ZoatesSection() {

		useEffect(() => {
			AOS.init({
				duration: 1000, // animation duration
				once: true, // only animate once
			});
		}, []);
	return (
		<div className="pt-10">
			<div data-aos="fade-up" className="relative h-[200px] w-full lg:h-[350px] 2xl:h-[450px] ">
				<Image src="/ZOOATS.png" alt="ZOOATS" fill className=" object-cover" />
			</div>
			<div data-aos="fade-bottom" className="  flex w-full flex-col  items-center lg:flex-row ">
				<div className="relative h-[150px] w-full  lg:h-[230px] 2xl:h-[300px]  ">
					<Image src="/HMB.png" alt="HMB" fill className="object-contain md:object-cover" />
				</div>
				<div className="relative h-[150px] w-full  lg:h-[230px]  2xl:h-[300px] ">
					<Image src="/MOONSTRUCK.png" alt="MOONSTRUCK" fill className="object-contain md:object-cover" />
				</div>
			</div>

			<div data-aos="flip-right" className="relative  h-[300px] ">
				<Image src="/Warning.png" alt="Warning" fill className=" object-cover" />
			</div>
			<div className="mx-auto px-2 2xl:container">
				<div className="flex flex-col md:flex-row items-center gap-5 ">
					<div data-aos="fade-left"  className="flex h-[150px] w-full  gap-2 items-center bg-[#B92727] p-5   ">
						<div className="w-[80px] h-[80px]  relative">
							<Image src="/logo.png" alt="logo" fill className=" object-cover" />
						</div>
						<div>
							<h1 className="text-white">FABRICANTES Y DISTRIBUIDORES</h1>
							<h2 className="text-black text-sm">Especialistas en Nutrición Deportiva</h2>

						</div>
					</div>

					<div data-aos="fade-left" data-aos-delay="50" className="w-full flex h-[150px] gap-16 items-center border-[1px] border-[#6A656536] p-5  ">

						<div className="w-[45px] h-[40px]  relative">
							<Image src="/ENVÍO-icon.png" alt="ENVÍO-icon" fill className=" object-cover" />
						</div>
						<div>
							<h1 className="text-black">ENVÍO GRATIS</h1>
							<h2 className="text-black text-sm">Envío gratis desde 29'90€</h2>

						</div>
					</div>

					<div data-aos="fade-left" data-aos-delay="100" className="w-full  flex h-[150px] gap-16 items-center border-[1px] bg-[#292929] p-5 ">
                          <div className="w-[45px] h-[45px]  relative">
							<Image src="/PAGO-icon.png" alt="PAGO-icon" fill className=" object-cover" />
						</div>
						<div>
							<h1 className="text-white">PAGO 100% SEGURO</h1>
							<h2 className="text-white text-sm">Pagos seguro con tarjeta.</h2>
						</div>

					</div>
				</div>
			</div>

			<div className="py-5 text-center mt-10 text-white bg-[#005A97] ">
				<h1 className="font-bold">CONTÁCTANOS</h1>
				<h4>Tfno. +34 910409598 / info@zoomadlabs.com</h4>

			</div>
		</div>
	);
}
