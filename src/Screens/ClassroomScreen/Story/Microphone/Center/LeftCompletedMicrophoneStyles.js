import styled from "styled-components";

const LeftCompletedMicrophoneContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 1280px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 1280px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
`;

const MyVoiceButton = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 70px;
    height: 70px;
  }
`;

export {
  LeftCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
