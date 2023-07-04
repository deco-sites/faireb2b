import type { LoaderReturnType } from "$live/types.ts";
import type { FaireBrand } from "$store/components/types.ts";
import ButtonSignUp from "$store/components/ui/ButtonSignUp.tsx";

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
              <div className="w-24 rounded-full relative">
                <Image
                  src={page.profileImage.url}
                  alt="Brand Cover"
                  width={96}
                  height={96}
                  loading="eager"
                  fetchPriority="high"
                  preload
                  class="bg-primary"
                />
                <div
                  id="TransparencyOverlay"
                  class="w-full h-full absolute left-0 top-0 z-10 pointer-events-none"
                  style={{ background: "rgba(0, 0, 0, 0.02);" }}
                />
              </div>
            </div>
          </div>
          <div class="sm:min-h-16" style={{ minHeight: "3.5rem" }} />
        </div>
        <div class="flex flex-col mx-4 items-stretch sm:flex-row sm:mx-14">
          <div class="flex flex-col items-center">
            <h1
              class="font-nantes m-0 p-0 text-primary font-normal sm:text-3xl sm:leading-10 text-center sm:text-left mb-2 sm:mb-4"
              dangerouslySetInnerHTML={{ __html: page.profileName }}
              style={{ fontSize: "1.375rem" }}
            />
            <h2
              class="text-neutral m-0 p-0 font-extralight text-sm sm:text-lg tracking-[0.15px] text-center sm:text-left"
              dangerouslySetInnerHTML={{ __html: page.profileDescription }}
            />
            <div class="mt-6 mb-8">
              <ButtonSignUp />
            </div>
            <div
              class="sm:w-[228px] my-8"
              style={{
                width: "120px",
                blockSize: "1px",
                borderBlockStart: "1px solid rgb(223, 224, 225);",
                borderBlockEnd: "0x",
                borderInline: "0px",
              }}
            />
          </div>
          <div class="flex">
            {/* AQUI VAI OS PRODUTOS COM O LOADER DE PRODUTOS */}
          </div>
          <div class=" sm:hidden">
            <div class="flex justify-center gap-4 pt-8 pb-6">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <Image
                    src={page.profileImage.url}
                    alt={`${page.name} avatar`}
                    width={64}
                    height={64}
                    class="bg-primary"
                    title={page.name}
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <p class="text-sm text-primary font-extralight tracking-[0.15px]">
                  {page.name}
                </p>
                <p class="text-sm text-neutral font-extralight tracking-[0.15px] mb-1">
                  Based in {page.modalStory.basedInCity}
                </p>
                {/* MOCKADO */}
                <p class="text-sm text-neutral font-extralight tracking-[0.15px]">
                  🟊🟊🟊🟊🟊 5.0
                </p>
              </div>
            </div>
            <div>
              <p
                class="text-sm text-neutral font-extralight tracking-[0.15px] line-clamp-3 text-center sm:text-left"
                style={{ overflowWrap: "anywhere" }}
              >
                {page.modalStory.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {JSON.stringify(page)} */}
    </div>
  );
}

export default BrandDetailsPage;
