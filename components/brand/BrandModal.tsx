import Modal from "$store/components/ui/Modal.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import type { FaireBrand } from "$store/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface Props {
  modalStory: FaireBrand["modalStory"];
  name: string;
}

export default function BrandModal({ modalStory, name }: Props) {
  const { displayModalBrand } = useUI();
  return (
    <>
      <button
        class="text-black font-extralight text-sm tracking-[0.15px] cursor-pointer inline-flex w-auto relative bg-transparent underline"
        aria-label="open modal story"
        onClick={() => {
          displayModalBrand.value = true;
        }}
      >
        Read Their Story
      </button>
      <Modal
        title="Minha sacola"
        mode="center"
        loading="lazy"
        open={displayModalBrand.value}
        onClose={() => {
          displayModalBrand.value = false;
        }}
        wrapperClass="w-full h-full pt-6 pr-10 pl-6 sm:pb-6"
        hideHeader
      >
        <div class="w-full h-full max-h-full" style={{ paddingTop: "10px" }}>
          <div class="flex flex-col">
            <div class="mb-8">
              <h3
                class="font-nantes m-0 p-0 text-primary font-normal text-left mb-8"
                style={{ fontSize: "2.375rem", lineHeight: "50px" }}
              >
                About
                <br />
                {name}
              </h3>
              <div
                class="bg-primary"
                style={{ width: "42px", height: "1px" }}
              />
              <p class="mt-8 px-2 sm:px-0 sm:pr-5 text-sm text-primary font-extralight tracking-[0.15px] break-words whitespace-pre-line">
                "{modalStory.description}"
              </p>
            </div>
            <div class="p-5 flex flex-col justify-center items-center bg-primary-content max-w-[330px] gap-9">
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
                <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center">
                  Based In
                </p>
                <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
                  {modalStory.basedIn}
                </p>
              </div>
              <div class="flex flex-col">
                <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center">
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
                <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center">
                  Established
                </p>
                <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
                  {modalStory.established}
                </p>
              </div>
              <div class="flex flex-col">
                <p class="text-sm text-primary font-medium tracking-[0.15px] lining-nums tabular-nums text-center">
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
      </Modal>
    </>
  );
}
