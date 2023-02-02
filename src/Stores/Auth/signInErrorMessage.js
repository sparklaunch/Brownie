import { atom } from "recoil";

const signInErrorMessageAtom = atom({
  key: "signInErrorMessage",
  default: "테스트용 에러 메시지입니다."
});

export default signInErrorMessageAtom;
