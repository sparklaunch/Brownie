import styled from "styled-components";

const RightCompletedMicrophoneContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    z-index: 0;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }

  @media (768px <= width <= 992px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media (width <= 767px) {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (768px <= width <= 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (width >= 993px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media (width <= 767px) {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (768px <= width <= 992px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (width >= 993px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media (width <= 767px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  @media (768px <= width <= 992px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  @media (width >= 993px) {
  }
`;

const MyVoiceButton = styled.img`
  @media (width <= 767px) {
    width: 50px;
    height: 50px;
  }

  @media (768px <= width <= 992px) {
    width: 50px;
    height: 50px;
  }

  @media (width >= 993px) {
  }
`;

export {
  RightCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
