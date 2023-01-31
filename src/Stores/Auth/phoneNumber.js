import { atom } from "recoil";

const phoneNumberAtom = atom({
  key: "phoneNumber",
  default: ""
});

export default phoneNumberAtom;
