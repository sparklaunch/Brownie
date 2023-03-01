import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TryContentsOuterContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
`;

const TryContentsInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
  }
`;

export { TryContentsOuterContainer, TryContentsInnerContainer };
