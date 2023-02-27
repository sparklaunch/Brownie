import { atom } from "recoil";

const temporaryGlowBorderDirectionAtom = atom({
  key: "temporaryGlowBorderDirection",
  default: "left"
});

export default temporaryGlowBorderDirectionAtom;
