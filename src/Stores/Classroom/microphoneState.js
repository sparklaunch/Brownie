import { atom } from "recoil";

const microphoneStateAtom = atom({
  key: "microphoneState",
  default: "idle" // "idle", "disabled", "recording".
});

export default microphoneStateAtom;
