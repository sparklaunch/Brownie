import styled from "styled-components";

const YouDidItTextContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 993px) and (min-height: 768px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const YouDidItTextImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
  }

  @media (min-width: 993px) and (min-height: 768px) {
  }
`;

export { YouDidItTextContainer, YouDidItTextImage };
