import type { RequestURLParam } from "deco-sites/std/functions/requestToParam.ts";
import type { FaireResponse } from "$store/components/types.ts";
import { fetchAPI } from "deco-sites/std/utils/fetch.ts";

export interface Props {
  slug: RequestURLParam;
}

async function loader(
  props: Props,
  req: Request,
): Promise<FaireResponse> {
  console.log("🟢🟢🔴🔴 props");
  console.log("🟢🔴🟢🔴 req", req);
  const fetchData = await fetchAPI<FaireResponse>(
    `https://www.faire.com/brand/b_j2trt8jt6d`,
  );
  return {
    ...fetchData,
    props,
    req,
  };
}

export default loader;
