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

  @media (768px <= width <= 992px) {
    position: relative;
    width: 76%;
    height: 76%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (width >= 993px) {
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

  @media (768px <= width <= 992px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }

  @media (width >= 993px) {
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

  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const MegaphoneImage = styled.img`
  @media (width <= 767px) {
    margin-right: 12px;
    width: 40px;
    cursor: pointer;
    transform: translateY(3px);
  }

  @media (768px <= width <= 992px) {
    margin-right: 12px;
    cursor: pointer;
  }

  @media (width >= 993px) {
    margin-right: 12px;
    cursor: pointer;
    transform: translateY(3px);
  }
`;

const WordText = styled.p`
  @media (width <= 767px) {
    font-weight: bolder;
    font-size: 40px;
    ${(props) => `color: ${props.color};`}
  }

  @media (768px <= width <= 992px) {
    font-weight: bolder;
    font-size: 50px;
    ${(props) => `color: ${props.color};`}
  }

  @media (width >= 993px) {
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
