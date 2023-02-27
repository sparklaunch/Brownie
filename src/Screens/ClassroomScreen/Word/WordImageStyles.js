import styled from "styled-components";

const WordImageContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (width >= 993px) and (height >= 768px) {
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
  @media (width <= 767px), (height <= 479px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }

  @media (width >= 993px) and (height >= 768px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
`;

const WordContainer = styled.div`
  @media (width <= 767px), (height <= 479px) {
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

  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const MegaphoneImage = styled.img`
  @media (width <= 767px), (height <= 479px) {
    margin-right: 12px;
    width: 40px;
    cursor: pointer;
    transform: translateY(3px);
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    margin-right: 12px;
    cursor: pointer;
  }

  @media (width >= 993px) and (height >= 768px) {
    margin-right: 12px;
    cursor: pointer;
    transform: translateY(3px);
  }
`;

const WordText = styled.p`
  @media (width <= 767px), (height <= 479px) {
    font-weight: bolder;
    font-size: 40px;
    ${(props) => `color: ${props.color};`}
  }

  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    font-weight: bolder;
    font-size: 50px;
    ${(props) => `color: ${props.color};`}
  }

  @media (width >= 993px) and (height >= 768px) {
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
