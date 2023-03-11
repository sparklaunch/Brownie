import styled from "styled-components";

const YouDidItTextContainer = styled.div`
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media screen and (min-width: 993px) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const YouDidItTextImage = styled.img`
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
  }

  @media screen and (min-width: 993px) {
  }
`;

export { YouDidItTextContainer, YouDidItTextImage };
