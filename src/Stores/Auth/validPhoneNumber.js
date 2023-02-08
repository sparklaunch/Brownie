import { selector } from "recoil";
import phoneNumberAtom from "./phoneNumber";

const validPhoneNumberSelector = selector({
  key: "validPhoneNumber",
  get: ({ get }) => {
    const phoneNumber = get(phoneNumberAtom);
    const phoneNumberRegex = /^\d{3}-?\d{3,4}-?\d{4}$/;
    if (phoneNumber.length === 0) {
      return true;
    }
    return phoneNumberRegex.test(phoneNumber);
  }
});

export default validPhoneNumberSelector;
