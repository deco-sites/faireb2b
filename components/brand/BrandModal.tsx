import Modal from "$store/components/ui/Modal.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { lazy, Suspense } from "preact/compat";
import type { FaireBrand } from "$store/components/types.ts";

const BrandModalStory = lazy(
  () => import("$store/components/brand/BrandModalStory.tsx"),
);
interface Props {
  modalStory: FaireBrand["modalStory"];
  name: string;
}

export default function BrandModal({ modalStory, name }: Props) {
  const { displayModalBrand } = useUI();

  const fallback = (
    <div class="flex justify-center items-center w-full h-full">
      <span class="loading loading-ring" />
    </div>
  );

  return (
    <Modal
      title="Minha sacola"
      mode="center"
      loading="lazy"
      open={displayModalBrand.value}
      onClose={() => {
        displayModalBrand.value = false;
      }}
      wrapperClass="pt-6 pr-10 pl-6 sm:pb-6 sm:max-h-[600px] sm:w-[calc(100vw-72px)]  max-w-[830px] sm:bg-primary-content"
      hideHeader
      showButtonClose
    >
      <Suspense fallback={fallback}>
        <BrandModalStory {...{ modalStory, name }} />
      </Suspense>
    </Modal>
  );
}
