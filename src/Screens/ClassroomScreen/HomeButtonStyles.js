import styled from "styled-components";

const HomeButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
  }
  @media screen and (min-width: 993px) {
    cursor: pointer;
  }
`;

const HomeButtonImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 36px;
    height: 36px;
  }
  @media screen and (min-width: 993px) {
    width: 48px;
    height: 48px;
  }
`;

export { HomeButtonContainer, HomeButtonImage };
