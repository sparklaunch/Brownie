import styled from "styled-components";

const SwiperSlideImage = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SwiperSlideContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    width: 100%;
    height: 100%;
  }
`;

const SwiperSlideContentsInnerContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    width: 1200px;
    display: flex;
    flex-direction: column;
  }
`;

const SwiperSlideContentsOuterContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const SwiperSlideContentsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const PFRLogo = styled.img`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    height: 60px;
    width: 396px;
  }
`;

const SwiperSlideTopText = styled.p`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
    font-family: GmarketSans, sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin-top: 24px;
  }
`;

const SwiperSlideTopContents = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

const SwiperSlideBottomContents = styled.div`
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 993px) {
  }
`;

export {
  SwiperSlideImage,
  SwiperSlideContainer,
  PFRLogo,
  SwiperSlideContentsOuterContainer,
  SwiperSlideContentsInnerContainer,
  SwiperSlideContentsContainer,
  SwiperSlideTopContents,
  SwiperSlideBottomContents,
  SwiperSlideTopText
};
