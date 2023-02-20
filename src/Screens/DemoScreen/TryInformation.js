import {
  TryInformationContainer,
  TryInformationItem,
  TryInformationItemText
} from "./TryInformationStyles";

const TryInformation = () => {
  return (
    <TryInformationContainer>
      <TryInformationItem>
        <img src={"assets/images/icons/check_icon.svg"} alt={"Check Icon"} />
        <TryInformationItemText>
          AI 스피킹 학습 프로그램을 체험하실 수 있습니다.
        </TryInformationItemText>
      </TryInformationItem>
      <TryInformationItem>
        <img src={"assets/images/icons/check_icon.svg"} alt={"Check Icon"} />
        <TryInformationItemText>
          원하는 교재를 선택해주세요.
        </TryInformationItemText>
      </TryInformationItem>
    </TryInformationContainer>
  );
};

export default TryInformation;
