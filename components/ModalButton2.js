import { useModalManager } from "../managers/modal";
import { ModalContent } from "../components";

export function ModalButton2() {
  const { toggleModal, setModalTitle, setModalChildren } = useModalManager(
    (manager) => manager
  );

  function setupModal() {
    setModalTitle("Title modal from button 2");
    setModalChildren(
      <ModalContent
        amount="$227.00"
        description="Sequi maiores hic cupiditate aliquid minus, eos inventore perferendis numquam quaerat, vel accusamus? Delectus, minima."
      />
    );
    toggleModal();
  }

  return (
    <button
      type="button"
      onClick={() => setupModal()}
      className="inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      Open Modal
    </button>
  );
}
