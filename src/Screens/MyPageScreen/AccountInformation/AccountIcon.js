import { AccountIconContainer, AccountLockIcon } from "./AccountIconStyles";

const AccountIcon = () => {
  return (
    <AccountIconContainer>
      <AccountLockIcon
        src={"assets/images/icons/user_lock_icon.svg"}
        alt={"User with Lock Icon"}
      />
    </AccountIconContainer>
  );
};

export default AccountIcon;
