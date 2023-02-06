import { atom } from "recoil";

const audioDurationAtom = atom({
  key: "audioDuration",
  default: 2000
});

export default audioDurationAtom;
