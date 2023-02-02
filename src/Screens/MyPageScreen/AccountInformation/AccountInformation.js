import AccountIcon from "./AccountIcon";
import AccountTitle from "./AccountTitle";

const AccountInformation = () => {
  return (
    <div className={`flex flex-row justify-center bg-[#F9F9F9] p-12`}>
      <div className={`w-[1200px]`}>
        <AccountIcon />
        <AccountTitle />
      </div>
    </div>
  );
};

export default AccountInformation;
