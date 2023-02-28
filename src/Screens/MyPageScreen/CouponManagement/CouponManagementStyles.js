import styled from "styled-components";

const CouponManagementOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const CouponManagementInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 1200px;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
  }
  @media (width >= 993px) {
    width: 1200px;
  }
`;

export { CouponManagementOuterContainer, CouponManagementInnerContainer };
