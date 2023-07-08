import { fetchAPI } from "deco-sites/std/utils/fetch.ts";
import type { FaireSearchResultBrandV2 } from "$store/components/types.ts";

export default {
  searchProducts: async (queryBrand: string, pageSize: number) => {
    const headers = new Headers();
    headers.set("content-type", "application/json");
    // headers.set("Origin", "https://www.faire.com/");
    // headers.set("user-agent", "deco.cx");

    // TODO: Create Account and use it
    const result = (await fetchAPI(
      `https://www.faire.com/api/v2/products/search/brand/${queryBrand}/featured-lean-product-tiles?pageSize=${pageSize}&locale=en`,
    ).catch(console.log)) as FaireSearchResultBrandV2;

    return result;
  },
};
