import { Product, ProductListingPage } from "deco-sites/std/commerce/types.ts";
import ProductCard from "./ProductCard.tsx";
import PlaceholderMoreProducts from "./PlaceholderMoreProducts.tsx";

export interface Columns {
  mobile?: number;
  desktop?: number;
}

export interface Props {
  products: Product[] | null;
  pageInfo?: ProductListingPage["pageInfo"];
}

function ProductGallery({ products, pageInfo }: Props) {
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

  const lastProduct = products?.at(-1);
  // const remainingProducts = pageInfo?.records 0 - products?.length 0

  return (
    <div class="grid grid-cols-2 gap-x-2 gap-y-4 items-center sm:grid-cols-3 lg:grid-cols-4">
      {products?.map((product, index) => {
        // if(product.productID === lastProduct?.productID && pageInfo?.records){
        //   return <PlaceholderMoreProducts totalProducts={pageInfo?.records} img={lastProduct?.image?.[0]?.url ?? ""} />
        // }
        return (
          <ProductCard
            product={product}
            preload={index === 0}
            layout={layoutOptions}
          />
        );
      })}
    </div>
  );
}

export default ProductGallery;
