import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const NavigationContentBottom = () => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-row items-center justify-end`}>
      <Link to={"/classroom"} className={`mr-[32px]`}>
        온라인 학습관
      </Link>
      <Link to={"/introduction"} className={`mr-[32px]`}>
        프로그램 소개
      </Link>
      <Link to={"/information"} className={`mr-[32px]`}>
        교재 구성
      </Link>
      <Link to={"/mypage"} className={`mr-[32px]`}>
        마이페이지
      </Link>
      <Button
        variant={"contained"}
        onClick={() => {
          navigate("/signin");
        }}
        sx={{
          backgroundColor: "#1AB9C5",
          filter: "brightness(1.0)",
          fontFamily: "Jua",
          fontSize: 18,
          width: 104,
          height: 44,
          ":hover": {
            backgroundColor: "#1AB9C5",
            filter: "brightness(0.8)"
          }
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default NavigationContentBottom;
