import { ModalButton1, ModalButton2 } from "../components";

export default function Home() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-2 gap-4">
          <ModalButton1 />
          <ModalButton2 />
        </div>
      </div>
    </>
  );
}
