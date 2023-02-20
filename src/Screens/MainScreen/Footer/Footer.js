import {
  AddressContainer,
  AddressText,
  CopyrightContainer,
  CopyrightText,
  CustomerServiceNumberText,
  DetailContainer,
  FooterContainer,
  NameText,
  OwnerText,
  RegistrationNumberText
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <AddressContainer>
        <NameText>(주)키즈브라운</NameText>
        <AddressText>(04790) 서울특별시 성동구 성수일로 89, 605호</AddressText>
      </AddressContainer>
      <DetailContainer>
        <OwnerText>대표 : 유필상</OwnerText>
        <RegistrationNumberText>
          사업자등록번호 : 539-81-00787
        </RegistrationNumberText>
        <CustomerServiceNumberText>
          고객센터 : 02-512-8881
        </CustomerServiceNumberText>
      </DetailContainer>
      <CopyrightContainer>
        <CopyrightText>
          © Kids Brown Partners Co. Lid.. All rights reserved.
        </CopyrightText>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
