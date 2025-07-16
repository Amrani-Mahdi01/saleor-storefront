"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import Image from "next/image";

export const Logo = () => {
	const pathname = usePathname();
	const companyName = "ACME";

	const logo = (
		<Image
			src="/logo.png" // assuming the logo is in public/logo.png
			alt={companyName}
			width={100} // change as needed
			height={20} // change as needed
			className="h-auto w-auto" // or set specific Tailwind styles
		/>
	);

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{logo}
			</h1>
		);
	}

	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel aria-label="homepage" href="/">
				{logo}
			</LinkWithChannel>
		</div>
	);
};
