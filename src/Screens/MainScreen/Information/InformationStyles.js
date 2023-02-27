import styled from "styled-components";

const InformationOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const InformationInnerContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 90%;
    margin: 40px 0;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1200px;
    margin: 50px 0;
  }
`;

export { InformationOuterContainer, InformationInnerContainer };
