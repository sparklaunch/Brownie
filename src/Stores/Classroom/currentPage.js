import { atom } from "recoil";

const currentPageAtom = atom({
  key: "currentPage",
  default: 1
});

export default currentPageAtom;
