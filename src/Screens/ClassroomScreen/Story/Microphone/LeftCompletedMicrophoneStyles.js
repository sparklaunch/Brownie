import styled from "styled-components";

const LeftCompletedMicrophoneContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  }

  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButtonContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (width >= 993px) and (height >= 768px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButtonContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

const RetryButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

const MyVoiceButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    width: 50px;
    height: 50px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 50px;
    height: 50px;
  }

  @media (width >= 993px) and (height >= 768px) {
  }
`;

export {
  LeftCompletedMicrophoneContainer,
  RetryButtonContainer,
  MyVoiceButtonContainer,
  RetryButton,
  MyVoiceButton
};
