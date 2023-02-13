import { atom } from "recoil";

const leftFinishedAtom = atom({
  key: "leftFinished",
  default: false
});

export default leftFinishedAtom;
