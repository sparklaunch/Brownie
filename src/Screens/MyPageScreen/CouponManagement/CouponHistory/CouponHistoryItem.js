import {
  CouponBoxContainer,
  CouponBoxTitle,
  CouponCodeText,
  CouponDateFromText,
  CouponDateToText,
  CouponHistoryItemContainer,
  UsedCouponContainer,
  UsedCouponText
} from "./CouponHistoryItemStyles";

const CouponHistoryItem = ({ used = false }) => {
  return (
    <CouponHistoryItemContainer>
      <CouponBoxContainer>
        <CouponBoxTitle>쿠폰코드</CouponBoxTitle>
        <CouponCodeText>A001 23 E01 06 0001</CouponCodeText>
        <CouponDateFromText>2023.01.01 00:23 부터</CouponDateFromText>
        <CouponDateToText>2023.03.30 00:00 까지</CouponDateToText>
      </CouponBoxContainer>
      {used && (
        <UsedCouponContainer>
          <UsedCouponText>사용완료</UsedCouponText>
        </UsedCouponContainer>
      )}
    </CouponHistoryItemContainer>
  );
};

export default CouponHistoryItem;
