import type { LoaderReturnType } from "$live/types.ts";
import type { FaireResponse } from "$store/components/types.ts";

export interface Props {
  page: LoaderReturnType<FaireResponse>;
}

function BrandDetailsPage({ page }: Props) {
  return (
    <>
      {JSON.stringify(page)}
    </>
  );
}

export default BrandDetailsPage;
