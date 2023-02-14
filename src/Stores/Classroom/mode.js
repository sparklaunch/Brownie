import { atom } from "recoil";

const modeAtom = atom({
  key: "mode",
  default: "story"
});

export default modeAtom;
