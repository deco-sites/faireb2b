import { useUI } from "$store/sdk/useUI.ts";

export default function OpenModalButton() {
  const { displayModalBrand } = useUI();

  return (
    <button
      class="text-black font-extralight text-sm tracking-[0.15px] cursor-pointer inline-flex w-auto relative bg-transparent underline"
      aria-label="open modal story"
      onClick={() => {
        displayModalBrand.value = true;
      }}
    >
      Read Their Story
    </button>
  );
}
