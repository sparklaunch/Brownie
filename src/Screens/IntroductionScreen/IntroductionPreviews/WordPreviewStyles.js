import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const WordPreviewContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const WordCornerTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

const WordCornerText = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.DARK_GRAY};
    font-size: 18px;
    line-height: 1.5;
    &:last-of-type {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.DARK_GRAY};
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 60px;
    }
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.DARK_GRAY};
    font-size: 18px;
    &:last-of-type {
      margin-bottom: 60px;
    }
  }
`;

const WordPreviewImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 384px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 384px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media screen and (min-width: 993px) {
    width: 384px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export {
  WordPreviewContainer,
  WordCornerTitle,
  WordCornerText,
  WordPreviewImage
};
