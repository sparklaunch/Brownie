import AccountIcon from "./AccountIcon";
import AccountTitle from "./AccountTitle";
import PasswordField from "./PasswordField";
import AccountButtons from "./AccountButtons";
import Footer from "../../MainScreen/Footer/Footer";
import {
  AccountInformationInnerContainer,
  AccountInformationOuterContainer
} from "./AccountInformationStyles";
import secureModeAtom from "../../../Stores/Auth/secureMode";
import { useRecoilState } from "recoil";
import ModificationForm from "./ModificationForm";

const AccountInformation = () => {
  const [secureMode, setSecureMode] = useRecoilState(secureModeAtom);
  return (
    <>
      <AccountInformationOuterContainer>
        <AccountInformationInnerContainer>
          {secureMode ? (
            <ModificationForm />
          ) : (
            <>
              <AccountIcon />
              <AccountTitle />
              <PasswordField />
              <AccountButtons />
            </>
          )}
        </AccountInformationInnerContainer>
      </AccountInformationOuterContainer>
      <Footer />
    </>
  );
};

export default AccountInformation;
