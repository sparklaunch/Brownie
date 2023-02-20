import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
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
`;

const MyVoiceButton = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
