import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import ConoceSection from "@/ui/components/ConoceSection";
import DestacadosSection from "@/ui/components/DestacadosSection";

import HeroSection from "@/ui/components/HeroSection";
import PromocionesSection from "@/ui/components/PromocionesSection";
import ShakesSection from "@/ui/components/ShakesSection";
import ZoatesSection from "@/ui/components/ZoatesSection";


export const metadata = {
	title: "ACME Storefront, powered by Saleor & Next.js",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page(props: { params: Promise<{ channel: string }> }) {
	const params = await props.params;
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) {
		return null;
	}

	// const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<section className="">
			<h2 className="sr-only">Product list</h2>
			{/* <ProductList products={products} /> */}
            <HeroSection />
			<PromocionesSection />
			<ConoceSection />
			<ShakesSection />
			<DestacadosSection />
			<ZoatesSection />
		

		</section>
	);
}
