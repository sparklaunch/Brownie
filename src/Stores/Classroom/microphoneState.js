import { atom } from "recoil";

const microphoneStateAtom = atom({
  key: "microphoneState",
  default: "idle"
});

export default microphoneStateAtom;
