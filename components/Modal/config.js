import { ModalContent } from "../../components";

export const config = {
  modal1: {
    title: "Title modal from button 1",
    children: (
      <ModalContent
        amount="$12.25"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, doloribus dignissimos quidem repellendus odit sequi maiores hic cupiditate aliquid minus, eos inventore perferendis numquam quaerat, vel accusamus? Delectus, minima."
      />
    ),
  },
  modal2: {
    title: "Title modal from button 2",
    children: (
      <ModalContent
        amount="$222.75"
        description="hic cupiditate aliquid minus, eos inventore perferendis numquam quaerat, vel accusamus? Delectus, minima."
      />
    ),
  },
};
