import { useContext } from "react";
import { ModalContext } from "../context/modal";

export function useModal() {
  const {
    open,
    title,
    children,
    toggleModal,
    setModalTitle,
    setModalChildren,
  } = useContext(ModalContext);

  return {
    open,
    title,
    children,
    toggleModal,
    setModalTitle,
    setModalChildren,
  };
}
