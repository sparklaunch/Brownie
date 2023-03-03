import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const StoryButtonContainer = styled.div`
  @media screen and (max-width: 767px) {
    background-color: white;
    padding: 7px 10px;
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
        ? `outline: 4px solid #47C7D2;`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    background-color: white;
    padding: 10px 15px;
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
        ? `outline: 4px solid #47C7D2;`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    background-color: white;
    padding: 11px 19px;
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
        ? `outline: 4px solid #47C7D2;`
        : `outline: 4px solid transparent;`}
  }
  @media screen and (min-width: 1280px) {
    background-color: white;
    padding: 12px 24px;
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
        ? `outline: 4px solid #47C7D2;`
        : `outline: 4px solid transparent;`}
  }
`;

const StoryButtonImage = styled.img`
  @media screen and (max-width: 767px) {
    width: 23px;
    height: 20px;
    margin-bottom: 2px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 30px;
    height: 26px;
    margin-bottom: 4px;
  }
  @media screen and (min-width: 993px) and (max-width: 1279px) {
    width: 37px;
    height: 32px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 52px;
    height: 44px;
    margin-bottom: 8px;
  }
`;

const StoryButtonText = styled.p`
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

export { StoryButtonContainer, StoryButtonImage, StoryButtonText };
