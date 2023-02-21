import styled from "styled-components";

const TextBookLogoContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const TextBookLogoImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 660px;
  }
`;

const TextBookLogoDescriptions = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;

const TextBookLogoDescription = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

export {
  TextBookLogoContainer,
  TextBookLogoImage,
  TextBookLogoDescription,
  TextBookLogoDescriptions
};
