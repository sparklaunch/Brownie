import styled from "styled-components";

const NavigationContentTopContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 24px;
  }
`;

const NavigationLink = styled.p`
  @media screen and (max-width: 767px) {
    cursor: pointer;
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    cursor: pointer;
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
  @media screen and (min-width: 993px) {
    cursor: pointer;
    margin-right: 24px;
    color: #3d3d3d;
    font-size: 18px;
  }
`;

export { NavigationContentTopContainer, NavigationLink };
