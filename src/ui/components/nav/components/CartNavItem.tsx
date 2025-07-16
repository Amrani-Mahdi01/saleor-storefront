import clsx from "clsx";
import * as Checkout from "@/lib/checkout";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const CartNavItem = async ({ channel }: { channel: string }) => {
	const checkoutId = await Checkout.getIdFromCookies(channel);
	const checkout = checkoutId ? await Checkout.find(checkoutId) : null;

	const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;

	return (
		<LinkWithChannel href="/cart" className="relative flex items-center" data-testid="CartNavItem">
			<svg width="20" height="20" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M22.7824 15.3889H9.55013L9.84556 16.8333H21.9616C22.6568 16.8333 23.1721 17.4789 23.018 18.1568L22.769 19.2526C23.6127 19.6621 24.1944 20.527 24.1944 21.5278C24.1944 22.9362 23.0425 24.0756 21.6295 24.0553C20.2833 24.0359 19.1762 22.9435 19.1398 21.5976C19.12 20.8624 19.4145 20.1961 19.8983 19.7222H10.435C10.9034 20.1811 11.1944 20.8203 11.1944 21.5278C11.1944 22.9638 9.997 24.1201 8.54615 24.0528C7.25788 23.9929 6.21016 22.952 6.14245 21.6641C6.09018 20.6695 6.61352 19.7929 7.40865 19.3356L4.23777 3.83333H1.08333C0.485017 3.83333 0 3.34831 0 2.75V2.02778C0 1.42946 0.485017 0.944443 1.08333 0.944443H5.71138C6.22601 0.944443 6.66959 1.3065 6.77273 1.81066L7.18647 3.83333H24.9162C25.6114 3.83333 26.1267 4.47886 25.9726 5.15676L23.8387 14.5456C23.7267 15.0389 23.2882 15.3889 22.7824 15.3889ZM18.4167 8.52778H16.25V6.72222C16.25 6.32333 15.9267 6 15.5278 6H14.8056C14.4067 6 14.0833 6.32333 14.0833 6.72222V8.52778H11.9167C11.5178 8.52778 11.1944 8.85111 11.1944 9.25V9.97222C11.1944 10.3711 11.5178 10.6944 11.9167 10.6944H14.0833V12.5C14.0833 12.8989 14.4067 13.2222 14.8056 13.2222H15.5278C15.9267 13.2222 16.25 12.8989 16.25 12.5V10.6944H18.4167C18.8156 10.6944 19.1389 10.3711 19.1389 9.97222V9.25C19.1389 8.85111 18.8156 8.52778 18.4167 8.52778Z"
					fill="black"
				/>
			</svg>

			{lineCount > 0 ? (
				<div
					className={clsx(
						"absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white",
						lineCount > 9 ? "w-[3ch]" : "w-[2ch]",
					)}
				>
					{lineCount} <span className="sr-only">item{lineCount > 1 ? "s" : ""} in cart, view bag</span>
				</div>
			) : (
				<span className="sr-only">0 items in cart</span>
			)}
		</LinkWithChannel>
	);
};
