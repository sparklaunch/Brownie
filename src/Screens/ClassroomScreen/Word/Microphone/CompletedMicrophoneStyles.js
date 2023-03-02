import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-20%);
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-20%);
  }

  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButton = styled.img`
  @media screen and (max-width: 767px) {
    margin-bottom: 5px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
