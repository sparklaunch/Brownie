import styled from "styled-components";

const TextBookLogoContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
  }
`;

const TextBookLogoImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    width: 660px;
    margin-bottom: 30px;
  }
`;

const TextBookLogoDescriptions = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    display: flex;
    flex-direction: row;
  }
`;

const TextBookLogoDescription = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
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
