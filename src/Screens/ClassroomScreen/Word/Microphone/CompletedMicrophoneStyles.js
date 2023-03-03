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
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 10px;
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    margin-right: 20px;
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
`;

const MyVoiceButton = styled.img`
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 55px;
    height: 55px;
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
`;

export { CompletedMicrophoneContainer, RetryButton, MyVoiceButton };
