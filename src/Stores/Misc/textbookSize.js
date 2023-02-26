import { atom } from "recoil";

const textbookSizeAtom = atom({
  key: "textbookSize",
  default: {
    width: 0,
    height: 0
  }
});

export default textbookSizeAtom;
