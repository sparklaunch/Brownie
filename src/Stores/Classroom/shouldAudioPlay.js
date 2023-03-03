import { atom } from "recoil";

const shouldAudioPlayAtom = atom({
  key: "shouldAudioPlay",
  default: true
});

export default shouldAudioPlayAtom;
