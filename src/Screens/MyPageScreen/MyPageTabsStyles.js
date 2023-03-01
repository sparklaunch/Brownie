import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const MyPageTabsOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px 0;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px 0;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px 0;
  }
`;

const MyPageTabsInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export { MyPageTabsOuterContainer, MyPageTabsInnerContainer };
