import styled from "styled-components";

const TextBookLogoContainer = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
`;

const TextBookLogoImage = styled.img`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    width: 660px;
    margin-bottom: 30px;
  }
  @media (width >= 993px) and (height >= 768px) {
    width: 660px;
    margin-bottom: 30px;
  }
`;

const TextBookLogoDescriptions = styled.div`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    display: flex;
    flex-direction: row;
  }
  @media (width >= 993px) and (height >= 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const TextBookLogoDescription = styled.p`
  @media (768px <= width <= 992px), (480px <= height <= 767px) {
    &:first-child {
      margin-right: 24px;
    }
  }
  @media (width >= 993px) and (height >= 768px) {
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
