import Icon from "$store/components/ui/Icon.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import type { Image as ImageType } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Markdown from "$store/components/ui/Markdown.tsx";

export interface Testimonial {
  text?: HTML;
  // image?: {
  //   src?: ImageType;
  //   alt?: string;
  // };
  user?: {
    avatar?: ImageType;
    name?: HTML;
    // position?: string;
    // company?: string;
    description?: HTML;
  };
}

export interface Props {
  title?: string;
  testimonials?: Testimonial[];
  layout?: {
    variation?: "Grid" | "Slider";
    headerAlignment?: "center" | "left";
  };
}

const DEFAULT_PROPS: Props = {
  "title": "",
  "testimonials": [{
    "text":
      "Fashion Store is my go-to online destination for all things stylish. Their vast collection of trendy clothes and accessories never disappoints. The quality is exceptional, and the prices are affordable. The website is easy to navigate, and their customer service team is friendly and responsive. I always feel like a fashionista when I shop here!",
    // "image": {
    //   "src":
    //     "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
    //   "alt": "Testimonal",
    // },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Robert Johnson",
      // "position": "Founder",
      // "company": "RJ Agency",
    },
  }, {
    "text":
      "I can't praise Fashion Store enough! Their commitment to staying ahead of the fashion curve is evident in their diverse and up-to-date inventory. Whether I need a casual outfit or a glamorous dress, they have it all. The shopping experience is seamless, and my orders always arrive promptly. Fashion Store is a true fashion lover's paradise!",
    // "image": {
    //   "src":
    //     "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
    //   "alt": "Testimonal",
    // },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Mary Bush",
      // "position": "Director",
      // "company": "MB & Co",
    },
  }, {
    "text":
      "Fashion Store has transformed my wardrobe. Their curated collection of clothing and accessories has helped me discover my personal style. The quality of their products is outstanding, and the prices are unbeatable. The website is visually appealing and easy to navigate. Fashion Store is my trusted companion for staying fashionable and feeling confident!",
    // "image": {
    //   "src":
    //     "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/e0fcbcae-0a21-4269-9605-7ef8708e58ad",
    //   "alt": "Testimonal",
    // },
    "user": {
      "avatar": "https://avatars.githubusercontent.com/u/117045675?s=200&v=4",
      "name": "Sandra Bullock",
      // "position": "Founder",
      // "company": "Sanlock",
    },
  }],
  "layout": {
    "variation": "Grid",
    "headerAlignment": "center",
  },
};

const Testimonal = ({ text, user }: Testimonial) => (
  <div class="flex flex-col items-center text-center px-10 box-border">
    <div class="flex flex-col items-center">
      {user?.avatar && (
        <Image
          src={user.avatar}
          alt={user?.name}
          width={72}
          height={72}
          class="rounded-full mb-4"
        />
      )}

      <h3
        class="leading-8 font-nantes text-primary font-normal lining-nums tabular-nums text-center mb-6 hide-brtag-on-mob"
        style={{ fontSize: "1.375rem" }}
        dangerouslySetInnerHTML={{ __html: `“${text}”` }}
      />
      {user?.description &&
        (
          <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
            <Markdown text={user?.description} />
          </p>
        )}
    </div>
  </div>
);

export default function Testimonials(
  props: Props,
) {
  const id = useId();
  const { title, testimonials, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="w-full py-10 flex flex-col sm:py-20 bg-secondary-content">
      {title && (
        <p class="text-sm text-neutral font-extralight tracking-[0.15px] lining-nums tabular-nums text-center uppercase mb-6">
          <Markdown text={title} />
        </p>
      )}
      {layout?.variation === "Grid" && (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {testimonials?.map(({ text, user }) => (
            <Testimonal text={text} user={user} />
          ))}
        </div>
      )}

      {layout?.variation !== "Grid" && (
        <div
          class="relative w-full mx-auto"
          id={id}
          style={{ maxWidth: "1008px" }}
        >
          <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5 w-full ">
            {testimonials?.map(({ text, user }, index) => (
              <Slider.Item
                index={index}
                class="flex flex-col gap-4 carousel-item w-full"
              >
                <Testimonal text={text} user={user} />
              </Slider.Item>
            ))}
          </Slider>
          <>
            <div class="hidden z-10 absolute -left-2 lg:-left-8 top-1/2 sm:block">
              <Slider.PrevButton class="">
                <Icon
                  class={"block rotate-[270deg]"}
                  id="ChevronDirectional"
                  height={20}
                  width={20}
                  strokeWidth={1.5}
                />
              </Slider.PrevButton>
            </div>
            <div class="hidden z-10 absolute -right-2 lg:-right-8 top-1/2 sm:block">
              <Slider.NextButton class="">
                <Icon
                  class={"block rotate-[90deg]"}
                  id="ChevronDirectional"
                  height={20}
                  width={20}
                  strokeWidth={1.5}
                />
              </Slider.NextButton>
            </div>
          </>
          <SliderJS rootId={id} />
        </div>
      )}
    </div>
  );
}
