import { atom } from "recoil";

const completedLevelsAtom = atom({
  key: "completedLevels",
  default: []
});

export default completedLevelsAtom;
