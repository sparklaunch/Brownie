import { atom } from "recoil";

const wordScoresAtom = atom({
  key: "wordScores",
  default: {}
});

export default wordScoresAtom;
