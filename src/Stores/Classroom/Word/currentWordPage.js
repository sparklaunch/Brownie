import { atom } from "recoil";

const currentWordPageAtom = atom({
  key: "currentWordPage",
  default: 0
});

export default currentWordPageAtom;
