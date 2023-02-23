import styled from "styled-components";

const TextBookComponentsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 140px;
  }
`;

const TextBookComponentsTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 24px;
  }
`;

const TextBookBundles = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 180px 180px 180px;
    gap: 24px;
    grid-template-areas: "cd-image package-image combined-image" "cd-text package-text combined-text";
  }
`;

const CDImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

const PackageImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

const CombinedImage = styled.img`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
  }
`;

const ImageContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: ${(props) => props.area};
  }
`;

const TextContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextTitle = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-weight: bold;
    font-size: 18px;
    color: #515151;
    margin-bottom: 3px;
  }
`;

const TextDescription = styled.p`
  @media (min-width: 768px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    font-weight: lighter;
    color: #515151;
  }
`;

export {
  TextBookComponentsContainer,
  TextBookComponentsTitle,
  TextBookBundles,
  CDImage,
  PackageImage,
  CombinedImage,
  ImageContainer,
  TextContainer,
  TextTitle,
  TextDescription
};
