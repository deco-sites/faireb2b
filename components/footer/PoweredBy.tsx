import Icon from "$store/components/ui/Icon.tsx";

interface Props {
  disclaimer?: string;
  items?: {
    label: string;
    href: string;
  }[];
}

export default function PoweredBy(props: Props) {
  return (
    <div class="flex flex-col">
      <p class="text-neutral m-0 p-0 font-extralight text-sm tracking-[0.15px] text-center sm:text-left mb-2">
        {props.disclaimer ?? "©2023 Faire Wholesale, Inc."}
      </p>
      <div class="flex flex-wrap">
        {props.items?.map((item) => (
          <div class="flex">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
            >
              <p class="text-neutral m-0 p-0 font-extralight text-sm tracking-[0.15px]">
                {item.label}
              </p>
            </a>
            <p class="text-neutral m-0 p-0 font-extralight text-sm tracking-[0.15px] px-2">
              {" "}
              •{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
    // <span class="flex items-center gap-1 text-sm">
    //   Powered by{" "}
    //   <a
    //     href="https://www.deco.cx"
    //     aria-label="powered by https://www.deco.cx"
    //   >
    //     <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
    //   </a>
    // </span>
  );
}
