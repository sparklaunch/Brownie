import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

export { ScoreStarsContainer };
