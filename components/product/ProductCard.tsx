import Image from "deco-sites/std/components/Image.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import WishlistIcon from "$store/islands/WishlistButton.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import { mapProductToAnalyticsItem } from "deco-sites/std/commerce/utils/productToAnalyticsItem.ts";
import { SendEventOnClick } from "$store/sdk/analytics.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;

  /** @description used for analytics event */
  itemListName?: string;
  layout?: {
    basics?: {
      contentAlignment?: "Left" | "Center";
      oldPriceSize?: "Small" | "Normal";
      ctaText?: string;
    };
    elementsPositions?: {
      skuSelector?: "Top" | "Bottom";
      favoriteIcon?: "Top right" | "Top left";
    };
    hide: {
      productName?: boolean;
      productDescription?: boolean;
      allPrices?: boolean;
      oldPrice?: boolean;
      installments?: boolean;
      skuSelector?: boolean;
      cta?: boolean;
      showFavoriteIcon?: boolean;
      imageBack?: boolean;
    };
    onMouseOver?: {
      image?: "Change image" | "Zoom image";
      card?: "None" | "Move up";
      showFavoriteIcon?: boolean;
      showSkuSelector?: boolean;
      showCardShadow?: boolean;
      showCta?: boolean;
    };
  };
}

const relative = (url: string) => {
  const link = new URL(url);
  return `${link.pathname}${link.search}`;
};

const WIDTH = 186;
const HEIGHT = 186;

