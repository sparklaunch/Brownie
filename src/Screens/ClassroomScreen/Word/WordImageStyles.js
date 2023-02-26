import styled from "styled-components";

const WordImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    position: relative;
    width: 76%;
    height: 76%;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 993px) {
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
  @media (min-width: 768px) and (max-width: 992px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
  @media (min-width: 993px) {
    margin-top: 50px;
    height: 70%;
    object-fit: contain;
  }
`;

const WordContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const MegaphoneImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
    margin-right: 12px;
    cursor: pointer;
  }
  @media (min-width: 993px) {
    margin-right: 12px;
    cursor: pointer;
  }
`;

const WordText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
    font-weight: bolder;
    font-size: 60px;
    ${(props) => `color: ${props.color};`}
  }
  @media (min-width: 993px) {
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
