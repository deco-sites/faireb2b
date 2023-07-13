import { useUI } from "$store/sdk/useUI.ts";
import Icon from "$store/components/ui/Icon.tsx";

interface Props {
  variant: "default" | "flat" | "white";
}

export default function ButtonSignUp({ variant = "default" }: Props) {
  const { displayLogin } = useUI();

  const defaultStyles = {
    default:
      "h-12 px-6 w-fit min-w-[228px] text-white border border-primary bg-primary  hover:bg-black hover:border-black",
    flat:
      "h-9 px-5 w-max text-white border border-primary bg-primary hover:bg-black hover:border-black ",
    white:
      "h-12 w-fit min-w-[228px] text-black bg-white group duration-500 ease-in-out delay-0 relative",
  };

  const styles = defaultStyles[variant] ?? defaultStyles["default"];

  return (
    <button
      class={`${styles} flex items-center justify-center whitespace-nowrap tracking-[0.15px] text-sm font-extralight cursor-pointer  outline-none transition-all `}
      onClick={() => displayLogin.value = true}
    >
      <span
        class="group-hover:!pl-0 group-hover:!pr-5 relative transition-all duration-500 ease-in-out delay-0 text-inherit "
        style={{ padding: "0 10px" }}
      >
        Sign Up to Shop
        {variant === "white" &&
          (
            <div class="overflow-hidden flex">
              <Icon
                id="ArrowRight"
                width={16}
                height={16}
                class="opacity-0 transition-all duration-500 ease-in-out delay-0 group-hover:opacity-100 group-hover:right-0  absolute my-auto mx-0 top-0 bottom-0 right-[2px]
                text-black inline-block rotate-0"
                strokeWidth={1}
              />
            </div>
          )}
      </span>
    </button>
  );
}
