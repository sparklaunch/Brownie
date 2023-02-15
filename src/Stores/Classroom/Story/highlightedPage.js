import { atom } from "recoil";

const highlightedPageAtom = atom({
  key: "highlightedPage",
  default: 1
});

export default highlightedPageAtom;
