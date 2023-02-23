import styled from "styled-components";

const RightPageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: clip;
    cursor: pointer;
  }
`;

const RightPageImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    height: 100vh;
    ${({ shouldScale }) => (shouldScale ? "transform: scale(1.15);" : null)}
  }
`;

const ScoreHeaderContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%) scale(0.7);
  }
`;

export { RightPageContainer, RightPageImageContainer, ScoreHeaderContainer };
