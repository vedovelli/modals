import Link from "next/link";

export function ModalButton1() {
  return (
    <Link href="/?modal=modal1">
      <a className="text-center inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Open Modal
      </a>
    </Link>
  );
}
