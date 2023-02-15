import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JumbotronTitle = () => {
  const navigator = useNavigate();
  return (
    <div className={`flex flex-col justify-between`}>
      <div className={`mb-[54px] relative top-[-50px]`}>
        <p className={`text-[40px] font-bold text-white font-[GmarketSans]`}>
          영어책 읽기가 처음인 우리 아이
        </p>
        <p className={`text-[40px] font-bold text-white font-[GmarketSans]`}>
          AI 스피킹으로 시작부터 남다르게!
        </p>
      </div>
      <Button
        variant={"outlined"}
        onClick={() => {
          navigator("/demo");
        }}
        sx={{
          position: "relative",
          bottom: "-50px",
          fontFamily: "Jua",
          fontSize: 24,
          color: "white",
          letterSpacing: 1,
          borderColor: "white",
          width: 284,
          height: 67,
          backgroundColor: "#F34D7E",
          borderRadius: 2,
          ":hover": {
            borderColor: "white",
            backgroundColor: "#F34D7E"
          }
        }}
      >
        무료 체험
      </Button>
    </div>
  );
};

export default JumbotronTitle;
