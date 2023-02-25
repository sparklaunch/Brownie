import styled from "styled-components";

const RightCompletedMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 993px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 993px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`;

const MyVoiceButton = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    width: 50px;
    height: 50px;
  }
`;

export {
  RightCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
