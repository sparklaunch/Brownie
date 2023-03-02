import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TryContentsOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
`;

const TryContentsInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

export { TryContentsOuterContainer, TryContentsInnerContainer };
