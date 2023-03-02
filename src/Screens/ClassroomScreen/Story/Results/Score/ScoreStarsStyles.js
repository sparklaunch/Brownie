import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`;

export { ScoreStarsContainer };
