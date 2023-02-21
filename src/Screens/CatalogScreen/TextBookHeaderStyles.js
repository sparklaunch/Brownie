import styled from "styled-components";

const TextBookHeaderOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 80px;
  }
`;

const TextBookHeaderInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextBookHeaderRectangle = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

const TextBookHeaderTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-top: 16px;
  }
`;

export {
  TextBookHeaderOuterContainer,
  TextBookHeaderInnerContainer,
  TextBookHeaderRectangle,
  TextBookHeaderTitle
};
