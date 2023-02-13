import { atom } from "recoil";

const rightFinishedRecordingAtom = atom({
  key: "rightFinishedRecording",
  default: false
});

export default rightFinishedRecordingAtom;
