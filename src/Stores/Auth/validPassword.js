import { selector } from "recoil";
import passwordAtom from "./password";

const validPasswordSelector = selector({
  key: "validPassword",
  get: ({ get }) => {
    const password = get(passwordAtom);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!?@#$%^*+=-])(?=.*[0-9]).{6,24}$/;
    if (password.length === 0) {
      return true;
    }
    return passwordRegex.test(password);
  }
});

export default validPasswordSelector;
