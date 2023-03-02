import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const CouponManagementOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const CouponManagementInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
  }
`;

export { CouponManagementOuterContainer, CouponManagementInnerContainer };
