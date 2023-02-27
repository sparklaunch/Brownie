import styled from "styled-components";

const ScoreStarImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 26px;
    height: 26px;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export { ScoreStarImage };
