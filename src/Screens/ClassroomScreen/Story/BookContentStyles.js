import styled from "styled-components";

const GlowingContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border-radius: 16px;
    box-shadow: 0 0 5px 5px #ffd53d, 0 0 10px 5px #ffd53d, 0 0 15px 5px #ffd53d,
      inset 0 0 5px 5px #ffd53d, inset 0 0 10px 5px #ffd53d,
      inset 0 0 15px 5px #ffd53d;
  }
`;

const LeftPageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
`;

const PagesContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
`;

export { GlowingContainer, LeftPageContainer, PagesContainer };
