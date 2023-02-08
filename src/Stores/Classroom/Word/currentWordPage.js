import { atom } from "recoil";

const currentWordPageAtom = atom({
  key: "currentWordPage",
  default: 1
});

export default currentWordPageAtom;
