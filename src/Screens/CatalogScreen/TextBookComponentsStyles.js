import styled from "styled-components";

const TextBookComponentsContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 140px;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 140px;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 140px;
  }
`;

const TextBookComponentsTitle = styled.p`
  @media (480px <= width <= 767px) {
    color: white;
    align-self: flex-start;
    font-weight: bold;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  @media (768px <= width <= 992px) {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  @media (width >= 993px) {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 8px 20px;
    background-color: #1ab9c5;
    border-radius: 4px;
    margin-bottom: 24px;
  }
`;

const TextBookBundles = styled.div`
  @media (480px <= width <= 767px) {
    display: grid;
    gap: 32px;
    grid-template-areas: "cd-image" "cd-text" "package-image" "package-text" "combined-image" "combined-text";
  }
  @media (768px <= width <= 992px) {
    display: grid;
    gap: 60px;
    grid-template-areas: "cd-image package-image combined-image" "cd-text package-text combined-text";
  }
  @media (width >= 993px) {
    display: grid;
    gap: 60px;
    grid-template-areas: "cd-image package-image combined-image" "cd-text package-text combined-text";
  }
`;

const CDImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const PackageImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const CombinedImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const ImageContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: ${(props) => props.area};
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: ${(props) => props.area};
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: ${(props) => props.area};
  }
`;

const TextContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-weight: bold;
    font-size: 18px;
    color: #515151;
    margin-bottom: 3px;
  }
  @media (768px <= width <= 992px) {
    font-weight: bold;
    font-size: 18px;
    color: #515151;
    margin-bottom: 3px;
  }
  @media (width >= 993px) {
    font-weight: bold;
    font-size: 18px;
    color: #515151;
    margin-bottom: 3px;
  }
`;

const TextDescription = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 18px;
    font-weight: lighter;
    color: #515151;
  }
  @media (768px <= width <= 992px) {
    font-size: 18px;
    font-weight: lighter;
    color: #515151;
  }
  @media (width >= 993px) {
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
