import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function MockInputSearchUi() {
  return (
    <div class="flex-1 mr-4">
      <div class="flex flex-row items-center bg-white">
        <div
          class="h-10 border border-neutral flex justify-between w-full overflow-hidden"
          style={{
            borderRadius: "100px",
            backgroundColor: "rgba(247, 247, 247, 0.6)",
          }}
        >
          <div class="w-full flex">
            <input
              class="w-full pl-5 text-sm text-neutral font-extralight tracking-[0.15px] outline-none"
              style={{ backgroundColor: "rgba(247, 247, 247, 0.6)" }}
              type="text"
              id="top-search"
              placeholder="Search products or brands"
              aria-label="Search products or brands"
              autocomplete="off"
              data-test-id="searchBarInput"
            />
          </div>
          <div class="cursor-pointer flex items-center pr-5 pl-3">
            <Icon
              class="text-primary"
              id="MagnifyingGlass"
              size={20}
              strokeWidth={0.01}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2 sticky top-0 z-50 bg-base-100"
      >
        <Buttons variant="menu" />

        <a
          href="/"
          class="flex-grow inline-flex items-center"
          style={{ minHeight: navbarHeight }}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <Buttons variant="search" />
          <Buttons variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-6 pr-6 sticky top-0 z-50 bg-base-100">
        <div class="flex flex-row items-center w-full">
          <div class="flex-none w-44 mr-6">
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Icon id="Logo" width={126} height={16} />
            </a>
          </div>
          <MockInputSearchUi />
          <div style={{ height: "60px" }}>
          </div>
          <div className="relative w-min">
            <label
              tabIndex={0}
              className="m-1 text-sm text-neutral whitespace-nowrap font-extralight tracking-[0.15px] text-center px-3 gap-2 flex items-center cursor-pointer"
              style={{ height: "60px" }}
            >
              <Icon
                class="text-primary"
                id="Globo"
                size={16}
                strokeWidth={1}
              />EN-US
            </label>
          </div>
          {
            /* <div class="flex-none w-44 flex items-center justify-end gap-2">
            <Buttons variant="search" />
            <Searchbar searchbar={searchbar} />
            <a
              class="btn btn-circle btn-sm btn-ghost"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={20} height={20} strokeWidth={0.4} />
            </a>
            <a
              class="btn btn-circle btn-sm btn-ghost"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <Icon
                id="Heart"
                size={20}
                strokeWidth={2}
                fill="none"
              />
            </a>
            <Buttons variant="cart" />
          </div> */
          }
        </div>
      </div>
    </>
  );
}

export default Navbar;
