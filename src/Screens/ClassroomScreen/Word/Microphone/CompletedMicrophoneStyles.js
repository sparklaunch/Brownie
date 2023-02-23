import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButton = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
  @media (min-width: 993px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
  @media (min-width: 993px) {
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
