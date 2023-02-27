import styled from "styled-components";

const WordImageContainer = styled.div`
  @media (width <= 767px) {
    position: relative;
    width: 76%;
    height: 76%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    position: relative;
    width: 76%;
    height: 76%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    position: relative;
    width: 76%;
    height: 76%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WordIllustration = styled.img`
  @media (width <= 767px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
`;

const WordContainer = styled.div`
  @media (width <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const MegaphoneImage = styled.img`
  @media (width <= 767px) {
    margin-right: 12px;
    cursor: pointer;
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-right: 12px;
    cursor: pointer;
  }
  @media (min-width: 993px) and (min-height: 768px) {
    margin-right: 12px;
    cursor: pointer;
  }
`;

const WordText = styled.p`
  @media (width <= 767px) {
    font-weight: bolder;
    font-size: 60px;
    ${(props) => `color: ${props.color};`}
  }
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-weight: bolder;
    font-size: 60px;
    ${(props) => `color: ${props.color};`}
  }
  @media (min-width: 993px) and (min-height: 768px) {
    font-weight: bolder;
    font-size: 60px;
    ${(props) => `color: ${props.color};`}
  }
`;

export {
  WordImageContainer,
  WordIllustration,
  WordContainer,
  MegaphoneImage,
  WordText
};
