import {
  AccountTitleContainer,
  PasswordConfirmationText,
  PasswordConfirmationTitle
} from "./AccountTitleStyles";

const AccountTitle = () => {
  return (
    <AccountTitleContainer>
      <PasswordConfirmationTitle>비밀번호 재확인</PasswordConfirmationTitle>
      <PasswordConfirmationText>
        개인정보 보호를 위해 회원님의 비밀번호를 다시 한번 확인합니다
      </PasswordConfirmationText>
    </AccountTitleContainer>
  );
};

export default AccountTitle;
