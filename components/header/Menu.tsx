import Icon from "$store/components/ui/Icon.tsx";
import type { INavItem } from "./NavItem.tsx";
import type { FeaturedLinks, NavigationDepartamentMobile } from "./Header.tsx";

export interface Props {
  items: INavItem[];
  featuredLinks: FeaturedLinks[];
  navDepartamentsMobile: NavigationDepartamentMobile[];
}

function MenuItem({ item }: { item: INavItem }) {
  return (
    <div class="collapse collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title">{item.label}</div>
      <div class="collapse-content">
        <ul>
          <li>
            <a class="underline text-sm" href={item.href}>Ver todos</a>
          </li>
          {item.children?.map((node) => (
            <li>
              <MenuItem item={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Menu({ items, featuredLinks }: Props) {
  const topFeaturedLinks = featuredLinks.filter((item) => item.visible.top);

  return (
    <>
      <div class="flex flex-col bg-primary pt-4 px-5 pb-2">
        <div class="mb-2 flex self-stretch">
          <a
            href="/"
            class="flex-grow inline-flex items-center mb-1"
            aria-label="Store logo"
          >
            <Icon id="LogoInverse" width={104} height={13} />
          </a>
        </div>
        <ul class="flex flex-col w-full">
          {topFeaturedLinks.map((item) => (
            <li
              class="h-9 flex place-items-center w-full"
              style={{ order: `${item.position?.mobile}` }}
            >
              <a
                class="flex justify-between text-white text-sm w-full items-center"
                href={item.link_path}
              >
                {item.label}
                <Icon
                  id={item.iconRight ?? "ArrowRight"}
                  width={16}
                  height={16}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
        {items.map((item) => (
          <li>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>

      <ul class="flex flex-col py-2 bg-base-200">
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="/wishlist"
          >
            <Icon id="Heart" width={20} height={20} strokeWidth={2} />
            <span class="text-sm">Lista de desejos</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="MapPin" width={20} height={20} strokeWidth={2} />
            <span class="text-sm">Nossas lojas</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="Phone" width={20} height={20} strokeWidth={2} />
            <span class="text-sm">Fale conosco</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-4 py-2"
            href="https://www.deco.cx"
          >
            <Icon id="User" width={20} height={20} strokeWidth={2} />
            <span class="text-sm">Minha conta</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
