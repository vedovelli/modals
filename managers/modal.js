import create from "zustand";
import produce from "immer";

const initialState = {
  open: false,
  title: "",
};

export const useModalManager = create((set) => {
  const setState = (fn) => set(produce(fn));

  return {
    state: {
      ...initialState,
    },
    actions: {
      toggle() {
        setState(({ state }) => {
          state.open = !state.open;
        });
      },
      setTitle(title) {
        setState(({ state }) => {
          state.title = title;
        });
      },
    },
  };
});