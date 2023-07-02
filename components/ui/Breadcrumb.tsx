import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const items = [{ name: "Home", item: "/" }, ...itemListElement];

  return (
    <div class="breadcrumbs p-0">
      <ul>
        {items
          .filter(({ name, item }) => name && item)
          .map(({ name, item }) => (
            <li class="text-primary last:text-neutral">
              <a
                class="font-extralight text-sm border-b border-transparent !no-underline hover:border-primary tracking-[0.15px]"
                href={item}
              >
                {name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Breadcrumb;
