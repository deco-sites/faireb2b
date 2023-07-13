import Icon from "$store/components/ui/Icon.tsx";

export default function LoginModal() {
  return (
    <div class="flex flex-col items-stretch justify-start ">
      <div class="flex flex-col items-center justify-center flex-1">
        <Icon id="Logo" width={104} height={13} class="mb-4" />
        <h4
          class="text-3xl font-nantes text-primary font-normal lining-nums tabular-nums text-center mb-2"
          style={{ lineHeight: "38px" }}
        >
          Shop wholesale, online
        </h4>
        <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center mb-8">
          Purchase from over 100,000 unique vendors. Sign up for free!
        </p>
        <div
          class="flex relative w-full flex-col mb-4"
          style={{ "flex": "0 0 auto" }}
        >
          <label
            id="input-mail-label"
            for="input-mail"
            class="m-0 p-0 text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-left w-full"
          >
            Business email address
          </label>
          <div
            class="border border-neutral-content px-4 items-center bg-white cursor-text flex"
            role="button"
            style={{ height: "42px" }}
          >
            <input
              placeholder="you@yourstore.com"
              name="email"
              autocomplete="email"
              data-test-id="email"
              aria-labelledby="input-mail-label"
              id="input-mail"
              class="flex-1 m-0 outline-none p-0 text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-left border-none"
            />
          </div>
        </div>
        <div class="mb-4 w-full">
          <button
            class={`flex items-center justify-center whitespace-nowrap  tracking-[0.15px] text-sm font-extralight cursor-pointer border border-primary bg-primary text-white outline-none transition-all hover:bg-black hover:border-black h-12 px-6 w-full`}
          >
            Get Started
          </button>
        </div>
        <div class="flex justify-center mb-6">
          <a
            class="text-black font-extralight text-sm tracking-[0.15px] cursor-pointer inline-flex w-auto relative bg-transparent underline"
            href="#"
          >
            Sign in
          </a>
        </div>
        <div class="w-full flex flex-col mb-6">
          <div class="flex items-center gap-4 mb-6">
            <hr
              class="m-0"
              style={{
                inlineSize: "100%",
                blockSize: "1px",
                "border-block-start": "1px solid rgb(223, 224, 225)",
                "border-block-end": "0px",
                "border-inline": "0px",
              }}
            />
            <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-left">
              or
            </p>
            <hr
              class="m-0"
              style={{
                inlineSize: "100%",
                blockSize: "1px",
                "border-block-start": "1px solid rgb(223, 224, 225)",
                "border-block-end": "0px",
                "border-inline": "0px",
              }}
            />
          </div>
          <button
            class={`flex items-center justify-center whitespace-nowrap  tracking-[0.15px] text-sm font-extralight cursor-pointer text-primary border border-neutral-content bg-white hover:text-white outline-none transition-all hover:bg-black hover:border-black h-12 px-6 w-full`}
          >
            <Icon
              id="Google"
              height={20}
              width={20}
              strokeWidth={1.5}
              class="inline-block mr-auto"
            />
            <p class="mr-auto">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
      <div class="pt-4 flex flex-col">
        <div class="py-2 px-4 rounded bg-info-content flex items-center justify-center mb-6">
          <p class="text-sm text-primary font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
            Are you a brand?{" "}
            <a
              target="_blank"
              class="cursor-pointer inline-flex underline"
              href="/brands"
            >
              Sign up to sell on Faire
            </a>
          </p>
        </div>
        <span class="text-xs text-neutral font-extralight tracking-[0.15px] lining-nums tabular-nums text-center">
          By proceeding, you're agreeing to our{" "}
          <a
            target="_blank"
            class="cursor-pointer inline-flex underline"
            href="/tos"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            class="cursor-pointer inline-flex underline"
            href="/privacy"
          >
            Privacy Policy
          </a>
        </span>
      </div>
    </div>
  );
}
