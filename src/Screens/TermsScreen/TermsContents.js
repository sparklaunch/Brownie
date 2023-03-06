import {
  TermsContentsContainer,
  TermsItem,
  TermsText,
  TermsTitle
} from "./TermsContentsStyles";

const TermsContents = () => {
  return (
    <TermsContentsContainer>
      <TermsText>
        회원가입 서비스를 위하여 아래의 개인정보 수집, 이용에 대한 내용을 자세히
        읽어보신 후, 동의 여부를 결정하여 주시기 바랍니다.
      </TermsText>
      <TermsItem>
        <TermsTitle>1. 개인정보의 수집 및 이용 목적</TermsTitle>
        <TermsText>
          개인 식별, 부정 이용 및 비인가 사용 방지, 가입 의사 확인 등 회원가입
          서비스를 제공하기 위함.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>2. 개인정보 수집 항목</TermsTitle>
        <TermsText>- (필수) 아이디, 비밀번호, 휴대폰 번호, 학생 이름</TermsText>
        <TermsText>- (선택) 학생의 생년월일</TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>3. 개인정보 보유 및 이용 기간</TermsTitle>
        <TermsText>
          회원 탈퇴 시, 또는 타 법령에 근거하여 보유하며, 보유 기간 만료 시,
          복구 불가능한 방법으로 삭제합니다.
        </TermsText>
        <TermsText>
          위와 같은 개인정보 수집, 이용의 동의에 거부할 권리가 있습니다. 그러나
          동의를 거부할 경우 회원가입 서비스를 제공받으실 수 없습니다.
        </TermsText>
      </TermsItem>
    </TermsContentsContainer>
  );
};

export default TermsContents;
