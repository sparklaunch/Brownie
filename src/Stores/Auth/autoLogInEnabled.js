import { atom } from "recoil";

const autoLogInEnabledAtom = atom({
  key: "autoLogInEnabled",
  default: false
});

export default autoLogInEnabledAtom;
