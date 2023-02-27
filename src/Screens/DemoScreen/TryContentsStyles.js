import styled from "styled-components";

const TryContentsOuterContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 24px 0 48px 0;
  }
  @media (min-width: 993px) and (min-height: 768px) {
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
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1200px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 1200px;
  }
`;

export { TryContentsOuterContainer, TryContentsInnerContainer };
