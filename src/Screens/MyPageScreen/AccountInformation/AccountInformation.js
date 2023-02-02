import AccountIcon from "./AccountIcon";
import AccountTitle from "./AccountTitle";
import PasswordField from "./PasswordField";
import AccountButtons from "./AccountButtons";

const AccountInformation = () => {
  return (
    <div className={`flex flex-row justify-center bg-[#F9F9F9] p-12`}>
      <div className={`w-[1200px]`}>
        <AccountIcon />
        <AccountTitle />
        <PasswordField />
        <AccountButtons />
      </div>
    </div>
  );
};

export default AccountInformation;
