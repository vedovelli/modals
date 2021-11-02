import { ModalContent } from "../components";
import { useModal } from "../hooks/modal";

export function ModalButton1() {
  const { toggleModal, setModalTitle, setModalChildren } = useModal();

  const setupModal = () => {
    setModalTitle("Title modal from button 1");
    setModalChildren(
      <ModalContent
        amount="$12.25"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, doloribus dignissimos quidem repellendus odit sequi maiores hic cupiditate aliquid minus, eos inventore perferendis numquam quaerat, vel accusamus? Delectus, minima."
      />
    );
    toggleModal((open) => !open);
  };

  return (
    <button
      type="button"
      onClick={setupModal}
      className="inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Open Modal
    </button>
  );
}
