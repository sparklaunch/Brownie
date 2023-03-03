import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookSubtitleOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background-color: ${Constants.WHITE};
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: ${Constants.WHITE};
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: ${Constants.WHITE};
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const TextBookSubtitleInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    width: ${Constants.MOBILE_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${Constants.TABLET_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: ${Constants.LAPTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: ${Constants.DESKTOP_CONTAINER_WIDTH};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TextBookSubtitleTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    text-align: center;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 993px) {
    font-family: Jua, sans-serif;
    font-size: 28px;
    color: #3d3d3d;
    margin-bottom: 24px;
  }
`;

const TextBookSubtitleDescription = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 16px;
    color: ${Constants.DARK_GRAY};
    text-align: center;
    font-weight: lighter;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 20px;
    color: ${Constants.DARK_GRAY};
    font-weight: lighter;
  }
  @media screen and (min-width: 993px) {
    font-size: 20px;
    color: ${Constants.DARK_GRAY};
    font-weight: lighter;
  }
`;

export {
  TextBookSubtitleOuterContainer,
  TextBookSubtitleInnerContainer,
  TextBookSubtitleTitle,
  TextBookSubtitleDescription
};
