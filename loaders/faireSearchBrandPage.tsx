import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { FaireBrand, FaireResponse } from "$store/components/types.ts";
import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import client from "$store/commerce/client.ts";
import { toProduct } from "$store/commerce/transform.ts";

export interface Props {
  slug: RequestURLParam;
  /** @description total number of items to display */
  items: number;
}

/**
 * @title Faire - Search Brand Page
 */
async function loader(
  props: Props,
  req: Request,
): Promise<ProductListingPage | null> {
  const { slug, items } = props;
  if (!slug) return null;

  const rawProducts = await client.searchProducts(slug, items);
  const products = rawProducts?.product_tiles?.slice(0, items).map(toProduct) ??
    [];

  return {
    "@type": "ProductListingPage",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [],
      numberOfItems: 0,
    },
    filters: [],
    products,
    // TODO: Pagination
    pageInfo: {
      nextPage: undefined,
      previousPage: undefined,
      currentPage: 1,
      records: rawProducts.pagination_data.total_results,
    },
    sortOptions: [],
  };
}

export default loader;
