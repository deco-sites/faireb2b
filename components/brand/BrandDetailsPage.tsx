import type { LoaderReturnType } from "$live/types.ts";
import type { FaireBrand } from "$store/components/types.ts";

import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Image from "deco-sites/std/components/Image.tsx";
export interface Props {
  page: LoaderReturnType<FaireBrand | null>;
}

function BrandDetailsPage({ page }: Props) {
  if (!page) {
    return <>Página de marca não encontrada</>;
  }

  return (
    <div class="w-full">
      <div
        class="py-3 px-4 md:px-6 w-full m-auto"
        style={{ maxWidth: "1700px" }}
      >
        <Breadcrumb itemListElement={page.breadcrumbList?.itemListElement} />
      </div>
      <div
        class="container"
        style={{
          maxWidth: "1232px",
        }}
      >
        <div>
          <div class="flex flex-col items-center relative">
            <Image
              class="w-full sm:h-[200px] object-cover"
              src={page.bannerImage}
              sizes="(max-width: 640px) 100vw, 40vw"
              alt="Brand Cover"
              width={412}
              height={120}
              loading="eager"
              fetchPriority="high"
              preload
            />
            <div className="avatar absolute bottom-0 left-2/4 -translate-x-2/4 translate-y-2/4 sm:left-14 sm:translate-x-0">
              <div className="w-24 rounded-full">
                <Image
                  src={page.profileImage.url}
                  alt="Brand Cover"
                  width={96}
                  height={96}
                  loading="eager"
                  fetchPriority="high"
                  preload
                />
              </div>
            </div>
          </div>
          <div class="sm:min-h-16" style={{ minHeight: "3.5rem" }} />
        </div>
        <div class="flex flex-col mx-4 items-stretch sm:flex-row sm:mx-14">
          <div class="flex flex-col">
            <h1 class="font-nantes m-0 p-0 text-primary font-normal text-2xl sm:text-3xl sm:leading-10 text-center sm:text-left mb-2 sm:mb-4" dangerouslySetInnerHTML={{__html: page.profileName }}/>
            <h2 class="text-neutral m-0 p-0 font-extralight text-sm sm:text-lg tracking-[0.15px] text-center sm:text-left">
              {page.profileDescription}
            </h2>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(page)} */}
    </div>
  );
}

export default BrandDetailsPage;
