import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    margin-bottom: 10px;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-bottom: 10px;
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }

  @media (min-width: 993px) and (min-height: 768px) {
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
