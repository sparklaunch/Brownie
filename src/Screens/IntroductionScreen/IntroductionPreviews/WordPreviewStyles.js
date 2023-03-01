import styled from "styled-components";

const WordPreviewContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const WordCornerTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const WordCornerText = styled.p`
  @media (480px <= width <= 767px) {
    color: #515151;
    font-size: 18px;
    line-height: 1.5;
    &:last-of-type {
      margin-bottom: 24px;
    }
  }
  @media (768px <= width <= 992px) {
    color: #515151;
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 60px;
    }
  }
  @media (width >= 993px) {
    color: #515151;
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 60px;
    }
  }
`;

const WordPreviewImage = styled.img`
  @media (480px <= width <= 767px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (768px <= width <= 992px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (width >= 993px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export {
  WordPreviewContainer,
  WordCornerTitle,
  WordCornerText,
  WordPreviewImage
};
