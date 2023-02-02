import { atom } from "recoil";

const newPasswordConfirmAtom = atom({
  key: "newPasswordConfirm",
  default: ""
});

export default newPasswordConfirmAtom;
