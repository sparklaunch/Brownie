import {
  CheckIcon,
  CouponCautionDetailContainer,
  CouponCautionDetailText
} from "./CouponCautionDetailStyles";

const CouponCautionDetail = () => {
  return (
    <>
      <CouponCautionDetailContainer>
        <CheckIcon
          src={"assets/images/icons/check_icon.svg"}
          alt={"Check Icon"}
        />
        <CouponCautionDetailText>
          유효기간이 지난 쿠폰은 등록 및 사용될 수 없습니다
        </CouponCautionDetailText>
      </CouponCautionDetailContainer>
      <CouponCautionDetailContainer>
        <CheckIcon
          src={"assets/images/icons/check_icon.svg"}
          alt={"Check Icon"}
        />
        <CouponCautionDetailText>
          쿠폰은 ID에 귀속되며, 이미 입력된 쿠폰은 재등록이 불가합니다
        </CouponCautionDetailText>
      </CouponCautionDetailContainer>
    </>
  );
};

export default CouponCautionDetail;
