"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function DestacadosSection() {
	const [swiperInstance, setSwiperInstance] = useState<any>(null);
	const prevRef = useRef<HTMLButtonElement | null>(null);
	const nextRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		AOS.init({
			duration: 1000, // animation duration
			once: true, // only animate once
		});
	}, []);
	// Slide to center (e.g., index 2)
	useEffect(() => {
		if (swiperInstance) {
			swiperInstance.slideToLoop(2); // start from 3rd slide, logically centered
		}
	}, [swiperInstance]);

	return (
		<>
			<h1 data-aos="fade-up" className="text-center text-lg font-bold uppercase text-[#B92727]">PRODUCTOS DESTACADOS</h1>
			<div className="relative px-4 pb-20">
				{/* Prev Arrow */}
				<button
					ref={prevRef}
					className="absolute left-0 top-1/2 z-10 mt-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#B92727] text-white"
				>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.9668 12.2214L7.32227 12.866C7.0293 13.1296 6.58984 13.1296 6.32617 12.866L0.642578 7.15308C0.349609 6.8894 0.349609 6.44995 0.642578 6.18628L6.32617 0.473389C6.58984 0.209717 7.05859 0.209717 7.32227 0.473389L7.9668 1.11792C8.25977 1.41089 8.23047 1.85034 7.9668 2.14331L4.42188 5.48315H12.8594C13.2402 5.48315 13.5625 5.80542 13.5625 6.18628V7.12378C13.5625 7.53394 13.2402 7.8269 12.8594 7.8269H4.42188L7.9668 11.196C8.23047 11.489 8.25977 11.9285 7.9668 12.2214Z"
							fill="white"
						/>
					</svg>
				</button>

				{/* Next Arrow */}
				<button
					ref={nextRef}
					className="absolute right-0 top-1/2 z-10 mt-10 flex h-10 w-10 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-[#B92727] text-white"
				>
					<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.9668 12.2214L7.32227 12.866C7.0293 13.1296 6.58984 13.1296 6.32617 12.866L0.642578 7.15308C0.349609 6.8894 0.349609 6.44995 0.642578 6.18628L6.32617 0.473389C6.58984 0.209717 7.05859 0.209717 7.32227 0.473389L7.9668 1.11792C8.25977 1.41089 8.23047 1.85034 7.9668 2.14331L4.42188 5.48315H12.8594C13.2402 5.48315 13.5625 5.80542 13.5625 6.18628V7.12378C13.5625 7.53394 13.2402 7.8269 12.8594 7.8269H4.42188L7.9668 11.196C8.23047 11.489 8.25977 11.9285 7.9668 12.2214Z"
							fill="white"
						/>
					</svg>
				</button>

				<Swiper
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={3.5}
					centeredSlides
					loop
					onSwiper={(swiper) => setSwiperInstance(swiper)}
					navigation={{
						prevEl: prevRef.current!,
						nextEl: nextRef.current!,
					}}
					onBeforeInit={(swiper) => {
						if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
							swiper.params.navigation.prevEl = prevRef.current!;
							swiper.params.navigation.nextEl = nextRef.current!;
						}
					}}
					breakpoints={{
						0: { slidesPerView: 1.2, centeredSlides: true },
						640: { slidesPerView: 1.5, centeredSlides: true },
						768: { slidesPerView: 2.2, centeredSlides: true },
						1024: { slidesPerView: 3.5, centeredSlides: true },
					}}
				>
					{[...Array(10)].map((_, i) => (
						<SwiperSlide key={i}>
							<div className="flex flex-col rounded-xl shadow-md">
								{/* Optional Sale Label */}
								{i >= 4 && (
									<div className="absolute left-0 top-0 z-[9999] bg-[#5B5B5B] p-3">
										<p className="text-white">20% Sale</p>
									</div>
								)}
								<div className="relative aspect-[4/3] h-[350px] w-full overflow-auto">
									<Image src="/CareTakerProduct.jpg" fill alt="CareTakerProduct" className="object-contain" />
								</div>
								<div className="mx-auto">
									<h2 className="text-center text-sm">AMINOÁCIDOS</h2>
									<h1 className="text-center">CARETAKER® Squeeze®</h1>
									<div className="flex justify-center gap-2">
										{i >= 4 ? (
											<>
												<span className="mt-3 block text-xs text-[#8D8D8D] line-through">40,90 €</span>
												<span className="mt-3 block text-xs text-[#8D8D8D]">34,90 €</span>
											</>
										) : (
											<span className="mt-3 block text-xs text-[#8D8D8D]">34,90 €</span>
										)}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
