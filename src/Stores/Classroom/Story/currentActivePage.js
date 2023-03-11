import { atom } from "recoil";

const currentActivePageAtom = atom({
  key: "currentActivePage",
  default: "left"
});

export default currentActivePageAtom;
