import "tailwindcss/tailwind.css";
import { useState } from "react";
import { ModalContext } from "../context/modal";

function MyApp({ Component, pageProps }) {
  const [open, toggleModal] = useState(false);
  const [title, setModalTitle] = useState("");
  const [children, setModalChildren] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        open,
        title,
        children,
        toggleModal,
        setModalTitle,
        setModalChildren,
      }}
    >
      <Component {...pageProps} />
    </ModalContext.Provider>
  );
}

export default MyApp;
