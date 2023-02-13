import { atom } from "recoil";

const rightMicrophoneStateAtom = atom({
  key: "rightMicrophoneState",
  default: "idle"
});

export default rightMicrophoneStateAtom;
