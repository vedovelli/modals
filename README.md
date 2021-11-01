# Modals

- This is a Next.js application
- There is only one modal instance living in the main page (`/pages/index.js`)
- The Modal Manager (`/managers/modal.js`) provides a state (`open`, `titl`e and `children`) and some actions (`toggleModal`, ` setModalTitle` ,`setModalChildren`)
- The Modal Manager was build on top of Zustand (https://github.com/pmndrs/zustand) but I am sure it can be easily rebuilt with other means
- The modal is triggered from `/components/ModalButton1.js` and `/components/ModalButton2.js`
- Both buttons set `/components/ModalContent.js` with different props
- `/components/ModalContent.js` can replace modal's children by invoking `setModalChildren()`
