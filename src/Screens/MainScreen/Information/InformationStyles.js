import styled from "styled-components";

const InformationOuterContainer = styled.div`
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

const InformationInnerContainer = styled.div`
  @media (768px <= width <= 992px) {
    width: 90%;
    margin: 40px 0;
  }
  @media (width >= 993px) {
    width: 1200px;
    margin: 50px 0;
  }
`;

export { InformationOuterContainer, InformationInnerContainer };
