import styled from "styled-components";

const IntroductionTryDevicesContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const IntroductionTryDevicesImage = styled.img`
  @media (480px <= width <= 767px) {
    transform: scale(1.3) translateY(-25px) translateX(-30px);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
  @media (768px <= width <= 992px) {
    transform: scale(1.3) translateY(-25px) translateX(-30px);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
  @media (width >= 993px) {
    transform: scale(1.3) translateY(-25px) translateX(-30px);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  }
`;

export { IntroductionTryDevicesContainer, IntroductionTryDevicesImage };
