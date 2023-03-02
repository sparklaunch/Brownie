import styled from "styled-components";

const IntroductionTryDevicesContainer = styled.div`
  @media (480px <= width <= 767px) {
    margin-top: 32px;
  }
  @media (768px <= width <= 992px) {
    margin-top: 48px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const IntroductionTryDevicesImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
  @media (768px <= width <= 992px) {
    width: 100%;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
  @media (width >= 993px) {
    transform: scale(1.3) translateY(-25px) translateX(-30px);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
`;

export { IntroductionTryDevicesContainer, IntroductionTryDevicesImage };
