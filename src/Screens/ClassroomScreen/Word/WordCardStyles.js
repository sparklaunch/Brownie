import styled from "styled-components";

const WordCardContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const WordCardText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 120px;
    font-weight: 900;
    margin-left: 24px;
    letter-spacing: -5px;
  }
  @media (min-width: 993px) {
    font-size: 120px;
    font-weight: 900;
    margin-left: 24px;
    letter-spacing: -5px;
  }
`;

export { WordCardContainer, WordCardText };
