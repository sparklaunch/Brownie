import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DemoButton,
  JumbotronTitleContainer,
  Title,
  TitleContainer
} from "./JumbotronTitleStyles";

const JumbotronTitle = () => {
  const navigate = useNavigate();
  return (
    <JumbotronTitleContainer>
      <TitleContainer>
        <Title>
          영어책 읽기가 처음인 우리 아이
          <br /> AI 스피킹으로 시작부터 남다르게!
        </Title>
      </TitleContainer>
      <ButtonContainer>
        <DemoButton onClick={() => navigate("/demo")}>무료 체험</DemoButton>
      </ButtonContainer>
    </JumbotronTitleContainer>
  );
};

export default JumbotronTitle;
