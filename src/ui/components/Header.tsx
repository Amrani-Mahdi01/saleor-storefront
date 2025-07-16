"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
		const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<header className=" relative">
			<div className="container  mx-auto px-3 md:px-1 ">
				<div className="flex min-h-[120px] items-center justify-between gap-10 ">
					<Link href="/" aria-label="homepage">
						<Image src="/logo.png" alt="logo" width={80} height={20} className="h-auto w-auto" />
					</Link>

					<div className="hidden flex-wrap items-center justify-center space-x-10 xl:flex  ">
						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727]  hover:text-[#B92727] ">
							<span className="text-sm font-semibold">PRE-ENTRENOS</span>

							<svg
								className="fill-current"
								width="9"
								height="5"
								viewBox="0 0 9 5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z" />
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold ">PROTEÍNAS</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">AMINOÁCIDOS</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">PUROS</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">AVENA / GAINERS</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">CAPS</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">ALL IN</span>

							<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-current"
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">APPAREL</span>

							<svg
								className="fill-current"
								width="9"
								height="5"
								viewBox="0 0 9 5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z"
									fill="black"
								/>
							</svg>
						</div>

						<div className="   cursor-pointer  mt-2  2xl:mt-0 hover:fill-[#B92727] hover:text-[#B92727] ">
							<span className="text-sm font-semibold">ZOOMADBOT</span>
						</div>
					</div>

					<div className="flex items-center gap-5 ">
						<div className="block cursor-pointer xl:hidden ">
							<svg onClick={() => setIsMenuOpen((prev) => !prev)} width="23" height="16" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.47022 2.66H17.3102C17.9702 2.66 18.5502 2.08 18.5502 1.42C18.5502 0.760004 17.9702 0.160004 17.3102 0.160004H1.47022C0.810225 0.160004 0.230225 0.740004 0.230225 1.42C0.230225 2.1 0.810225 2.66 1.47022 2.66ZM1.47022 7.66H17.3102C17.9702 7.66 18.5502 7.08 18.5502 6.42C18.5502 5.76 17.9702 5.16 17.3102 5.16H1.47022C0.810225 5.16 0.230225 5.74 0.230225 6.42C0.230225 7.1 0.810225 7.66 1.47022 7.66ZM1.47022 12.66H17.3102C17.9702 12.66 18.5502 12.08 18.5502 11.42C18.5502 10.76 17.9702 10.16 17.3102 10.16H1.47022C0.810225 10.16 0.230225 10.74 0.230225 11.42C0.230225 12.1 0.810225 12.66 1.47022 12.66Z"
									fill="#1F2124"
								/>
							</svg>
						</div>
						<Link href={"/"}>
							<svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M22.3787 19.2041L16.6511 13.4766C16.4415 13.2669 16.2019 13.1097 15.9324 13.0049C15.6628 12.9001 15.3933 12.8402 15.1238 12.8252C15.6628 12.0316 16.0447 11.1706 16.2693 10.2422C16.4939 9.32878 16.5613 8.40788 16.4714 7.47949C16.3816 6.55111 16.142 5.65267 15.7527 4.78418C15.3634 3.91569 14.8093 3.12207 14.0906 2.40332C13.297 1.6097 12.391 1.01074 11.3728 0.606445C10.3546 0.202148 9.31763 0 8.26196 0C7.2063 0 6.17684 0.202148 5.17358 0.606445C4.15535 1.01074 3.24194 1.6097 2.43335 2.40332C1.63973 3.21191 1.04077 4.12533 0.636475 5.14355C0.232178 6.14681 0.0300293 7.17627 0.0300293 8.23193C0.0300293 9.2876 0.232178 10.3245 0.636475 11.3428C1.04077 12.361 1.63973 13.2669 2.43335 14.0605C3.1521 14.7793 3.94572 15.3333 4.81421 15.7227C5.6827 16.112 6.58114 16.3516 7.50952 16.4414C8.43791 16.5312 9.35881 16.4639 10.2722 16.2393C11.2006 16.0146 12.0616 15.6328 12.8552 15.0938C12.8702 15.3633 12.9301 15.6328 13.0349 15.9023C13.1397 16.1719 13.297 16.4115 13.5066 16.6211L19.2341 22.3486C19.6684 22.7829 20.1925 23 20.8064 23C21.4203 23 21.9444 22.7829 22.3787 22.3486C22.8129 21.9144 23.03 21.3903 23.03 20.7764C23.03 20.1624 22.8129 19.6383 22.3787 19.2041ZM12.3162 12.2861C11.7472 12.8402 11.1108 13.252 10.407 13.5215C9.71818 13.806 9.00692 13.9482 8.27319 13.9482C7.53947 13.9482 6.82072 13.806 6.11694 13.5215C5.41317 13.252 4.78426 12.8402 4.23022 12.2861C3.67619 11.7171 3.25692 11.0807 2.97241 10.377C2.70288 9.68815 2.56812 8.97689 2.56812 8.24316C2.56812 7.50944 2.70288 6.79069 2.97241 6.08691C3.25692 5.38314 3.67619 4.75423 4.23022 4.2002C4.78426 3.64616 5.41317 3.22689 6.11694 2.94238C6.82072 2.67285 7.53947 2.53809 8.27319 2.53809C9.00692 2.53809 9.71818 2.67285 10.407 2.94238C11.1108 3.22689 11.7472 3.64616 12.3162 4.2002C12.8702 4.75423 13.282 5.38314 13.5515 6.08691C13.836 6.79069 13.9783 7.50944 13.9783 8.24316C13.9783 8.97689 13.836 9.68815 13.5515 10.377C13.282 11.0807 12.8702 11.7171 12.3162 12.2861Z"
									fill="black"
								/>
							</svg>
						</Link>

						<Link href={"/"}>
							<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M22.7824 15.3889H9.55013L9.84556 16.8333H21.9616C22.6568 16.8333 23.1721 17.4789 23.018 18.1568L22.769 19.2526C23.6127 19.6621 24.1944 20.527 24.1944 21.5278C24.1944 22.9362 23.0425 24.0756 21.6295 24.0553C20.2833 24.0359 19.1762 22.9435 19.1398 21.5976C19.12 20.8624 19.4145 20.1961 19.8983 19.7222H10.435C10.9034 20.1811 11.1944 20.8203 11.1944 21.5278C11.1944 22.9638 9.997 24.1201 8.54615 24.0528C7.25788 23.9929 6.21016 22.952 6.14245 21.6641C6.09018 20.6695 6.61352 19.7929 7.40865 19.3356L4.23777 3.83333H1.08333C0.485017 3.83333 0 3.34831 0 2.75V2.02778C0 1.42946 0.485017 0.944443 1.08333 0.944443H5.71138C6.22601 0.944443 6.66959 1.3065 6.77273 1.81066L7.18647 3.83333H24.9162C25.6114 3.83333 26.1267 4.47886 25.9726 5.15676L23.8387 14.5456C23.7267 15.0389 23.2882 15.3889 22.7824 15.3889ZM18.4167 8.52778H16.25V6.72222C16.25 6.32333 15.9267 6 15.5278 6H14.8056C14.4067 6 14.0833 6.32333 14.0833 6.72222V8.52778H11.9167C11.5178 8.52778 11.1944 8.85111 11.1944 9.25V9.97222C11.1944 10.3711 11.5178 10.6944 11.9167 10.6944H14.0833V12.5C14.0833 12.8989 14.4067 13.2222 14.8056 13.2222H15.5278C15.9267 13.2222 16.25 12.8989 16.25 12.5V10.6944H18.4167C18.8156 10.6944 19.1389 10.3711 19.1389 9.97222V9.25C19.1389 8.85111 18.8156 8.52778 18.4167 8.52778Z"
									fill="black"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div className={`absolute left-0 top-full w-full flex-col gap-5 bg-red-500 py-5 transition-all duration-300 ${
					isMenuOpen ? "flex" : "hidden"
				} xl:hidden`}>
				<div className="flex cursor-pointer items-center gap-2 hover:fill-[#B92727]  hover:text-[#B92727] ">
					<span className="text-sm font-semibold">PRE-ENTRENOS</span>

					<svg
						className="fill-current"
						width="9"
						height="5"
						viewBox="0 0 9 5"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.980844 0.25H8.01639C8.50311 0.25 8.74647 0.837891 8.40194 1.18242L4.88553 4.70156C4.67225 4.91484 4.32499 4.91484 4.1117 4.70156L0.595297 1.18242C0.250766 0.837891 0.494126 0.25 0.980844 0.25Z" />
					</svg>
				</div>
			</div>
		</header>
	);
}
