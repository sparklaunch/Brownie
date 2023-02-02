import { atom } from "recoil";

const newPasswordAtom = atom({
  key: "newPassword",
  default: ""
});

export default newPasswordAtom;
