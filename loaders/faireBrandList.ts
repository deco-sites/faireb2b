import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

/** @title {{{name}}} */
export interface Brand {
  name: string;
  href: string;
  image: LiveImage;
}

export interface Props {
  brands: Array<Brand>;
}

const mapToFakeProduct = (
  { name, image, href }: Brand,
): ProductListingPage["products"][number] => ({
  "@type": "Product",
  name,
  url: href,
  productID: name,
  sku: name,
  image: [{
    "@type": "ImageObject",
    alternateName: name,
    url: image,
  }],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    highPrice: 100,
    lowPrice: 100,
    offerCount: 1,
    offers: [{
      "@type": "Offer",
      price: 100,
      seller: "1",
      inventoryLevel: {
        value: 1000,
      },
      priceSpecification: [{
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/ListPrice",
        price: 100,
      }],
      availability: "https://schema.org/InStock",
    }],
  },
});

/**
 * @title Faire - Custom Brands
 */
const loader = (
  props: Props,
): Promise<ProductListingPage | null> => {
  const products: ProductListingPage["products"] = props.brands?.map(
    mapToFakeProduct,
  );

  return Promise.resolve({
    "@type": "ProductListingPage",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [],
      numberOfItems: 0,
    },
    filters: [],
    products,
    pageInfo: {
      nextPage: "1",
      previousPage: "2",
      currentPage: 1,
      records: 1,
      recordPerPage: 1,
    },
    sortOptions: [],
    seo: null,
  });
};

export default loader;
