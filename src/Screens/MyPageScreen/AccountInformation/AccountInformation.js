import AccountIcon from "./AccountIcon";
import AccountTitle from "./AccountTitle";
import PasswordField from "./PasswordField";
import AccountButtons from "./AccountButtons";
import Footer from "../../MainScreen/Footer/Footer";
import {
  AccountInformationInnerContainer,
  AccountInformationOuterContainer
} from "./AccountInformationStyles";

const AccountInformation = () => {
  return (
    <>
      <AccountInformationOuterContainer>
        <AccountInformationInnerContainer>
          <AccountIcon />
          <AccountTitle />
          <PasswordField />
          <AccountButtons />
          {/*<ModificationForm />*/}
        </AccountInformationInnerContainer>
      </AccountInformationOuterContainer>
      <Footer />
    </>
  );
};

export default AccountInformation;
