import styled from "styled-components";

const ScoreStarsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
  @media (min-width: 993px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }
`;

export { ScoreStarsContainer };
