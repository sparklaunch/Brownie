import styled from "styled-components";

const TryContentsOuterContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
`;

const TryContentsInnerContainer = styled.div`
  @media (width <= 767px) {
    width: 1200px;
  }

  @media (768px <= width <= 992px) {
    width: 1200px;
  }

  @media (width >= 993px) {
    width: 1200px;
  }
`;

export { TryContentsOuterContainer, TryContentsInnerContainer };
