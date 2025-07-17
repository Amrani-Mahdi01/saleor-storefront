// app/layout.tsx or wherever your RootLayout is defined
import { Josefin_Sans, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

// Importing fonts with custom CSS variables
const josefin = Josefin_Sans({
	subsets: ["latin"],
	variable: "--font-josefin",
	display: "swap",
});

const robotoCondensed = Roboto_Condensed({
	subsets: ["latin"],
	variable: "--font-roboto-condensed",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${josefin.variable} ${robotoCondensed.variable} min-h-dvh`}>
			<body className="min-h-dvh font-sans">
				{children}
				<Suspense>
					<DraftModeNotification />
				</Suspense>
			</body>
		</html>
	);
}
