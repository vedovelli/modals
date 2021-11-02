import { ReplacementContent } from ".";
import { useModal } from "../hooks/modal";

export function ModalContent({ amount, description }) {
  const { setModalChildren } = useModal();
  return (
    <>
      <h1>{amount}</h1>
      <p>{description}</p>
      <button
        type="button"
        onClick={() =>
          setModalChildren(
            <ReplacementContent>
              <strong className="text-bold">
                This content was dinamically replaced
              </strong>
            </ReplacementContent>
          )
        }
        className="my-10 inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Replace modal contents
      </button>
    </>
  );
}
