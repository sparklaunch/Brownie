import { atom } from "recoil";

const signInErrorMessageAtom = atom({
  key: "signInErrorMessage",
  default: ""
});

export default signInErrorMessageAtom;
