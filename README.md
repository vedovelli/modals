# Modals

- This is a Next.js application
- There is only one modal instance living in the main page (`/pages/index.js`)
- The ModalContext (`/context/modal.js`) provides a state (`open`, `title` and `children`) and some methods (`closeModal`, ` setModalTitle` ,`setModalChildren`)
- The useModal hook (`/hooks/modal.js`) exposes all members of the context to the components making use of `useModal()`
- The modal is triggered from `/components/ModalButton1.js` and `/components/ModalButton2.js`
- Both buttons set `/components/ModalContent.js` with different props
- `/components/ModalContent.js` can replace modal's children by invoking `setModalChildren()`
