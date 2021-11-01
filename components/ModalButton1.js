import { useModalManager } from "../managers/modal";

export function ModalButton1() {
  const { toggle } = useModalManager((manager) => manager.actions);

  // const modalProps = {
  //   title: "Title modal from button 1",
  // };

  return (
    <button
      type="button"
      onClick={() => toggle()}
      className="inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Open Modal
    </button>
  );
}
