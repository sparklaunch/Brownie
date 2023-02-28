import { Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import couponAtom from "../../../Stores/Auth/coupon";
import couponMessageAtom from "../../../Stores/Auth/couponMessage";
import isCouponValidAtom from "../../../Stores/MyPage/isCouponValid";
import {
  CouponMessageText,
  CouponRegistrationContainer,
  CouponRegistrationInnerContainer,
  CouponRegistrationOuterContainer,
  CouponRegistrationText
} from "./CouponRegistrationStyles";

const CouponRegistration = () => {
  const [coupon, setCoupon] = useRecoilState(couponAtom);
  const [couponMessage, setCouponMessage] = useRecoilState(couponMessageAtom);
  const [isCouponValid, setIsCouponValid] = useRecoilState(isCouponValidAtom);
  const onCouponRegistrationClick = () => {
    if (coupon.length === 0) {
      setCouponMessage("쿠폰 번호를 입력해주세요");
      setIsCouponValid(false);
    } else {
      setCouponMessage("쿠폰 번호가 유효하지 않습니다. 다시 확인해주세요");
      setIsCouponValid(false);
    }
  };
  const onCouponTextFieldChange = (event) => {
    setCoupon(event.target.value.replace(/\s/g, ""));
  };
  return (
    <CouponRegistrationOuterContainer>
      <CouponRegistrationInnerContainer>
        <CouponRegistrationText>쿠폰 등록</CouponRegistrationText>
        <CouponRegistrationContainer>
          <TextField
            value={coupon}
            onChange={onCouponTextFieldChange}
            variant={"outlined"}
            error={coupon.length > 0 && !isCouponValid}
            size={"small"}
            label={"예) ######"}
            sx={{
              width: "300px"
            }}
          />
          <Button
            variant={"contained"}
            sx={{
              marginLeft: "10px",
              paddingX: "30px",
              backgroundColor: "#222222",
              "&:hover": {
                backgroundColor: "#222222"
              }
            }}
            onClick={onCouponRegistrationClick}
          >
            등록
          </Button>
        </CouponRegistrationContainer>
      </CouponRegistrationInnerContainer>
      {couponMessage.length > 0 && (
        <CouponMessageText>{couponMessage}</CouponMessageText>
      )}
    </CouponRegistrationOuterContainer>
  );
};

export default CouponRegistration;
