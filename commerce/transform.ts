import type {
  Product,
  PropertyValue,
  UnitPriceSpecification,
} from "deco-sites/std/commerce/types.ts";
import type {
  Badge,
  FaireSearchResultBrandV2,
} from "$store/components/types.ts";

const toAdditionalProperty = (badges: Badge[]): PropertyValue[] => {
  if (!badges.length) return [];

  const sortedBadges = badges.sort((a, b) => a.priority - b.priority);

  const returnData: PropertyValue[] = sortedBadges.reduce(
    (acc: PropertyValue[], currentBadge: Badge) => {
      if (currentBadge.display_to_user) {
        const propertyValue: PropertyValue = {
          "@type": "PropertyValue",
          name: "badges",
          value: `${currentBadge?.style?.badge_message}`,
          propertyID: currentBadge?.style?.badge_message_key,
        };
        acc.push(propertyValue);
      }
      return acc;
    },
    [],
  );

  return returnData;
};

export const toProduct = (
  productTile: FaireSearchResultBrandV2["product_tiles"][number],
): Product => {
  const product = productTile.product;
  const bestImage = productTile.best_image;
  const minOptionRetailPrice = productTile.min_option_retail_price;
  const additionalProperty = toAdditionalProperty(
    productTile.badge_list?.badges,
  );

  const priceSpec: UnitPriceSpecification[] = [{
    "@type": "UnitPriceSpecification",
    priceType: "https://schema.org/SalePrice",
    price: Number(minOptionRetailPrice.amount_cents / 100),
  }];
  const url =
    `https://www.faire.com/search?brand=${product.brand_token}&product=${product.token}&q=from+deco&signUp=product`;

  const price = minOptionRetailPrice.amount_cents / 100;

  return {
    "@type": "Product",
    productID: product.token,
    "name": product.name,
    "brand": product.brand_token,
    "description": product.description,
    "sku": product.taxonomy_type.token,
    "category": product.taxonomy_type.name,
    url,
    isVariantOf: {
      "@type": "ProductGroup",
      productGroupID: product.token,
      hasVariant: [],
      url,
      name: product.name,
      additionalProperty: [...additionalProperty],
    },
    image: [{
      "@type": "ImageObject",
      alternateName: product.name,
      url: bestImage.url,
    }],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      highPrice: price,
      lowPrice: Number(price),
      offerCount: 1,
      offers: [{
        "@type": "Offer",
        price: Number(price),
        availability: product.state === "FOR_SALE"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        inventoryLevel: { value: 1000 },
        priceSpecification: priceSpec,
      }],
    },
  };
};
