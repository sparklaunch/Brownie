import { Button, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import couponAtom from "../../../Stores/Auth/coupon";

const CouponRegistration = () => {
  const [coupon, setCoupon] = useRecoilState(couponAtom);
  return (
    <div className={`mb-12`}>
      <p className={`border-l-4 border-[#00AEA8] pl-3 mb-3 text-[20px]`}>
        쿠폰 등록
      </p>
      <div className={`flex flex-row`}>
        <TextField
          value={coupon}
          onChange={(event) => setCoupon(event.target.value)}
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
            backgroundColor: "#222222"
          }}
        >
          등록
        </Button>
      </div>
    </div>
  );
};

export default CouponRegistration;
