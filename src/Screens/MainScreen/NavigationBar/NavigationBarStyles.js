import styled from "styled-components";

const NavigationBarOuterContainer = styled.div`
  @media (min-width: 767px) and (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const NavigationBarInnerContainer = styled.div`
  @media (min-width: 767px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 56px;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 140px;
    justify-content: space-between;
    align-items: center;
  }
`;

export { NavigationBarOuterContainer, NavigationBarInnerContainer };
