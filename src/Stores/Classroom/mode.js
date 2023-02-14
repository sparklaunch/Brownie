import { atom } from "recoil";

const modeAtom = atom({
  key: "mode",
  default: "word"
});

export default modeAtom;
