import "tailwindcss/tailwind.css";
import { ModalContext } from "../context/modal";
import { Modal } from "../components";
import { useModalSetup } from "../hooks/modal";

function MyApp({ Component, pageProps }) {
  return (
    <ModalContext.Provider
      value={{
        ...useModalSetup(),
      }}
    >
      <Modal />
      <Component {...pageProps} />
    </ModalContext.Provider>
  );
}

export default MyApp;
