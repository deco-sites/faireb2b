import Image from "deco-sites/std/components/Image.tsx";

interface Props {
  img: string;
  totalProducts: number;
}

const WIDTH = 186;
const HEIGHT = 186;

export default function PlaceholderMoreProducts({ img, totalProducts }: Props) {
  return (
    <div class="pointer h-fit">
      <picture
        width="100%"
        class="flex relative h-0 w-full"
        style={{ paddingTop: "calc(100% - 0px)" }}
      >
        <Image
          src={img}
          alt="More products"
          width={WIDTH}
          height={HEIGHT}
          class={`
              absolute w-full h-full top-0 left-0 object-cover object-center
              `}
          sizes="(max-width: 640px) 50vw, 20vw"
          decoding="async"
        />
        <div
          id="TransparencyOverlay"
          class="w-full h-full absolute left-0 top-0 z-10 p-2 flex flex-col"
          style={{ background: "rgba(51, 51, 51, 0.5)" }}
        >
          {/* MOCKADO */}
          <h5
            class="text-primary font-normal tracking-[0.15px] lining-nums tabular-nums text-center"
            style={{ fontSize: "1.375rem" }}
          >
            +13
          </h5>
        </div>
      </picture>
    </div>
  );
}
