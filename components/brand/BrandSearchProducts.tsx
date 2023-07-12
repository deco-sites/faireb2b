import ProductGallery from "../product/ProductGallery.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";

interface Props {
  page: ProductListingPage | null;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-10">
      <span>Not Found!</span>
    </div>
  );
}

function Result({
  page,
}: Omit<Props, "page"> & { page: ProductListingPage }) {
  const { products, pageInfo } = page;

  return (
    <>
      <div class="container px-4 sm:py-10 sm:px-0">
        <div class="flex flex-row">
          <div class="flex-grow">
            <ProductGallery products={products} pageInfo={pageInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

function BrandSearchProducts({ page }: Props) {
  if (!page) {
    return <NotFound />;
  }

  return <Result page={page} />;
}

export default BrandSearchProducts;
