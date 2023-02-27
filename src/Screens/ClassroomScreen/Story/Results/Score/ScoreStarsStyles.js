import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  @media (width >= 993px) and (height >= 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

export { ScoreStarsContainer };
