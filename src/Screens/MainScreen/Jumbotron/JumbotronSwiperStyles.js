import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const SwiperSlideImage = styled.img`
  @media (480px <= width <= 767px) {
    width: 100%;
    height: 440px;
    object-fit: cover;
    object-position: bottom;
  }
  @media (768px <= width <= 992px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (width >= 993px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const SwiperSlideContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: 100%;
    height: 100%;
  }
  @media (768px <= width <= 992px) {
    width: 100%;
    height: 100%;
  }
  @media (width >= 993px) {
    width: 100%;
    height: 100%;
  }
`;

const SwiperSlideContentsInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: column;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
  }
`;

const SwiperSlideContentsOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (768px <= width <= 992px) {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (width >= 993px) {
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
  @media (480px <= width <= 767px) {
    margin: 44px 16px 0 16px;
  }
  @media (768px <= width <= 992px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  @media (width >= 993px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const PFRLogo = styled.img`
  @media (480px <= width <= 767px) {
    height: 40px;
  }
  @media (768px <= width <= 992px) {
    height: 60px;
    width: 396px;
  }
  @media (width >= 993px) {
    height: 60px;
    width: 396px;
  }
`;

const SwiperSlideTopText = styled.p`
  @media (480px <= width <= 767px) {
    font-family: GmarketSans, sans-serif;
    color: white;
    font-size: 18px;
    font-weight: 400;
    margin-top: 16px;
  }
  @media (768px <= width <= 992px) {
    font-family: GmarketSans, sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin-top: 24px;
  }
  @media (width >= 993px) {
    font-family: GmarketSans, sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 400;
    margin-top: 24px;
  }
`;

const SwiperSlideTopContents = styled.div`
  @media (480px <= width <= 767px) {
    margin-bottom: 50px;
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
  }
`;

const SwiperSlideBottomContents = styled.div`
  @media (480px <= width <= 767px) {
    transform: scale(0.8) translateX(-40px);
  }
  @media (768px <= width <= 992px) {
  }
  @media (width >= 993px) {
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
