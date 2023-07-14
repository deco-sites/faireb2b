import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export default function FooterItems(
  { sections, justify = false }: { sections: Section[]; justify: boolean },
) {
  return (
    <>
      {sections.length > 0 && (
        <>
          {/* Desktop view */}
          <ul
            class={`hidden md:flex flex-row gap-10 ${
              justify && "justify-between"
            }`}
          >
            {sections.map((section) => (
              <li>
                <div class="flex flex-col gap-1">
                  <span class="text-sm tracking-[0.15px] font-bold text-primary lining-nums tabular-nums ">
                    {section.label}
                  </span>
                  <ul class={`flex flex-col gap-1 flex-wrap text-sm`}>
                    {section.items?.map((item) => (
                      <li>
                        <a
                          href={item.href}
                          class="block py-1 link link-hover text-sm tracking-[0.15px] font-extralight text-primary lining-nums tabular-nums "
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile view */}
          <ul class="flex flex-col md:hidden gap-4">
            {sections.map((section) => (
              <li>
                <details>
                  <summary>
                    <span class="pl-1 py-2 text-sm tracking-[0.15px] font-bold text-primary lining-nums tabular-nums ">
                      {section.label}
                    </span>
                  </summary>
                  <ul
                    class={`flex flex-col gap-1 pl-5 pt-2`}
                  >
                    {section.items?.map((item) => (
                      <li>
                        <a
                          href={item.href}
                          class="block py-1 link link-hover text-sm tracking-[0.15px] font-extralight text-primary lining-nums tabular-nums "
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
