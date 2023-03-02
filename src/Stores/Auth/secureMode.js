import { atom } from "recoil";

const secureModeAtom = atom({
  key: "secureMode",
  default: false
});

export default secureModeAtom;
