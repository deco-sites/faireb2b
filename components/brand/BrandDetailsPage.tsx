import type { LoaderReturnType } from "$live/types.ts";
import type { FaireBrand } from "$store/components/types.ts";

export interface Props {
  page: LoaderReturnType<FaireBrand | null>;
}

function BrandDetailsPage({ page }: Props) {
  return (
    <>
      {JSON.stringify(page)}
    </>
  );
}

export default BrandDetailsPage;
