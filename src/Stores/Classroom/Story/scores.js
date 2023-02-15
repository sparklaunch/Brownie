import { atom } from "recoil";

const scoresAtom = atom({
  key: "scores",
  default: {}
});

export default scoresAtom;
