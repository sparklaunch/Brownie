import { atom } from "recoil";

const leftMicrophoneStateAtom = atom({
  key: "leftMicrophoneState",
  default: "idle"
});

export default leftMicrophoneStateAtom;
