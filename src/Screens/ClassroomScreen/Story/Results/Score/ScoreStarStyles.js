import styled from "styled-components";

const ScoreStarImage = styled.img`
  @media (width <= 767px) {
    width: 26px;
    height: 26px;
  }

  @media (768px <= width <= 992px) {
    width: 26px;
    height: 26px;
  }

  @media (width >= 993px) {
    width: 26px;
    height: 26px;
  }
`;

export { ScoreStarImage };
