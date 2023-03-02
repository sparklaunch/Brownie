import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookSubtitleOuterContainer = styled.div`
  @media (480px <= width <= 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media (768px <= width <= 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media (width >= 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f9f9f9;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const TextBookSubtitleInnerContainer = styled.div`
  @media (480px <= width <= 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (768px <= width <= 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (993px <= width <= 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (width >= 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextBookSubtitleTitle = styled.p`
  @media (480px <= width <= 767px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    text-align: center;
    margin-bottom: 24px;
  }
  @media (768px <= width <= 992px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
  @media (width >= 993px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
`;

const TextBookSubtitleDescription = styled.p`
  @media (480px <= width <= 767px) {
    font-size: 20px;
    color: #515151;
    text-align: center;
    font-weight: lighter;
  }
  @media (768px <= width <= 992px) {
    font-size: 20px;
    color: #515151;
    font-weight: lighter;
  }
  @media (width >= 993px) {
    font-size: 20px;
    color: #515151;
    font-weight: lighter;
  }
`;

export {
  TextBookSubtitleOuterContainer,
  TextBookSubtitleInnerContainer,
  TextBookSubtitleTitle,
  TextBookSubtitleDescription
};
