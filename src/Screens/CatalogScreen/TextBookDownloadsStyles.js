import styled from "styled-components";
import Constants from "../../Utilities/Constants";

const TextBookDownloadsContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 993px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextBookDownloadsTitle = styled.p`
  @media screen and (max-width: 767px) {
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 4px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 4px;
  }
  @media screen and (min-width: 993px) {
    font-weight: bold;
    font-size: 20px;
    color: white;
    padding: 8px 20px;
    background-color: ${Constants.ACCENT_COLOR};
    border-radius: 4px;
  }
`;

const TextBookDownload = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 18px;
    color: #515151;
    font-weight: 400;
    padding: 3px 0;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 18px;
    color: #515151;
    font-weight: 400;
    padding: 3px 0;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
  @media screen and (min-width: 993px) {
    font-size: 18px;
    color: #515151;
    font-weight: 400;
    padding: 3px 0;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
`;

export { TextBookDownloadsContainer, TextBookDownloadsTitle, TextBookDownload };
