import styled from "styled-components";

const RightCompletedMicrophoneContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: 0;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (min-width: 993px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
  @media screen and (min-width: 993px) {
    width: 70px;
    height: 70px;
  }
`;

const MyVoiceButton = styled.img`
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (min-width: 993px) {
    width: 70px;
    height: 70px;
  }
`;

export {
  RightCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
