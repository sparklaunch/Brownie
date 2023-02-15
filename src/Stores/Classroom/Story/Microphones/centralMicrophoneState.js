import { atom } from "recoil";

const centralMicrophoneStateAtom = atom({
  key: "centralMicrophoneState",
  default: "idle"
});

export default centralMicrophoneStateAtom;
