import { atom } from "recoil";

const wordMicrophoneStateAtom = atom({
  key: "wordMicrophoneState",
  default: "idle" // "idle", "recording"
});

export default wordMicrophoneStateAtom;
