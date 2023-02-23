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
    align-items: center;
  }
`;

const TextBookSubtitleTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
`;

const TextBookSubtitleDescription = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    color: #515151;
    font-weight: lighter;
  }
`;

export {
  TextBookSubtitleOuterContainer,
  TextBookSubtitleInnerContainer,
  TextBookSubtitleTitle,
  TextBookSubtitleDescription
};
