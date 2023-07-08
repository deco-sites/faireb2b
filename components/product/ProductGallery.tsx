import { Product } from "deco-sites/std/commerce/types.ts";

import ProductCard from "./ProductCard.tsx";

export interface Columns {
  mobile?: number;
  desktop?: number;
}

export interface Props {
  products: Product[] | null;
}

function ProductGallery({ products }: Props) {
  const layoutOptions = {
    basics: {
      contentAlignment: "Left" as const,
    },
    elementsPositions: {
      skuSelector: "Top" as const,
      favoriteIcon: "Top right" as const,
    },
    hide: {
      productDescription: true,
      installments: true,
      skuSelector: true,
      cta: true,
      showFavoriteIcon: true,
      imageBack: true,
      oldPrice: true,
    },
    onMouseOver: {
      card: "None" as const,
      showFavoriteIcon: false,
      showSkuSelector: false,
      showCardShadow: false,
      showCta: false,
    },
  };

  return (
    <div class="grid grid-cols-2 gap-x-2 gap-y-4 items-center sm:grid-cols-3 lg:grid-cols-4">
      {products?.map((product, index) => (
        <ProductCard
          product={product}
          preload={index === 0}
          layout={layoutOptions}
        />
      ))}
    </div>
  );
}

export default ProductGallery;
