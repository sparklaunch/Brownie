import {
  RecordingEnvironmentContainer,
  RecordingEnvironmentList,
  RecordingEnvironmentListItem,
  RecordingEnvironmentTitle,
  RecordingEnvironmentTitleContainer
} from "./RecordingEnvironmentStyles";

const RecordingEnvironment = () => {
  return (
    <RecordingEnvironmentContainer>
      <RecordingEnvironmentTitleContainer>
        <img
          src={"assets/images/icons/snowflake_icon.svg"}
          alt={"Snowflake Icon"}
        />
        <RecordingEnvironmentTitle>녹음 환경</RecordingEnvironmentTitle>
      </RecordingEnvironmentTitleContainer>
      <RecordingEnvironmentList>
        <RecordingEnvironmentListItem>
          정확한 심사를 위해, 조용한 공간에서 녹음하고, 녹음 중 타인의 목소리가
          섞이지 않도록 주의해주세요.
        </RecordingEnvironmentListItem>
        <RecordingEnvironmentListItem accented>
          정확한 테스트를 위해, 마이크를 이용해주세요.
        </RecordingEnvironmentListItem>
      </RecordingEnvironmentList>
    </RecordingEnvironmentContainer>
  );
};

export default RecordingEnvironment;
