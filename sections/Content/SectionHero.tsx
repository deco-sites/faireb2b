import Icon from "$store/components/ui/Icon.tsx";
import ButtonSignUp from "$store/islands/ButtonSignUp.tsx";

export interface ListText {
  label: string;
}

export interface Props {
  title?: string;
  listText?: ListText[];
}

const DEFAULT_PROPS: Props = {
  title: "Ready to start buying wholesale online?",
  listText: [
    {
      label: "60-day payment terms",
    },
    {
      label: "Free returns on all opening orders",
    },
    {
      label: "Unique products curated for your store",
    },
  ],
};

export default function SectionHero(props: Props) {
  const { title, listText } = { ...DEFAULT_PROPS, ...props };

  return (
    <div class="bg-secondary flex flex-col items-center pt-12 pb-14 px-8">
      <h4
        class="text-3xl font-nantes text-white font-normal tracking-[0.15px] lining-nums tabular-nums text-center mb-6 max-w-md sm:text-[38px] sm:!leading-[50px]"
        style={{ lineHeight: "38px" }}
      >
        {title}
      </h4>
      <ul class="flex flex-col gap-4 mb-6">
        {listText?.map(({ label }) => (
          <li class="flex gap-2 text-white text-sm font-extralight tracking-[0.15px]">
            <Icon id="Confirmation" width={16} height={16} strokeWidth={1} />
            {label}
          </li>
        ))}
      </ul>
      <ButtonSignUp variant="white" />
    </div>
  );
}
