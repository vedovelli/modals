import "tailwindcss/tailwind.css";
import { Modal } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Modal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
