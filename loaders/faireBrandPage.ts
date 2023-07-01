import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import type { FaireResponse } from "$store/components/types.ts";
import { fetchAPI } from "deco-sites/std/utils/fetch.ts";

export interface Props {
  slug: RequestURLParam;
}

async function loader(
  props: Props,
): Promise<FaireResponse | null> {
  const { slug } = props;

  if(!slug) return null

  const fetchData = await fetchAPI<FaireResponse>(
    `https://www.faire.com/brand/${slug}`,
  );
  return {
    ...fetchData,
    props,
  };
}

export default loader;
