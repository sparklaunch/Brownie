import styled from "styled-components";

const NavigationContentTopContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
`;

const NavigationLink = styled.p`
  @media (480px <= width <= 767px) {
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media (768px <= width <= 992px) {
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media (width >= 993px) {
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
`;

export { NavigationContentTopContainer, NavigationLink };
