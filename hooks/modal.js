import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config } from "../components/Modal/config";

export function useModal() {
  const [open, setOpen] = useState(false);
  const [title, setModalTitle] = useState("");
  const [children, setModalChildren] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setOpen(false);

    if (router.query.modal) {
      if (!config[router.query.modal]) {
        throw new Error("Modal config not found. Please check modal name");
      }

      const { title, children } = config[router.query.modal];

      setModalTitle(title);
      setModalChildren(children);
      setOpen(true);
    }
  }, [router.query.modal]);

  return {
    open,
    title,
    children,
    setModalTitle,
    setModalChildren,
    closeModal: () => {
      setOpen(false);
      router.push(router.pathname);
    },
  };
}
