import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media (width <= 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  @media (width >= 993px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

export { ScoreStarsContainer };
