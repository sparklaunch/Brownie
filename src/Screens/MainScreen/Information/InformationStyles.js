import styled from "styled-components";

const InformationOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const InformationInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    width: 90%;
    margin: 40px 0;
  }
  @media (min-width: 1280px) {
    width: 1200px;
    margin: 50px 0;
  }
`;

export { InformationOuterContainer, InformationInnerContainer };
