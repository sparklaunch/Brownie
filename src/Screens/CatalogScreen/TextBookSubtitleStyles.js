import styled from "styled-components";

const TextBookSubtitleOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const TextBookSubtitleInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
  }
`;

export { TextBookSubtitleOuterContainer, TextBookSubtitleInnerContainer };
