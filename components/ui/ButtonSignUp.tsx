interface Props {
  variant?: "default" | "flat";
}

export default function ButtonSignUp({ variant = "default" }: Props) {
  const variantStyles = {
    class: `h-9 px-5 w-max`,
  };

  const defaultStyles = {
    class: `h-12 px-6 w-fit min-w-[228px]`,
  };

  const styles = variant === "default" ? defaultStyles : variantStyles;

  return (
    <button
      class={`${styles.class} flex items-center justify-center whitespace-nowrap  tracking-[0.15px] text-sm font-extralight cursor-pointer border border-primary bg-primary text-white outline-none transition-all hover:bg-black hover:border-black`}
    >
      Sign Up to Shop
    </button>
  );
}
