import { atom } from "recoil";

const studentNameAtom = atom({
  key: "studentName",
  default: ""
});

export default studentNameAtom;
