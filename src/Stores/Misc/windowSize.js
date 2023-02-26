import { atom } from "recoil";

const windowSizeAtom = atom({
  key: "windowSize",
  default: [0, 0]
});

export default windowSizeAtom;
