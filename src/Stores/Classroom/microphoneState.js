import { atom } from "recoil";

const microphoneStateAtom = atom({
  key: "microphoneState",
  default: "idle" // "idle", "disabled", "left_recording", "right_recording"
});

export default microphoneStateAtom;
