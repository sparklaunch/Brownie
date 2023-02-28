import styled from "styled-components";

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
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (768px <= width <= 992px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export { MyPageTabsOuterContainer, MyPageTabsInnerContainer };
