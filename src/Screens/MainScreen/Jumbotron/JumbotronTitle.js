import { Button } from "@mui/material";

const JumbotronTitle = () => {
  return (
    <div>
      <div className={`mb-[54px]`}>
        <p className={`text-[50px] text-white`}>
          영어책 읽기가 처음인 우리 아이
        </p>
        <p className={`text-[50px] text-white`}>
          AI 스피킹으로 시작부터 남다르게!
        </p>
      </div>
      <Button
        variant={"outlined"}
        sx={{
          fontFamily: "Jua",
          fontSize: 24,
          color: "white",
          letterSpacing: 1,
          borderColor: "white",
          width: 284,
          height: 67
        }}
      >
        무료 체험
      </Button>
    </div>
  );
};

export default JumbotronTitle;
