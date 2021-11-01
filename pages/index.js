/**
 * 1. Criar um componente único para ser o modal
 * 2. Criar um hook que receberá o componente a ser carregado como children
 * 3. O hook retornará um método para substituir children
 */

import { createReducerContext } from "react-use";
import { ModalButton1, ModalButton2, Modal } from "../components";

export const [useSharedModal, SharedModalProvider] = createReducerContext(
  (state) => !state,
  false
);

export default function Home() {
  return (
    <SharedModalProvider>
      <Modal>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur amet labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Consequatur amet labore.
        </p>
      </Modal>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-2 gap-4">
          <ModalButton1 />
          <ModalButton2 />
        </div>
      </div>
    </SharedModalProvider>
  );
}
