import create from "zustand";
import produce from "immer";

const initialState = {
  open: false,
  title: "",
  children: null,
};

export const useModalManager = create((set) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    toggleModal() {
      setState(({ state }) => {
        state.open = !state.open;
      });
    },
    setModalTitle(title) {
      setState(({ state }) => {
        state.title = title;
      });
    },
    setModalChildren(children) {
      setState(({ state }) => {
        state.children = children;
      });
    },
  };
});
