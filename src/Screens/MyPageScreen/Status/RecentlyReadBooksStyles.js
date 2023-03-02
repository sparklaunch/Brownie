import styled from "styled-components";

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
    height: 600px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 600px;
  }
  @media screen and (min-width: 993px) {
    height: 600px;
  }
`;

export {
  RecentlyReadBooksText,
  RecentlyReadBooksInnerContainer,
  RecentlyReadBooksOuterContainer
};
