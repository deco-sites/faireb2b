import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { AvailableIcons } from "$store/components/ui/Icon.tsx";

import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface NavigationItemDesktop {
  /**
   * @title Nome do item de navegação desktop
   */
  label?: string;
  /**
   * @title Link do item de navegação
   * @description Não é obrigatório caso possua sublinks
   */
  link_path?: string;
  /**
   * @title É um header de grupo?
   * @description No segundo nível, se essa opção estiver marcada o item terá um destaque
   */
  is_group_header?: boolean;
  /**
   * @title Sublinks pertencentes a este nível
   * @description Existe um esquema de recursão, então os sublinks seguem a mesma estrutura do pai
   */
  sublinks?: NavigationItemDesktop[];
  /**
   * @title Imagem do container principal a direita
   * @description Não é obrigatória
   */
  right_image?: {
    url: Image;
    alt: string;
    redirect_url?: string;
  };
  /**
   * @title Informações que acompanham a imagem direita
   * @description Não é obrigatória
   */
  image_captions?: {
    title: string;
    subtitle: string;
    paragraph: string;
  };
}

export interface NavigationDepartamentDesktop {
  /**
   * @title Nome do departamento de navegação desktop
   */
  label?: string;
  /**
   * @title Link do departamento de navegação desktop
   * @description Não é obrigatório caso possua sublinks
   */
  link_path?: string;
  /**
   * @title Links que ficaram em destaque no submenu
   * @description Não é obrigatório caso não queira nenhum link em destaque
   */
  featured_links: {
    name?: string;
    link_path?: string;
  }[];
  /**
   * @title Sublinks pertencentes a este departamento
   */
  sublinks?: NavigationItemDesktop[];
  /**
   * @title Imagem do container principal a direita
   * @description Não é obrigatória
   */
  right_image?: {
    url: Image;
    alt: string;
    redirect_url?: string;
  };
  /**
   * @title Informações que acompanham a imagem direita
   * @description Não é obrigatória
   */
  image_captions?: {
    title: string;
    subtitle: string;
    paragraph: string;
  };
}

export interface NavigationItemMobile {
  /**
   * @title Nome do item de navegação mobile
   */
  label?: string;
  /**
   * @title Link do item de navegação
   * @description Não é obrigatório caso possua sublinks
   */
  link_path?: string;
  /**
   * @title É um header de grupo?
   * @description No segundo nível, se essa opção estiver marcada o item terá um destaque
   */
  is_group_header?: boolean;
  /**
   * @title Estilo do item
   * @description No segundo nível, definira um estilo para o item
   */
  style_group?: "NONE" | "BUTTON" | "DIVIDER";
  /**
   * @title Sublinks pertencentes a este nível
   * @description Existe um esquema de recursão, então os sublinks seguem a mesma estrutura do pai
   */
  sublinks?: NavigationItemMobile[];
}

export interface NavigationDepartamentMobile {
  /**
   * @title Nome do departamento de navegação desktop
   */
  label?: string;
  /**
   * @title Link do departamento de navegação desktop
   * @description Não é obrigatório caso possua sublinks
   */
  link_path?: string;
  sublinks?: NavigationItemMobile[];
}

export interface FeaturedLinks {
  /**
   * @title Nome do link em destaque
   */
  label?: string;
  /**
   * @title Link do item em destaque
   */
  link_path: string;
  /**
   * @title Posição do link - Desktop | Mobile
   * @description Campo opcional para definir a posição perante aos outros links
   */
  position?: {
    desktop?: number;
    mobile?: number;
  };
  /**
   * @title Ícone usado no mobile
   * @description Campo opcional para alterar o ícone que fica na posição direita
   * @default ArrowRight
   */
  iconRight?: AvailableIcons;
  /**
   * @title Onde este item deve aparecer?
   * @description Esses campos são usados em três lugares no mobile e uma no desk, aqui você escolhe em quais blocos ele deve aparecer e se deve aparecer somente no mobile
   */
  visible: {
    top?: boolean;
    bottom?: boolean;
    navFooter?: boolean;
    onlyMob?: boolean;
  };
}

export interface Props {
  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;

  /**
   * @title Navigation items | Desktop
   * @description Navigation items used only on desktop
   */
  navDepartamentsDesktop?: NavigationDepartamentDesktop[];
  /**
   * @title Navigation items | Mobile
   * @description Navigation items used only on mobile
   */
  navDepartamentsMobile?: NavigationDepartamentMobile[];
  /**
   * @title Links em destaque -  Desktop | Mobile
   */
  featuredLinks?: FeaturedLinks[];
}

function Header({
  alerts,
  searchbar: _searchbar,
  products,
  navItems = [],
  featuredLinks = [],
  navDepartamentsMobile = [],
  suggestions,
}: Props) {
  const searchbar = { ..._searchbar, products, suggestions };
  return (
    <>
      <header style={{ height: headerHeight }}>
        {/* <>{JSON.stringify(featuredLinks)}</> */}
        <div class="bg-base-100 fixed w-full z-50">
          <Alert alerts={alerts} />
          <Navbar items={navItems} searchbar={searchbar} />
        </div>

        <Modals
          menu={{ items: navItems, featuredLinks, navDepartamentsMobile }}
          searchbar={searchbar}
        />
      </header>
    </>
  );
}

export default Header;
