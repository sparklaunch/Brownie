import { Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import couponAtom from "../../../Stores/Auth/coupon";
import couponMessageAtom from "../../../Stores/Auth/couponMessage";

const CouponRegistration = () => {
  const [coupon, setCoupon] = useRecoilState(couponAtom);
  const [couponMessage, setCouponMessage] = useRecoilState(couponMessageAtom);
  const onCouponRegistrationClick = () => {
    setCouponMessage("쿠폰 번호가 유효하지 않습니다. 다시 확인해주세요.");
  };
  const onCouponTextFieldChange = (event) => {
    setCoupon(event.target.value.replace(/\s/g, ""));
  };
  return (
    <div className={`mb-12`}>
      <div className={`mb-1`}>
        <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
          쿠폰 등록
        </p>
        <div className={`flex flex-row`}>
          <TextField
            value={coupon}
            onChange={onCouponTextFieldChange}
            variant={"outlined"}
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
        </div>
      </div>
      {couponMessage.length > 0 && (
        <p className={`text-[#EC1C47] text-[13px]`}>{couponMessage}</p>
      )}
    </div>
  );
};

export default CouponRegistration;
