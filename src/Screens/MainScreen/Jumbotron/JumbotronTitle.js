import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  JumbotronTitleContainer,
  Title,
  TitleContainer
} from "./JumbotronTitleStyles";

const JumbotronTitle = () => {
  const navigator = useNavigate();
  return (
    <JumbotronTitleContainer>
      <TitleContainer>
        <Title>
          영어책 읽기가 처음인 우리 아이
          <br />
          AI 스피킹으로 시작부터 남다르게!
        </Title>
      </TitleContainer>
      <ButtonContainer>
        <Button
          variant={"outlined"}
          onClick={() => {
            navigator("/demo");
          }}
          sx={{
            position: "relative",
            fontFamily: "Jua",
            fontSize: 24,
            color: "white",
            letterSpacing: 1,
            borderColor: "white",
            width: 284,
            height: 67,
            bottom: -50,
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
      </ButtonContainer>
    </JumbotronTitleContainer>
  );
};

export default JumbotronTitle;
