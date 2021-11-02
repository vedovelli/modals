import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ModalContext } from "../context/modal";
import { config } from "../components/Modal/config";

export function useModal() {
  const { open, title, children, closeModal, setModalTitle, setModalChildren } =
    useContext(ModalContext);

  return {
    open,
    title,
    children,
    closeModal,
    setModalTitle,
    setModalChildren,
  };
}

export function useModalSetup() {
  const [open, setOpen] = useState(false);
  const [title, setModalTitle] = useState("");
  const [children, setModalChildren] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);

    if (router.query.modal && !open) {
      if (!config[router.query.modal]) {
        throw new Error("Modal config not found. Please check modal name");
      }

      const { title, children } = config[router.query.modal];

      setModalTitle(title);
      setModalChildren(children);
      setOpen(true);
    }
  }, [router.query.modal]);

  const closeModal = () => {
    setOpen(false);
    router.push(router.pathname);
  };

  return {
    open,
    title,
    children,
    closeModal,
    setModalTitle,
    setModalChildren,
  };
}
