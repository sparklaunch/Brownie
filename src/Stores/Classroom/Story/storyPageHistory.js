import { atom } from "recoil";

const storyPageHistoryAtom = atom({
  key: "storyPageHistory",
  default: 0
});

export default storyPageHistoryAtom;
