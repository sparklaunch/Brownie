import {
  CouponCodeSpan,
  MyInformationInnerContainer,
  MyInformationOuterContainer,
  MyInformationTitle,
  PlainText
} from "./MyInformationStyles";

const MyInformation = () => {
  return (
    <MyInformationOuterContainer>
      <MyInformationTitle>내 정보</MyInformationTitle>
      <MyInformationInnerContainer>
        <PlainText>이름 : 홍길동</PlainText>
        <PlainText>구매상품 : 패키지 A 상품</PlainText>
        <PlainText>
          이용쿠폰 : <CouponCodeSpan>A001 23 E01 06 0001</CouponCodeSpan>
        </PlainText>
        <PlainText>이용기간 : 2023.05.06 ~ 2023.12.31</PlainText>
      </MyInformationInnerContainer>
    </MyInformationOuterContainer>
  );
};

export default MyInformation;
