import styled from "styled-components";

const RightCompletedMicrophoneContainer = styled.div`
  @media (width <= 767px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media (width <= 767px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media (width <= 767px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 90px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media (width <= 767px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

const MyVoiceButton = styled.img`
  @media (width <= 767px) {
    width: 50px;
    height: 50px;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export {
  RightCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
