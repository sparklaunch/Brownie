import { atom } from "recoil";

const currentWordAtom = atom({
  key: "currentWord",
  default: 0
});

export default currentWordAtom;
