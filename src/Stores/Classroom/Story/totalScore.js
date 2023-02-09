import { atom } from "recoil";

const totalScoreAtom = atom({
  key: "totalScore",
  default: {
    score: 0,
    id: 0
  }
});

export default totalScoreAtom;
