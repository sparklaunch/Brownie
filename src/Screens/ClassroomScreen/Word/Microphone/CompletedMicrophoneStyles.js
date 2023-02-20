import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButton = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
  @media (min-width: 1280px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
  @media (min-width: 1280px) {
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
