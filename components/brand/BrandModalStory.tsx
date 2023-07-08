import type { FaireBrand } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props {
  modalStory: FaireBrand["modalStory"];
  name: string;
}

function BrandModalStory({ modalStory, name }: Props) {
  return (
    <div class="sm:!pt-0" style={{ paddingTop: "10px" }}>
      <div class="flex flex-col justify-center sm:flex-row-reverse sm:gap-10">
        <div class="mb-8 sm:mb-0 w-full">
          <h3
            class="font-nantes m-0 p-0 text-primary font-normal text-left mb-8"
            style={{ fontSize: "2.375rem", lineHeight: "50px" }}
          >
            About
            <br />
            {name}
          </h3>
          <div class="bg-primary" style={{ width: "42px", height: "1px" }} />
          <p class="mt-8 px-2 sm:px-0 sm:pr-5 text-sm text-primary font-extralight tracking-[0.15px] break-words whitespace-pre-line">
            <q>{modalStory.description}</q>
          </p>
        </div>
        <div class="p-5 flex flex-col items-center bg-primary-content max-w-[330px] gap-9 sm:bg-white flex-grow basis-[275px] flex-shrink-0">
          <div className="avatar">
            <div className="w-24 rounded-full relative">
              <Image
                src={modalStory.storyImage}
                alt="Avatar"
                width={96}
                height={96}
                class="bg-primary"
              />
              <div
                id="TransparencyOverlay"
                class="w-full h-full absolute left-0 top-0 z-10 pointer-events-none"
                style={{ background: "rgba(0, 0, 0, 0.02);" }}
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center mb-2">
              Based In
            </p>
            <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
              {modalStory.basedIn}
            </p>
          </div>
          <div class="flex flex-col">
            <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center mb-2">
              Instagram
            </p>
            <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
              <a
                href={`https://instagram.com/${modalStory.account}`}
                target="_blank"
                rel="noreferrer"
              >
                @{modalStory.account}
              </a>
            </p>
          </div>
          <div class="flex flex-col">
            <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center mb-2">
              Established
            </p>
            <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
              {modalStory.established}
            </p>
          </div>
          <div class="flex flex-col">
            <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center mb-2">
              Brand Tags
            </p>
            <p class="flex flex-wrap gap-2 justify-center">
              {modalStory.brandTags.length !== 0
                ? modalStory.brandTags.map(({ tag }) => (
                  <div
                    class="px-1 text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center m-0 border border-primary-content bg-primary-content rounded whitespace-nowrap flex items-center justify-center w-fit"
                    style={{ minWidth: "20px", minHeight: "22px" }}
                  >
                    {tag}
                  </div>
                ))
                : `-`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandModalStory;
