import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media (width <= 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  @media (768px <= width <= 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  @media (993px <= width <= 1279px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }
  @media (width >= 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

export { ScoreStarsContainer };
