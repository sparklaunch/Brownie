import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JumbotronTitle = () => {
  const navigator = useNavigate();
  return (
    <div>
      <div className={`mb-[54px]`}>
        <p className={`text-[50px] text-white font-[GmarketSans]`}>
          영어책 읽기가 처음인 우리 아이
        </p>
        <p className={`text-[50px] text-white font-[GmarketSans]`}>
          AI 스피킹으로 시작부터 남다르게!
        </p>
      </div>
      <Button
        variant={"outlined"}
        onClick={() => {
          navigator("/demo");
        }}
        sx={{
          fontFamily: "Jua",
          fontSize: 24,
          color: "white",
          letterSpacing: 1,
          borderColor: "white",
          width: 284,
          height: 67,
          ":hover": {
            borderColor: "white",
            backgroundColor: "transparent"
          }
        }}
      >
        무료 체험
      </Button>
    </div>
  );
};

export default JumbotronTitle;
