import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config as modalConfig } from "../components/Modal/config";

export function useModal() {
  const [open, setOpen] = useState(false);
  const [title, setModalTitle] = useState("");
  const [children, setModalChildren] = useState(null);
  const { query, push, pathname } = useRouter();

  useEffect(() => {
    setOpen(false);

    if (query.modal) {
      const { modal } = query;
      const config = modalConfig[modal];

      if (!config) {
        throw new Error("Modal config not found. Please check modal name");
      }

      const { title, children } = config;

      setModalTitle(title);
      setModalChildren(children);
      setOpen(true);
    }
  }, [query.modal]);

  return {
    open,
    title,
    children,
    setModalTitle,
    setModalChildren,
    closeModal: () => {
      setOpen(false);
      push(pathname);
    },
  };
}
