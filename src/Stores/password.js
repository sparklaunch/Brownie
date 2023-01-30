import { atom } from "recoil";

const passwordAtom = atom({
  key: "password",
  default: ""
});

export default passwordAtom;