function ProductCard({ product, preload, itemListName, layout }: Props) {
  const { url, productID, name, image: images, offers, isVariantOf } = product;
  const id = `product-card-${productID}`;
  const productGroupID = isVariantOf?.productGroupID;
  const [front, back] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);
  const possibilities = useVariantPossibilities(product);
  const variants = Object.entries(Object.values(possibilities)[0] ?? {});

  const l = layout;
  const align =
    !l?.basics?.contentAlignment || l?.basics?.contentAlignment == "Left"
      ? "left"
      : "center";
  const skuSelector = variants.map(([value, [link]]) => (
    <li>
      <a href={link}>
        <Avatar variant={link === url ? "active" : "default"} content={value} />
      </a>
    </li>
  ));
  const cta = (
    <a
      href={url && relative(url)}
      aria-label="view product"
      class="btn btn-block"
    >
      {l?.basics?.ctaText || "Ver produto"}
    </a>
  );

  return (
    <div
      id={id}
      class={`card card-compact group w-full ${
        align === "center" ? "text-center" : "text-start"
      } ${l?.onMouseOver?.showCardShadow ? "lg:hover:card-bordered" : ""}
        ${
        l?.onMouseOver?.card === "Move up" &&
        "duration-500 transition-translate ease-in-out lg:hover:-translate-y-2"
      }
      `}
      data-deco="view-product"
    >
      <SendEventOnClick
        id={id}
        event={{
          name: "select_item" as const,
          params: {
            item_list_name: itemListName,
            items: [
              mapProductToAnalyticsItem({
                product,
                price,
                listPrice,
              }),
            ],
          },
        }}
      />
      <figure
        class="relative overflow-hidden"
        style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        {/* Wishlist button */}
        <div
          class={`absolute top-2 z-10
          ${
            l?.elementsPositions?.favoriteIcon === "Top left"
              ? "left-2"
              : "right-2"
          }
          ${
            l?.onMouseOver?.showFavoriteIcon
              ? "lg:hidden lg:group-hover:block"
              : "lg:hidden"
          }
          ${l?.hide.showFavoriteIcon ? "hidden" : "flex"}
        `}
        >
          <WishlistIcon productGroupID={productGroupID} productID={productID} />
        </div>
        {/* Product Images */}
        <a
          href={url && relative(url)}
          aria-label="view product"
          class="contents relative"
        >
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={WIDTH}
            height={HEIGHT}
            class={`
              absolute rounded w-full
              ${
              l?.onMouseOver?.image == "Zoom image"
                ? "duration-100 transition-scale scale-100 lg:group-hover:scale-125"
                : ""
            }
            `}
            sizes="(max-width: 640px) 50vw, 20vw"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            decoding="async"
          />
          <div
            id="TransparencyOverlay"
            class="w-full h-full absolute left-0 top-0 z-10 pointer-events-none"
            style={{ background: "rgba(0, 0, 0, 0.02);" }}
          />
          {
            /* {(!l?.onMouseOver?.image ||
            l?.onMouseOver?.image == "Change image" && !l?.hide.imageBack) && (
            <Image
              src={back?.url ?? front.url!}
              alt={back?.alternateName ?? front.alternateName}
              width={WIDTH}
              height={HEIGHT}
              class="absolute transition-opacity rounded w-full opacity-0 lg:group-hover:opacity-100"
              sizes="(max-width: 640px) 50vw, 20vw"
              loading="lazy"
              decoding="async"
            />
          )} */
          }
        </a>
        <figcaption
          class={`
          absolute bottom-1 left-0 w-full flex flex-col gap-3 p-2
          ${
            l?.onMouseOver?.showSkuSelector || l?.onMouseOver?.showCta
              ? "transition-opacity opacity-0 lg:group-hover:opacity-100"
              : "lg:hidden"
          }
        `}
        >
          {/* SKU Selector */}
          {l?.onMouseOver?.showSkuSelector && (
            <ul class="flex justify-center items-center gap-2 w-full">
              {skuSelector}
            </ul>
          )}
          {l?.onMouseOver?.showCta && cta}
        </figcaption>
      </figure>
      {/* Prices & Name */}
      <div class="flex-auto flex flex-col p-4 gap-3 lg:gap-4">
        {/* SKU Selector */}
        {(!l?.elementsPositions?.skuSelector ||
          l?.elementsPositions?.skuSelector === "Top") && (
          <>
            {l?.hide.skuSelector
              ? (
                ""
              )
              : (
                <ul
                  class={`flex items-center gap-2 w-full ${
                    align === "center" ? "justify-center" : "justify-start"
                  } ${l?.onMouseOver?.showSkuSelector ? "lg:hidden" : ""}`}
                >
                  {skuSelector}
                </ul>
              )}
          </>
        )}

        {l?.hide.productName && l?.hide.productDescription
          ? (
            ""
          )
          : (
            <div class="flex flex-col gap-0 mb-2">
              {l?.hide.productName
                ? (
                  ""
                )
                : (
                  <h2 class="line-clamp-2 text-sm tracking-[0.15px] font-bold text-primary lining-nums tabular-nums h-10">
                    {name}
                  </h2>
                )}
              {l?.hide.productDescription
                ? (
                  ""
                )
                : (
                  <p class="truncate text-sm lg:text-sm text-neutral">
                    {product.description}
                  </p>
                )}
            </div>
          )}
        {l?.hide.allPrices
          ? (
            ""
          )
          : (
            <div class="flex flex-col gap-2">
              <div
                class={`flex flex-col gap-0 ${
                  l?.basics?.oldPriceSize === "Normal"
                    ? "lg:flex-row lg:gap-2"
                    : ""
                } ${align === "center" ? "justify-center" : "justify-start"}`}
              >
                <div
                  class={`line-through text-neutral text-sm lining-nums tabular-nums tracking-[0.15px] whitespace-nowrap ${
                    l?.basics?.oldPriceSize === "Normal" ? "lg:text-xl" : ""
                  } ${l?.hide.oldPrice ? "hidden" : ""}`}
                >
                  {/* TO-DO -> Dependendo da versão /en, /pt,o valor apresentado muda */}
                  MSRP {formatPrice(listPrice, offers!.priceCurrency!)?.replace(
                    /(US|\s)/g,
                    "",
                  )}
                </div>
                <div class="flex pb-1 items-center gap-2">
                  <div class="text-primary text-sm  lining-nums tabular-nums tracking-[0.15px] whitespace-nowrap">
                    MSRP {formatPrice(price, offers!.priceCurrency!)?.replace(
                      /(US|\s)/g,
                      "",
                    )}
                  </div>
                  <div class="relative inline-flex items-center group-lock">
                    <Icon
                      // class={"block rotate-[270deg]"}
                      id="Lock"
                      height={16}
                      width={16}
                      strokeWidth={1.5}
                    />
                    <div
                      class="hidden group-lock-item border-primary text-white bg-primary absolute top-0 left-2/4  z-10 p-6 cursor-pointer"
                      style={{
                        width: "220px",
                        maxWidth: "80vw",
                        transform:
                          "translate(-50%, -100%) translateX(0px) translateY(-15px)",
                      }}
                    >
                      <p class="text-sm font-medium tracking-[0.15px] lining-nums tabular-nums text-white">
                        Sign up for Faire to unlock wholesale pricing
                      </p>
                      <div
                        class=""
                        style={{
                          background: "inherit",
                          position: "absolute",
                          zIndex: -100,
                          display: "block",
                          width: "15px",
                          height: "15px",
                          left: "calc(50% + 0px)",
                          bottom: "0px",
                          transform: "translate(-50%, 50%) rotate(45deg)",
                          borderStyle: "inherit",
                          borderWidth: "inherit",
                          borderRightColor: "inherit",
                          borderBottomColor: "inherit",
                          borderImage: "inherit",
                          borderTopColor: "transparent",
                          borderLeftColor: "transparent",
                        }}
                      />
                      <div class="absolute left-0 -bottom-4 h-4 w-full" />
                    </div>
                  </div>
                </div>
              </div>
              {l?.hide.installments
                ? (
                  ""
                )
                : (
                  <div class="text-base-300 text-sm lg:text-base">
                    ou {installments}
                  </div>
                )}
            </div>
          )}

        {/* SKU Selector */}
        {l?.elementsPositions?.skuSelector === "Bottom" && (
          <>
            {l?.hide.skuSelector
              ? (
                ""
              )
              : (
                <ul
                  class={`flex items-center gap-2 w-full ${
                    align === "center" ? "justify-center" : "justify-start"
                  } ${l?.onMouseOver?.showSkuSelector ? "lg:hidden" : ""}`}
                >
                  {skuSelector}
                </ul>
              )}
          </>
        )}

        {!l?.hide.cta
          ? (
            <div
              class={`flex-auto flex items-end ${
                l?.onMouseOver?.showCta ? "lg:hidden" : ""
              }`}
            >
              {cta}
            </div>
          )
          : (
            ""
          )}
      </div>
    </div>
  );
}

export default ProductCard;
