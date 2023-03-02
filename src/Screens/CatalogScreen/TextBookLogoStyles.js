import styled from "styled-components";

const TextBookLogoContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
`;

const TextBookLogoImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 80%;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 660px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 993px) {
    width: 660px;
    margin-bottom: 30px;
  }
`;

const TextBookLogoDescriptions = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const TextBookLogoDescription = styled.p`
  @media screen and (max-width: 767px) {
    &:first-child {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    &:first-child {
      margin-right: 24px;
    }
  }
  @media screen and (min-width: 993px) {
    &:first-child {
      margin-right: 24px;
    }
  }
`;

export {
  TextBookLogoContainer,
  TextBookLogoImage,
  TextBookLogoDescription,
  TextBookLogoDescriptions
};
