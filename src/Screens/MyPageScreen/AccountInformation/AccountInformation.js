import AccountIcon from "./AccountIcon";
import AccountTitle from "./AccountTitle";
import PasswordField from "./PasswordField";
import AccountButtons from "./AccountButtons";
import Footer from "../../MainScreen/Footer/Footer";

const AccountInformation = () => {
  return (
    <>
      <div className={`flex flex-row justify-center bg-[#F9F9F9] p-[100px]`}>
        <div className={`w-[1200px]`}>
          <AccountIcon />
          <AccountTitle />
          <PasswordField />
          <AccountButtons />
          {/*<ModificationForm />*/}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountInformation;
