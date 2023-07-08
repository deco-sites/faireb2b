import Filters from "$store/components/search/Filters.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SearchControls from "$store/islands/SearchControls.tsx";
import { SendEventOnLoad } from "$store/sdk/analytics.tsx";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
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
  const { products, filters, breadcrumb, pageInfo, sortOptions } = page;

  return (
    <>
      <div class="container px-4 sm:py-10">
        <div class="flex flex-row">
          <div class="flex-grow">
            <ProductGallery products={products} />
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
