import {
  TermsContentsContainer,
  TermsItem,
  TermsSubtitle,
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
      <TermsSubtitle>서비스 이용약관</TermsSubtitle>
      <TermsItem>
        <TermsTitle>제 1조 (목적)</TermsTitle>
        <TermsText>
          ① 이 약관은 ㈜키즈브라운(이하 "회사"라 합니다)이 제공하는 펀파닉스
          AI스피킹 서비스(이하 "서비스"라 합니다)를 이용함에 있어 회사와
          이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </TermsText>
        <TermsText>
          ② 이 약관은 회사가 제공하는 펀파닉스 AI스피킹 사이트 이용에 적용되는
          것이며, 제휴사에서 제공 중인 서비스는 이 약관 외에 별도의 기본 약관이
          적용됩니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 2조 (약관의 효력 및 변경)</TermsTitle>
        <TermsText>
          ① 이 약관은 회사에서 제공하는 서비스에 공지하거나, 전자우편 등의 기타
          방법을 통하여 이를 공지함으로써 효력이 발생합니다.
        </TermsText>
        <TermsText>
          ② 회사가 약관을 변경할 경우에는, 적용일자 및 변경 사유를 명시하여 현행
          약관과 함께, 서비스 초기 화면에 그 적용일자 10일(이용자에게 불리하거나
          중대한 사항의 변경은 30일) 전부터 적용일로부터 10일까지 공지하고, 기존
          회원에게는 변경될 약관, 적용일자 및 변경 사유(변경될 내용 중
          중요사항에 대한 설명을 포함한다)를 전자우편 주소로 발송합니다.
        </TermsText>
        <TermsText>
          ③ 회원은 변경된 약관에 동의하지 않을 경우 탈퇴를 요청할 수 있으며,
          변경된 약관의 효력 발생일로부터 10일 이후에도 거부 의사를 표시하지
          아니하고 서비스를 계속 사용할 경우, 약관의 변경 사항에 동의한 것으로
          간주됩니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 3조 (약관 외 준칙)</TermsTitle>
        <TermsText>
          이 약관은 회사가 제공하는 개별 서비스에 관한 이용 안내와 함께
          적용되며, 이 약관에 명시되지 아니한 사항에 대해서는 전기통신기본법,
          전기통신사업법, 정보통신망 이용촉진 등에 관한 법률 및 기타 관련 법령
          및 회사가 정한 서비스 이용 안내에 따릅니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 4조 (용어의 정의)</TermsTitle>
        <TermsText>
          ① 이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.
        </TermsText>
        <TermsText>
          1. 이용자: 회사와 서비스 이용 계약을 체결하여 회원제 서비스를 이용하는
          자를 말합니다.
        </TermsText>
        <TermsText>
          2. 이용자 번호(ID): 이용자 식별과 서비스 이용을 위하여 이용 계약 체결
          시, 이용자가 선정하고 회사가 부여하는 문자와 숫자의 조합을 말합니다.
        </TermsText>
        <TermsText>
          3. 비밀번호: 이용자 자신의 비밀을 보호하기 위하여 이용자 자신이 설정한
          문자와 숫자의 조합을 말합니다.
        </TermsText>
        <TermsText>
          4. 단말기: 서비스 제공을 받기 위해 이용자가 설치한 컴퓨터, 스마트
          디바이스 등을 말합니다.
        </TermsText>
        <TermsText>
          5. 서비스 이용: 이용자가 단말기를 이용하여 회사가 제공하는 정보 및
          서비스를 이용하는 것을 말합니다.
        </TermsText>
        <TermsText>
          6. 인터넷 서비스: 전 세계의 컴퓨터 네트워크와 연결되어 제공되는 전자
          우편, 파일 전송, 원격 로그인, 웹 등의 서비스룰 말합니다.
        </TermsText>
        <TermsText>
          7. 이용 계약: 서비스 이용과 관련하여 회사와 이용자 간에 체결하는
          계약을 말합니다.
        </TermsText>
        <TermsText>
          ② 이 약관에 사용하는 용어의 정의는 제 1항에서 정하는 것을 제외하고는
          관계 법령 및 서비스별 안내에서 정하는 바에 의합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 5조 (이용자의 종류)</TermsTitle>
        <TermsText>
          ① 펀파닉스 AI스피킹 서비스의 이용자는 회사가 제공하는 사이트에 가입한
          모든 회원을 말합니다.
        </TermsText>
        <TermsText>
          ② 회원은 회사가 제공하는 무료 서비스 이용이 가능하며, 유료 서비스의
          경우 금액을 지불하면 이용이 가능합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 6조 (이용 계약의 설립)</TermsTitle>
        <TermsText>
          ① 서비스 가입 신청 시, 본 약관을 읽고 "동의" 버튼을 누르면 이 약관에
          동의하는 것으로 간주됩니다.
        </TermsText>
        <TermsText>
          ② 이용자가 유료 서비스를 이용할 경우, 제 1항에 동의한 후 회사에 이용
          요금(회비)을 납부함으로써 이용 계약이 성립되며, 회사가 이를 확인하여
          인증 처리한 후, 이메일 또는 기타 방식의 공지 화면으로 서비스 이용이
          가능함을 통보합니다.
        </TermsText>
        <TermsText>
          ③ 이용 계약은 서비스 이용 신청자의 이용 약관 동의 후, 이용 신청에
          대하여 회사가 승낙함으로써 성립됩니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 7조 (이용 신청)</TermsTitle>
        <TermsText>
          서비스를 이용하기를 희망하는 자는 사이트 내 회원가입 절차를 거쳐
          신청합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 8조 (이용 신청의 승낙)</TermsTitle>
        <TermsText>
          ① 회사는 제 7조에 따른 이용 신청에 대하여 특별한 사정이 없는 한 접수
          순서대로 신청을 승낙합니다.
        </TermsText>
        <TermsText>
          ② 회사는 다음 각 호에 해당하는 경우 이용 신청에 대한 승낙을 제한할 수
          있고, 그 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
        </TermsText>
        <TermsText>1. 서비스 관련 설비에 여유가 없는 경우</TermsText>
        <TermsText>2. 기술상 지장이 있는 경우</TermsText>
        <TermsText>3. 기타 회사의 사정상 필요하다고 인정되는 경우</TermsText>
        <TermsText>
          ③ 회사는 다음 각 호에 해당하는 사항을 인지한 경우, 동 이용 계약 신청을
          승낙하지 아니할 수 있습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 9조 (개인정보의 보호 및 사용)</TermsTitle>
        <TermsText>① 회사는 이용자의 개인정보를 보호하고 존중합니다.</TermsText>
        <TermsText>
          ② 회사는 이용자가 서비스를 이용함에 있어, 온라인상에서 회사에게 제공한
          개인정보가 보호받을 수 있도록 최선을 다하고 있습니다. 이에
          통신비밀보호법, 전기통신사업법, 정보통신망이용촉진 등에 관한 법률,
          공공기관의 개인정보보호에 관한 법률 등 정보통신 서비스 제공자가
          준수하여야 할 관련 법규를 바탕으로, 개인정보보호정책을 만들어 이를
          준수하고 있습니다. 자세한 사항은 회사의 개인정보보호정책을 참고하시기
          바랍니다.
        </TermsText>
        <TermsText>
          ③ 회사는 이용 신청 시, 이용자가 제공하는 정보, 커뮤니티 활동, 각종
          이벤트(방송 포함) 참가를 위하여 이용자가 제공하는 정보, 그리고 기타
          서비스 이용 과정에서 수집되는 정보 등을 통하여, 이용자에 관한 정보를
          수집하며, 이용자의 개인정보는 본 이용 계약의 이행과 본 이용 계약상의
          서비스 제공을 위한 목적으로 사용됩니다.
        </TermsText>
        <TermsText>
          ④ 회사는 서비스 제공과 관련하여 취득한 이용자의 신상 정보를 본인의
          승낙 없이 제 3자에게 누설 또는 배포할 수 없으며, 상업적 목적으로
          사용할 수 없습니다. 다만, 다음의 각 호에 해당하는 경우에는 그러하지
          아니합니다.
        </TermsText>
        <TermsText>
          1. 정보통신서비스의 제공에 따른 요금 정산을 위하여 필요한 경우
        </TermsText>
        <TermsText>
          2. 통계 작성, 학술 연구 또는 시장 조사를 위하여 필요한 경우로서, 특정
          개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우
        </TermsText>
        <TermsText>
          3. 관계 법령에 의하여 수사상의 목적으로, 정해진 절차와 방법에 따라
          관계 기관의 요구가 있는 경우
        </TermsText>
        <TermsText>4. 다른 법률에 특별한 규정이 있는 경우</TermsText>
        <TermsText>5. 정보통신윤리위원회의 요청이 있는 경우</TermsText>
        <TermsText>
          ⑤ 회사는 서비스를 통해 이용자의 컴퓨터에 쿠키를 전송할 수 있습니다.
          이용자는 쿠키 수신을 거부하거나 쿠키 수신에 대해 경고하도록 브라우저
          설정을 변경할 수 있습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 10조 (계약 사항의 변경)</TermsTitle>
        <TermsText>
          ① 회원은 개인 정보 관리를 통해 언제든지 본인의 개인정보를 열람하고
          수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 회원의 성명, 성별,
          아이디 등은 수정이 불가합니다.
        </TermsText>
        <TermsText>
          ② 회원은 이용 신청 시 기재한 사항이 변경되었을 경우, 온라인으로 수정을
          해야 하며, 회원정보를 변경하지 아니하여 발생되는 문제의 책임은
          회원에게 있습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 11조 (회사의 의무)</TermsTitle>
        <TermsText>
          ① 회사는 다음 각 호의 사유가 발생한 경우를 제외하고, 계속적,
          안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
        </TermsText>
        <TermsText>
          1. 서비스용 설비의 보수, 정기 점검 또는 회사로 인한 부득이한 경우
        </TermsText>
        <TermsText>
          2. 전기통신사업법에 규정된 기간통신사업자가 전기 통신 서비스를 중지한
          경우
        </TermsText>
        <TermsText>
          3. 전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나
          발생할 우려가 있는 경우
        </TermsText>
        <TermsText>
          4. 설비 장애 또는 이용 폭주 등으로 인하여, 서비스 이용에 지장이 있는
          경우
        </TermsText>
        <TermsText>
          ② 관계 법령에 의한 수사상의 목적으로 관계 기관으로부터의 요청이 있는
          경우
        </TermsText>
        <TermsText>③ 정보통신윤리위원회의 요청이 있는 경우</TermsText>
        <TermsText>
          ④ 기타 관계 법령에서 정한 절차에 따른 요청이 있는 경우
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 12조 (이용자의 의무)</TermsTitle>
        <TermsText>
          ① 이용자는 관계 법령, 본 약관의 규정, 이용 안내 및 서비스 상에 공지한
          주의사항, 회사가 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에
          방해되는 행위를 하여서는 안 됩니다.
        </TermsText>
        <TermsText>
          ② 이용자는 회사의 사전 동의 없이, 서비스를 이용하여 어떠한 영리 행위도
          할 수 없으며, 법에 저촉되는 자료를 배포 또는 게재할 수 없습니다.
        </TermsText>
        <TermsText>
          ③ 이용자는 회사의 서비스를 사용함에 있어, 타인의 저작권, 재산권 침해
          요소가 없도록 하며, 침해 사실이 발견되었을 경우 이용자 스스로가
          해결하도록 합니다.
        </TermsText>
        <TermsText>
          ④ 이용자는 서비스와 관련하여 다음 사항을 하여서는 안 됩니다.
        </TermsText>
        <TermsText>
          1. 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복사, 복제,
          변경, 번역, 출판, 방송 및 기타의 방법으로 사용하거나, 이를 타인에게
          제공하는 행위
        </TermsText>
        <TermsText>
          2. 공공 질서 및 미풍양속에 위반되는 저속, 음란물을 게재 또는 음란
          사이트를 링크하거나, 유포 등 사회 질서를 해치는 행위
        </TermsText>
        <TermsText>
          3. 타인의 명예를 훼손하거나 모욕하는 행위, 타인의 지적재산권 등의
          권리를 침해하는 행위
        </TermsText>
        <TermsText>
          4. 해킹 또는 컴퓨터 바이러스를 유포하는 일, 타인의 의사에 반하여
          광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위
        </TermsText>
        <TermsText>5. 다른 이용자의 ID를 부정 사용하는 행위</TermsText>
        <TermsText>6. 다른 사용자의 개인 정보를 수집, 저장하는 행위</TermsText>
        <TermsText>
          7. 회사 직원, 운영자 등을 포함한 타인을 사칭하는 행위
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 13조 (양도 금지)</TermsTitle>
        <TermsText>
          이용자는 서비스의 이용 권한, 기타 이용 계약상의 지위를 타인에게 양도,
          증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 14조 (서비스 이용 범위)</TermsTitle>
        <TermsText>
          이용자는 회사를 통해 가입 시 발급된 ID 하나로 사이트에서 제공하는
          서비스를 이용하실 수 있습니다. 단, 회사가 아닌 별도의 제휴사에서
          제공하는 콘텐츠의 경우 아니한 경우도 있습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 15조 (서비스 이용 시간)</TermsTitle>
        <TermsText>
          ① 회사는 이용자의 이용 신청을 승낙한 때부터 즉시 서비스를 개시합니다.
        </TermsText>
        <TermsText>
          ② 서비스의 이용 시간은, 회사가 업무 및 기술상 특별한 지장이 없는 한
          연중무휴, 1일 24시간을 원칙으로 합니다. 단 회사는 시스템 정기 점검,
          증설 및 교체를 위해 회사가 정한 날이나 시간은 그러하지 아니하며,
          이때에는 공지사항이나 전자우편 등의 방법으로 이용자에게 안내합니다.
        </TermsText>
        <TermsText>
          ③ 회사는 일부 서비스의 경우 이용 가능 시간을 별도로 지정할 수
          있습니다. 다만 이 경우, 그 내용을 공지사항이나 전자우편 등의 방법으로
          안내합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 16조 (정보의 제공)</TermsTitle>
        <TermsText>
          회사는 이용자가 서비스 이용 중 필요가 있다고 인정되는 다양한 정보를
          공지사항이나 전자우편 등의 방법으로 이용자에게 제공할 수 있습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 17조 (결제 취소 및 환불 규정)</TermsTitle>
        <TermsText>
          ① 회사는 부득이한 사정으로 유료 서비스를 지속할 수 없을 경우, 이용자가
          잔여 이용 요금을 요구할 경우, 이용자 명의의 계좌로 환불합니다. 단,
          잔여 이용료 환불 시, 이는 회사가 규정한 환불 정책에 따릅니다.
        </TermsText>
        <TermsText>
          ② 요금 선납 이용자가 유료 서비스 이용 신청을 취소하고자 하는 경우에는
          취소 사유를 명기하여, 본인이 직접 고객센터로 전화나 문의 게시판을
          통하여 취소 신청할 수 있습니다.
        </TermsText>
        <TermsText>
          ③ 취소 또는 환불 신청을 받은 회사는 각 인터넷 서비스에 명기된 환불
          정책에 따라 취소 또는 환불 신청에 응할 수 있습니다. 단, 회사는 다음 각
          호에 해당하는 경우 이용자의 환불 신청을 승낙하지 아니할 수 있습니다.
        </TermsText>
        <TermsText>
          1. 이용자의 실수로 이용 기간 내에 서비스를 이용하지 못한 경우
        </TermsText>
        <TermsText>2. 환불 관련 제비용이 잔여 이용료를 초과할 경우</TermsText>
        <TermsText>3. 서비스에서 탈퇴한 후, 환불을 요구할 경우</TermsText>
        <TermsText>
          4. 서비스 이용을 위해 회사에서 지급한 제품 및 물품이 훼손, 파손된 경우
        </TermsText>
        <TermsText>5. 기타 정당한 환불 사유로 판명되지 않은 경우</TermsText>
        <TermsText>
          ④ 회사는 이용자로부터 해제 또는 해지 통보를 받은 경우, 5영업일 이내에
          대금을 환급합니다. 단, 실물 상품의 경우에는 각 인터넷 서비스에 명기된
          환불 정책을 따르며, 상품 수취 확인 후 5영업일 이내에 대금을
          환급합니다.
        </TermsText>
        <TermsText>
          ⑤ 사업자는 이용 대금의 결제와 동일한 방법으로 결제 대금을 환불해야
          하며, 동일한 방법으로 환불이 불가할 때에는 이를 사전에 고지하여야
          합니다.
        </TermsText>
        <TermsText>
          ⑥ 서비스 이용을 위해 회사가 제공하는 제품 및 물품이 훼손된 경우, 상품
          가치가 현저히 떨어지게 됨으로써, 원칙적으로 환불이 불가합니다.
        </TermsText>
        <TermsText>
          ⑦ 회사는 과오금이 발생한 경우, 이용 대금 결제와 동일한 방법으로 결제
          대금 전액을 환불하여야 합니다. 다만 동일한 방법으로 환불이 불가할
          때에는 이를 사전에 고지합니다. 또한 회사는 회원이 주장하는 과오금에
          대한 환불을 거부할 경우, 정당하게 이용 대금이 부과되었음을 입증할
          책임을 집니다.
        </TermsText>
        <TermsText>
          ⑧ 회사에게 책임이 있는 사유로 과오금이 발생한 경우, 사업자는 수수료
          등에 관계 없이 과오금 전액을 환불하여야 하며, 이용자에게 책임이 있는
          사유로 과오금이 발생한 경우, 회사가 과오금을 환불하는 데 소용되는
          비용은 합리적인 범위 내에서 이용자가 부담합니다.
        </TermsText>
        <TermsText>
          ⑨ 회사는 과오금의 환불 절차를 서비스이용자보호지침에 따라 처리합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 18조 (환불 정책 안내)</TermsTitle>
        <TermsText>
          펀파닉스 AI서비스를 이용하는 회원님들께 감사의 말씀을 드리며, 환불과
          관련한 규정을 아래에 안내합니다.
        </TermsText>
        <TermsText>
          결제 취소 및 환불 접수에 대해서는, 아래의 환불 신청 항목을 정확하게
          기입하셔야 정상적으로 접수가 됩니다.
        </TermsText>
        <TermsText>
          정상적으로 접수된 환불 신청 건에 한하여, 환불 접수 일자를 기준으로
          아래 환불 규정에 따라 처리해드립니다.
        </TermsText>
        <TermsText>
          기재한 내용이 부정확한 경우 환불 접수가 불가하며, 이로 인하여 회원이
          요청한 환불 건에 대해 부분 환불, 또는 환불이 불가할 수 있습니다.
        </TermsText>
        <TermsText>
          (환불 신청 항목 : 아이디 / 이름 / 연락처 / E-mail / 환불 사유)
        </TermsText>
        <TermsText>
          환불 신청 시 이용 문의 게시판을 이용할 경우, 개인정보 노출의 위험이
          있사오니, 1:1 메일 문의, 또는 고객센터에 유선 연락 후 환불을 진행해
          주시기 바랍니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 19조 (서비스 해제 또는 해지 시 대금의 환급)</TermsTitle>
        <TermsText>
          ① ㈜키즈브라운은 이용자로부터 해제 또는 해지 통보를 받은 후 5영업일
          이내에, 이용 기간을 제외하여 일할 계산된 대금을 이용자 명의의 계좌로
          환급합니다.
        </TermsText>
        <TermsText>
          ② ㈜키즈브라운은 이용 대금의 결제와 동일한 방법으로 결제 대금의 전부
          또는 일부를 환급합니다. 다만, 동일한 방법으로 환급이 불가할 경우에는
          즉시 이를 이용자에게 고지하고, 이용자의 재량에 따라 환급합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 20조 (손해배상)</TermsTitle>
        <TermsText>
          회사가 제공하는 서비스 중, 무료로 제공되는 서비스의 이용과 관련하여
          개인정보보호정책에서 정하는 내용에 해당하지 않는 사항에 대하여, 회사는
          어떠한 손해에도 책임을 지지 않습니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 21조 (면책조항)</TermsTitle>
        <TermsText>
          ① 회사는 이용자가 서비스를 통해 게재 또는 전송한 정보, 자료, 사실의
          정확성, 신뢰성 등의 내용에 관하여 어떠한 보증도 하지 아니하며,
          이용자의 서비스 자료에 대한 취사 선택 또는 이용으로 발생하는 손해 등에
          대해 책임을 지지 아니합니다.
        </TermsText>
        <TermsText>
          ② 회사는 이용자가 서비스를 이용하며 기대하는 손익이나, 서비스를 통하여
          얻은 자료로 인한 손해에 관하여 책임을 지지 아니합니다.
        </TermsText>
        <TermsText>
          ③ 회사는 이용자 상호간, 또는 이용자와 제 3자 상호간의 서비스를 매개로
          발생한 분쟁에 대해 개입할 의무가 없으며, 이로 인한 손해를 배상할
          책임도 없습니다.
        </TermsText>
        <TermsText>
          ④ 이용자의 귀책 사유로 인하여 서비스 이용의 장애가 발생한 경우에
          회사의 책임은 면제됩니다.
        </TermsText>
        <TermsText>
          ⑤ 본 약관의 규정을 위반함으로써 회사에 손해가 발생하게 되는 경우, 이
          약관을 위반한 이용자는 회사에 발생하는 모든 손해를 배상하여야 하며, 동
          손해로부터 회사를 면책시켜야 합니다.
        </TermsText>
      </TermsItem>
      <TermsItem>
        <TermsTitle>제 22조 (분쟁의 해결)</TermsTitle>
        <TermsText>
          ① 회사와 이용자 사이의 콘텐츠 계약에 관한 소의 관할은 제소 당시의
          이용자의 주소에 의하고, 주소가 없는 경우 거소를 관할하는 지방법원의
          전속관할로 합니다.
        </TermsText>
        <TermsText>
          ② 제소 당시 이용자의 주소 또는 거소가 분명하지 아니한 경우에는
          민사소송법에 따라 관할 법원을 정합니다.
        </TermsText>
      </TermsItem>
      <TermsTitle>&lt;부칙&gt; 공고 및 시행일 2023.03.06</TermsTitle>
    </TermsContentsContainer>
  );
};

export default TermsContents;
