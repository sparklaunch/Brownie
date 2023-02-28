import styled from "styled-components";

const StoryPreviewContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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

const StoryCornerTitle = styled.p`
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

const StoryCornerText = styled.p`
  @media (480px <= width <= 767px) {
    color: #515151;
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 60px;
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

const StoryPreviewImage = styled.img`
  @media (480px <= width <= 767px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 384px;
  }
  @media (768px <= width <= 992px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 384px;
  }
  @media (width >= 993px) {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 384px;
  }
`;

export {
  StoryPreviewContainer,
  StoryCornerTitle,
  StoryCornerText,
  StoryPreviewImage
};
