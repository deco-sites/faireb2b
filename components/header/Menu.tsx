import { useSignal } from "@preact/signals";
import Icon from "$store/components/ui/Icon.tsx";
import type { INavItem } from "./NavItem.tsx";
import type {
  FeaturedLinks,
  NavigationDepartamentMobile,
  NavigationItemMobile,
} from "./Header.tsx";

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
            <a class="underline text-sm" href={item.href}>
              Ver todos
            </a>
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

const DELAY_ANIMATION_TIME = 4000;

function SubItem({
  item,
  level = 0,
}: {
  item: NavigationItemMobile;
  level: number;
}) {
  const open = useSignal(false);
  const delayToClose = useSignal(false);
  const hasChildren = Array.isArray(item.sublinks) && item.sublinks.length > 0;

  const title = (
    <h2 class="font-extralight text-sm text-primary leading-9">{item.label}</h2>
  );

  const titleSubmenu = (
    <h3 class="flex justify-center text-center font-medium text-sm text-primary tracking-[0.15px] my-5 relative">
      <button
        className={`absolute left-0 top-2/4 -translate-y-2/4 w-[30px] h-[30px] flex items-center`}
        onClick={() => {
          open.value = false;
          setTimeout(() => {
            delayToClose.value = false;
          }, DELAY_ANIMATION_TIME);
        }}
      >
        <Icon
          class={"block rotate-[270deg]"}
          id="ChevronDirectional"
          height={14}
          width={14}
          strokeWidth={1.5}
        />
      </button>
      {item.label}
    </h3>
  );

  return (
    <>
      <div
        class="flex justify-between items-center"
        onClick={() => {
          if (hasChildren) {
            open.value = true;
            delayToClose.value = true;
          }
        }}
      >
        {hasChildren
          ? (
            title
          )
          : (
            <a
              class="w-full inline-block"
              href={item.link_path}
              aria-label={`Go to ${item.label}`}
            >
              {title}
            </a>
          )}
        {hasChildren && (
          <Icon
            class={"block rotate-90"}
            id="ChevronDirectional"
            height={14}
            width={14}
            strokeWidth={1.5}
          />
        )}
      </div>
      {hasChildren && (open.value === true || delayToClose.value === true) && (
        <div
          class={`${
            open.value === true ? "animate-slide-left" : "animate-slide-to-hide"
          } w-full h-full absolute top-0 left-0 bg-white`}
          style={{
            animationFillMode: "forwards",
            zIndex: level + 1,
          }}
        >
          <div class="px-5 pb-4">
            {titleSubmenu}
            <ul class={`flex flex-col`}>
              {item.sublinks?.map((node) => (
                <SubItem item={node} level={level + 1} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function Menu({ items, featuredLinks, navDepartamentsMobile }: Props) {
  const topFeaturedLinks = featuredLinks.filter((item) => item.visible.top);

  return (
    <div class="relative">
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
                class="flex justify-between text-white text-sm w-full items-center tracking-[0.0094rem]"
                href={item.link_path}
              >
                {item.label}
                <Icon
                  id={item.iconRight ?? "ArrowRight"}
                  width={16}
                  height={16}
                  strokeWidth={1.5}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ul class="px-5 pt-4 flex flex-col">
        {navDepartamentsMobile.map((item) => (
          <>
            <li class="py-2">
              <h2 class="font-medium text-sm text-primary tracking-[0.0094rem] mb-2">
                {item.label}
              </h2>

              <ul class="flex flex-col">
                {item.sublinks?.map((sublink) => (
                  <li>
                    <SubItem item={sublink} level={0} />
                  </li>
                ))}
              </ul>
            </li>
            <div class="divider !m-0"></div>
          </>
        ))}
      </ul>
      {
        /* <ul class="px-4 flex-grow flex flex-col divide-y divide-base-200">
				{items.map((item) => (
					<li>
						<MenuItem item={item} />
					</li>
				))}
			</ul> */
      }

      <ul class="flex flex-col py-2 bg-base-200">
        <li>
          <a class="flex items-center gap-4 px-4 py-2" href="/wishlist">
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
    </div>
  );
}

export default Menu;
