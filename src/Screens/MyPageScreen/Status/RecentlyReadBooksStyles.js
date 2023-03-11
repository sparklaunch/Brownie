import styled from "styled-components";
import Constants from "../../../Utilities/Constants";

const RecentlyReadBooksText = styled.div`
  @media screen and (max-width: 767px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
  @media screen and (min-width: 993px) {
    border-left: 4px solid #00aea8;
    padding-left: 12px;
    margin-bottom: 12px;
    font-size: 20px;
  }
`;

const RecentlyReadBooksOuterContainer = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
  @media screen and (min-width: 993px) {
  }
`;

const RecentlyReadBooksInnerContainer = styled.div`
  @media screen and (max-width: 767px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 993px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const RecentlyReadBooksPlaceholder = styled.p`
  @media screen and (max-width: 767px) {
    color: ${Constants.GRAY};
    font-size: 24px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    color: ${Constants.GRAY};
    font-size: 24px;
  }
  @media screen and (min-width: 993px) {
    color: ${Constants.GRAY};
    font-size: 24px;
  }
`;

export {
  RecentlyReadBooksText,
  RecentlyReadBooksPlaceholder,
  RecentlyReadBooksInnerContainer,
  RecentlyReadBooksOuterContainer
};
