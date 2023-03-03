import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const WordButtonOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

const WordButtonInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    background-color: white;
    padding: 7px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) =>
      props.activated
        ? `outline: 4px solid ${Constants.ACCENT_COLOR};`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: white;
    padding: 10px 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) =>
      props.activated
        ? `outline: 4px solid ${Constants.ACCENT_COLOR};`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    background-color: white;
    padding: 11px 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) =>
      props.activated
        ? `outline: 4px solid ${Constants.ACCENT_COLOR};`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 1280px) {
    background-color: white;
    padding: 12px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: all 0.2s ease-in-out;
    ${(props) => props.enabled && `cursor: pointer;`}
    ${(props) =>
      props.activated
        ? `outline: 4px solid ${Constants.ACCENT_COLOR};`
        : `outline: 4px solid transparent;`}
  }
`;

const WordButtonImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 19px;
    height: 20px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 25px;
    height: 26px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: 30px;
    height: 32px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 42px;
    height: 44px;
    margin-bottom: 8px;
  }
`;

const WordButtonText = styled.p`
  @media screen and (max-width: 767px) {
    font-family: Jua, sans-serif;
    font-size: 12px;
    ${(props) => props.activated && `color: ${Constants.ACCENT_COLOR};`}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-family: Jua, sans-serif;
    font-size: 14px;
    ${(props) => props.activated && `color: ${Constants.ACCENT_COLOR};`}
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    font-family: Jua, sans-serif;
    font-size: 18px;
    ${(props) => props.activated && `color: ${Constants.ACCENT_COLOR};`}
  }
  @media screen and (min-width: 1280px) {
    font-family: Jua, sans-serif;
    font-size: 20px;
    ${(props) => props.activated && `color: ${Constants.ACCENT_COLOR};`}
  }
`;

export {
  WordButtonOuterContainer,
  WordButtonInnerContainer,
  WordButtonImage,
  WordButtonText
};
