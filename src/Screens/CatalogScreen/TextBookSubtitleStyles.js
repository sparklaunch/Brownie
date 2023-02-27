import styled from "styled-components";

const TextBookSubtitleOuterContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media (width >= 993px) and (height >= 768px) {
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
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextBookSubtitleTitle = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
  @media (width >= 993px) and (height >= 768px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
`;

const TextBookSubtitleDescription = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-size: 20px;
    color: #515151;
    font-weight: lighter;
  }
  @media (width >= 993px) and (height >= 768px) {
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
