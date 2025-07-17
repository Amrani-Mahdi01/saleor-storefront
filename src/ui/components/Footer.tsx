import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-[#F4F4F4]">
			{" "}
			<div className="mx-auto  px-2 py-20 2xl:container ">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-2 ">
					<div className="font-roboto col-span-1 lg:col-span-4   ">
						<div className="relative h-[80px] w-[80px] ">
							<Image src="/logo.png" alt="logo" fill className=" object-cover" />
						</div>
						<h1 className="text-xl font-semibold ">ZOOMAD LABS®</h1>
						<p className=" text-[#383838] ">
							En <span className="font-semibold">Zoomadlabs®</span>, creemos que cada persona tiene el <br />{" "}
							potencial de ser una bestia con estilo propio. Te invitamos <br /> a unirte a nuestra manada y
							descubrir la diferencia que la <br /> nutrición de alta calidad puede hacer en tu rendimiento{" "}
							<br /> deportivo. Porque en <span className="font-semibold">Zoomadlabs®</span> , no solo
							alimentamos tu <br /> cuerpo, también alimentamos tu espíritu.
						</p>

						<div className="flex items-center gap-2 ps-3 pt-2  ">
							<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M11.375 0.370117H2.625C1.58984 0.370117 0.75 1.20996 0.75 2.24512V18.4951C0.75 19.5303 1.58984 20.3701 2.625 20.3701H11.375C12.4102 20.3701 13.25 19.5303 13.25 18.4951V2.24512C13.25 1.20996 12.4102 0.370117 11.375 0.370117ZM7 19.1201C6.30859 19.1201 5.75 18.5615 5.75 17.8701C5.75 17.1787 6.30859 16.6201 7 16.6201C7.69141 16.6201 8.25 17.1787 8.25 17.8701C8.25 18.5615 7.69141 19.1201 7 19.1201ZM11.375 14.9014C11.375 15.1592 11.1641 15.3701 10.9062 15.3701H3.09375C2.83594 15.3701 2.625 15.1592 2.625 14.9014V2.71387C2.625 2.45605 2.83594 2.24512 3.09375 2.24512H10.9062C11.1641 2.24512 11.375 2.45605 11.375 2.71387V14.9014Z"
									fill="#B92727"
								/>
							</svg>
							<h6 className="text-sm text-[#383838]">+34 910409598</h6>
						</div>

						<div className="flex items-center gap-2 ps-2 pt-2  ">
							<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18.125 0.870117H1.875C0.839453 0.870117 0 1.70957 0 2.74512V13.9951C0 15.0307 0.839453 15.8701 1.875 15.8701H18.125C19.1605 15.8701 20 15.0307 20 13.9951V2.74512C20 1.70957 19.1605 0.870117 18.125 0.870117ZM18.125 2.74512V4.33906C17.2491 5.0523 15.8528 6.16137 12.8677 8.49883C12.2098 9.01629 10.9067 10.2595 10 10.245C9.09344 10.2596 7.78988 9.01609 7.13231 8.49883C4.14766 6.16172 2.75098 5.05242 1.875 4.33906V2.74512H18.125ZM1.875 13.9951V6.74504C2.77008 7.45797 4.03941 8.4584 5.97414 9.9734C6.82793 10.6455 8.32312 12.1291 10 12.1201C11.6686 12.1291 13.1449 10.667 14.0255 9.97371C15.9602 8.45875 17.2299 7.45805 18.125 6.74508V13.9951H1.875Z"
									fill="#B92727"
								/>
							</svg>

							<h6 className="text-sm text-[#383838]">info@zoomadlabs.com</h6>
						</div>
					</div>

					<div className="font-roboto col-span-1 lg:col-span-2  p-2  ">
						<h1 className="text-lg font-semibold text-black ">ENLACES</h1>
						<div className="1 mt-5 flex flex-col gap-3">
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								PRE-ENTRENOS
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								PROTEINAS
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								AMINOÁCIDOS
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								PUROS
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								AVENA / GAINERS
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								CAPS
							</Link>

							<Link className=" text-sm text-[#54595F] " href={"/"}>
								ALL IN
							</Link>

							<Link className=" text-sm text-[#54595F] " href={"/"}>
								APPAREL / MERCH
							</Link>

							<Link className=" text-sm text-[#54595F] " href={"/"}>
								CONTACTO
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								CATÁLOGO DE PRODUCTOS
							</Link>
						</div>
					</div>

					<div className="font-roboto col-span-1 lg:col-span-2  p-2  ">
						<h1 className="text-lg font-semibold text-black ">MARCAS</h1>
						<div className="1 mt-5 flex flex-col gap-3">
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								MOONSTRUCK® II
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								CARETAKER II®
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								ONERAW®
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								WILDBEAST®
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								WISEKING®
							</Link>
							<Link className=" text-sm text-[#54595F] " href={"/"}>
								ZOOMASS®
							</Link>

							<Link className=" text-sm text-[#54595F] " href={"/"}>
								ZOOMADBOT®
							</Link>
						</div>
					</div>

					<form className="font-roboto col-span-1  lg:col-span-4 p-2  ">
						<h1 className="text-lg font-semibold text-black ">MARCAS</h1>
						<p className="mt-5  text-[#54595F]">
							SUSCRÍBETE a la newsletter de ZoomadLabs® para recibir <br /> directamente en tu bandeja de
							entrada todas las novedades y <br /> promociones de nuestra tienda.
						</p>

						<input
							className="mt-5 w-full border-[2px] border-[#69727D] bg-white  px-3 py-2 text-[#69727D] "
							placeholder="TU NOMBRE"
							type="text"
							name=""
							id=""
							required
						/>
						<input
							className="mt-2 w-full border-[2px] border-[#69727D] bg-white  px-3 py-2 text-[#69727D] "
							placeholder="TU EMAIL"
							type="email"
							name=""
							id=""
							required
						/>

						<div className="mt-5 flex items-center gap-2 text-sm uppercase ">
							<input required type="checkbox" className="h-[15px]  w-[15px] " name="" id="email" />
							<label htmlFor="email" className="text-[#7A7A7A] ">
								Acepto los {" "}
								<Link className="text-[#59A6FF] " href={"/"}>
									términos y condiciones
								</Link>
							</label>
						</div>

						<div className="mt-2 flex justify-end">
							<button className="bg-[#B92727] px-4 py-2  uppercase text-white " type="submit">
								Suscribirse
							</button>
						</div>

						<div className="flex items-center mt-5 gap-5">
							<Link href={"/"} className="flex hover:bg-[#B92727] items-center justify-center rounded-3xl bg-white p-2">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.0039 5.8877C7.51953 5.8877 5.51562 7.8916 5.51562 10.376C5.51562 12.8604 7.51953 14.8643 10.0039 14.8643C12.4883 14.8643 14.4922 12.8604 14.4922 10.376C14.4922 7.8916 12.4883 5.8877 10.0039 5.8877ZM10.0039 13.2939C8.39844 13.2939 7.08594 11.9854 7.08594 10.376C7.08594 8.7666 8.39453 7.45801 10.0039 7.45801C11.6133 7.45801 12.9219 8.7666 12.9219 10.376C12.9219 11.9854 11.6094 13.2939 10.0039 13.2939ZM15.7227 5.7041C15.7227 6.28613 15.2539 6.75098 14.6758 6.75098C14.0938 6.75098 13.6289 6.28223 13.6289 5.7041C13.6289 5.12598 14.0977 4.65723 14.6758 4.65723C15.2539 4.65723 15.7227 5.12598 15.7227 5.7041ZM18.6953 6.7666C18.6289 5.36426 18.3086 4.12207 17.2812 3.09863C16.2578 2.0752 15.0156 1.75488 13.6133 1.68457C12.168 1.60254 7.83594 1.60254 6.39062 1.68457C4.99219 1.75098 3.75 2.07129 2.72266 3.09473C1.69531 4.11816 1.37891 5.36035 1.30859 6.7627C1.22656 8.20801 1.22656 12.54 1.30859 13.9854C1.375 15.3877 1.69531 16.6299 2.72266 17.6533C3.75 18.6768 4.98828 18.9971 6.39062 19.0674C7.83594 19.1494 12.168 19.1494 13.6133 19.0674C15.0156 19.001 16.2578 18.6807 17.2812 17.6533C18.3047 16.6299 18.625 15.3877 18.6953 13.9854C18.7773 12.54 18.7773 8.21191 18.6953 6.7666ZM16.8281 15.5361C16.5234 16.3018 15.9336 16.8916 15.1641 17.2002C14.0117 17.6572 11.2773 17.5518 10.0039 17.5518C8.73047 17.5518 5.99219 17.6533 4.84375 17.2002C4.07812 16.8955 3.48828 16.3057 3.17969 15.5361C2.72266 14.3838 2.82813 11.6494 2.82813 10.376C2.82813 9.10254 2.72656 6.36426 3.17969 5.21582C3.48438 4.4502 4.07422 3.86035 4.84375 3.55176C5.99609 3.09473 8.73047 3.2002 10.0039 3.2002C11.2773 3.2002 14.0156 3.09863 15.1641 3.55176C15.9297 3.85645 16.5195 4.44629 16.8281 5.21582C17.2852 6.36816 17.1797 9.10254 17.1797 10.376C17.1797 11.6494 17.2852 14.3877 16.8281 15.5361Z"
										fill="black"
									/>
								</svg>
							</Link>

							<Link href={"/"} className="flex hover:bg-[#B92727] items-center justify-center rounded-3xl bg-white p-2">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.6875 10.3799C19.6875 5.02832 15.3516 0.692383 10 0.692383C4.64844 0.692383 0.3125 5.02832 0.3125 10.3799C0.3125 15.215 3.85508 19.2229 8.48633 19.9502V13.1803H6.02539V10.3799H8.48633V8.24551C8.48633 5.81777 9.93164 4.47676 12.1453 4.47676C13.2055 4.47676 14.3141 4.66582 14.3141 4.66582V7.04863H13.0922C11.8891 7.04863 11.5137 7.79551 11.5137 8.56152V10.3799H14.2004L13.7707 13.1803H11.5137V19.9502C16.1449 19.2229 19.6875 15.215 19.6875 10.3799Z"
										fill="black"
									/>
								</svg>
							</Link>
							<Link href={"/"} className="flex hover:bg-[#B92727] items-center justify-center rounded-3xl bg-white p-2">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.0852 5.79959C18.8671 4.97841 18.2246 4.33168 17.4087 4.1122C15.9299 3.71338 9.99999 3.71338 9.99999 3.71338C9.99999 3.71338 4.07013 3.71338 2.59127 4.1122C1.7754 4.33171 1.13283 4.97841 0.914744 5.79959C0.518494 7.28803 0.518494 10.3935 0.518494 10.3935C0.518494 10.3935 0.518494 13.499 0.914744 14.9874C1.13283 15.8086 1.7754 16.4284 2.59127 16.6479C4.07013 17.0467 9.99999 17.0467 9.99999 17.0467C9.99999 17.0467 15.9298 17.0467 17.4087 16.6479C18.2246 16.4284 18.8671 15.8086 19.0852 14.9874C19.4815 13.499 19.4815 10.3935 19.4815 10.3935C19.4815 10.3935 19.4815 7.28803 19.0852 5.79959ZM8.06058 13.2131V7.57397L13.0168 10.3936L8.06058 13.2131Z"
										fill="black"
									/>
								</svg>
							</Link>

							<Link href={"/"} className="flex hover:bg-[#B92727] items-center justify-center rounded-3xl bg-white p-2">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.2031 2.25488H17.9609L11.9375 9.1377L19.0234 18.5049H13.4766L9.12891 12.8252L4.16016 18.5049H1.39844L7.83984 11.1416L1.04688 2.25488H6.73437L10.6602 7.44629L15.2031 2.25488ZM14.2344 16.8564H15.7617L5.90234 3.81738H4.26172L14.2344 16.8564Z"
										fill="black"
									/>
								</svg>
							</Link>

							<Link href={"/"} className="flex hover:bg-[#B92727]  items-center justify-center rounded-3xl bg-white p-2">
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.75 8.57949C17.0303 8.58361 15.3527 8.04728 13.9543 7.04629V14.0275C13.9538 15.3205 13.5586 16.5826 12.8215 17.6449C12.0844 18.7072 11.0406 19.5192 9.82952 19.9723C8.61848 20.4253 7.298 20.4979 6.04463 20.1802C4.79126 19.8625 3.66475 19.1698 2.81572 18.1945C1.9667 17.2193 1.43563 16.0082 1.29353 14.723C1.15143 13.4378 1.40508 12.1399 2.02055 11.0028C2.63602 9.86567 3.58398 8.94354 4.73767 8.35972C5.89136 7.77589 7.1958 7.5582 8.47656 7.73574V11.2471C7.89048 11.0627 7.26114 11.0683 6.67841 11.2629C6.09567 11.4576 5.58935 11.8314 5.23175 12.331C4.87414 12.8306 4.68353 13.4304 4.68715 14.0448C4.69077 14.6591 4.88843 15.2567 5.25189 15.752C5.61536 16.2473 6.12605 16.6152 6.71104 16.803C7.29602 16.9907 7.92538 16.9889 8.50925 16.7976C9.09311 16.6064 9.60162 16.2356 9.96215 15.7381C10.3227 15.2406 10.5168 14.6419 10.5168 14.0275V0.379883H13.9543C13.9519 0.670172 13.9762 0.960065 14.0269 1.2459C14.1464 1.88398 14.3948 2.49098 14.7568 3.02978C15.1189 3.56858 15.5871 4.02785 16.1328 4.37949C16.9091 4.89281 17.8193 5.16641 18.75 5.16621V8.57949Z"
										fill="black"
									/>
								</svg>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
