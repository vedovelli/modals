import Link from "next/link";

export function ModalButton2() {
  return (
    <Link href="/?modal=modal2">
      <a className="text-center inline-block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Open Modal
      </a>
    </Link>
  );
}
