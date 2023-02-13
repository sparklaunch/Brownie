import { atom } from "recoil";

const microphoneStateAtom = atom({
  key: "microphoneState",
  default: "idle" // "idle", "disabled", "left_recording", "right_recording", "left_completed", "right_completed"
});

export default microphoneStateAtom;
