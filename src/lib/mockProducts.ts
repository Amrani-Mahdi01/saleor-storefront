export type MockProduct = {
  id: string;
  name: string;
  slug: string;
  thumbnail: {
    url: string;
    alt: string;
  };
  pricing: {
    priceRange: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
      };
      stop: {
        gross: {
          amount: number;
          currency: string;
        };
      };
    };
  };
};

export const mockProducts: MockProduct[] = [
  {
    id: "1",
    name: "Mock Product One",
    slug: "mock-product-one",
    thumbnail: {
      url: "/images/product1.jpg",
      alt: "Product One Image",
    },
    pricing: {
      priceRange: {
        start: { gross: { amount: 19.99, currency: "USD" } },
        stop: { gross: { amount: 19.99, currency: "USD" } },
      },
    },
  },
  {
    id: "2",
    name: "Mock Product Two",
    slug: "mock-product-two",
    thumbnail: {
      url: "/images/product2.jpg",
      alt: "Product Two Image",
    },
    pricing: {
      priceRange: {
        start: { gross: { amount: 39.99, currency: "USD" } },
        stop: { gross: { amount: 39.99, currency: "USD" } },
      },
    },
  },
];
