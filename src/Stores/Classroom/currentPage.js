import { atom } from "recoil";

const currentPageAtom = atom({
  key: "currentPage",
  default: 0
});

export default currentPageAtom;
