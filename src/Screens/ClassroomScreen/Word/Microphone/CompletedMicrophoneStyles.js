import styled from "styled-components";

const CompletedMicrophoneContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-20%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-20%);
  }

  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const RetryButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    margin-bottom: 5px;
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media (width <= 767px), (height <= 479px) {
    cursor: pointer;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
