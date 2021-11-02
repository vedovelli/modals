import React from "react";

const defaultValues = {
  open: false,
  title: "",
  children: null,
  setModalTitle: (title) => {},
  setModalChildren: (children) => {},
  closeModal: () => {},
};

const ModalContext = React.createContext(defaultValues);

ModalContext.displayName = "ModalContext";

export { ModalContext };
