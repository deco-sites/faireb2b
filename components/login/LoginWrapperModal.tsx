import Modal from "$store/components/ui/Modal.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { lazy, Suspense } from "preact/compat";

const LoginModal = lazy(
  () => import("$store/components/login/LoginModal.tsx"),
);

export default function LoginWrapperModal() {
  const { displayLogin } = useUI();

  const fallback = (
    <div class="flex justify-center items-center w-full h-full">
      <span class="loading loading-ring" />
    </div>
  );

  return (
    <Modal
      title="Login"
      mode="center"
      loading="lazy"
      open={displayLogin.value}
      onClose={() => {
        displayLogin.value = false;
      }}
      sectionClass="!bg-black !bg-opacity-60"
      wrapperClass="py-10 px-8 sm:p-10 max-h-screen h-screen sm:h-auto bg-white sm:min-h-[600px] sm:w-[500px]"
      hideHeader
      showButtonClose
    >
      <Suspense fallback={fallback}>
        <LoginModal />
      </Suspense>
    </Modal>
  );
}
